const blocks = (extFacePanels) => ([{
        "opcode": "auriga_1566200222835",
        "blockType": "button",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 36,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.auriga_1566200222835
    },
    {
        "opcode": "auriga_camera_switch_color_mode",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_CAMERA_SWITCH_COLOR_MODE_PORT"
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
                "code": `MeCamera_/*{PORT}*/.setCameraMode(CCC_MODE);`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.aurigaCameraSwitchColorModeCodesLib,
                    "setup": this.funcs.aurigaCameraSwitchColorModeCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_camera_switch_color_mode
    },
    {
        "opcode": "auriga_camera_recognize_color",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_CAMERA_SWITCH_COLOR_MODE_PORT"
            },
            "SIG": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_CAMERA_RECOGNIZE_COLOR_SIG"
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
                "code": `MeCamera_/*{PORT}*/.startStudyCCC(/*{SIG}*/, 0);`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.aurigaCameraRecognizeColorCodesLib,
                    "setup": this.funcs.aurigaCameraRecognizeColorCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_camera_recognize_color
    },
    {
        "opcode": "auriga_camera_center_saturation",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "饱和度",
                "menu": "AURIGA_CAMERA_CENTER_SATURATION_FIELDMENU_1"
            },
            "fieldMenu_2": {
                "type": "fieldMenu",
                "defaultValue": "中心",
                "menu": "AURIGA_CAMERA_CENTER_SATURATION_FIELDMENU_2"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.auriga_camera_center_saturation
    },
    {
        "opcode": "auriga_camera_get_color",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_CAMERA_SWITCH_COLOR_MODE_PORT"
            },
            "SIG": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_CAMERA_RECOGNIZE_COLOR_SIG"
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
                "code": this.funcs.aurigaCameraGetColorCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.aurigaCameraGetColorCodesLib,
                    "setup": this.funcs.aurigaCameraGetColorCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_camera_get_color
    },
    {
        "opcode": "auriga_camera_color_in_center",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_CAMERA_SWITCH_COLOR_MODE_PORT"
            },
            "SIG": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_CAMERA_RECOGNIZE_COLOR_SIG"
            },
            "LOCATION": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_CAMERA_COLOR_IN_CENTER_LOCATION"
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
                "code": `getCCC_location(/*{SIG}*/, /*{LOCATION}*/, MeCamera_/*{PORT}*/.getCCCValue(/*{SIG}*/, 0), MeCamera_/*{PORT}*/.getCCCValue(/*{SIG}*/, 1))`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.aurigaCameraColorInCenterCodesLib,
                    "declare": this.funcs.aurigaCameraColorInCenterCodesDeclare,
                    "setup": this.funcs.aurigaCameraColorInCenterCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_camera_color_in_center
    },
    {
        "opcode": "auriga_camera_color_coordinate",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_CAMERA_SWITCH_COLOR_MODE_PORT"
            },
            "SIG": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_CAMERA_RECOGNIZE_COLOR_SIG"
            },
            "CCCINFO": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "AURIGA_CAMERA_COLOR_COORDINATE_CCCINFO"
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
                "code": `MeCamera_/*{PORT}*/.getCCCValue(/*{SIG}*/, /*{CCCINFO}*/)`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.aurigaCameraColorCoordinateCodesLib,
                    "setup": this.funcs.aurigaCameraColorCoordinateCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_camera_color_coordinate
    },
    {
        "opcode": "auriga_camera_turn_on_light",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_CAMERA_SWITCH_COLOR_MODE_PORT"
            },
            "STATE": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_CAMERA_TURN_ON_LIGHT_STATE"
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
                "code": `MeCamera_/*{PORT}*/.setLED(/*{STATE}*/);`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.aurigaCameraTurnOnLightCodesLib,
                    "setup": this.funcs.aurigaCameraTurnOnLightCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_camera_turn_on_light
    },
    {
        "opcode": "auriga_camera_set_white_balance",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_CAMERA_SWITCH_COLOR_MODE_PORT"
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
                "code": `MeCamera_/*{PORT}*/.startStudyCCC(8, 5);`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.aurigaCameraSetWhiteBalanceCodesLib,
                    "setup": this.funcs.aurigaCameraSetWhiteBalanceCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_camera_set_white_balance
    }
]);

export default blocks;