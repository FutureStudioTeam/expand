const blocks = (extFacePanels) => ([{
        "opcode": "megapipro_camera_set_kp",
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
                "code": this.funcs.megapiproCameraSetKpCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.megapiproCameraSetKpCodesLib,
                    "setup": this.funcs.megapiproCameraSetKpCodesSetup
                }
            }
        },
        "handler": this.funcs.megapipro_camera_set_kp
    },
    {
        "opcode": "megapipro_camera_follow_color",
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
            "SIG": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MEGAPIPRO_CAMERA_RECOGNIZE_COLOR_SIG"
            },
            "LOCATION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "MEGAPIPRO_CAMERA_GET_QRCODE_COORDINATE_BARCODEINFO"
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
                "code": this.funcs.megapiproCameraFollowColorCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.megapiproCameraFollowColorCodesLib,
                    "setup": this.funcs.megapiproCameraFollowColorCodesSetup
                }
            }
        },
        "handler": this.funcs.megapipro_camera_follow_color
    },
    {
        "opcode": "megapipro_camera_follow_qrcode",
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
            "BARCODE": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MEGAPIPRO_CAMERA_GET_QRCODE_MOVE_BARCODE"
            },
            "LOCATION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "MEGAPIPRO_CAMERA_GET_QRCODE_COORDINATE_BARCODEINFO"
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
                "code": this.funcs.megapiproCameraFollowQrcodeCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.megapiproCameraFollowQrcodeCodesLib,
                    "setup": this.funcs.megapiproCameraFollowQrcodeCodesSetup
                }
            }
        },
        "handler": this.funcs.megapipro_camera_follow_qrcode
    },
    {
        "opcode": "megapipro_camera_get_diff_speed",
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
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `MeCamera_/*{PORT}*/.getFollowVectorValue()`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.megapiproCameraGetDiffSpeedCodesLib,
                    "setup": this.funcs.megapiproCameraGetDiffSpeedCodesSetup
                }
            }
        },
        "handler": this.funcs.megapipro_camera_get_diff_speed
    },
    {
        "opcode": "megapipro_camera_lock_color",
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
            "SIG": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MEGAPIPRO_CAMERA_RECOGNIZE_COLOR_SIG"
            },
            "LOCATION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "MEGAPIPRO_CAMERA_GET_QRCODE_COORDINATE_BARCODEINFO"
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
                "code": this.funcs.megapiproCameraLockColorCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.megapiproCameraLockColorCodesLib,
                    "setup": this.funcs.megapiproCameraLockColorCodesSetup
                }
            }
        },
        "handler": this.funcs.megapipro_camera_lock_color
    },
    {
        "opcode": "megapipro_camera_lock_qrcode",
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
            },
            "LOCATION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "MEGAPIPRO_CAMERA_GET_QRCODE_COORDINATE_BARCODEINFO"
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
                "code": this.funcs.megapiproCameraLockQrcodeCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.megapiproCameraLockQrcodeCodesLib,
                    "setup": `MeCamera_/*{PORT}*/.begin();`
                }
            }
        },
        "handler": this.funcs.megapipro_camera_lock_qrcode
    }
]);

export default blocks;