const blocks = (extFacePanels) => ([{
        "opcode": "iot_connect_network_new",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('IoT/imgs/3ef7cc908d874e1ca287cd29c252352a.svg', 'IoT')
            },
            "SSID": {
                "type": "string",
                "defaultValue": "ssid"
            },
            "PASSWORD": {
                "type": "string",
                "defaultValue": "12345678"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": this.funcs.iotConnectNetworkNewCodesCode,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.iot_connect_network_new
    },
    {
        "opcode": "iot_if_connect_network",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('IoT/imgs/52754b6e066e466b958ce085607d0381.svg', 'IoT')
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `codey.wifi.is_connected()`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.iot_if_connect_network
    },
    {
        "opcode": "iot_weather",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "LOCATION": {
                "type": "widget",
                "defaultValue": [
                    "widget_41f1f086",
                    ""
                ],
                "widget": this.funcs.customWidget41F1F086
            },
            "WEATHER_TYPE": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "IOT_WEATHER_WEATHER_TYPE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": this.funcs.iotWeatherCodesCode,
                "sections": {
                    "import": ['iot']
                }
            }
        },
        "handler": this.funcs.iot_weather
    },
    {
        "opcode": "iot_air",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "LOCATION": {
                "type": "widget",
                "defaultValue": [
                    "widget_32649bd3",
                    ""
                ],
                "widget": this.funcs.customWidget32649Bd3
            },
            "WEATHER_TYPE": {
                "type": "fieldMenu",
                "defaultValue": "aqi",
                "menu": "IOT_AIR_WEATHER_TYPE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": this.funcs.iotAirCodesCode,
                "sections": {
                    "import": ['iot']
                }
            }
        },
        "handler": this.funcs.iot_air
    },
    {
        "opcode": "iot_sun",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "LOCATION": {
                "type": "widget",
                "defaultValue": [
                    "widget_41f1f086",
                    ""
                ],
                "widget": this.funcs.customWidget41F1F086
            },
            "WEATHER_TYPE": {
                "type": "fieldMenu",
                "defaultValue": "sunrise",
                "menu": "IOT_SUN_WEATHER_TYPE"
            },
            "TIME": {
                "type": "fieldMenu",
                "defaultValue": "time",
                "menu": "IOT_SUN_TIME"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": this.funcs.iotSunCodesCode,
                "sections": {
                    "import": ['iot']
                }
            }
        },
        "handler": this.funcs.iot_sun
    },
    {
        "opcode": "data_addtolist_cloudlist",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "VALUE": {
                "type": "string",
                "defaultValue": "0"
            },
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('IoT/imgs/08d0a3847d5a41edaa39821b36e9e34b.svg', 'IoT')
            },
            "CLOUD_VARIABLE": {
                "type": "widget",
                "defaultValue": [
                    "widget_d674d79b",
                    ""
                ],
                "widget": this.funcs.customWidgetD674D79B
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": this.funcs.dataAddtolistCloudlistCodesCode,
                "sections": {
                    "import": ['iot']
                }
            }
        },
        "handler": this.funcs.data_addtolist_cloudlist
    },
    {
        "opcode": "data_itemoflist_cloudlist",
        "blockType": "string",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "VALUE": {
                "type": "number",
                "defaultValue": 1
            },
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('IoT/imgs/ad962072ca5040699261beec99ba2553.svg', 'IoT')
            },
            "CLOUD_VARIABLE": {
                "type": "widget",
                "defaultValue": [
                    "widget_d674d79b",
                    ""
                ],
                "widget": this.funcs.customWidgetD674D79B
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": this.funcs.dataItemoflistCloudlistCodesCode,
                "sections": {
                    "import": ['iot']
                }
            }
        },
        "handler": this.funcs.data_itemoflist_cloudlist
    },
    {
        "opcode": "data_lengthoflist_cloudlist",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('IoT/imgs/67f388a9f5f341578ca4916ff543efab.svg', 'IoT')
            },
            "CLOUD_VARIABLE": {
                "type": "widget",
                "defaultValue": [
                    "widget_d674d79b",
                    ""
                ],
                "widget": this.funcs.customWidgetD674D79B
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": this.funcs.dataLengthoflistCloudlistCodesCode,
                "sections": {
                    "import": ['iot']
                }
            }
        },
        "handler": this.funcs.data_lengthoflist_cloudlist
    },
    {
        "opcode": "iot_connect_network",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "SSID": {
                "type": "widget",
                "defaultValue": [
                    "widget_8dbf8cd4",
                    ""
                ],
                "widget": this.funcs.customWidget8Dbf8Cd4
            },
            "PASSWORD": {
                "type": "string",
                "defaultValue": "12345678"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": this.funcs.iotConnectNetworkCodesCode,
                "sections": {
                    "import": ['iot']
                }
            }
        },
        "handler": this.funcs.iot_connect_network
    },
    {
        "opcode": "codey_wifi_user_broadcast",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('IoT/imgs/a9e947c881764573805ed877ab0165a1.svg', 'IoT')
            },
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
                "code": `codey.cloud_message.broadcast({message}, '')`,
                "sections": {
                    "lib": this.funcs.codeyWifiUserBroadcastCodesLib
                }
            }
        },
        "handler": this.funcs.codey_wifi_user_broadcast
    },
    {
        "opcode": "codey_wifi_user_broadcast_with_value",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('IoT/imgs/6b1e166c32074759811d9e56a0e06d3d.svg', 'IoT')
            },
            "message": {
                "type": "string",
                "defaultValue": "message",
                "checkNumber": true
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
                "code": `codey.cloud_message.broadcast({message}, {value})`,
                "sections": {
                    "lib": this.funcs.codeyWifiUserBroadcastWithValueCodesLib
                }
            }
        },
        "handler": this.funcs.codey_wifi_user_broadcast_with_value
    },
    {
        "opcode": "codey_wifi_when_user_broadcast",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('IoT/imgs/e4785117b6f34642b5adf4ab6322562e.svg', 'IoT')
            },
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
                "code": `@event.cloud_message({message})\r\ndef on_cloud_message{$INDEX}():\r\n    {{(this.$ALL_VARIABLES.length !== 0)?'global '+this.$ALL_VARIABLES.join(', '):'' }}\r\n    {$BRANCH}\r`,
                "sections": {
                    "import": ['codey', 'event', 'time'],
                    "lib": this.funcs.codeyWifiWhenUserBroadcastCodesLib
                }
            }
        },
        "handler": this.funcs.codey_wifi_when_user_broadcast
    },
    {
        "opcode": "codey_wifi_user_broadcast_value",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('IoT/imgs/cf3dabba3cdc45c78bd334ee1cbd6491.svg', 'IoT')
            },
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
                "code": `codey.cloud_message.get_info({message})`,
                "sections": {
                    "lib": this.funcs.codeyWifiUserBroadcastValueCodesLib
                }
            }
        },
        "handler": this.funcs.codey_wifi_user_broadcast_value
    }
]);

export default blocks;