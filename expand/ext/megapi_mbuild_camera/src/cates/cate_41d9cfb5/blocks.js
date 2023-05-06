const blocks = (extFacePanels) => ([{
        "opcode": "megapi_camera_set_kp",
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
                "code": this.funcs.megapiCameraSetKpCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.megapiCameraSetKpCodesLib,
                    "setup": this.funcs.megapiCameraSetKpCodesSetup
                }
            }
        },
        "handler": this.funcs.megapi_camera_set_kp
    },
    {
        "opcode": "megapi_camera_follow_color",
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
            "SIG": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MEGAPI_CAMERA_RECOGNIZE_COLOR_SIG"
            },
            "LOCATION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "MEGAPI_CAMERA_GET_QRCODE_COORDINATE_BARCODEINFO"
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
                "code": this.funcs.megapiCameraFollowColorCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.megapiCameraFollowColorCodesLib,
                    "setup": this.funcs.megapiCameraFollowColorCodesSetup
                }
            }
        },
        "handler": this.funcs.megapi_camera_follow_color
    },
    {
        "opcode": "megapi_camera_follow_qrcode",
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
            "BARCODE": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MEGAPI_CAMERA_GET_QRCODE_MOVE_BARCODE"
            },
            "LOCATION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "MEGAPI_CAMERA_GET_QRCODE_COORDINATE_BARCODEINFO"
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
                "code": this.funcs.megapiCameraFollowQrcodeCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.megapiCameraFollowQrcodeCodesLib,
                    "setup": this.funcs.megapiCameraFollowQrcodeCodesSetup
                }
            }
        },
        "handler": this.funcs.megapi_camera_follow_qrcode
    },
    {
        "opcode": "megapi_camera_get_diff_speed",
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
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `MeCamera_/*{PORT}*/.getFollowVectorValue()`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.megapiCameraGetDiffSpeedCodesLib,
                    "setup": this.funcs.megapiCameraGetDiffSpeedCodesSetup
                }
            }
        },
        "handler": this.funcs.megapi_camera_get_diff_speed
    },
    {
        "opcode": "megapi_camera_lock_color",
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
                "defaultValue": "0",
                "menu": "MEGAPI_CAMERA_GET_QRCODE_COORDINATE_BARCODEINFO"
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
                "code": this.funcs.megapiCameraLockColorCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.megapiCameraLockColorCodesLib,
                    "setup": this.funcs.megapiCameraLockColorCodesSetup
                }
            }
        },
        "handler": this.funcs.megapi_camera_lock_color
    },
    {
        "opcode": "megapi_camera_lock_qrcode",
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
            },
            "LOCATION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "MEGAPI_CAMERA_GET_QRCODE_COORDINATE_BARCODEINFO"
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
                "code": this.funcs.megapiCameraLockQrcodeCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.megapiCameraLockQrcodeCodesLib,
                    "setup": `MeCamera_/*{PORT}*/.begin();`
                }
            }
        },
        "handler": this.funcs.megapi_camera_lock_qrcode
    }
]);

export default blocks;