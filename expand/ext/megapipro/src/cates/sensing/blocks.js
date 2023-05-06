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
                "menu": "SEG7_SHOW_NUMBER_PORT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
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
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "SEG7_SHOW_NUMBER_PORT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
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
        "opcode": "color_sensor_read",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "SEG7_SHOW_NUMBER_PORT"
            },
            "COLOR": {
                "type": "fieldMenu",
                "defaultValue": "R",
                "menu": "COLOR_SENSOR_READ_COLOR"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `getSingleColorValue(colorsensor_/*{PORT}*/,/*{COLOR}*/)`,
                "sections": {
                    "include": [
                        "\"MeColorSensor.h\""
                    ],
                    "lib": this.funcs.colorSensorReadCodesLib,
                    "declare": `uint16_t getSingleColorValue(MeColorSensor colorSensor,uint8_t colorType){\r\n  long rgbcode = 0;\r\n  colorSensor.ColorDataRead();\r\n  if(colorType < 3){\r\n    rgbcode = colorSensor.ReturnColorCode();\r\n    switch(colorType){\r\n      case 0: return (uint8_t)(rgbcode>>16);\r\n      case 1: return (uint8_t)(rgbcode>>8);\r\n      case 2: return (uint8_t)rgbcode;\r\n      default: return 0;\r\n    }\r\n  }else if(colorType==3){\r\n    return colorSensor.ReturnGrayscale();\r\n  }else{\r\n    return 0;\r\n  }\r\n}`,
                    "setup": this.funcs.colorSensorReadCodesSetup
                }
            }
        },
        "handler": this.funcs.color_sensor_read
    },
    {
        "opcode": "color_sensor_color_detected",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "SEG7_SHOW_NUMBER_PORT"
            },
            "COLOR": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "COLOR_SENSOR_COLOR_DETECTED_COLOR"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `detectedColor(colorsensor_/*{PORT}*/,/*{COLOR}*/)`,
                "sections": {
                    "include": [
                        "\"MeColorSensor.h\""
                    ],
                    "lib": this.funcs.colorSensorColorDetectedCodesLib,
                    "declare": `uint8_t detectedColor(MeColorSensor colorSensor,uint8_t colorType){\r\n  if(colorType==colorSensor.Returnresult()){\r\n    return 1;\r\n  }\r\n  return 0;\r\n}`,
                    "setup": this.funcs.colorSensorColorDetectedCodesSetup
                }
            }
        },
        "handler": this.funcs.color_sensor_color_detected
    },
    {
        "opcode": "joystick",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "SEG7_SHOW_NUMBER_PORT"
            },
            "AXIS_X_Y": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "JOYSTICK_AXIS_X_Y"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `joystick_/*{PORT}*/.read(/*{AXIS_X_Y}*/)`,
                "sections": {
                    "lib": this.funcs.joystickCodesLib
                }
            }
        },
        "handler": this.funcs.joystick
    },
    {
        "opcode": "button_pressed",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "SEG7_SHOW_NUMBER_PORT"
            },
            "FOUR_KEY": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BUTTON_PRESSED_FOUR_KEY"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `(buttonSensor_/*{PORT}*/.pressed() == /*{FOUR_KEY}*/)`,
                "sections": {
                    "lib": this.funcs.buttonPressedCodesLib,
                    "_loop": `buttonSensor_/*{PORT}*/.pressed();`
                }
            }
        },
        "handler": this.funcs.button_pressed
    },
    {
        "opcode": "touch_sensor_touch_detected",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "SEG7_SHOW_NUMBER_PORT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `touchSensor_/*{PORT}*/.touched()`,
                "sections": {
                    "lib": this.funcs.touchSensorTouchDetectedCodesLib
                }
            }
        },
        "handler": this.funcs.touch_sensor_touch_detected
    },
    {
        "opcode": "pointmeter",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "SEG7_SHOW_NUMBER_PORT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `potentiometer_/*{PORT}*/.read()`,
                "sections": {
                    "lib": this.funcs.pointmeterCodesLib
                }
            }
        },
        "handler": this.funcs.pointmeter
    },
    {
        "opcode": "limitswitch_read",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "SEG7_SHOW_NUMBER_PORT"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "LED_STRIP_SET_COLOR_SLOT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `sw_/*{PORT}*/_/*{SLOT}*/.touched()`,
                "sections": {
                    "lib": this.funcs.limitswitchReadCodesLib
                }
            }
        },
        "handler": this.funcs.limitswitch_read
    },
    {
        "opcode": "light_sensor_read",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "SEG7_SHOW_NUMBER_PORT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `lightsensor_/*{PORT}*/.read()`,
                "sections": {
                    "lib": this.funcs.lightSensorReadCodesLib
                }
            }
        },
        "handler": this.funcs.light_sensor_read
    },
    {
        "opcode": "light_sensor",
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
            "STATUS": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "LIGHT_SENSOR_STATUS"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `lightsensor_/*{PORT}*/.dWrite1(/*{STATUS}*/);`,
                "sections": {
                    "lib": this.funcs.lightSensorCodesLib
                }
            }
        },
        "handler": this.funcs.light_sensor
    },
    {
        "opcode": "soundsensor_read",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "SEG7_SHOW_NUMBER_PORT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `soundsensor_/*{PORT}*/.strength()`,
                "sections": {
                    "lib": this.funcs.soundsensorReadCodesLib
                }
            }
        },
        "handler": this.funcs.soundsensor_read
    },
    {
        "opcode": "IRsensor_read",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "7",
                "menu": "IRSENSOR_READ_PORT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `ir_/*{PORT}*/.getCode()`,
                "sections": {
                    "lib": this.funcs.iRsensorReadCodesLib,
                    "setup": this.funcs.iRsensorReadCodesSetup,
                    "_loop": `ir_/*{PORT}*/.loop();`
                }
            }
        },
        "handler": this.funcs.IRsensor_read
    },
    {
        "opcode": "humanIR_read",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "SEG7_SHOW_NUMBER_PORT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `pir_/*{PORT}*/.isHumanDetected()`,
                "sections": {
                    "lib": this.funcs.humanIrReadCodesLib
                }
            }
        },
        "handler": this.funcs.humanIR_read
    },
    {
        "opcode": "tempsensor_read",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "SEG7_SHOW_NUMBER_PORT"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "LED_STRIP_SET_COLOR_SLOT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `temperature_/*{PORT}*/_/*{SLOT}*/.temperature()`,
                "sections": {
                    "lib": this.funcs.tempsensorReadCodesLib
                }
            }
        },
        "handler": this.funcs.tempsensor_read
    },
    {
        "opcode": "temp_moisture_sensor_read",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "SEG7_SHOW_NUMBER_PORT"
            },
            "TEMP_HUMITURE": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "TEMP_MOISTURE_SENSOR_READ_TEMP_HUMITURE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `humiture_/*{PORT}*/.getValue(/*{TEMP_HUMITURE}*/)`,
                "sections": {
                    "lib": this.funcs.tempMoistureSensorReadCodesLib,
                    "_loop": `humiture_/*{PORT}*/.update();`
                }
            }
        },
        "handler": this.funcs.temp_moisture_sensor_read
    },
    {
        "opcode": "firesensor_read",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "SEG7_SHOW_NUMBER_PORT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `flameSensor_/*{PORT}*/.readAnalog()`,
                "sections": {
                    "lib": this.funcs.firesensorReadCodesLib
                }
            }
        },
        "handler": this.funcs.firesensor_read
    },
    {
        "opcode": "gassensor_read",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "SEG7_SHOW_NUMBER_PORT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `gasSensor_/*{PORT}*/.readAnalog()`,
                "sections": {
                    "lib": this.funcs.gassensorReadCodesLib
                }
            }
        },
        "handler": this.funcs.gassensor_read
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
            "mblockweb"
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
        "opcode": "magsensor_read",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "SEG7_SHOW_NUMBER_PORT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `compass_/*{PORT}*/.getAngle()`,
                "sections": {
                    "lib": this.funcs.magsensorReadCodesLib,
                    "setup": this.funcs.magsensorReadCodesSetup
                }
            }
        },
        "handler": this.funcs.magsensor_read
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
                "menu": "SEG7_SHOW_NUMBER_PORT"
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
            "mblockweb"
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
    }
]);

export default blocks;