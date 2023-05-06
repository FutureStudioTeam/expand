const blocks = (extFacePanels) => ([{
        "opcode": "megapipro_camera_1566200222835",
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
        "handler": this.funcs.megapipro_camera_1566200222835
    },
    {
        "opcode": "megapipro_camera_switch_line_qrcode_mode",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPIPRO_CAMERA_SWITCH_COLOR_MODE_PORT"
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
                    "lib": this.funcs.megapiproCameraSwitchLineQrcodeModeCodesLib,
                    "setup": this.funcs.megapiproCameraSwitchLineQrcodeModeCodesSetup
                }
            }
        },
        "handler": this.funcs.megapipro_camera_switch_line_qrcode_mode
    },
    {
        "opcode": "megapipro_camera_get_qrcode_move",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPIPRO_CAMERA_SWITCH_COLOR_MODE_PORT"
            },
            "BARCODE": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MEGAPIPRO_CAMERA_GET_QRCODE_MOVE_BARCODE"
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
                "code": this.funcs.megapiproCameraGetQrcodeMoveCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.megapiproCameraGetQrcodeMoveCodesLib,
                    "setup": this.funcs.megapiproCameraGetQrcodeMoveCodesSetup
                }
            }
        },
        "handler": this.funcs.megapipro_camera_get_qrcode_move
    },
    {
        "opcode": "megapipro_camera_get_qrcode_coordinate",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPIPRO_CAMERA_SWITCH_COLOR_MODE_PORT"
            },
            "BARCODE": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MEGAPIPRO_CAMERA_GET_QRCODE_MOVE_BARCODE"
            },
            "BARCODEINFO": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "MEGAPIPRO_CAMERA_GET_QRCODE_COORDINATE_BARCODEINFO"
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
                    "lib": this.funcs.megapiproCameraGetQrcodeCoordinateCodesLib,
                    "setup": this.funcs.megapiproCameraGetQrcodeCoordinateCodesSetup
                }
            }
        },
        "handler": this.funcs.megapipro_camera_get_qrcode_coordinate
    },
    {
        "opcode": "megapipro_camera_line_start_coordinate",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPIPRO_CAMERA_SWITCH_COLOR_MODE_PORT"
            },
            "LINEINFO": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "MEGAPIPRO_CAMERA_LINE_START_COORDINATE_LINEINFO"
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
                    "lib": this.funcs.megapiproCameraLineStartCoordinateCodesLib,
                    "setup": this.funcs.megapiproCameraLineStartCoordinateCodesSetup
                }
            }
        },
        "handler": this.funcs.megapipro_camera_line_start_coordinate
    },
    {
        "opcode": "megapipro_camera_get_cross",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPIPRO_CAMERA_SWITCH_COLOR_MODE_PORT"
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
                "code": this.funcs.megapiproCameraGetCrossCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.megapiproCameraGetCrossCodesLib,
                    "setup": this.funcs.megapiproCameraGetCrossCodesSetup
                }
            }
        },
        "handler": this.funcs.megapipro_camera_get_cross
    },
    {
        "opcode": "megapipro_camera_corss_coordinate",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPIPRO_CAMERA_SWITCH_COLOR_MODE_PORT"
            },
            "COORDINATES": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "MEGAPIPRO_CAMERA_GET_QRCODE_COORDINATE_BARCODEINFO"
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
                    "lib": this.funcs.megapiproCameraCorssCoordinateCodesLib,
                    "setup": this.funcs.megapiproCameraCorssCoordinateCodesSetup
                }
            }
        },
        "handler": this.funcs.megapipro_camera_corss_coordinate
    },
    {
        "opcode": "megapipro_camera_get_branch_num",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPIPRO_CAMERA_SWITCH_COLOR_MODE_PORT"
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
                    "lib": this.funcs.megapiproCameraGetBranchNumCodesLib,
                    "setup": this.funcs.megapiproCameraGetBranchNumCodesSetup
                }
            }
        },
        "handler": this.funcs.megapipro_camera_get_branch_num
    },
    {
        "opcode": "megapipro_camera_get_branch_angle",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPIPRO_CAMERA_SWITCH_COLOR_MODE_PORT"
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
                "code": this.funcs.megapiproCameraGetBranchAngleCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.megapiproCameraGetBranchAngleCodesLib,
                    "setup": this.funcs.megapiproCameraGetBranchAngleCodesSetup
                }
            }
        },
        "handler": this.funcs.megapipro_camera_get_branch_angle
    },
    {
        "opcode": "megapipro_camera_set_line_mode",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPIPRO_CAMERA_SWITCH_COLOR_MODE_PORT"
            },
            "LINEMODE": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "MEGAPIPRO_CAMERA_SET_LINE_MODE_LINEMODE"
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
                    "lib": this.funcs.megapiproCameraSetLineModeCodesLib,
                    "setup": this.funcs.megapiproCameraSetLineModeCodesSetup
                }
            }
        },
        "handler": this.funcs.megapipro_camera_set_line_mode
    },
    {
        "opcode": "megapipro_camera_1566200454757",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPIPRO_CAMERA_SWITCH_COLOR_MODE_PORT"
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
                    "lib": this.funcs.megapiproCamera1566200454757CodesLib,
                    "setup": this.funcs.megapiproCamera1566200454757CodesSetup
                }
            }
        },
        "handler": this.funcs.megapipro_camera_1566200454757
    },
    {
        "opcode": "megapipro_camera_1566200474887",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPIPRO_CAMERA_SWITCH_COLOR_MODE_PORT"
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
                    "lib": this.funcs.megapiproCamera1566200474887CodesLib,
                    "setup": this.funcs.megapiproCamera1566200474887CodesSetup
                }
            }
        },
        "handler": this.funcs.megapipro_camera_1566200474887
    }
]);

export default blocks;