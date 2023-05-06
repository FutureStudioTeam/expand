const blocks = (extFacePanels) => ([{
        "opcode": "mcore_forward_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore/imgs/6c349822610c452596e1a23bdaf41e5f.svg', 'mcore')
            },
            "POWER": {
                "type": "number",
                "defaultValue": 50
            },
            "TIME": {
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
                "code": this.funcs.mcoreForwardTimeCodesCode,
                "sections": {
                    "lib": this.funcs.mcoreForwardTimeCodesLib,
                    "declare": this.funcs.mcoreForwardTimeCodesDeclare
                }
            }
        },
        "handler": this.funcs.mcore_forward_time
    },
    {
        "opcode": "mcore_backward_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore/imgs/6c349822610c452596e1a23bdaf41e5f.svg', 'mcore')
            },
            "POWER": {
                "type": "number",
                "defaultValue": 50
            },
            "TIME": {
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
                "code": this.funcs.mcoreBackwardTimeCodesCode,
                "sections": {
                    "lib": this.funcs.mcoreBackwardTimeCodesLib,
                    "declare": this.funcs.mcoreBackwardTimeCodesDeclare
                }
            }
        },
        "handler": this.funcs.mcore_backward_time
    },
    {
        "opcode": "mcore_turnleft_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore/imgs/6c349822610c452596e1a23bdaf41e5f.svg', 'mcore')
            },
            "POWER": {
                "type": "number",
                "defaultValue": 50
            },
            "TIME": {
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
                "code": this.funcs.mcoreTurnleftTimeCodesCode,
                "sections": {
                    "lib": this.funcs.mcoreTurnleftTimeCodesLib,
                    "declare": this.funcs.mcoreTurnleftTimeCodesDeclare
                }
            }
        },
        "handler": this.funcs.mcore_turnleft_time
    },
    {
        "opcode": "mcore_turnright_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore/imgs/6c349822610c452596e1a23bdaf41e5f.svg', 'mcore')
            },
            "POWER": {
                "type": "number",
                "defaultValue": 50
            },
            "TIME": {
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
                "code": this.funcs.mcoreTurnrightTimeCodesCode,
                "sections": {
                    "lib": this.funcs.mcoreTurnrightTimeCodesLib,
                    "declare": this.funcs.mcoreTurnrightTimeCodesDeclare
                }
            }
        },
        "handler": this.funcs.mcore_turnright_time
    },
    {
        "opcode": "mcore_move",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore/imgs/6c349822610c452596e1a23bdaf41e5f.svg', 'mcore')
            },
            "MOVE_DIRECTION": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_MOVE_MOVE_DIRECTION"
            },
            "POWER": {
                "type": "number",
                "defaultValue": 50
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
                "code": this.funcs.mcoreMoveCodesCode,
                "sections": {
                    "lib": this.funcs.mcoreMoveCodesLib,
                    "declare": this.funcs.mcoreMoveCodesDeclare
                }
            }
        },
        "handler": this.funcs.mcore_move
    },
    {
        "opcode": "mcore_move_wheel_speed",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore/imgs/6c349822610c452596e1a23bdaf41e5f.svg', 'mcore')
            },
            "POWER_LEFT": {
                "type": "number",
                "defaultValue": 50
            },
            "POWER_RIGHT": {
                "type": "number",
                "defaultValue": 50
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
                "code": this.funcs.mcoreMoveWheelSpeedCodesCode,
                "sections": {
                    "lib": this.funcs.mcoreMoveWheelSpeedCodesLib
                }
            }
        },
        "handler": this.funcs.mcore_move_wheel_speed
    },
    {
        "opcode": "mcore_move_stop",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore/imgs/6c349822610c452596e1a23bdaf41e5f.svg', 'mcore')
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
                "code": `motor_9.run(0);\r\nmotor_10.run(0);`,
                "sections": {
                    "lib": this.funcs.mcoreMoveStopCodesLib
                }
            }
        },
        "handler": this.funcs.mcore_move_stop
    },
    {
        "opcode": "mcore_run_shutter",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_SHOW_FACE_TIME_PORT"
            },
            "SHUTTER_ACTION": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_SHUTTER_SHUTTER_ACTION"
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
                    "declare": `MeShutter shutter_/*{PORT}*/(/*{PORT}*/);`
                }
            }
        },
        "handler": this.funcs.mcore_run_shutter
    },
    {
        "opcode": "mcore_run_motor",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "9",
                "menu": "MCORE_RUN_MOTOR_PORT"
            },
            "ROTATE": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_MOTOR_ROTATE"
            },
            "POWER": {
                "type": "number",
                "defaultValue": 50
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
                "code": `motor_/*{PORT}*/.run(/*{ROTATE}*/ * /*{POWER}*/ / 100.0 * 255);`,
                "sections": {
                    "declare": `MeDCMotor motor_/*{PORT}*/(/*{PORT}*/);`
                }
            }
        },
        "handler": this.funcs.mcore_run_motor
    },
    {
        "opcode": "mcore_run_servo",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_SHOW_FACE_TIME_PORT"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_SHOW_ALL_LEDSTRIP_COLOR_SLOT"
            },
            "DEGREE": {
                "type": "number",
                "defaultValue": 90
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
                "code": `servo_/*{PORT}*/_/*{SLOT}*/.write(/*{DEGREE}*/);`,
                "sections": {
                    "declare": this.funcs.mcoreRunServoCodesDeclare,
                    "setup": `servo_/*{PORT}*/_/*{SLOT}*/.attach(port_/*{PORT}*/.pin/*{SLOT}*/());`
                }
            }
        },
        "handler": this.funcs.mcore_run_servo
    },
    {
        "opcode": "mcore_run_fan",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_SHOW_FACE_TIME_PORT"
            },
            "FAN_ROTATE": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_FAN_FAN_ROTATE"
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
                "code": `dc130_run(dc130_/*{PORT}*/, /*{FAN_ROTATE}*/);`,
                "sections": {
                    "declare": this.funcs.mcoreRunFanCodesDeclare
                }
            }
        },
        "handler": this.funcs.mcore_run_fan
    }
]);

export default blocks;