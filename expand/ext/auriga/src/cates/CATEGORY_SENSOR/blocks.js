const blocks = (extFacePanels) => ([{
        "opcode": "auriga_detect_light_led",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga/imgs/1a61fb1c8a2a42059ad9f7a97305f113.svg', 'auriga')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_DETECT_LIGHT_LED_PORT"
            },
            "STATUS": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_DETECT_LIGHT_LED_STATUS"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `lightsensor_/*{PORT}*/.dWrite1(/*{STATUS}*/);`,
                "sections": {
                    "lib": this.funcs.aurigaDetectLightLedCodesLib
                }
            }
        },
        "handler": this.funcs.auriga_detect_light_led
    },
    {
        "opcode": "auriga_detect_light",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga/imgs/6c8d75b3c8ad4f74a2b982a5961de250.svg', 'auriga')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "12",
                "menu": "AURIGA_DETECT_LIGHT_PORT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": `lightsensor_/*{PORT}*/.read()`,
                "sections": {
                    "lib": this.funcs.aurigaDetectLightCodesLib
                }
            }
        },
        "handler": this.funcs.auriga_detect_light
    },
    {
        "opcode": "auriga_detect_temperature",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga/imgs/6c8d75b3c8ad4f74a2b982a5961de250.svg', 'auriga')
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": `temperature_onboard.readValue()`,
                "sections": {
                    "lib": this.funcs.aurigaDetectTemperatureCodesLib
                }
            }
        },
        "handler": this.funcs.auriga_detect_temperature
    },
    {
        "opcode": "auriga_detect_loudness",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga/imgs/6c8d75b3c8ad4f74a2b982a5961de250.svg', 'auriga')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "14",
                "menu": "AURIGA_DETECT_LOUDNESS_PORT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": `soundsensor_/*{PORT}*/.strength()`,
                "sections": {
                    "lib": this.funcs.aurigaDetectLoudnessCodesLib
                }
            }
        },
        "handler": this.funcs.auriga_detect_loudness
    },
    {
        "opcode": "auriga_detect_board_gyro_angle",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga/imgs/6c8d75b3c8ad4f74a2b982a5961de250.svg', 'auriga')
            },
            "AXIS": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_DETECT_BOARD_GYRO_ANGLE_AXIS"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": `gyro_0.getAngle(/*{AXIS}*/)`,
                "sections": {
                    "lib": this.funcs.aurigaDetectBoardGyroAngleCodesLib,
                    "setup": this.funcs.aurigaDetectBoardGyroAngleCodesSetup,
                    "_loop": `gyro_0.update();`
                }
            }
        },
        "handler": this.funcs.auriga_detect_board_gyro_angle
    },
    {
        "opcode": "auriga_detect_external_ultrasonic",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga/imgs/6c8d75b3c8ad4f74a2b982a5961de250.svg', 'auriga')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "10",
                "menu": "AURIGA_DETECT_LIGHT_LED_PORT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": `ultrasonic_/*{PORT}*/.distanceCm()`,
                "sections": {
                    "lib": this.funcs.aurigaDetectExternalUltrasonicCodesLib
                }
            }
        },
        "handler": this.funcs.auriga_detect_external_ultrasonic
    },
    {
        "opcode": "auriga_detect_external_linefollower",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga/imgs/6c8d75b3c8ad4f74a2b982a5961de250.svg', 'auriga')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "9",
                "menu": "AURIGA_DETECT_LIGHT_LED_PORT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": `linefollower_/*{PORT}*/.readSensors()`,
                "sections": {
                    "lib": this.funcs.aurigaDetectExternalLinefollowerCodesLib
                }
            }
        },
        "handler": this.funcs.auriga_detect_external_linefollower
    },
    {
        "opcode": "auriga_event_external_linefollower",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga/imgs/6c8d75b3c8ad4f74a2b982a5961de250.svg', 'auriga')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "9",
                "menu": "AURIGA_DETECT_LIGHT_LED_PORT"
            },
            "LINEFOLLOW_STATE": {
                "type": "fieldMenu",
                "defaultValue": "2",
                "menu": "AURIGA_EVENT_EXTERNAL_LINEFOLLOWER_LINEFOLLOW_STATE"
            },
            "BLACK_WHITE": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "AURIGA_EVENT_EXTERNAL_LINEFOLLOWER_BLACK_WHITE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": `(/*{BLACK_WHITE}*/?(/*{LINEFOLLOW_STATE}*/==0?linefollower_/*{PORT}*/.readSensors()==0:(linefollower_/*{PORT}*/.readSensors() & /*{LINEFOLLOW_STATE}*/)==/*{LINEFOLLOW_STATE}*/):(/*{LINEFOLLOW_STATE}*/==0?linefollower_/*{PORT}*/.readSensors()==3:(linefollower_/*{PORT}*/.readSensors() & /*{LINEFOLLOW_STATE}*/)==0))`,
                "sections": {
                    "lib": this.funcs.aurigaEventExternalLinefollowerCodesLib
                }
            }
        },
        "handler": this.funcs.auriga_event_external_linefollower
    },
    {
        "opcode": "auriga_detect_timer",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga/imgs/6c8d75b3c8ad4f74a2b982a5961de250.svg', 'auriga')
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": `getLastTime()`,
                "sections": {
                    "lib": this.funcs.aurigaDetectTimerCodesLib,
                    "declare": this.funcs.aurigaDetectTimerCodesDeclare
                }
            }
        },
        "handler": this.funcs.auriga_detect_timer
    },
    {
        "opcode": "auriga_reset_timer",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga/imgs/6c8d75b3c8ad4f74a2b982a5961de250.svg', 'auriga')
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": `lastTime = millis()/1000.0;`,
                "sections": {
                    "lib": this.funcs.aurigaResetTimerCodesLib
                }
            }
        },
        "handler": this.funcs.auriga_reset_timer
    }
]);

export default blocks;