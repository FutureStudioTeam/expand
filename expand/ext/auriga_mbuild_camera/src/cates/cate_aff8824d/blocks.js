const blocks = (extFacePanels) => ([{
        "opcode": "auriga_camera_1566200222835",
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
        "handler": this.funcs.auriga_camera_1566200222835
    },
    {
        "opcode": "auriga_camera_switch_line_qrcode_mode",
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
                "code": `MeCamera_/*{PORT}*/.setCameraMode(LINE_MODE);`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.aurigaCameraSwitchLineQrcodeModeCodesLib,
                    "setup": this.funcs.aurigaCameraSwitchLineQrcodeModeCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_camera_switch_line_qrcode_mode
    },
    {
        "opcode": "auriga_camera_get_qrcode_move",
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
            "BARCODE": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_CAMERA_GET_QRCODE_MOVE_BARCODE"
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
                "code": this.funcs.aurigaCameraGetQrcodeMoveCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.aurigaCameraGetQrcodeMoveCodesLib,
                    "setup": this.funcs.aurigaCameraGetQrcodeMoveCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_camera_get_qrcode_move
    },
    {
        "opcode": "auriga_camera_get_qrcode_coordinate",
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
            "BARCODE": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_CAMERA_GET_QRCODE_MOVE_BARCODE"
            },
            "BARCODEINFO": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "AURIGA_CAMERA_GET_QRCODE_COORDINATE_BARCODEINFO"
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
                    "lib": this.funcs.aurigaCameraGetQrcodeCoordinateCodesLib,
                    "setup": this.funcs.aurigaCameraGetQrcodeCoordinateCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_camera_get_qrcode_coordinate
    },
    {
        "opcode": "auriga_camera_line_start_coordinate",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_CAMERA_SWITCH_COLOR_MODE_PORT"
            },
            "LINEINFO": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "AURIGA_CAMERA_LINE_START_COORDINATE_LINEINFO"
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
                    "lib": this.funcs.aurigaCameraLineStartCoordinateCodesLib,
                    "setup": this.funcs.aurigaCameraLineStartCoordinateCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_camera_line_start_coordinate
    },
    {
        "opcode": "auriga_camera_get_cross",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
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
                "code": this.funcs.aurigaCameraGetCrossCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.aurigaCameraGetCrossCodesLib,
                    "setup": this.funcs.aurigaCameraGetCrossCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_camera_get_cross
    },
    {
        "opcode": "auriga_camera_corss_coordinate",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_CAMERA_SWITCH_COLOR_MODE_PORT"
            },
            "COORDINATES": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "AURIGA_CAMERA_GET_QRCODE_COORDINATE_BARCODEINFO"
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
                    "lib": this.funcs.aurigaCameraCorssCoordinateCodesLib,
                    "setup": this.funcs.aurigaCameraCorssCoordinateCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_camera_corss_coordinate
    },
    {
        "opcode": "auriga_camera_get_branch_num",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
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
                "code": `MeCamera_/*{PORT}*/.getIntersectionValue(2)`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.aurigaCameraGetBranchNumCodesLib,
                    "setup": this.funcs.aurigaCameraGetBranchNumCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_camera_get_branch_num
    },
    {
        "opcode": "auriga_camera_get_branch_angle",
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
                "code": this.funcs.aurigaCameraGetBranchAngleCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.aurigaCameraGetBranchAngleCodesLib,
                    "setup": this.funcs.aurigaCameraGetBranchAngleCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_camera_get_branch_angle
    },
    {
        "opcode": "auriga_camera_set_line_mode",
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
            "LINEMODE": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "AURIGA_CAMERA_SET_LINE_MODE_LINEMODE"
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
                    "lib": this.funcs.aurigaCameraSetLineModeCodesLib,
                    "setup": this.funcs.aurigaCameraSetLineModeCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_camera_set_line_mode
    },
    {
        "opcode": "auriga_camera_1566200454757",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_CAMERA_SWITCH_COLOR_MODE_PORT"
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
                    "lib": this.funcs.aurigaCamera1566200454757CodesLib,
                    "setup": this.funcs.aurigaCamera1566200454757CodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_camera_1566200454757
    },
    {
        "opcode": "auriga_camera_1566200474887",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
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
                "code": `MeCamera_/*{PORT}*/.getNextTurnAngle()`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.aurigaCamera1566200474887CodesLib,
                    "setup": this.funcs.aurigaCamera1566200474887CodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_camera_1566200474887
    }
]);

export default blocks;