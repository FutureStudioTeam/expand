const blocks = (extFacePanels) => ([{
        "opcode": "cyberpi_wifi_set",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ssid": {
                "type": "string",
                "defaultValue": "ssid"
            },
            "wifipassword": {
                "type": "string",
                "defaultValue": "password"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": `cyberpi.wifi.connect({ssid}, {wifipassword})`
            }
        },
        "handler": this.funcs.cyberpi_wifi_set
    },
    {
        "opcode": "cyberpi_wifi_is_connect",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": `cyberpi.wifi.is_connect()`
            }
        },
        "handler": this.funcs.cyberpi_wifi_is_connect
    },
    {
        "opcode": "cyberpi_set_cloud_broadcast",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "message": {
                "type": "string",
                "defaultValue": "message"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `cyberpi.cloud_broadcast.set({message}, '')`,
                "sections": {
                    "lib": this.funcs.cyberpiSetCloudBroadcastCodesLib
                }
            }
        },
        "handler": this.funcs.cyberpi_set_cloud_broadcast
    },
    {
        "opcode": "cyberpi_set_cloud_broadcast_with_value",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "message": {
                "type": "string",
                "defaultValue": "message"
            },
            "value": {
                "type": "string",
                "defaultValue": "1",
                "checkNumber": true
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `cyberpi.cloud_broadcast.set({message}, {value})`,
                "sections": {
                    "lib": this.funcs.cyberpiSetCloudBroadcastWithValueCodesLib
                }
            }
        },
        "handler": this.funcs.cyberpi_set_cloud_broadcast_with_value
    },
    {
        "opcode": "cyberpi_when_cloud_broadcast",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "message": {
                "type": "string",
                "defaultValue": "message"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `@cyberpi.event.cloud_broadcast({message})\r\ndef on_cloud_broadcast{$INDEX}():\r\n    {{(this.$ALL_VARIABLES.length !== 0)?'global '+this.$ALL_VARIABLES.join(', '):'' }}\r\n    {$BRANCH}`,
                "sections": {
                    "import": ['event', 'time', 'cyberpi'],
                    "lib": this.funcs.cyberpiWhenCloudBroadcastCodesLib
                }
            }
        },
        "handler": this.funcs.cyberpi_when_cloud_broadcast
    },
    {
        "opcode": "cyberpi_cloud_broadcast_get_value",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "message": {
                "type": "string",
                "defaultValue": "message"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `cyberpi.cloud_broadcast.get({message})`,
                "sections": {
                    "lib": this.funcs.cyberpiCloudBroadcastGetValueCodesLib
                }
            }
        },
        "handler": this.funcs.cyberpi_cloud_broadcast_get_value
    },
    {
        "opcode": "cyberpi_get_weather_from_internet",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "LOCATION": {
                "type": "widget",
                "defaultValue": [
                    "widget_445594f4",
                    ""
                ],
                "widget": this.funcs.customWidget445594F4
            },
            "WEATHER_TYPE": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "CYBERPI_GET_WEATHER_FROM_INTERNET_WEATHER_TYPE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": this.funcs.cyberpiGetWeatherFromInternetCodesCode
            }
        },
        "handler": this.funcs.cyberpi_get_weather_from_internet
    },
    {
        "opcode": "cyberpi_get_air_quality_from_internet",
        "blockType": "string",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "METEOROLOGICAL": {
                "type": "widget",
                "defaultValue": [
                    "widget_dcc97542",
                    ""
                ],
                "widget": this.funcs.customWidgetDcc97542
            },
            "aq_type": {
                "type": "fieldMenu",
                "defaultValue": "aqi",
                "menu": "CYBERPI_GET_AIR_QUALITY_FROM_INTERNET_AQ_TYPE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": this.funcs.cyberpiGetAirQualityFromInternetCodesCode
            }
        },
        "handler": this.funcs.cyberpi_get_air_quality_from_internet
    },
    {
        "opcode": "cyberpi_get_sun_time_from_internet",
        "blockType": "string",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "LOCATION": {
                "type": "widget",
                "defaultValue": [
                    "widget_445594f4",
                    ""
                ],
                "widget": this.funcs.customWidget445594F4
            },
            "sun_move_type": {
                "type": "fieldMenu",
                "defaultValue": "sunrise",
                "menu": "CYBERPI_GET_SUN_TIME_FROM_INTERNET_SUN_MOVE_TYPE"
            },
            "time_type": {
                "type": "fieldMenu",
                "defaultValue": "time",
                "menu": "CYBERPI_GET_SUN_TIME_FROM_INTERNET_TIME_TYPE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.cyberpiGetSunTimeFromInternetCodesCode
            }
        },
        "handler": this.funcs.cyberpi_get_sun_time_from_internet
    },
    {
        "opcode": "cyberpi_get_local_time_from_internet",
        "blockType": "string",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "widget_1": {
                "type": "widget",
                "defaultValue": [
                    "widget_445594f4",
                    ""
                ],
                "widget": this.funcs.customWidget445594F4
            },
            "fieldMenu_3": {
                "type": "fieldMenu",
                "defaultValue": "时",
                "menu": "CYBERPI_GET_LOCAL_TIME_FROM_INTERNET_FIELDMENU_3"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.cyberpi_get_local_time_from_internet
    },
    {
        "opcode": "cyberpi_get_time_from_internet",
        "blockType": "string",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "widget_1": {
                "type": "widget",
                "defaultValue": [
                    "widget_445594f4",
                    ""
                ],
                "widget": this.funcs.customWidget445594F4
            },
            "fieldMenu_3": {
                "type": "fieldMenu",
                "defaultValue": "时",
                "menu": "CYBERPI_GET_TIME_FROM_INTERNET_FIELDMENU_3"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.cyberpi_get_time_from_internet
    },
    {
        "opcode": "BLOCK_1610527804319",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "UTC+0",
                "menu": "BLOCK_1610527804319_FIELDMENU_1"
            },
            "fieldMenu_2": {
                "type": "fieldMenu",
                "defaultValue": "year",
                "menu": "BLOCK_1610527804319_FIELDMENU_2"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `cyberpi.cloud.time('{fieldMenu_2}','{fieldMenu_1}')`,
                "sections": {
                    "lib": this.funcs.block1610527804319CodesLib
                }
            }
        },
        "handler": this.funcs.BLOCK_1610527804319
    }
]);

export default blocks;