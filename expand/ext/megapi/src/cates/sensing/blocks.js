const blocks = (extFacePanels) => ([{
        "opcode": "ultrasonic_dis",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MCORE_SHOW_FACE_TIME_PORT"
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
                    "lib": this.funcs.ultrasonicDisCodesLib
                }
            }
        },
        "handler": this.funcs.ultrasonic_dis
    },
    {
        "opcode": "linefollower_status",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MCORE_SHOW_FACE_TIME_PORT"
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
                    "lib": this.funcs.linefollowerStatusCodesLib
                }
            }
        },
        "handler": this.funcs.linefollower_status
    },
    {
        "opcode": "linefollower_external",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MCORE_SHOW_FACE_TIME_PORT"
            },
            "LINEFOLLOW_STATE": {
                "type": "fieldMenu",
                "defaultValue": "2",
                "menu": "LINEFOLLOWER_EXTERNAL_LINEFOLLOW_STATE"
            },
            "BLACK_WHITE": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "LINEFOLLOWER_EXTERNAL_BLACK_WHITE"
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
                "code": `(/*{BLACK_WHITE}*/ ? (/*{LINEFOLLOW_STATE}*/ == 0 ? linefollower_/*{PORT}*/.readSensors() == 0 : \r\n(linefollower_/*{PORT}*/.readSensors() & /*{LINEFOLLOW_STATE}*/) == /*{LINEFOLLOW_STATE}*/) : \r\n(/*{LINEFOLLOW_STATE}*/ == 0 ? linefollower_/*{PORT}*/.readSensors() == 3 : \r\n(linefollower_/*{PORT}*/.readSensors() & /*{LINEFOLLOW_STATE}*/) == 0))`,
                "sections": {
                    "lib": this.funcs.linefollowerExternalCodesLib
                }
            }
        },
        "handler": this.funcs.linefollower_external
    },
    {
        "opcode": "gyro_sesor_read",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "AXIS": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "GYRO_SESOR_READ_AXIS"
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
                "code": `gyro_1.getAngle(/*{AXIS}*/)`,
                "sections": {
                    "lib": this.funcs.gyroSesorReadCodesLib,
                    "setup": this.funcs.gyroSesorReadCodesSetup,
                    "_loop": `gyro_1.update();`
                }
            }
        },
        "handler": this.funcs.gyro_sesor_read
    },
    {
        "opcode": "shutter_set_fun",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MCORE_SHOW_FACE_TIME_PORT"
            },
            "SHUTTER_ACTION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "SHUTTER_SET_FUN_SHUTTER_ACTION"
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
                "code": `shutter_/*{PORT}*/.setState(/*{SHUTTER_ACTION}*/);`,
                "sections": {
                    "lib": this.funcs.shutterSetFunCodesLib
                }
            }
        },
        "handler": this.funcs.shutter_set_fun
    },
    {
        "opcode": "encoder_motor_get_speed",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "ENCODER_MOTOR_POWER_PORT"
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
                "code": `Encoder_/*{PORT}*/.getCurrentSpeed()`,
                "sections": {
                    "setup": this.funcs.encoderMotorGetSpeedCodesSetup
                }
            }
        },
        "handler": this.funcs.encoder_motor_get_speed
    },
    {
        "opcode": "encoder_motor_get_pos",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "ENCODER_MOTOR_POWER_PORT"
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
                "code": `Encoder_/*{PORT}*/.getCurPos()`,
                "sections": {
                    "setup": this.funcs.encoderMotorGetPosCodesSetup
                }
            }
        },
        "handler": this.funcs.encoder_motor_get_pos
    },
    {
        "opcode": "detect_timer",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {},
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
                    "lib": this.funcs.detectTimerCodesLib,
                    "declare": this.funcs.detectTimerCodesDeclare
                }
            }
        },
        "handler": this.funcs.detect_timer
    },
    {
        "opcode": "reset_timer",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {},
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
                    "lib": this.funcs.resetTimerCodesLib
                }
            }
        },
        "handler": this.funcs.reset_timer
    }
]);

export default blocks;