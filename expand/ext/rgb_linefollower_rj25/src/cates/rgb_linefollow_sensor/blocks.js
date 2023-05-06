const blocks = (extFacePanels) => ([{
        "opcode": "rgb_linefollow_init",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "SENSOR_ID": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "RGB_LINEFOLLOW_INIT_SENSOR_ID"
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "RGB_LINEFOLLOW_INIT_PORT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "sections": {
                    "include": [
                        "\"src/MeRGBLineFollower.h\""
                    ],
                    "lib": `MeRGBLineFollower LightSensorRGB_/*{SENSOR_ID}*/(/*{PORT}*/, /*{SENSOR_ID}*/ - 1);`,
                    "setup": `LightSensorRGB_/*{SENSOR_ID}*/.begin();\r\nLightSensorRGB_/*{SENSOR_ID}*/.updataAllSensorValue();`,
                    "_loop": `LightSensorRGB_/*{SENSOR_ID}*/.loop();`
                }
            }
        },
        "handler": this.funcs.rgb_linefollow_init
    },
    {
        "opcode": "rgb_linefollow_turning_sens",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "SENSOR_ID": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "RGB_LINEFOLLOW_INIT_SENSOR_ID"
            },
            "SENS": {
                "type": "number",
                "defaultValue": 0.3
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.rgbLinefollowTurningSensCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeRGBLineFollower.h\""
                    ]
                }
            }
        },
        "handler": this.funcs.rgb_linefollow_turning_sens
    },
    {
        "opcode": "rgb_linefollow_speed_diff",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "SENSOR_ID": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "RGB_LINEFOLLOW_INIT_SENSOR_ID"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `LightSensorRGB_/*{SENSOR_ID}*/.getPositionOffset() / 511.0 * 100`,
                "sections": {
                    "include": [
                        "\"src/MeRGBLineFollower.h\""
                    ]
                }
            }
        },
        "handler": this.funcs.rgb_linefollow_speed_diff
    },
    {
        "opcode": "rgb_linefollow_sensor_status",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "SENSOR_ID": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "RGB_LINEFOLLOW_INIT_SENSOR_ID"
            },
            "SENSOR_STATUS": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "RGB_LINEFOLLOW_SENSOR_STATUS_SENSOR_STATUS"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `LightSensorRGB_/*{SENSOR_ID}*/.getPositionState() == /*{SENSOR_STATUS}*/`,
                "sections": {
                    "include": [
                        "\"src/MeRGBLineFollower.h\""
                    ]
                }
            }
        },
        "handler": this.funcs.rgb_linefollow_sensor_status
    },
    {
        "opcode": "rgb_linefollow_background_detect",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "SENSOR_ID": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "RGB_LINEFOLLOW_INIT_SENSOR_ID"
            },
            "CHANNEL": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "RGB_LINEFOLLOW_BACKGROUND_DETECT_CHANNEL"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `LightSensorRGB_/*{SENSOR_ID}*/.getPositionState() & (0x01<<(/*{CHANNEL}*/ - 1))`,
                "sections": {
                    "include": [
                        "\"src/MeRGBLineFollower.h\""
                    ]
                }
            }
        },
        "handler": this.funcs.rgb_linefollow_background_detect
    },
    {
        "opcode": "rgb_linefollow_set_color",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "SENSOR_ID": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "RGB_LINEFOLLOW_INIT_SENSOR_ID"
            },
            "COLOR": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "RGB_LINEFOLLOW_SET_COLOR_COLOR"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `LightSensorRGB_/*{SENSOR_ID}*/.setRGBColour(/*{COLOR}*/);`,
                "sections": {
                    "include": [
                        "\"src/MeRGBLineFollower.h\""
                    ]
                }
            }
        },
        "handler": this.funcs.rgb_linefollow_set_color
    },
    {
        "opcode": "rgb_linefollow_get_data",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "SENSOR_ID": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "RGB_LINEFOLLOW_INIT_SENSOR_ID"
            },
            "CHANNEL": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "RGB_LINEFOLLOW_BACKGROUND_DETECT_CHANNEL"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `LightSensorRGB_/*{SENSOR_ID}*/.getADCValueRGB/*{CHANNEL}*/()`,
                "sections": {
                    "include": [
                        "\"src/MeRGBLineFollower.h\""
                    ]
                }
            }
        },
        "handler": this.funcs.rgb_linefollow_get_data
    }
]);

export default blocks;