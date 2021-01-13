'use strict'
/**
 * Test fixtures for meta data test server.
 *
 * name: allows a specific response to be loaded.
 * response: the JSON a server should respond with
 */
module.exports = {
  aws: [
    {
      name: 'default aws fixture',
      response: {
        devpayProductCodes: null,
        marketplaceProductCodes: ['1abc2defghijklm3nopqrs4tu'],
        availabilityZone: 'us-west-2b',
        privateIp: '10.158.112.84',
        version: '2017-09-30',
        instanceId: 'i-1234567890abcdef0',
        billingProducts: null,
        instanceType: 't2.micro',
        accountId: '123456789012',
        imageId: 'ami-5fb8c835',
        pendingTime: '2016-11-19T16:32:11Z',
        architecture: 'x86_64',
        kernelId: null,
        ramdiskId: null,
        region: 'us-west-2'
      }
    }
  ],
  gcp: [
    {
      name: 'default gcp fixture',
      response: {
        attributes: {},
        cpuPlatform: 'Intel Broadwell',
        description: '',
        disks: [
          {
            deviceName: 'tmp-name',
            index: 0,
            interface: 'SCSI',
            mode: 'READ_WRITE',
            type: 'PERSISTENT'
          }
        ],
        guestAttributes: {},
        hostname: 'tmp-name.c.foo.internal',
        id: 7684572792595385000,
        image: 'projects/debian-cloud/global/images/debian-10-buster-v20201216',
        legacyEndpointAccess: {
          0.1: 0,
          v1beta1: 0
        },
        licenses: [
          {
            id: '123456789101112134'
          }
        ],
        machineType: 'projects/123456789101/machineTypes/e2-micro',
        maintenanceEvent: 'NONE',
        name: 'tmp-name',
        networkInterfaces: [
          {
            accessConfigs: [
              {
                externalIp: '35.247.28.180',
                type: 'ONE_TO_ONE_NAT'
              }
            ],
            dnsServers: [
              '169.254.169.254'
            ],
            forwardedIps: [],
            gateway: '10.138.0.1',
            ip: '10.138.0.2',
            ipAliases: [],
            mac: '42:01:0a:8a:00:02',
            mtu: 1460,
            network: 'projects/123456789101/networks/default',
            subnetmask: '255.255.240.0',
            targetInstanceIps: []
          }
        ],
        preempted: 'FALSE',
        remainingCpuTime: -1,
        scheduling: {
          automaticRestart: 'TRUE',
          onHostMaintenance: 'MIGRATE',
          preemptible: 'FALSE'
        },
        serviceAccounts: {
          'not-real@developer.gserviceaccount.com': {
            aliases: [
              'default'
            ],
            email: 'not-real@developer.gserviceaccount.com',
            scopes: [
              'https://www.googleapis.com/auth/devstorage.read_only',
              'https://www.googleapis.com/auth/logging.write',
              'https://www.googleapis.com/auth/monitoring.write',
              'https://www.googleapis.com/auth/servicecontrol',
              'https://www.googleapis.com/auth/service.management.readonly',
              'https://www.googleapis.com/auth/trace.append'
            ]
          },
          default: {
            aliases: [
              'default'
            ],
            email: 'not-real@developer.gserviceaccount.com',
            scopes: [
              'https://www.googleapis.com/auth/devstorage.read_only',
              'https://www.googleapis.com/auth/logging.write',
              'https://www.googleapis.com/auth/monitoring.write',
              'https://www.googleapis.com/auth/servicecontrol',
              'https://www.googleapis.com/auth/service.management.readonly',
              'https://www.googleapis.com/auth/trace.append'
            ]
          }
        },
        tags: [
          'http-server'
        ],
        virtualClock: {
          driftToken: '0'
        },
        zone: 'projects/123456789101/zones/us-west1-b'
      }
    }
  ],
  azure: [
    {
      name: 'default azure fixture',
      response: {
        compute: {
          azEnvironment: 'AZUREPUBLICCLOUD',
          isHostCompatibilityLayerVm: 'true',
          licenseType: 'Windows_Client',
          location: 'westus',
          name: 'examplevmname',
          offer: 'Windows',
          osProfile: {
            adminUsername: 'admin',
            computerName: 'examplevmname',
            disablePasswordAuthentication: 'true'
          },
          osType: 'linux',
          placementGroupId: 'f67c14ab-e92c-408c-ae2d-da15866ec79a',
          plan: {
            name: 'planName',
            product: 'planProduct',
            publisher: 'planPublisher'
          },
          platformFaultDomain: '36',
          platformUpdateDomain: '42',
          publicKeys: [{
            keyData: 'ssh-rsa 0',
            path: '/home/user/.ssh/authorized_keys0'
          },
          {
            keyData: 'ssh-rsa 1',
            path: '/home/user/.ssh/authorized_keys1'
          }
          ],
          publisher: 'RDFE-Test-Microsoft-Windows-Server-Group',
          resourceGroupName: 'macikgo-test-may-23',
          resourceId: '/subscriptions/xxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx/resourceGroups/macikgo-test-may-23/providers/Microsoft.Compute/virtualMachines/examplevmname',
          securityProfile: {
            secureBootEnabled: 'true',
            virtualTpmEnabled: 'false'
          },
          sku: 'Windows-Server-2012-R2-Datacenter',
          storageProfile: {
            dataDisks: [{
              caching: 'None',
              createOption: 'Empty',
              diskSizeGB: '1024',
              image: {
                uri: ''
              },
              lun: '0',
              managedDisk: {
                id: '/subscriptions/xxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx/resourceGroups/macikgo-test-may-23/providers/Microsoft.Compute/disks/exampledatadiskname',
                storageAccountType: 'Standard_LRS'
              },
              name: 'exampledatadiskname',
              vhd: {
                uri: ''
              },
              writeAcceleratorEnabled: 'false'
            }],
            imageReference: {
              id: '',
              offer: 'UbuntuServer',
              publisher: 'Canonical',
              sku: '16.04.0-LTS',
              version: 'latest'
            },
            osDisk: {
              caching: 'ReadWrite',
              createOption: 'FromImage',
              diskSizeGB: '30',
              diffDiskSettings: {
                option: 'Local'
              },
              encryptionSettings: {
                enabled: 'false'
              },
              image: {
                uri: ''
              },
              managedDisk: {
                id: '/subscriptions/xxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx/resourceGroups/macikgo-test-may-23/providers/Microsoft.Compute/disks/exampleosdiskname',
                storageAccountType: 'Standard_LRS'
              },
              name: 'exampleosdiskname',
              osType: 'Linux',
              vhd: {
                uri: ''
              },
              writeAcceleratorEnabled: 'false'
            }
          },
          subscriptionId: 'xxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx',
          tags: 'baz:bash;foo:bar',
          version: '15.05.22',
          vmId: '02aab8a4-74ef-476e-8182-f6d2ba4166a6',
          vmScaleSetName: 'crpteste9vflji9',
          vmSize: 'Standard_A3',
          zone: ''
        },
        network: {
          interface: [{
            ipv4: {
              ipAddress: [{
                privateIpAddress: '10.144.133.132',
                publicIpAddress: ''
              }],
              subnet: [{
                address: '10.144.133.128',
                prefix: '26'
              }]
            },
            ipv6: {
              ipAddress: [
              ]
            },
            macAddress: '0011AAFFBB22'
          }]
        }
      }
    }
  ]
}