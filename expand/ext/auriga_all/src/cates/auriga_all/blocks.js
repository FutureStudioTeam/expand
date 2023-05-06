const blocks = (extFacePanels) => ([{
        "opcode": "auriga_run_board_encoder_motor",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_RUN_BOARD_ENCODER_MOTOR_PORT"
            },
            "ROTATE": {
                "type": "fieldMenu",
                "defaultValue": "-1",
                "menu": "AURIGA_RUN_BOARD_ENCODER_MOTOR_ROTATE"
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
                "code": this.funcs.aurigaRunBoardEncoderMotorCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaRunBoardEncoderMotorCodesLib,
                    "declare": this.funcs.aurigaRunBoardEncoderMotorCodesDeclare,
                    "setup": this.funcs.aurigaRunBoardEncoderMotorCodesSetup,
                    "_loop": this.funcs.aurigaRunBoardEncoderMotorCodesLoop
                }
            }
        },
        "handler": this.funcs.auriga_run_board_encoder_motor
    },
    {
        "opcode": "auriga_run_board_encoder_motor_speed",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_RUN_BOARD_ENCODER_MOTOR_PORT"
            },
            "ROTATE": {
                "type": "fieldMenu",
                "defaultValue": "-1",
                "menu": "AURIGA_RUN_BOARD_ENCODER_MOTOR_ROTATE"
            },
            "POWER": {
                "type": "number",
                "defaultValue": 180
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
                "code": this.funcs.aurigaRunBoardEncoderMotorSpeedCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaRunBoardEncoderMotorSpeedCodesLib,
                    "declare": this.funcs.aurigaRunBoardEncoderMotorSpeedCodesDeclare,
                    "setup": this.funcs.aurigaRunBoardEncoderMotorSpeedCodesSetup,
                    "_loop": this.funcs.aurigaRunBoardEncoderMotorSpeedCodesLoop
                }
            }
        },
        "handler": this.funcs.auriga_run_board_encoder_motor_speed
    },
    {
        "opcode": "auriga_run_board_encoder_motor_pos",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_RUN_BOARD_ENCODER_MOTOR_PORT"
            },
            "ROTATE": {
                "type": "fieldMenu",
                "defaultValue": "-1",
                "menu": "AURIGA_RUN_BOARD_ENCODER_MOTOR_ROTATE"
            },
            "DEGREE": {
                "type": "number",
                "defaultValue": 1000
            },
            "POWER": {
                "type": "number",
                "defaultValue": 180
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
                "code": this.funcs.aurigaRunBoardEncoderMotorPosCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaRunBoardEncoderMotorPosCodesLib,
                    "declare": this.funcs.aurigaRunBoardEncoderMotorPosCodesDeclare,
                    "setup": this.funcs.aurigaRunBoardEncoderMotorPosCodesSetup,
                    "_loop": this.funcs.aurigaRunBoardEncoderMotorPosCodesLoop
                }
            }
        },
        "handler": this.funcs.auriga_run_board_encoder_motor_pos
    },
    {
        "opcode": "auriga_run_encoder_motor",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_RUN_ENCODER_MOTOR_PORT"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_RUN_ENCODER_MOTOR_SLOT"
            },
            "ROTATE": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_RUN_ENCODER_MOTOR_ROTATE"
            },
            "DEGREE": {
                "type": "number",
                "defaultValue": 1000
            },
            "POWER": {
                "type": "number",
                "defaultValue": 180
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
                "code": this.funcs.aurigaRunEncoderMotorCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaRunEncoderMotorCodesLib,
                    "setup": this.funcs.aurigaRunEncoderMotorCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_run_encoder_motor
    },
    {
        "opcode": "auriga_encoder_motor_speed",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/186ffb9b72a044d6a9466f4dbc131a97.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_RUN_BOARD_ENCODER_MOTOR_PORT"
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
                    "lib": this.funcs.aurigaEncoderMotorSpeedCodesLib,
                    "_loop": this.funcs.aurigaEncoderMotorSpeedCodesLoop
                }
            }
        },
        "handler": this.funcs.auriga_encoder_motor_speed
    },
    {
        "opcode": "auriga_encoder_motor_pos",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/679bd50af95b4932a3f416f6a7840151.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_RUN_BOARD_ENCODER_MOTOR_PORT"
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
                    "lib": this.funcs.aurigaEncoderMotorPosCodesLib,
                    "_loop": this.funcs.aurigaEncoderMotorPosCodesLoop
                }
            }
        },
        "handler": this.funcs.auriga_encoder_motor_pos
    },
    {
        "opcode": "auriga_run_motor",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_RUN_ENCODER_MOTOR_PORT"
            },
            "ROTATE": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_RUN_ENCODER_MOTOR_ROTATE"
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
                "code": this.funcs.aurigaRunMotorCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaRunMotorCodesLib
                }
            }
        },
        "handler": this.funcs.auriga_run_motor
    },
    {
        "opcode": "auriga_run_stepper_motor_pos",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_RUN_ENCODER_MOTOR_PORT"
            },
            "ROTATE": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_RUN_ENCODER_MOTOR_ROTATE"
            },
            "DISTANCE": {
                "type": "number",
                "defaultValue": 100
            },
            "POWER": {
                "type": "number",
                "defaultValue": 3000
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
                "code": this.funcs.aurigaRunStepperMotorPosCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaRunStepperMotorPosCodesLib,
                    "_loop": `stepper_/*{PORT}*/.runSpeedToPosition();`
                }
            }
        },
        "handler": this.funcs.auriga_run_stepper_motor_pos
    },
    {
        "opcode": "auriga_run_servo",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_SERVO_PORT"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_RUN_ENCODER_MOTOR_SLOT"
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
                "code": this.funcs.aurigaRunServoCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaRunServoCodesLib,
                    "setup": this.funcs.aurigaRunServoCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_run_servo
    },
    {
        "opcode": "auriga_run_fan",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_SERVO_PORT"
            },
            "FAN_ROTATE": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_RUN_FAN_FAN_ROTATE"
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
                "code": `dc130_run(dc130_/*{PORT}*/,/*{FAN_ROTATE}*/);`,
                "sections": {
                    "lib": this.funcs.aurigaRunFanCodesLib,
                    "declare": this.funcs.aurigaRunFanCodesDeclare
                }
            }
        },
        "handler": this.funcs.auriga_run_fan
    },
    {
        "opcode": "auriga_run_shutter",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_SERVO_PORT"
            },
            "SHUTTER_ACTION": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_RUN_SHUTTER_SHUTTER_ACTION"
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
                    "lib": this.funcs.aurigaRunShutterCodesLib
                }
            }
        },
        "handler": this.funcs.auriga_run_shutter
    },
    {
        "opcode": "auriga_run_smart_servo_to_zero",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "INDEX": {
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
                "code": this.funcs.aurigaRunSmartServoToZeroCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaRunSmartServoToZeroCodesLib,
                    "setup": this.funcs.aurigaRunSmartServoToZeroCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_run_smart_servo_to_zero
    },
    {
        "opcode": "auriga_run_smart_servo",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "INDEX": {
                "type": "number",
                "defaultValue": 1
            },
            "ROTATE": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_RUN_ENCODER_MOTOR_ROTATE"
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
                "code": this.funcs.aurigaRunSmartServoCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaRunSmartServoCodesLib,
                    "setup": this.funcs.aurigaRunSmartServoCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_run_smart_servo
    },
    {
        "opcode": "auriga_run_smart_servo_absolute",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "INDEX": {
                "type": "number",
                "defaultValue": 1
            },
            "ROTATE": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_RUN_ENCODER_MOTOR_ROTATE"
            },
            "POSITION": {
                "type": "number",
                "defaultValue": 180
            },
            "POWER": {
                "type": "number",
                "defaultValue": 30
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
                "code": this.funcs.aurigaRunSmartServoAbsoluteCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaRunSmartServoAbsoluteCodesLib,
                    "setup": this.funcs.aurigaRunSmartServoAbsoluteCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_run_smart_servo_absolute
    },
    {
        "opcode": "auriga_run_smart_servo_to_relative",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "INDEX": {
                "type": "number",
                "defaultValue": 1
            },
            "ROTATE": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_RUN_ENCODER_MOTOR_ROTATE"
            },
            "DEGREE": {
                "type": "number",
                "defaultValue": 180
            },
            "POWER": {
                "type": "number",
                "defaultValue": 30
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
                "code": this.funcs.aurigaRunSmartServoToRelativeCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaRunSmartServoToRelativeCodesLib,
                    "setup": this.funcs.aurigaRunSmartServoToRelativeCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_run_smart_servo_to_relative
    },
    {
        "opcode": "auriga_run_smart_servo_rgb",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/072ad44106824f3ca7bc3de24f0281d7.svg', 'auriga_all')
            },
            "INDEX": {
                "type": "number",
                "defaultValue": 1
            },
            "R": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "AURIGA_RUN_SMART_SERVO_RGB_R"
            },
            "G": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "AURIGA_RUN_SMART_SERVO_RGB_R"
            },
            "B": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "AURIGA_RUN_SMART_SERVO_RGB_R"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.aurigaRunSmartServoRgbCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaRunSmartServoRgbCodesLib,
                    "setup": this.funcs.aurigaRunSmartServoRgbCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_run_smart_servo_rgb
    },
    {
        "opcode": "auriga_run_smart_servo_detect",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/2e574d66ae3b4d70969ffb977d3d1905.svg', 'auriga_all')
            },
            "INDEX": {
                "type": "number",
                "defaultValue": 1
            },
            "OPTION": {
                "type": "fieldMenu",
                "defaultValue": "2",
                "menu": "AURIGA_RUN_SMART_SERVO_DETECT_OPTION"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.aurigaRunSmartServoDetectCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaRunSmartServoDetectCodesLib,
                    "declare": `float getServoValue(int index, int type)\r\n{\r\n    \tif(type==0)\r\n    \t{\r\n        \t\treturn mysmartservo.getSpeedRequest(index);\r\n    \t}\r\n    \telse if(type==1)\r\n    \t{\r\n        \t\treturn mysmartservo.getTempRequest(index);\r\n    \t}\r\n    \telse if(type==2)\r\n    \t{\r\n        \t\treturn mysmartservo.getCurrentRequest(index);\r\n    \t}\r\n    \telse if(type==3)\r\n    \t{\r\n        \t\treturn mysmartservo.getVoltageRequest(index);\r\n    \t}\r\n    \telse if(type==4)\r\n    \t{\r\n        \t\treturn mysmartservo.getAngleRequest(index);\r\n    \t}\r\n}`,
                    "setup": this.funcs.aurigaRunSmartServoDetectCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_run_smart_servo_detect
    },
    {
        "opcode": "auriga_show_face_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_SERVO_PORT"
            },
            "FACE_PANEL": extFacePanels['80dd5281-e401-4346-a1fd-64dce4a85461'],
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
                "code": this.funcs.aurigaShowFaceTimeCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaShowFaceTimeCodesLib,
                    "setup": this.funcs.aurigaShowFaceTimeCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_show_face_time
    },
    {
        "opcode": "auriga_show_face",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_SERVO_PORT"
            },
            "FACE_PANEL": extFacePanels['80dd5281-e401-4346-a1fd-64dce4a85461']
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.aurigaShowFaceCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaShowFaceCodesLib,
                    "setup": this.funcs.aurigaShowFaceCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_show_face
    },
    {
        "opcode": "auriga_show_face_position",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_SERVO_PORT"
            },
            "FACE_PANEL": extFacePanels['80dd5281-e401-4346-a1fd-64dce4a85461'],
            "X": {
                "type": "number",
                "defaultValue": 0
            },
            "Y": {
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
                "code": this.funcs.aurigaShowFacePositionCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaShowFacePositionCodesLib,
                    "setup": this.funcs.aurigaShowFacePositionCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_show_face_position
    },
    {
        "opcode": "auriga_show_text",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_SERVO_PORT"
            },
            "TEXT": {
                "type": "string",
                "defaultValue": "hello"
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
                "code": `ledMtx_/*{PORT}*/.drawStr(0, 0 + 7, String(/*{TEXT}*/).c_str());`,
                "sections": {
                    "lib": this.funcs.aurigaShowTextCodesLib,
                    "setup": this.funcs.aurigaShowTextCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_show_text
    },
    {
        "opcode": "auriga_show_text_position",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_SERVO_PORT"
            },
            "TEXT": {
                "type": "string",
                "defaultValue": "hello"
            },
            "X": {
                "type": "number",
                "defaultValue": 0
            },
            "Y": {
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
                "code": this.funcs.aurigaShowTextPositionCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaShowTextPositionCodesLib,
                    "setup": this.funcs.aurigaShowTextPositionCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_show_text_position
    },
    {
        "opcode": "auriga_show_number",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_SERVO_PORT"
            },
            "NUMBER": {
                "type": "number",
                "defaultValue": 2048
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
                "code": this.funcs.aurigaShowNumberCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaShowNumberCodesLib,
                    "setup": this.funcs.aurigaShowNumberCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_show_number
    },
    {
        "opcode": "auriga_show_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_SERVO_PORT"
            },
            "NUMBER1": {
                "type": "number",
                "defaultValue": 12
            },
            "NUMBER2": {
                "type": "number",
                "defaultValue": "00"
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
                "code": this.funcs.aurigaShowTimeCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaShowTimeCodesLib,
                    "setup": this.funcs.aurigaShowTimeCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_show_time
    },
    {
        "opcode": "auriga_show_face_off",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_SERVO_PORT"
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
                "code": `ledMtx_/*{PORT}*/.clearScreen();`,
                "sections": {
                    "lib": this.funcs.aurigaShowFaceOffCodesLib,
                    "setup": this.funcs.aurigaShowFaceOffCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_show_face_off
    },
    {
        "opcode": "auriga_show_external_led_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_SERVO_PORT"
            },
            "LED_POSTION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "AURIGA_SHOW_EXTERNAL_LED_TIME_LED_POSTION"
            },
            "COLOR": {
                "type": "color",
                "defaultValue": "#ff0000"
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
                "code": this.funcs.aurigaShowExternalLedTimeCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaShowExternalLedTimeCodesLib,
                    "setup": this.funcs.aurigaShowExternalLedTimeCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_show_external_led_time
    },
    {
        "opcode": "auriga_show_external_led",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_SERVO_PORT"
            },
            "LED_POSTION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "AURIGA_SHOW_EXTERNAL_LED_TIME_LED_POSTION"
            },
            "COLOR": {
                "type": "color",
                "defaultValue": "#ff0000"
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
                "code": this.funcs.aurigaShowExternalLedCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaShowExternalLedCodesLib,
                    "setup": this.funcs.aurigaShowExternalLedCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_show_external_led
    },
    {
        "opcode": "auriga_show_external_led_rgb",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_SERVO_PORT"
            },
            "LED_POSTION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "AURIGA_SHOW_EXTERNAL_LED_TIME_LED_POSTION"
            },
            "R": {
                "type": "number",
                "defaultValue": 255
            },
            "G": {
                "type": "number",
                "defaultValue": 0
            },
            "B": {
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
                "code": this.funcs.aurigaShowExternalLedRgbCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaShowExternalLedRgbCodesLib,
                    "setup": this.funcs.aurigaShowExternalLedRgbCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_show_external_led_rgb
    },
    {
        "opcode": "auriga_show_all_ledstrip_color",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_SERVO_PORT"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_RUN_ENCODER_MOTOR_SLOT"
            },
            "COLOR_LIST": {
                "type": "fieldMenu",
                "defaultValue": "#FF0000",
                "menu": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST"
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
                "code": this.funcs.aurigaShowAllLedstripColorCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaShowAllLedstripColorCodesLib,
                    "setup": this.funcs.aurigaShowAllLedstripColorCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_show_all_ledstrip_color
    },
    {
        "opcode": "auriga_show_ledstrip_color",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_SERVO_PORT"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_RUN_ENCODER_MOTOR_SLOT"
            },
            "POS": {
                "type": "number",
                "defaultValue": 1
            },
            "COLOR_LIST": {
                "type": "fieldMenu",
                "defaultValue": "#FF0000",
                "menu": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST"
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
                "code": this.funcs.aurigaShowLedstripColorCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaShowLedstripColorCodesLib,
                    "setup": this.funcs.aurigaShowLedstripColorCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_show_ledstrip_color
    },
    {
        "opcode": "auriga_show_ledstrip_rbg",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_SERVO_PORT"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_RUN_ENCODER_MOTOR_SLOT"
            },
            "POS": {
                "type": "number",
                "defaultValue": 1
            },
            "R": {
                "type": "number",
                "defaultValue": 255
            },
            "G": {
                "type": "number",
                "defaultValue": 0
            },
            "B": {
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
                "code": this.funcs.aurigaShowLedstripRbgCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaShowLedstripRbgCodesLib,
                    "setup": this.funcs.aurigaShowLedstripRbgCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_show_ledstrip_rbg
    },
    {
        "opcode": "auriga_show_7segments_number",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_SERVO_PORT"
            },
            "NUMBER": {
                "type": "number",
                "defaultValue": 100
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
                "code": this.funcs.aurigaShow7SegmentsNumberCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaShow7SegmentsNumberCodesLib
                }
            }
        },
        "handler": this.funcs.auriga_show_7segments_number
    },
    {
        "opcode": "auriga_detect_external_ultrasonic",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "10",
                "menu": "AURIGA_RUN_SERVO_PORT"
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
                    "lib": this.funcs.aurigaDetectExternalUltrasonicCodesLib
                }
            }
        },
        "handler": this.funcs.auriga_detect_external_ultrasonic
    },
    {
        "opcode": "auriga_detect_external_light",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_DETECT_EXTERNAL_LIGHT_PORT"
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
                "code": `lightsensor_/*{PORT}*/.read()`,
                "sections": {
                    "lib": this.funcs.aurigaDetectExternalLightCodesLib
                }
            }
        },
        "handler": this.funcs.auriga_detect_external_light
    },
    {
        "opcode": "auriga_detect_external_loudness",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_SERVO_PORT"
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
                "code": `soundsensor_/*{PORT}*/.strength()`,
                "sections": {
                    "lib": this.funcs.aurigaDetectExternalLoudnessCodesLib
                }
            }
        },
        "handler": this.funcs.auriga_detect_external_loudness
    },
    {
        "opcode": "auriga_detect_external_linefollower",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "9",
                "menu": "AURIGA_RUN_SERVO_PORT"
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
                    "lib": this.funcs.aurigaDetectExternalLinefollowerCodesLib
                }
            }
        },
        "handler": this.funcs.auriga_detect_external_linefollower
    },
    {
        "opcode": "auriga_event_external_linefollower",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "9",
                "menu": "AURIGA_RUN_SERVO_PORT"
            },
            "LINEFOLLOW_STATE": {
                "type": "fieldMenu",
                "defaultValue": "2",
                "menu": "AURIGA_EVENT_EXTERNAL_LINEFOLLOWER_LINEFOLLOW_STATE"
            },
            "BLACK_WHITE": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "AURIGA_EVENT_EXTERNAL_LINEFOLLOWER_BLACK_WHITE"
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
                "code": `/*{BLACK_WHITE}*/?(/*{LINEFOLLOW_STATE}*/==0?linefollower_/*{PORT}*/.readSensors()==0:(linefollower_/*{PORT}*/.readSensors() & /*{LINEFOLLOW_STATE}*/)==/*{LINEFOLLOW_STATE}*/):(/*{LINEFOLLOW_STATE}*/==0?linefollower_/*{PORT}*/.readSensors()==3:(linefollower_/*{PORT}*/.readSensors() & /*{LINEFOLLOW_STATE}*/)==0)`,
                "sections": {
                    "lib": this.funcs.aurigaEventExternalLinefollowerCodesLib
                }
            }
        },
        "handler": this.funcs.auriga_event_external_linefollower
    },
    {
        "opcode": "auriga_detec_temperature",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_SERVO_PORT"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_RUN_ENCODER_MOTOR_SLOT"
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
                "code": `temperature_/*{PORT}*/_/*{SLOT}*/.temperature()`,
                "sections": {
                    "lib": this.funcs.aurigaDetecTemperatureCodesLib
                }
            }
        },
        "handler": this.funcs.auriga_detec_temperature
    },
    {
        "opcode": "auriga_detect_humiture",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_SERVO_PORT"
            },
            "TEMP_HUMITURE": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "AURIGA_DETECT_HUMITURE_TEMP_HUMITURE"
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
                "code": `humiture_/*{PORT}*/.getValue(/*{TEMP_HUMITURE}*/)`,
                "sections": {
                    "lib": this.funcs.aurigaDetectHumitureCodesLib,
                    "_loop": `humiture_/*{PORT}*/.update();`
                }
            }
        },
        "handler": this.funcs.auriga_detect_humiture
    },
    {
        "opcode": "auriga_event_touch",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_SERVO_PORT"
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
                "code": `touchSensor_/*{PORT}*/.touched()`,
                "sections": {
                    "lib": this.funcs.aurigaEventTouchCodesLib
                }
            }
        },
        "handler": this.funcs.auriga_event_touch
    },
    {
        "opcode": "auriga_detect_compass",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_SERVO_PORT"
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
                "code": `compass_/*{PORT}*/.getAngle()`,
                "sections": {
                    "lib": this.funcs.aurigaDetectCompassCodesLib,
                    "setup": `compass_/*{PORT}*/.begin();`
                }
            }
        },
        "handler": this.funcs.auriga_detect_compass
    },
    {
        "opcode": "auriga_detect_flame",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_SERVO_PORT"
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
                "code": `flameSensor_/*{PORT}*/.readAnalog()`,
                "sections": {
                    "lib": this.funcs.aurigaDetectFlameCodesLib
                }
            }
        },
        "handler": this.funcs.auriga_detect_flame
    },
    {
        "opcode": "auriga_detect_gas",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_SERVO_PORT"
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
                "code": `gasSensor_/*{PORT}*/.readAnalog()`,
                "sections": {
                    "lib": this.funcs.aurigaDetectGasCodesLib
                }
            }
        },
        "handler": this.funcs.auriga_detect_gas
    },
    {
        "opcode": "auriga_detect_board_gyro_angle",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "AXIS": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_DETECT_BOARD_GYRO_ANGLE_AXIS"
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
                "code": `gyro_0.getAngle(/*{AXIS}*/)`,
                "sections": {
                    "lib": this.funcs.aurigaDetectBoardGyroAngleCodesLib,
                    "setup": `gyro_0.begin();`,
                    "_loop": `gyro_0.update();`
                }
            }
        },
        "handler": this.funcs.auriga_detect_board_gyro_angle
    },
    {
        "opcode": "auriga_detect_gyro_angle",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "AXIS": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_DETECT_BOARD_GYRO_ANGLE_AXIS"
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
                    "lib": this.funcs.aurigaDetectGyroAngleCodesLib,
                    "setup": `gyro_1.begin();`,
                    "_loop": `gyro_1.update();`
                }
            }
        },
        "handler": this.funcs.auriga_detect_gyro_angle
    },
    {
        "opcode": "auriga_event_pir_motion",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_SERVO_PORT"
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
                "code": `pir_/*{PORT}*/.isHumanDetected()`,
                "sections": {
                    "lib": this.funcs.aurigaEventPirMotionCodesLib
                }
            }
        },
        "handler": this.funcs.auriga_event_pir_motion
    },
    {
        "opcode": "auriga_event_button_press",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_SERVO_PORT"
            },
            "FOUR_KEY": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_EVENT_BUTTON_PRESS_FOUR_KEY"
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
                "code": `(buttonSensor_/*{PORT}*/.pressed()==/*{FOUR_KEY}*/)`,
                "sections": {
                    "lib": this.funcs.aurigaEventButtonPressCodesLib,
                    "_loop": `buttonSensor_/*{PORT}*/.pressed();`
                }
            }
        },
        "handler": this.funcs.auriga_event_button_press
    },
    {
        "opcode": "auriga_event_limit_switch",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_SERVO_PORT"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_RUN_ENCODER_MOTOR_SLOT"
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
                "code": `sw_/*{PORT}*/_/*{SLOT}*/.touched()`,
                "sections": {
                    "lib": this.funcs.aurigaEventLimitSwitchCodesLib
                }
            }
        },
        "handler": this.funcs.auriga_event_limit_switch
    },
    {
        "opcode": "auriga_detect_potentiometer",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_SERVO_PORT"
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
                "code": `potentiometer_/*{PORT}*/.read()`,
                "sections": {
                    "lib": this.funcs.aurigaDetectPotentiometerCodesLib
                }
            }
        },
        "handler": this.funcs.auriga_detect_potentiometer
    },
    {
        "opcode": "auriga_detect_joystick",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_SERVO_PORT"
            },
            "AXIS_X_Y": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_DETECT_JOYSTICK_AXIS_X_Y"
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
                "code": `joystick_/*{PORT}*/.read(/*{AXIS_X_Y}*/)`,
                "sections": {
                    "lib": this.funcs.aurigaDetectJoystickCodesLib
                }
            }
        },
        "handler": this.funcs.auriga_detect_joystick
    },
    {
        "opcode": "auriga_detect_infrared",
        "blockType": "string",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_SERVO_PORT"
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
                "code": `ir_/*{PORT}*/.getCode()`,
                "sections": {
                    "lib": this.funcs.aurigaDetectInfraredCodesLib,
                    "setup": `ir_/*{PORT}*/.begin();`,
                    "_loop": `ir_/*{PORT}*/.loop();`
                }
            }
        },
        "handler": this.funcs.auriga_detect_infrared
    },
    {
        "opcode": "auriga_encoder_motor_V2_motor",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/691650c47e644fbba335ba6a659298fb.svg', 'auriga_all')
            },
            "SWITCH": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "AURIGA_ENCODER_MOTOR_V2_MOTOR_SWITCH"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_ENCODER_MOTOR_V2_MOTOR_SLOT"
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
                "code": this.funcs.aurigaEncoderMotorV2MotorCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeEncoderMotorDriverV2.h\""
                    ],
                    "lib": this.funcs.aurigaEncoderMotorV2MotorCodesLib,
                    "setup": this.funcs.aurigaEncoderMotorV2MotorCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_encoder_motor_V2_motor
    },
    {
        "opcode": "auriga_encoder_motor_V2_speed",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/691650c47e644fbba335ba6a659298fb.svg', 'auriga_all')
            },
            "SWITCH": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "AURIGA_ENCODER_MOTOR_V2_MOTOR_SWITCH"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_ENCODER_MOTOR_V2_MOTOR_SLOT"
            },
            "SPEED": {
                "type": "number",
                "defaultValue": 180
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
                "code": this.funcs.aurigaEncoderMotorV2SpeedCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeEncoderMotorDriverV2.h\""
                    ],
                    "lib": this.funcs.aurigaEncoderMotorV2SpeedCodesLib,
                    "setup": this.funcs.aurigaEncoderMotorV2SpeedCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_encoder_motor_V2_speed
    },
    {
        "opcode": "auriga_encoder_motor_V2_pos",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/691650c47e644fbba335ba6a659298fb.svg', 'auriga_all')
            },
            "SWITCH": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "AURIGA_ENCODER_MOTOR_V2_MOTOR_SWITCH"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_ENCODER_MOTOR_V2_MOTOR_SLOT"
            },
            "DEGREE": {
                "type": "number",
                "defaultValue": 1000
            },
            "SPEED": {
                "type": "number",
                "defaultValue": 180
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
                "code": this.funcs.aurigaEncoderMotorV2PosCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeEncoderMotorDriverV2.h\""
                    ],
                    "lib": this.funcs.aurigaEncoderMotorV2PosCodesLib,
                    "setup": this.funcs.aurigaEncoderMotorV2PosCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_encoder_motor_V2_pos
    },
    {
        "opcode": "auriga_encoder_motor_V2_minute",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/691650c47e644fbba335ba6a659298fb.svg', 'auriga_all')
            },
            "SWITCH": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "AURIGA_ENCODER_MOTOR_V2_MOTOR_SWITCH"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_ENCODER_MOTOR_V2_MOTOR_SLOT"
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
                "code": `encoderMotorV2_/*{SWITCH}*/_/*{SLOT}*/.getCurrentSpeed()`,
                "sections": {
                    "include": [
                        "\"src/MeEncoderMotorDriverV2.h\""
                    ],
                    "lib": this.funcs.aurigaEncoderMotorV2MinuteCodesLib,
                    "setup": this.funcs.aurigaEncoderMotorV2MinuteCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_encoder_motor_V2_minute
    },
    {
        "opcode": "auriga_encoder_motor_V2_angle",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/691650c47e644fbba335ba6a659298fb.svg', 'auriga_all')
            },
            "SWITCH": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "AURIGA_ENCODER_MOTOR_V2_MOTOR_SWITCH"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_ENCODER_MOTOR_V2_MOTOR_SLOT"
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
                "code": `encoderMotorV2_/*{SWITCH}*/_/*{SLOT}*/.getCurrentPosition()`,
                "sections": {
                    "include": [
                        "\"src/MeEncoderMotorDriverV2.h\""
                    ],
                    "lib": this.funcs.aurigaEncoderMotorV2AngleCodesLib,
                    "setup": this.funcs.aurigaEncoderMotorV2AngleCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_encoder_motor_V2_angle
    },
    {
        "opcode": "auriga_detect_pm25_sensor",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/0bce10cc9d524927ae9352fe4af6cb75.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_SERVO_PORT"
            },
            "OPTION": {
                "type": "fieldMenu",
                "defaultValue": "2",
                "menu": "AURIGA_DETECT_PM25_SENSOR_OPTION"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `getPMValue(myMePm25Sensor_/*{PORT}*/,/*{OPTION}*/)`,
                "sections": {
                    "lib": this.funcs.aurigaDetectPm25SensorCodesLib,
                    "declare": `uint16_t getPMValue(MePm25Sensor mePm25Sensor, int type)\r\n{\r\n    \tswitch(type)\r\n    \t{\r\n        \t\tcase 1:\r\n        \t\treturn mePm25Sensor.readPm1_0Concentration();\r\n        \t\t\tbreak;\r\n        \t\tcase 2:\r\n        \t\t\treturn mePm25Sensor.readPm2_5Concentration();\r\n        \t\t\t break;\r\n        \t\tcase 3:\r\n        \t\treturn mePm25Sensor.readPm10Concentration();\r\n        \t\t\tbreak;\r\n    \t}\r\n}`,
                    "setup": `myMePm25Sensor_/*{PORT}*/.begin(9600);`,
                    "_loop": `myMePm25Sensor_/*{PORT}*/.rxloop();`
                }
            }
        },
        "handler": this.funcs.auriga_detect_pm25_sensor
    },
    {
        "opcode": "BLOCK_1575275074292",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_RUN_ENCODER_MOTOR_PORT"
            },
            "DIRECT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1575275074292_DIRECT"
            },
            "DEGREE": {
                "type": "number",
                "defaultValue": 1000
            },
            "SPEED": {
                "type": "number",
                "defaultValue": 100
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1575275074292
    },
    {
        "opcode": "enhanced_encoder_motor_power",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/71164aaadc1843e9906c6ab38d84fc59.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_RUN_BOARD_ENCODER_MOTOR_PORT"
            },
            "POWER": {
                "type": "number",
                "defaultValue": 50
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.enhancedEncoderMotorPowerCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeEnhanceEncoderOnBoard.h\""
                    ],
                    "lib": this.funcs.enhancedEncoderMotorPowerCodesLib,
                    "declare": `void isr_process_enhance_encoder1(void){\r\n  if(digitalRead(EnhanceEncoder_1.getPortB()) == 0){\r\n    EnhanceEncoder_1.pulsePosMinus();\r\n  }else{\r\n    EnhanceEncoder_1.pulsePosPlus();\r\n  }\r\n}\r\nvoid isr_process_enhance_encoder2(void){\r\n  if(digitalRead(EnhanceEncoder_2.getPortB()) == 0)\r\n  {\r\n    EnhanceEncoder_2.pulsePosMinus();\r\n  }else{\r\n    EnhanceEncoder_2.pulsePosPlus();\r\n  }\r\n}`,
                    "setup": this.funcs.enhancedEncoderMotorPowerCodesSetup,
                    "_loop": `EnhanceEncoder_/*{PORT}*/.loop();`
                }
            }
        },
        "handler": this.funcs.enhanced_encoder_motor_power
    },
    {
        "opcode": "enhanced_encoder_motor_speed",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/186ffb9b72a044d6a9466f4dbc131a97.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_RUN_BOARD_ENCODER_MOTOR_PORT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `EnhanceEncoder_/*{PORT}*/.getCurrentSpeed()`,
                "sections": {
                    "include": [
                        "\"src/MeEnhanceEncoderOnBoard.h\""
                    ],
                    "lib": this.funcs.enhancedEncoderMotorSpeedCodesLib,
                    "declare": `void isr_process_enhance_encoder1(void){\r\n  if(digitalRead(EnhanceEncoder_1.getPortB()) == 0){\r\n    EnhanceEncoder_1.pulsePosMinus();\r\n  }else{\r\n    EnhanceEncoder_1.pulsePosPlus();\r\n  }\r\n}\r\nvoid isr_process_enhance_encoder2(void){\r\n  if(digitalRead(EnhanceEncoder_2.getPortB()) == 0)\r\n  {\r\n    EnhanceEncoder_2.pulsePosMinus();\r\n  }else{\r\n    EnhanceEncoder_2.pulsePosPlus();\r\n  }\r\n}`,
                    "setup": this.funcs.enhancedEncoderMotorSpeedCodesSetup,
                    "_loop": `EnhanceEncoder_/*{PORT}*/.loop();`
                }
            }
        },
        "handler": this.funcs.enhanced_encoder_motor_speed
    },
    {
        "opcode": "enhanced_encoder_motor_pos",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_all/imgs/679bd50af95b4932a3f416f6a7840151.svg', 'auriga_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_RUN_BOARD_ENCODER_MOTOR_PORT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `EnhanceEncoder_/*{PORT}*/.getCurPos()`,
                "sections": {
                    "include": [
                        "\"src/MeEnhanceEncoderOnBoard.h\""
                    ],
                    "lib": this.funcs.enhancedEncoderMotorPosCodesLib,
                    "declare": `void isr_process_enhance_encoder1(void){\r\n  if(digitalRead(EnhanceEncoder_1.getPortB()) == 0){\r\n    EnhanceEncoder_1.pulsePosMinus();\r\n  }else{\r\n    EnhanceEncoder_1.pulsePosPlus();\r\n  }\r\n}\r\nvoid isr_process_enhance_encoder2(void){\r\n  if(digitalRead(EnhanceEncoder_2.getPortB()) == 0)\r\n  {\r\n    EnhanceEncoder_2.pulsePosMinus();\r\n  }else{\r\n    EnhanceEncoder_2.pulsePosPlus();\r\n  }\r\n}`,
                    "setup": this.funcs.enhancedEncoderMotorPosCodesSetup,
                    "_loop": `EnhanceEncoder_/*{PORT}*/.loop();`
                }
            }
        },
        "handler": this.funcs.enhanced_encoder_motor_pos
    }
]);

export default blocks;