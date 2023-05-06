const blocks = (extFacePanels) => ([{
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
            "mblockweb"
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
        "opcode": "encoder_motor_pos",
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
            "mblockweb"
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
            "mblockweb"
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
            "mblockweb"
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
        "gap": 36,
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
            "mblockweb"
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
        "opcode": "hp_encoder_motor_power",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "SWITCH": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "HP_ENCODER_MOTOR_POWER_SWITCH"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "HP_ENCODER_MOTOR_POWER_SLOT"
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
                "code": this.funcs.hpEncoderMotorPowerCodesCode,
                "sections": {
                    "lib": this.funcs.hpEncoderMotorPowerCodesLib,
                    "setup": this.funcs.hpEncoderMotorPowerCodesSetup
                }
            }
        },
        "handler": this.funcs.hp_encoder_motor_power
    },
    {
        "opcode": "hp_encoder_motor_pos",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "SWITCH": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "HP_ENCODER_MOTOR_POWER_SWITCH"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "HP_ENCODER_MOTOR_POWER_SLOT"
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
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.hpEncoderMotorPosCodesCode,
                "sections": {
                    "lib": this.funcs.hpEncoderMotorPosCodesLib,
                    "setup": this.funcs.hpEncoderMotorPosCodesSetup
                }
            }
        },
        "handler": this.funcs.hp_encoder_motor_pos
    },
    {
        "opcode": "hp_encoder_motor_speed",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "SWITCH": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "HP_ENCODER_MOTOR_POWER_SWITCH"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "HP_ENCODER_MOTOR_POWER_SLOT"
            },
            "SPEED": {
                "type": "number",
                "defaultValue": 30
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.hpEncoderMotorSpeedCodesCode,
                "sections": {
                    "lib": this.funcs.hpEncoderMotorSpeedCodesLib,
                    "setup": this.funcs.hpEncoderMotorSpeedCodesSetup
                }
            }
        },
        "handler": this.funcs.hp_encoder_motor_speed
    },
    {
        "opcode": "hp_encoder_motor_get_speed",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "SWITCH": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "HP_ENCODER_MOTOR_POWER_SWITCH"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "HP_ENCODER_MOTOR_POWER_SLOT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `superMotor_/*{SWITCH}*/_/*{SLOT}*/.getCurrentSpeed()`,
                "sections": {
                    "lib": this.funcs.hpEncoderMotorGetSpeedCodesLib,
                    "setup": this.funcs.hpEncoderMotorGetSpeedCodesSetup
                }
            }
        },
        "handler": this.funcs.hp_encoder_motor_get_speed
    },
    {
        "opcode": "hp_encoder_motor_get_pos",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "SWITCH": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "HP_ENCODER_MOTOR_POWER_SWITCH"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "HP_ENCODER_MOTOR_POWER_SLOT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `superMotor_/*{SWITCH}*/_/*{SLOT}*/.getCurrentPosition()`,
                "sections": {
                    "lib": this.funcs.hpEncoderMotorGetPosCodesLib,
                    "setup": this.funcs.hpEncoderMotorGetPosCodesSetup
                }
            }
        },
        "handler": this.funcs.hp_encoder_motor_get_pos
    },
    {
        "opcode": "stepper_motor_pos",
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
                "defaultValue": 1800
            },
            "SPEED": {
                "type": "number",
                "defaultValue": 1000
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.stepperMotorPosCodesCode,
                "sections": {
                    "lib": this.funcs.stepperMotorPosCodesLib,
                    "setup": this.funcs.stepperMotorPosCodesSetup,
                    "_loop": `stepper_/*{PORT}*/.runSpeedToPosition();`
                }
            }
        },
        "handler": this.funcs.stepper_motor_pos
    },
    {
        "opcode": "enhanced_encoder_motor_power",
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
                    "declare": `void isr_process_enhance_encoder1(void){\r\n  if(digitalRead(EnhanceEncoder_1.getPortB()) == 0){\r\n    EnhanceEncoder_1.pulsePosMinus();\r\n  }else{\r\n    EnhanceEncoder_1.pulsePosPlus();\r\n  }\r\n}\r\nvoid isr_process_enhance_encoder2(void){\r\n  if(digitalRead(EnhanceEncoder_2.getPortB()) == 0)\r\n  {\r\n    EnhanceEncoder_2.pulsePosMinus();\r\n  }else{\r\n    EnhanceEncoder_2.pulsePosPlus();\r\n  }\r\n}\r\nvoid isr_process_enhance_encoder3(void){\r\n  if(digitalRead(EnhanceEncoder_3.getPortB()) == 0){\r\n    EnhanceEncoder_3.pulsePosMinus();\r\n  }else{\r\n    EnhanceEncoder_3.pulsePosPlus();\r\n  }\r\n}\r\nvoid isr_process_enhance_encoder4(void){\r\n  if(digitalRead(EnhanceEncoder_4.getPortB()) == 0){\r\n    EnhanceEncoder_4.pulsePosMinus();\r\n  }else{\r\n    EnhanceEncoder_4.pulsePosPlus();\r\n  }\r\n}`,
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
                    "declare": `void isr_process_enhance_encoder1(void){\r\n  if(digitalRead(EnhanceEncoder_1.getPortB()) == 0){\r\n    EnhanceEncoder_1.pulsePosMinus();\r\n  }else{\r\n    EnhanceEncoder_1.pulsePosPlus();\r\n  }\r\n}\r\nvoid isr_process_enhance_encoder2(void){\r\n  if(digitalRead(EnhanceEncoder_2.getPortB()) == 0)\r\n  {\r\n    EnhanceEncoder_2.pulsePosMinus();\r\n  }else{\r\n    EnhanceEncoder_2.pulsePosPlus();\r\n  }\r\n}\r\nvoid isr_process_enhance_encoder3(void){\r\n  if(digitalRead(EnhanceEncoder_3.getPortB()) == 0){\r\n    EnhanceEncoder_3.pulsePosMinus();\r\n  }else{\r\n    EnhanceEncoder_3.pulsePosPlus();\r\n  }\r\n}\r\nvoid isr_process_enhance_encoder4(void){\r\n  if(digitalRead(EnhanceEncoder_4.getPortB()) == 0){\r\n    EnhanceEncoder_4.pulsePosMinus();\r\n  }else{\r\n    EnhanceEncoder_4.pulsePosPlus();\r\n  }\r\n}`,
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
        "hidden": false,
        "gap": 36,
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
                    "declare": `void isr_process_enhance_encoder1(void){\r\n  if(digitalRead(EnhanceEncoder_1.getPortB()) == 0){\r\n    EnhanceEncoder_1.pulsePosMinus();\r\n  }else{\r\n    EnhanceEncoder_1.pulsePosPlus();\r\n  }\r\n}\r\nvoid isr_process_enhance_encoder2(void){\r\n  if(digitalRead(EnhanceEncoder_2.getPortB()) == 0)\r\n  {\r\n    EnhanceEncoder_2.pulsePosMinus();\r\n  }else{\r\n    EnhanceEncoder_2.pulsePosPlus();\r\n  }\r\n}\r\nvoid isr_process_enhance_encoder3(void){\r\n  if(digitalRead(EnhanceEncoder_3.getPortB()) == 0){\r\n    EnhanceEncoder_3.pulsePosMinus();\r\n  }else{\r\n    EnhanceEncoder_3.pulsePosPlus();\r\n  }\r\n}\r\nvoid isr_process_enhance_encoder4(void){\r\n  if(digitalRead(EnhanceEncoder_4.getPortB()) == 0){\r\n    EnhanceEncoder_4.pulsePosMinus();\r\n  }else{\r\n    EnhanceEncoder_4.pulsePosPlus();\r\n  }\r\n}`,
                    "setup": this.funcs.enhancedEncoderMotorPosCodesSetup,
                    "_loop": `EnhanceEncoder_/*{PORT}*/.loop();`
                }
            }
        },
        "handler": this.funcs.enhanced_encoder_motor_pos
    },
    {
        "opcode": "DCmotor_power_1",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
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
            "mblockweb"
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
        "opcode": "DCmotor_power_2",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "DCMOTOR_POWER_2_PORT"
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
                "code": this.funcs.dCmotorPower2CodesCode,
                "sections": {
                    "lib": this.funcs.dCmotorPower2CodesLib
                }
            }
        },
        "handler": this.funcs.DCmotor_power_2
    },
    {
        "opcode": "BLmotor_lock",
        "blockType": "command",
        "checkboxInFlyout": false,
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
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `bldcmotor_/*{PORT}*/.init();`,
                "sections": {
                    "lib": this.funcs.bLmotorLockCodesLib
                }
            }
        },
        "handler": this.funcs.BLmotor_lock
    },
    {
        "opcode": "BLmotor_power",
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
                "code": this.funcs.bLmotorPowerCodesCode,
                "sections": {
                    "lib": this.funcs.bLmotorPowerCodesLib
                }
            }
        },
        "handler": this.funcs.BLmotor_power
    },
    {
        "opcode": "BLOCK_1577092133273",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "INDEX": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1577092133273_INDEX"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `mysmartservo.setInitAngle(/*{INDEX}*/);`,
                "sections": {
                    "lib": this.funcs.block1577092133273CodesLib,
                    "setup": this.funcs.block1577092133273CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1577092133273
    },
    {
        "opcode": "BLOCK_1577092158156",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "INDEX": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1577092133273_INDEX"
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
                "code": this.funcs.block1577092158156CodesCode,
                "sections": {
                    "lib": this.funcs.block1577092158156CodesLib,
                    "setup": this.funcs.block1577092158156CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1577092158156
    },
    {
        "opcode": "BLOCK_1577092279792",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "INDEX": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1577092133273_INDEX"
            },
            "DEG": {
                "type": "number",
                "defaultValue": 180
            },
            "SPEED": {
                "type": "number",
                "defaultValue": 30
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.block1577092279792CodesCode,
                "sections": {
                    "lib": this.funcs.block1577092279792CodesLib,
                    "setup": this.funcs.block1577092279792CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1577092279792
    },
    {
        "opcode": "BLOCK_1577094190142",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "INDEX": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1577092133273_INDEX"
            },
            "DEG": {
                "type": "number",
                "defaultValue": 180
            },
            "SPEED": {
                "type": "number",
                "defaultValue": 30
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.block1577094190142CodesCode,
                "sections": {
                    "lib": this.funcs.block1577094190142CodesLib,
                    "setup": this.funcs.block1577094190142CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1577094190142
    },
    {
        "opcode": "BLOCK_1577094267367",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "INDEX": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1577092133273_INDEX"
            },
            "OPTION": {
                "type": "fieldMenu",
                "defaultValue": "2",
                "menu": "BLOCK_1577094267367_OPTION"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.block1577094267367CodesCode,
                "sections": {
                    "lib": this.funcs.block1577094267367CodesLib,
                    "setup": this.funcs.block1577094267367CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1577094267367
    },
    {
        "opcode": "valve_status_a",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "DCMOTOR_POWER_1_PORT"
            },
            "STATUS": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "VALVE_STATUS_A_STATUS"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `motor_/*{PORT}*/.run(/*{STATUS}*/);`,
                "sections": {
                    "lib": this.funcs.valveStatusACodesLib
                }
            }
        },
        "handler": this.funcs.valve_status_a
    },
    {
        "opcode": "valve_status_b",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "DCMOTOR_POWER_2_PORT"
            },
            "STATUS": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "VALVE_STATUS_A_STATUS"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `dcfourmotor_/*{PORT}*/.run(/*{STATUS}*/);`,
                "sections": {
                    "lib": this.funcs.valveStatusBCodesLib
                }
            }
        },
        "handler": this.funcs.valve_status_b
    },
    {
        "opcode": "small_fun",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "SEG7_SHOW_NUMBER_PORT"
            },
            "FAN_ROTATE": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "SMALL_FUN_FAN_ROTATE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `dc130_run(dc130_/*{PORT}*/,/*{FAN_ROTATE}*/);`,
                "sections": {
                    "lib": this.funcs.smallFunCodesLib,
                    "declare": `void dc130_run( MePort dc130, int8_t direction){\r\n    pinMode(dc130.pin1(),OUTPUT);\r\n    pinMode(dc130.pin2(),OUTPUT);\r\n    if( direction > 0)\r\n    {\r\n        digitalWrite(dc130.pin2(),0);\r\n        digitalWrite(dc130.pin1(),1);\r\n    }\r\n    else if( direction < 0)\r\n    {\r\n        digitalWrite(dc130.pin1(),0);\r\n        digitalWrite(dc130.pin2(),1);\r\n    }\r\n    else\r\n    {\r\n        digitalWrite(dc130.pin1(),0);\r\n        digitalWrite(dc130.pin2(),0);\r\n    }\r\n}`
                }
            }
        },
        "handler": this.funcs.small_fun
    }
]);

export default blocks;