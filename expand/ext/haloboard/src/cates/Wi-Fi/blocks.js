const blocks = (extFacePanels) => ([{
        "opcode": "haloboard_wifi_set",
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
                "code": `halo.wifi.start(ssid = {ssid}, password = {wifipassword}, mode = halo.wifi.WLAN_MODE_STA)`
            }
        },
        "handler": this.funcs.haloboard_wifi_set
    },
    {
        "opcode": "haloboard_wifi_is_connect",
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
                "code": `halo.wifi.is_connected()`
            }
        },
        "handler": this.funcs.haloboard_wifi_is_connect
    },
    {
        "opcode": "haloboard_wifi_speech_recognition",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "Language": {
                "type": "fieldMenu",
                "defaultValue": "LAN_CHINESE",
                "menu": "HALOBOARD_WIFI_SPEECH_RECOGNITION_LANGUAGE"
            },
            "Time": {
                "type": "number",
                "defaultValue": 3
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `halo.speech_recognition.start(time_s = {Time})\r`,
                "sections": {
                    "lib": this.funcs.haloboardWifiSpeechRecognitionCodesLib
                }
            }
        },
        "handler": this.funcs.haloboard_wifi_speech_recognition
    },
    {
        "opcode": "haloboard_wifi_speech_recognition_v2",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "Language": {
                "type": "fieldMenu",
                "defaultValue": "mandarin",
                "menu": "HALOBOARD_WIFI_SPEECH_RECOGNITION_V2_LANGUAGE"
            },
            "Time": {
                "type": "number",
                "defaultValue": 3
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `halo.speech_recognition.begin({Time}, '{Language}')\r`,
                "sections": {
                    "lib": this.funcs.haloboardWifiSpeechRecognitionV2CodesLib
                }
            }
        },
        "handler": this.funcs.haloboard_wifi_speech_recognition_v2
    },
    {
        "opcode": "haloboard_wifi_speech_recognition_word",
        "blockType": "string",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `halo.speech_recognition.get_result_code()`
            }
        },
        "handler": this.funcs.haloboard_wifi_speech_recognition_word
    },
    {
        "opcode": "haloboard_wifi_user_broadcast",
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
                "code": `halo.cloud_message.broadcast({message}, '')`,
                "sections": {
                    "lib": this.funcs.haloboardWifiUserBroadcastCodesLib
                }
            }
        },
        "handler": this.funcs.haloboard_wifi_user_broadcast
    },
    {
        "opcode": "haloboard_wifi_user_broadcast_with_value",
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
                "code": `halo.cloud_message.broadcast({message}, {value})`,
                "sections": {
                    "lib": this.funcs.haloboardWifiUserBroadcastWithValueCodesLib
                }
            }
        },
        "handler": this.funcs.haloboard_wifi_user_broadcast_with_value
    },
    {
        "opcode": "haloboard_wifi_when_user_broadcast",
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
                "code": `@event.cloud_message({message})\r\ndef on_cloud_message{$INDEX}():\r\n    {{\r\n        (()=>{\r\n            let variableList = this.$ALL_VARIABLES.concat(this.$ALL_LISTVARIABLES);\r\n            return variableList.length>0?'global '+variableList.join(', '):''\r\n        })()\r\n    }}\r\n    {$BRANCH}\r`,
                "sections": {
                    "import": ['event', 'halo', 'time'],
                    "lib": this.funcs.haloboardWifiWhenUserBroadcastCodesLib
                }
            }
        },
        "handler": this.funcs.haloboard_wifi_when_user_broadcast
    },
    {
        "opcode": "haloboard_wifi_user_broadcast_value",
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
                "code": `halo.cloud_message.get_info({message})`,
                "sections": {
                    "lib": this.funcs.haloboardWifiUserBroadcastValueCodesLib
                }
            }
        },
        "handler": this.funcs.haloboard_wifi_user_broadcast_value
    },
    {
        "opcode": "BLOCK_1543814805990",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 36,
        "arguments": {
            "ssid": {
                "type": "string",
                "defaultValue": "ssid"
            },
            "password": {
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
        "handler": this.funcs.BLOCK_1543814805990
    },
    {
        "opcode": "BLOCK_1560701681811",
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
                "menu": "BLOCK_1560701681811_WEATHER_TYPE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": this.funcs.block1560701681811CodesCode,
                "sections": {
                    "import": ['iot'],
                    "lib": `iot.weather_request_domin = '[iotWeatherDomain]'\r\niot.device_uid = '[iotUid]'\r\niot.device_type = '[iotDeviceType]'\r\niot.device_id = '[iotDeviceId]'`
                }
            }
        },
        "handler": this.funcs.BLOCK_1560701681811
    },
    {
        "opcode": "BLOCK_1560702195139",
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
                "menu": "BLOCK_1560702195139_AQ_TYPE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": this.funcs.block1560702195139CodesCode,
                "sections": {
                    "import": ['iot'],
                    "lib": `iot.air_request_domain = '[iotAirDomain]'\r\niot.device_uid = '[iotUid]'\r\niot.device_type = '[iotDeviceType]'\r\niot.device_id = '[iotDeviceId]'`
                }
            }
        },
        "handler": this.funcs.BLOCK_1560702195139
    },
    {
        "opcode": "BLOCK_1560702421892",
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
                "menu": "BLOCK_1560702421892_SUN_MOVE_TYPE"
            },
            "time_type": {
                "type": "fieldMenu",
                "defaultValue": "time",
                "menu": "BLOCK_1560702421892_TIME_TYPE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": this.funcs.block1560702421892CodesCode,
                "sections": {
                    "import": ['iot'],
                    "lib": `iot.weather_request_domin = '[iotWeatherDomain]'\r\niot.device_uid = '[iotUid]'\r\niot.device_type = '[iotDeviceType]'\r\niot.device_id = '[iotDeviceId]'`
                }
            }
        },
        "handler": this.funcs.BLOCK_1560702421892
    },
    {
        "opcode": "BLOCK_1560702536759",
        "blockType": "string",
        "checkboxInFlyout": true,
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
                "menu": "BLOCK_1560702536759_FIELDMENU_3"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.BLOCK_1560702536759
    }
]);

export default blocks;