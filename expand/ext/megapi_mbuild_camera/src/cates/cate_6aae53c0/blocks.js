const blocks = (extFacePanels) => ([{
        "opcode": "megapi_1566200222835",
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
        "handler": this.funcs.megapi_1566200222835
    },
    {
        "opcode": "megapi_camera_switch_color_mode",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_CAMERA_SWITCH_COLOR_MODE_PORT"
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
                    "lib": this.funcs.megapiCameraSwitchColorModeCodesLib,
                    "setup": this.funcs.megapiCameraSwitchColorModeCodesSetup
                }
            }
        },
        "handler": this.funcs.megapi_camera_switch_color_mode
    },
    {
        "opcode": "megapi_camera_recognize_color",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_CAMERA_SWITCH_COLOR_MODE_PORT"
            },
            "SIG": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MEGAPI_CAMERA_RECOGNIZE_COLOR_SIG"
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
                    "lib": this.funcs.megapiCameraRecognizeColorCodesLib,
                    "setup": this.funcs.megapiCameraRecognizeColorCodesSetup
                }
            }
        },
        "handler": this.funcs.megapi_camera_recognize_color
    },
    {
        "opcode": "megapi_camera_center_saturation",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "饱和度",
                "menu": "MEGAPI_CAMERA_CENTER_SATURATION_FIELDMENU_1"
            },
            "fieldMenu_2": {
                "type": "fieldMenu",
                "defaultValue": "中心",
                "menu": "MEGAPI_CAMERA_CENTER_SATURATION_FIELDMENU_2"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.megapi_camera_center_saturation
    },
    {
        "opcode": "megapi_camera_get_color",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_CAMERA_SWITCH_COLOR_MODE_PORT"
            },
            "SIG": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MEGAPI_CAMERA_RECOGNIZE_COLOR_SIG"
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
                "code": this.funcs.megapiCameraGetColorCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.megapiCameraGetColorCodesLib,
                    "setup": this.funcs.megapiCameraGetColorCodesSetup
                }
            }
        },
        "handler": this.funcs.megapi_camera_get_color
    },
    {
        "opcode": "megapi_camera_color_in_center",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_CAMERA_SWITCH_COLOR_MODE_PORT"
            },
            "SIG": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MEGAPI_CAMERA_RECOGNIZE_COLOR_SIG"
            },
            "LOCATION": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MEGAPI_CAMERA_COLOR_IN_CENTER_LOCATION"
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
                    "lib": this.funcs.megapiCameraColorInCenterCodesLib,
                    "declare": this.funcs.megapiCameraColorInCenterCodesDeclare,
                    "setup": this.funcs.megapiCameraColorInCenterCodesSetup
                }
            }
        },
        "handler": this.funcs.megapi_camera_color_in_center
    },
    {
        "opcode": "megapi_camera_color_coordinate",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_CAMERA_SWITCH_COLOR_MODE_PORT"
            },
            "SIG": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MEGAPI_CAMERA_RECOGNIZE_COLOR_SIG"
            },
            "CCCINFO": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "MEGAPI_CAMERA_COLOR_COORDINATE_CCCINFO"
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
                    "lib": this.funcs.megapiCameraColorCoordinateCodesLib,
                    "setup": this.funcs.megapiCameraColorCoordinateCodesSetup
                }
            }
        },
        "handler": this.funcs.megapi_camera_color_coordinate
    },
    {
        "opcode": "megapi_camera_turn_on_light",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_CAMERA_SWITCH_COLOR_MODE_PORT"
            },
            "STATE": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MEGAPI_CAMERA_TURN_ON_LIGHT_STATE"
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
                    "lib": this.funcs.megapiCameraTurnOnLightCodesLib,
                    "setup": this.funcs.megapiCameraTurnOnLightCodesSetup
                }
            }
        },
        "handler": this.funcs.megapi_camera_turn_on_light
    },
    {
        "opcode": "megapi_camera_set_white_balance",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_CAMERA_SWITCH_COLOR_MODE_PORT"
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
                    "lib": this.funcs.megapiCameraSetWhiteBalanceCodesLib,
                    "setup": this.funcs.megapiCameraSetWhiteBalanceCodesSetup
                }
            }
        },
        "handler": this.funcs.megapi_camera_set_white_balance
    }
]);

export default blocks;