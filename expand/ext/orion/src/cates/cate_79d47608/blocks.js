const blocks = (extFacePanels) => ([{
        "opcode": "runMotor",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "motorPort": {
                "type": "fieldMenu",
                "defaultValue": "9",
                "menu": "RUNMOTOR_MOTORPORT"
            },
            "direction": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "RUNMOTOR_DIRECTION"
            },
            "motorvalue": {
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
                "code": this.funcs.runMotorCodesCode,
                "sections": {
                    "declare": this.funcs.runMotorCodesDeclare
                }
            }
        },
        "handler": this.funcs.runMotor
    },
    {
        "opcode": "runDcMotor",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "motorPort": {
                "type": "fieldMenu",
                "defaultValue": "9",
                "menu": "RUNMOTOR_MOTORPORT"
            },
            "direction": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "RUNDCMOTOR_DIRECTION"
            },
            "motorvalue": {
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
                "code": this.funcs.runDcMotorCodesCode,
                "sections": {
                    "lib": this.funcs.runDcMotorCodesLib
                }
            }
        },
        "handler": this.funcs.runDcMotor
    },
    {
        "opcode": "runDcMotor_1",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "motorPort": {
                "type": "fieldMenu",
                "defaultValue": "9",
                "menu": "RUNDCMOTOR_1_MOTORPORT"
            },
            "direction": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "RUNDCMOTOR_DIRECTION"
            },
            "motorvalue": {
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
                "code": this.funcs.runDcMotor1CodesCode,
                "sections": {
                    "lib": this.funcs.runDcMotor1CodesLib
                }
            }
        },
        "handler": this.funcs.runDcMotor_1
    },
    {
        "opcode": "runServo",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "servoPort": {
                "type": "fieldMenu",
                "defaultValue": "3",
                "menu": "RUNLED_LPORT"
            },
            "slot": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1569572294998_SLOT"
            },
            "angle": {
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
                "code": this.funcs.runServoCodesCode,
                "sections": {
                    "lib": this.funcs.runServoCodesLib,
                    "setup": this.funcs.runServoCodesSetup
                }
            }
        },
        "handler": this.funcs.runServo
    },
    {
        "opcode": "runStepperMotor",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "exMotorPort": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "RUNSTEPPERMOTOR_EXMOTORPORT"
            },
            "direction": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "RUNMOTOR_DIRECTION"
            },
            "distance": {
                "type": "number",
                "defaultValue": 100
            },
            "stepperSpeed": {
                "type": "number",
                "defaultValue": 3000
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.runStepperMotorCodesCode,
                "sections": {
                    "declare": this.funcs.runStepperMotorCodesDeclare,
                    "_loop": `stepper_/*{exMotorPort}*/.runSpeedToPosition();`
                }
            }
        },
        "handler": this.funcs.runStepperMotor
    },
    {
        "opcode": "runStepperMotor_1",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "port": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "RUNSTEPPERMOTOR_EXMOTORPORT"
            },
            "direction": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "RUNDCMOTOR_DIRECTION"
            },
            "step": {
                "type": "number",
                "defaultValue": 100
            },
            "speed": {
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
                "code": this.funcs.runStepperMotor1CodesCode,
                "sections": {
                    "lib": this.funcs.runStepperMotor1CodesLib,
                    "_loop": `stepper_/*{port}*/.runSpeedToPosition();`
                }
            }
        },
        "handler": this.funcs.runStepperMotor_1
    },
    {
        "opcode": "runEncoderMotor",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "exMotorPort": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "RUNSTEPPERMOTOR_EXMOTORPORT"
            },
            "slot": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1569572294998_SLOT"
            },
            "direction": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "RUNMOTOR_DIRECTION"
            },
            "args0": {
                "type": "number",
                "defaultValue": 1000
            },
            "encoderSpeed": {
                "type": "number",
                "defaultValue": 100
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.runEncoderMotorCodesCode,
                "sections": {
                    "declare": this.funcs.runEncoderMotorCodesDeclare,
                    "setup": `encoder_/*{exMotorPort}*/_/*{slot}*/.begin();\nencoder_/*{exMotorPort}*/_/*{slot}*/.runSpeed(0);`
                }
            }
        },
        "handler": this.funcs.runEncoderMotor
    },
    {
        "opcode": "runEncoderMotor_1",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "exMotorPort": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "RUNSTEPPERMOTOR_EXMOTORPORT"
            },
            "slot": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1569572294998_SLOT"
            },
            "direction": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "RUNDCMOTOR_DIRECTION"
            },
            "args0": {
                "type": "number",
                "defaultValue": 1000
            },
            "encoderSpeed": {
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
                "code": this.funcs.runEncoderMotor1CodesCode,
                "sections": {
                    "lib": this.funcs.runEncoderMotor1CodesLib,
                    "setup": `encoder_/*{exMotorPort}*/_/*{slot}*/.begin();\nencoder_/*{exMotorPort}*/_/*{slot}*/.runSpeed(0);`
                }
            }
        },
        "handler": this.funcs.runEncoderMotor_1
    },
    {
        "opcode": "runShutter",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "bluePorts": {
                "type": "fieldMenu",
                "defaultValue": "3",
                "menu": "RUNSEVSEG_BLUEPORTS"
            },
            "shutter": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "RUNSHUTTER_SHUTTER"
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
                "code": `shutter_/*{bluePorts}*/.setState(/*{shutter}*/);`,
                "sections": {
                    "lib": this.funcs.runShutterCodesLib
                }
            }
        },
        "handler": this.funcs.runShutter
    },
    {
        "opcode": "runFan",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fanPorts": {
                "type": "fieldMenu",
                "defaultValue": "3",
                "menu": "RUNSEVSEG_BLUEPORTS"
            },
            "fan": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "RUNFAN_FAN"
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
                "code": `dc130_run(dc130_/*{fanPorts}*/, /*{fan}*/);`,
                "sections": {
                    "lib": this.funcs.runFanCodesLib,
                    "declare": this.funcs.runFanCodesDeclare
                }
            }
        },
        "handler": this.funcs.runFan
    }
]);

export default blocks;