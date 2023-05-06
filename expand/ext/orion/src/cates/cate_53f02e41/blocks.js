const blocks = (extFacePanels) => ([{
        "opcode": "runLightsensor",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "lightPorts": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "RUNLIGHTSENSOR_LIGHTPORTS"
            },
            "switch": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "RUNLIGHTSENSOR_SWITCH"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `lightsensor_/*{lightPorts}*/.dWrite1(/*{switch}*/);`,
                "sections": {
                    "declare": this.funcs.runLightsensorCodesDeclare
                }
            }
        },
        "handler": this.funcs.runLightsensor
    },
    {
        "opcode": "getLightsensor",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "laport": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "GETLIGHTSENSOR_LAPORT"
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
                "code": `lightsensor_/*{laport}*/.read()`,
                "sections": {
                    "lib": this.funcs.getLightsensorCodesLib
                }
            }
        },
        "handler": this.funcs.getLightsensor
    },
    {
        "opcode": "getInfrared",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "bluePorts": {
                "type": "fieldMenu",
                "defaultValue": "3",
                "menu": "RUNSEVSEG_BLUEPORTS"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `ir_/*{bluePorts}*/.getCode()`,
                "sections": {
                    "lib": this.funcs.getInfraredCodesLib,
                    "setup": this.funcs.getInfraredCodesSetup,
                    "_loop": `ir_/*{bluePorts}*/.loop();`
                }
            }
        },
        "handler": this.funcs.getInfrared
    },
    {
        "opcode": "getPirmotion",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "bluePorts": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "RUNSEVSEG_BLUEPORTS"
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
                "code": `pir_/*{bluePorts}*/.isHumanDetected()`,
                "sections": {
                    "lib": this.funcs.getPirmotionCodesLib
                }
            }
        },
        "handler": this.funcs.getPirmotion
    },
    {
        "opcode": "getTemperature",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "normalPort": {
                "type": "fieldMenu",
                "defaultValue": "3",
                "menu": "RUNLED_LPORT"
            },
            "slot": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1569572294998_SLOT"
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
                "code": `temperature_/*{normalPort}*/_/*{slot}*/.temperature()`,
                "sections": {
                    "lib": this.funcs.getTemperatureCodesLib
                }
            }
        },
        "handler": this.funcs.getTemperature
    },
    {
        "opcode": "getHumiture",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "normalPort": {
                "type": "fieldMenu",
                "defaultValue": "3",
                "menu": "RUNLED_LPORT"
            },
            "humiture": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "GETHUMITURE_HUMITURE"
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
                "code": `humiture_/*{normalPort}*/.getValue(/*{humiture}*/)`,
                "sections": {
                    "lib": this.funcs.getHumitureCodesLib,
                    "_loop": `humiture_/*{normalPort}*/.update();`
                }
            }
        },
        "handler": this.funcs.getHumiture
    },
    {
        "opcode": "getUltrasonic",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "whitePorts": {
                "type": "fieldMenu",
                "defaultValue": "3",
                "menu": "RUNLED_LPORT"
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
                "code": `ultrasonic_/*{whitePorts}*/.distanceCm()`,
                "sections": {
                    "lib": this.funcs.getUltrasonicCodesLib
                }
            }
        },
        "handler": this.funcs.getUltrasonic
    },
    {
        "opcode": "getLinefollower",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "bluePorts": {
                "type": "fieldMenu",
                "defaultValue": "3",
                "menu": "RUNSEVSEG_BLUEPORTS"
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
                "code": `linefollower_/*{bluePorts}*/.readSensors()`,
                "sections": {
                    "lib": this.funcs.getLinefollowerCodesLib
                }
            }
        },
        "handler": this.funcs.getLinefollower
    },
    {
        "opcode": "getJoystick",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "blackPorts": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "GETLIGHTSENSOR_LAPORT"
            },
            "Axis": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "GETJOYSTICK_AXIS"
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
                "code": `joystick_/*{blackPorts}*/.read(/*{Axis}*/)`,
                "sections": {
                    "lib": this.funcs.getJoystickCodesLib
                }
            }
        },
        "handler": this.funcs.getJoystick
    },
    {
        "opcode": "getPotentiometer",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "blackPorts": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "GETLIGHTSENSOR_LAPORT"
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
                "code": `potentiometer_/*{blackPorts}*/.read()`,
                "sections": {
                    "lib": this.funcs.getPotentiometerCodesLib
                }
            }
        },
        "handler": this.funcs.getPotentiometer
    },
    {
        "opcode": "getSoundsensor",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "soundPort": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "GETLIGHTSENSOR_LAPORT"
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
                "code": `soundsensor_/*{soundPort}*/.strength()`,
                "sections": {
                    "lib": this.funcs.getSoundsensorCodesLib
                }
            }
        },
        "handler": this.funcs.getSoundsensor
    },
    {
        "opcode": "getLimitswitch",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "normalPort": {
                "type": "fieldMenu",
                "defaultValue": "3",
                "menu": "RUNLED_LPORT"
            },
            "slot": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1569572294998_SLOT"
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
                "code": `sw_/*{normalPort}*/_/*{slot}*/.touched()`,
                "sections": {
                    "lib": this.funcs.getLimitswitchCodesLib
                }
            }
        },
        "handler": this.funcs.getLimitswitch
    },
    {
        "opcode": "gyro_sesor_read",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "GyroAxis": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "GYRO_SESOR_READ_GYROAXIS"
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
                "code": `gyro_1.getAngle(/*{GyroAxis}*/)`,
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
        "opcode": "getFlame",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "blackPorts": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "GETLIGHTSENSOR_LAPORT"
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
                "code": `flameSensor_/*{blackPorts}*/.readAnalog()`,
                "sections": {
                    "lib": this.funcs.getFlameCodesLib
                }
            }
        },
        "handler": this.funcs.getFlame
    },
    {
        "opcode": "getGas",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "blackPorts": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "GETLIGHTSENSOR_LAPORT"
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
                "code": `gasSensor_/*{blackPorts}*/.readAnalog()`,
                "sections": {
                    "lib": this.funcs.getGasCodesLib
                }
            }
        },
        "handler": this.funcs.getGas
    },
    {
        "opcode": "getTouchSensor",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "bluePorts": {
                "type": "fieldMenu",
                "defaultValue": "3",
                "menu": "RUNSEVSEG_BLUEPORTS"
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
                "code": `touchSensor_/*{bluePorts}*/.touched()`,
                "sections": {
                    "lib": this.funcs.getTouchSensorCodesLib
                }
            }
        },
        "handler": this.funcs.getTouchSensor
    },
    {
        "opcode": "getButton",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "blackPorts": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "GETLIGHTSENSOR_LAPORT"
            },
            "button_key": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "GETBUTTON_BUTTON_KEY"
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
                "code": `(buttonSensor_/*{blackPorts}*/.pressed() == /*{button_key}*/)`,
                "sections": {
                    "lib": this.funcs.getButtonCodesLib,
                    "_loop": `buttonSensor_/*{blackPorts}*/.pressed();`
                }
            }
        },
        "handler": this.funcs.getButton
    },
    {
        "opcode": "getTimer",
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
                    "lib": this.funcs.getTimerCodesLib,
                    "declare": this.funcs.getTimerCodesDeclare
                }
            }
        },
        "handler": this.funcs.getTimer
    },
    {
        "opcode": "resetTimer",
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
                "code": `lastTime = millis() / 1000.0;`,
                "sections": {
                    "lib": this.funcs.resetTimerCodesLib
                }
            }
        },
        "handler": this.funcs.resetTimer
    }
]);

export default blocks;