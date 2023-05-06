const blocks = (extFacePanels) => ([{
        "opcode": "megapi_camera_1566200222835",
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
        "handler": this.funcs.megapi_camera_1566200222835
    },
    {
        "opcode": "megapi_camera_switch_line_qrcode_mode",
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
                "code": `MeCamera_/*{PORT}*/.setCameraMode(LINE_MODE);`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.megapiCameraSwitchLineQrcodeModeCodesLib,
                    "setup": this.funcs.megapiCameraSwitchLineQrcodeModeCodesSetup
                }
            }
        },
        "handler": this.funcs.megapi_camera_switch_line_qrcode_mode
    },
    {
        "opcode": "megapi_camera_get_qrcode_move",
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
            "BARCODE": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MEGAPI_CAMERA_GET_QRCODE_MOVE_BARCODE"
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
                "code": this.funcs.megapiCameraGetQrcodeMoveCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.megapiCameraGetQrcodeMoveCodesLib,
                    "setup": this.funcs.megapiCameraGetQrcodeMoveCodesSetup
                }
            }
        },
        "handler": this.funcs.megapi_camera_get_qrcode_move
    },
    {
        "opcode": "megapi_camera_get_qrcode_coordinate",
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
            "BARCODE": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MEGAPI_CAMERA_GET_QRCODE_MOVE_BARCODE"
            },
            "BARCODEINFO": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "MEGAPI_CAMERA_GET_QRCODE_COORDINATE_BARCODEINFO"
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
                "code": `MeCamera_/*{PORT}*/.getBarCodeValue(/*{BARCODE}*/, /*{BARCODEINFO}*/)`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.megapiCameraGetQrcodeCoordinateCodesLib,
                    "setup": this.funcs.megapiCameraGetQrcodeCoordinateCodesSetup
                }
            }
        },
        "handler": this.funcs.megapi_camera_get_qrcode_coordinate
    },
    {
        "opcode": "megapi_camera_line_start_coordinate",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_CAMERA_SWITCH_COLOR_MODE_PORT"
            },
            "LINEINFO": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "MEGAPI_CAMERA_LINE_START_COORDINATE_LINEINFO"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockapp",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `MeCamera_/*{PORT}*/.getVectorValue(/*{LINEINFO}*/)`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.megapiCameraLineStartCoordinateCodesLib,
                    "setup": this.funcs.megapiCameraLineStartCoordinateCodesSetup
                }
            }
        },
        "handler": this.funcs.megapi_camera_line_start_coordinate
    },
    {
        "opcode": "megapi_camera_get_cross",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
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
                "code": this.funcs.megapiCameraGetCrossCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.megapiCameraGetCrossCodesLib,
                    "setup": this.funcs.megapiCameraGetCrossCodesSetup
                }
            }
        },
        "handler": this.funcs.megapi_camera_get_cross
    },
    {
        "opcode": "megapi_camera_corss_coordinate",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_CAMERA_SWITCH_COLOR_MODE_PORT"
            },
            "COORDINATES": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "MEGAPI_CAMERA_GET_QRCODE_COORDINATE_BARCODEINFO"
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
                "code": `MeCamera_/*{PORT}*/.getIntersectionValue(/*{COORDINATES}*/)`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.megapiCameraCorssCoordinateCodesLib,
                    "setup": this.funcs.megapiCameraCorssCoordinateCodesSetup
                }
            }
        },
        "handler": this.funcs.megapi_camera_corss_coordinate
    },
    {
        "opcode": "megapi_camera_get_branch_num",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
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
                "code": `MeCamera_/*{PORT}*/.getIntersectionValue(2)`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.megapiCameraGetBranchNumCodesLib,
                    "setup": this.funcs.megapiCameraGetBranchNumCodesSetup
                }
            }
        },
        "handler": this.funcs.megapi_camera_get_branch_num
    },
    {
        "opcode": "megapi_camera_get_branch_angle",
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
            "NUMBER": {
                "type": "number",
                "defaultValue": 1
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
                "code": this.funcs.megapiCameraGetBranchAngleCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.megapiCameraGetBranchAngleCodesLib,
                    "setup": this.funcs.megapiCameraGetBranchAngleCodesSetup
                }
            }
        },
        "handler": this.funcs.megapi_camera_get_branch_angle
    },
    {
        "opcode": "megapi_camera_set_line_mode",
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
            "LINEMODE": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "MEGAPI_CAMERA_SET_LINE_MODE_LINEMODE"
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
                "code": `MeCamera_/*{PORT}*/.setLineMode(/*{LINEMODE}*/);`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.megapiCameraSetLineModeCodesLib,
                    "setup": this.funcs.megapiCameraSetLineModeCodesSetup
                }
            }
        },
        "handler": this.funcs.megapi_camera_set_line_mode
    },
    {
        "opcode": "megapi_camera_1566200454757",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_CAMERA_SWITCH_COLOR_MODE_PORT"
            },
            "ANGLE": {
                "type": "number",
                "defaultValue": 0
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
                "code": `MeCamera_/*{PORT}*/.setNextTurnAngle(/*{ANGLE}*/);`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.megapiCamera1566200454757CodesLib,
                    "setup": this.funcs.megapiCamera1566200454757CodesSetup
                }
            }
        },
        "handler": this.funcs.megapi_camera_1566200454757
    },
    {
        "opcode": "megapi_camera_1566200474887",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
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
                "code": `MeCamera_/*{PORT}*/.getNextTurnAngle()`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.megapiCamera1566200474887CodesLib,
                    "setup": this.funcs.megapiCamera1566200474887CodesSetup
                }
            }
        },
        "handler": this.funcs.megapi_camera_1566200474887
    }
]);

export default blocks;