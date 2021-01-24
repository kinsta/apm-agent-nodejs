'use strict'
const { httpRequest } = require('../http-request')
const { cleanupRequest } = require('./shared')
function getLogger () {
  return require('../..').logger
}

/**
 * Checks for metadata server then fetches data
 *
 * The getMetadataAws will fetch cloud metadata information
 * from Amazon's IMDSv1 endpoint and return (via callback)
 * the formatted metadata.
 *
 * Before fetching data, the server will be "pinged" by attempting
 * to connect via TCP with a short timeout (`socketTimeoutMs`).
 *
 * https://docs.microsoft.com/en-us/azure/virtual-machines/windows/instance-metadata-service?tabs=windows
 */
function getMetadataAzure (host, port, socketTimeoutMs, httpTimeout, protocol, cb) {
  const options = {
    method: 'GET',
    timeout: httpTimeout,
    connectTimeout: socketTimeoutMs,
    headers: {
      Metadata: 'true'
    }
  }
  const url = `${protocol}://${host}:${port}/metadata/instance?api-version=2020-09-01`

  const req = httpRequest(
    url,
    options,
    function (res) {
      const finalData = []
      res.on('data', function (data) {
        finalData.push(data)
      })

      res.on('end', function (data) {
        try {
          const result = formatMetadataStringIntoObject(finalData.join(''))
          cb(null, result)
        } catch (error) {
          getLogger().trace('azure metadata server responded, but there was an ' +
            'error parsing the result: %o', error)
          cb(error)
        }
      })
    }
  )

  req.on('timeout', function () {
    cleanupRequest(req)
    const error = new Error('request to azure metadata server timed out')
    cb(error)
  })

  req.on('connectTimeout', function () {
    cleanupRequest(req)
    const error = new Error('could not ping azure metadata server')
    cb(error)
  })

  req.on('error', function (error) {
    cleanupRequest(req)
    cb(error)
  })

  req.end()
}

/**
 * Builds metadata object
 *
 * Takes the response from /metadata/instance?api-version=2020-09-01
 * service request and formats it into the cloud metadata object
 */
function formatMetadataStringIntoObject (string) {
  const metadata = {
    account: {
      id: null
    },
    instance: {
      id: null,
      name: null
    },
    project: {
      name: null
    },
    availability_zone: null,
    machine: {
      type: null
    },
    provider: null,
    region: null
  }
  const parsed = JSON.parse(string)
  if (!parsed.compute) {
    return metadata
  }
  const data = parsed.compute
  metadata.account.id = data.subscriptionId + ''
  metadata.instance.id = data.vmId + ''
  metadata.instance.name = data.name + ''
  metadata.project.name = data.resourceGroupName + ''
  metadata.availability_zone = data.zone + ''
  metadata.machine.type = data.vmSize + ''
  metadata.region = data.location + ''
  metadata.provider = 'azure'

  return metadata
}

module.exports = { getMetadataAzure }