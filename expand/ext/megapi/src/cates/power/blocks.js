const blocks = (extFacePanels) => ([{
        "opcode": "ultimate_forward_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi/imgs/33aa42191442410aab017e58650489fa.svg', 'megapi')
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
                "code": this.funcs.ultimateForwardTimeCodesCode,
                "sections": {
                    "declare": `void move(int direction, int speed){\r\n  int leftSpeed = 0;\r\n  int rightSpeed = 0;\r\n  if(direction == 1){\r\n    leftSpeed = -1 * speed;\r\n    rightSpeed = speed;\r\n  }else if(direction == 2){\r\n    leftSpeed = speed;\r\n    rightSpeed = -1 * speed;\r\n  }else if(direction == 3){\r\n    leftSpeed = speed;\r\n    rightSpeed = speed;\r\n  }else if(direction == 4){\r\n    leftSpeed = -1 * speed;\r\n    rightSpeed = -1 * speed;\r\n  }\r\n  Encoder_1.setTarPWM(rightSpeed);\r\n  Encoder_2.setTarPWM(leftSpeed);\r\n}`,
                    "setup": this.funcs.ultimateForwardTimeCodesSetup,
                    "_loop": `Encoder_1.loop();\r\nEncoder_2.loop();`
                }
            }
        },
        "handler": this.funcs.ultimate_forward_time
    },
    {
        "opcode": "ultimate_backward_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi/imgs/83e902a3a37a4258b7de7b8e39cbd38b.svg', 'megapi')
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
                "code": this.funcs.ultimateBackwardTimeCodesCode,
                "sections": {
                    "declare": `void move(int direction, int speed){\r\n  int leftSpeed = 0;\r\n  int rightSpeed = 0;\r\n  if(direction == 1){\r\n    leftSpeed = -1 * speed;\r\n    rightSpeed = speed;\r\n  }else if(direction == 2){\r\n    leftSpeed = speed;\r\n    rightSpeed = -1 * speed;\r\n  }else if(direction == 3){\r\n    leftSpeed = speed;\r\n    rightSpeed = speed;\r\n  }else if(direction == 4){\r\n    leftSpeed = -1 * speed;\r\n    rightSpeed = -1 * speed;\r\n  }\r\n  Encoder_1.setTarPWM(rightSpeed);\r\n  Encoder_2.setTarPWM(leftSpeed);\r\n}`,
                    "setup": this.funcs.ultimateBackwardTimeCodesSetup,
                    "_loop": `Encoder_1.loop();\r\nEncoder_2.loop();`
                }
            }
        },
        "handler": this.funcs.ultimate_backward_time
    },
    {
        "opcode": "ultimate_turnleft_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi/imgs/830534bf3a194b16b8db6d69ff547eb8.svg', 'megapi')
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
                "code": this.funcs.ultimateTurnleftTimeCodesCode,
                "sections": {
                    "declare": `void move(int direction, int speed){\r\n  int leftSpeed = 0;\r\n  int rightSpeed = 0;\r\n  if(direction == 1){\r\n    leftSpeed = -1 * speed;\r\n    rightSpeed = speed;\r\n  }else if(direction == 2){\r\n    leftSpeed = speed;\r\n    rightSpeed = -1 * speed;\r\n  }else if(direction == 3){\r\n    leftSpeed = speed;\r\n    rightSpeed = speed;\r\n  }else if(direction == 4){\r\n    leftSpeed = -1 * speed;\r\n    rightSpeed = -1 * speed;\r\n  }\r\n  Encoder_1.setTarPWM(rightSpeed);\r\n  Encoder_2.setTarPWM(leftSpeed);\r\n}`,
                    "setup": this.funcs.ultimateTurnleftTimeCodesSetup,
                    "_loop": `Encoder_1.loop();\r\nEncoder_2.loop();`
                }
            }
        },
        "handler": this.funcs.ultimate_turnleft_time
    },
    {
        "opcode": "ultimate_turnright_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi/imgs/fa59bde1df12472481a1af499f5d090a.svg', 'megapi')
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
                "code": this.funcs.ultimateTurnrightTimeCodesCode,
                "sections": {
                    "declare": `void move(int direction, int speed){\r\n  int leftSpeed = 0;\r\n  int rightSpeed = 0;\r\n  if(direction == 1){\r\n    leftSpeed = -1 * speed;\r\n    rightSpeed = speed;\r\n  }else if(direction == 2){\r\n    leftSpeed = speed;\r\n    rightSpeed = -1 * speed;\r\n  }else if(direction == 3){\r\n    leftSpeed = speed;\r\n    rightSpeed = speed;\r\n  }else if(direction == 4){\r\n    leftSpeed = -1 * speed;\r\n    rightSpeed = -1 * speed;\r\n  }\r\n  Encoder_1.setTarPWM(rightSpeed);\r\n  Encoder_2.setTarPWM(leftSpeed);\r\n}`,
                    "setup": this.funcs.ultimateTurnrightTimeCodesSetup,
                    "_loop": `Encoder_1.loop();\r\nEncoder_2.loop();`
                }
            }
        },
        "handler": this.funcs.ultimate_turnright_time
    },
    {
        "opcode": "ultimate_move",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi/imgs/328b88aaedeb42d6ac310bc4d52b872c.svg', 'megapi')
            },
            "MOVE_DIRECTION": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "ULTIMATE_MOVE_MOVE_DIRECTION"
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
                "code": this.funcs.ultimateMoveCodesCode,
                "sections": {
                    "declare": `void move(int direction, int speed){\r\n  int leftSpeed = 0;\r\n  int rightSpeed = 0;\r\n  if(direction == 1){\r\n    leftSpeed = -1 * speed;\r\n    rightSpeed = speed;\r\n  }else if(direction == 2){\r\n    leftSpeed = speed;\r\n    rightSpeed = -1 * speed;\r\n  }else if(direction == 3){\r\n    leftSpeed = speed;\r\n    rightSpeed = speed;\r\n  }else if(direction == 4){\r\n    leftSpeed = -1 * speed;\r\n    rightSpeed = -1 * speed;\r\n  }\r\n  Encoder_1.setTarPWM(rightSpeed);\r\n  Encoder_2.setTarPWM(leftSpeed);\r\n}`,
                    "setup": this.funcs.ultimateMoveCodesSetup,
                    "_loop": `Encoder_1.loop();\r\nEncoder_2.loop();`
                }
            }
        },
        "handler": this.funcs.ultimate_move
    },
    {
        "opcode": "ultimate_move_wheel_speed",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi/imgs/dbb86d8bc1204fadbf10c3ad33c1ebc6.svg', 'megapi')
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
                "code": this.funcs.ultimateMoveWheelSpeedCodesCode,
                "sections": {
                    "setup": this.funcs.ultimateMoveWheelSpeedCodesSetup,
                    "_loop": `Encoder_1.loop();\r\nEncoder_2.loop();`
                }
            }
        },
        "handler": this.funcs.ultimate_move_wheel_speed
    },
    {
        "opcode": "ultimate_move_stop",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi/imgs/12fe6a5b9aca4fe496a604d1dc6acb01.svg', 'megapi')
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
                "code": `Encoder_1.setTarPWM(0);\r\nEncoder_2.setTarPWM(0);`,
                "sections": {
                    "setup": this.funcs.ultimateMoveStopCodesSetup,
                    "_loop": `Encoder_1.loop();\r\nEncoder_2.loop();`
                }
            }
        },
        "handler": this.funcs.ultimate_move_stop
    },
    {
        "opcode": "DCmotor_power_1",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "DCMOTOR_POWER_1_PORT"
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
                "code": this.funcs.dCmotorPower1CodesCode,
                "sections": {
                    "lib": this.funcs.dCmotorPower1CodesLib
                }
            }
        },
        "handler": this.funcs.DCmotor_power_1
    },
    {
        "opcode": "encoder_motor_power",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "ENCODER_MOTOR_POWER_PORT"
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
                "code": this.funcs.encoderMotorPowerCodesCode,
                "sections": {
                    "setup": this.funcs.encoderMotorPowerCodesSetup,
                    "_loop": `Encoder_/*{PORT}*/.loop();`
                }
            }
        },
        "handler": this.funcs.encoder_motor_power
    },
    {
        "opcode": "encoder_motor_speed",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "ENCODER_MOTOR_POWER_PORT"
            },
            "SPEED": {
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
                "code": this.funcs.encoderMotorSpeedCodesCode,
                "sections": {
                    "setup": this.funcs.encoderMotorSpeedCodesSetup,
                    "_loop": `Encoder_/*{PORT}*/.loop();`
                }
            }
        },
        "handler": this.funcs.encoder_motor_speed
    },
    {
        "opcode": "encoder_motor_pos",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "ENCODER_MOTOR_POWER_PORT"
            },
            "DEG": {
                "type": "number",
                "defaultValue": 360
            },
            "SPEED": {
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
                "code": this.funcs.encoderMotorPosCodesCode,
                "sections": {
                    "setup": this.funcs.encoderMotorPosCodesSetup,
                    "_loop": `Encoder_/*{PORT}*/.loop();`
                }
            }
        },
        "handler": this.funcs.encoder_motor_pos
    },
    {
        "opcode": "run_stepper_motor_pos",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "ENCODER_MOTOR_POWER_PORT"
            },
            "STEP": {
                "type": "number",
                "defaultValue": 100
            },
            "SPEED": {
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
                "code": this.funcs.runStepperMotorPosCodesCode,
                "sections": {
                    "lib": this.funcs.runStepperMotorPosCodesLib,
                    "setup": this.funcs.runStepperMotorPosCodesSetup,
                    "_loop": `stepper_/*{PORT}*/.runSpeedToPosition();`
                }
            }
        },
        "handler": this.funcs.run_stepper_motor_pos
    }
]);

export default blocks;