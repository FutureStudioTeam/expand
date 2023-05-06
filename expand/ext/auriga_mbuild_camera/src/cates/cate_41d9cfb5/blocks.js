const blocks = (extFacePanels) => ([{
        "opcode": "auriga_camera_set_kp",
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
            "KP": {
                "type": "number",
                "defaultValue": 0.5
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.aurigaCameraSetKpCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.aurigaCameraSetKpCodesLib,
                    "setup": this.funcs.aurigaCameraSetKpCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_camera_set_kp
    },
    {
        "opcode": "auriga_camera_follow_color",
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
            "SIG": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_CAMERA_RECOGNIZE_COLOR_SIG"
            },
            "LOCATION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "AURIGA_CAMERA_GET_QRCODE_COORDINATE_BARCODEINFO"
            },
            "NUMBER": {
                "type": "number",
                "defaultValue": 150
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.aurigaCameraFollowColorCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.aurigaCameraFollowColorCodesLib,
                    "setup": this.funcs.aurigaCameraFollowColorCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_camera_follow_color
    },
    {
        "opcode": "auriga_camera_follow_qrcode",
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
            "BARCODE": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_CAMERA_GET_QRCODE_MOVE_BARCODE"
            },
            "LOCATION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "AURIGA_CAMERA_GET_QRCODE_COORDINATE_BARCODEINFO"
            },
            "NUMBER": {
                "type": "number",
                "defaultValue": 150
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.aurigaCameraFollowQrcodeCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.aurigaCameraFollowQrcodeCodesLib,
                    "setup": this.funcs.aurigaCameraFollowQrcodeCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_camera_follow_qrcode
    },
    {
        "opcode": "auriga_camera_get_diff_speed",
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
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `MeCamera_/*{PORT}*/.getFollowVectorValue()`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.aurigaCameraGetDiffSpeedCodesLib,
                    "setup": this.funcs.aurigaCameraGetDiffSpeedCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_camera_get_diff_speed
    },
    {
        "opcode": "auriga_camera_lock_color",
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
                "defaultValue": "0",
                "menu": "AURIGA_CAMERA_GET_QRCODE_COORDINATE_BARCODEINFO"
            },
            "NUMBER": {
                "type": "number",
                "defaultValue": 150
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.aurigaCameraLockColorCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.aurigaCameraLockColorCodesLib,
                    "setup": this.funcs.aurigaCameraLockColorCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_camera_lock_color
    },
    {
        "opcode": "auriga_camera_lock_qrcode",
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
            },
            "LOCATION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "AURIGA_CAMERA_GET_QRCODE_COORDINATE_BARCODEINFO"
            },
            "NUMBER": {
                "type": "number",
                "defaultValue": 150
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.aurigaCameraLockQrcodeCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.aurigaCameraLockQrcodeCodesLib,
                    "setup": `MeCamera_/*{PORT}*/.begin();`
                }
            }
        },
        "handler": this.funcs.auriga_camera_lock_qrcode
    }
]);

export default blocks;