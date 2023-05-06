const blocks = (extFacePanels) => ([{
        "opcode": "uno_shield_set_motor_power",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "UNO_SHIELD_SET_MOTOR_POWER_PORT"
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
                "code": this.funcs.unoShieldSetMotorPowerCodesCode,
                "sections": {
                    "include": [
                        "<MeShield.h>"
                    ],
                    "declare": this.funcs.unoShieldSetMotorPowerCodesDeclare
                }
            }
        },
        "handler": this.funcs.uno_shield_set_motor_power
    },
    {
        "opcode": "uno_shield_set_server_angle",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "inputMenu",
                "defaultValue": "3",
                "menu": "UNO_SHIELD_SET_SERVER_ANGLE_PORT"
            },
            "SLOT": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "UNO_SHIELD_SET_SERVER_ANGLE_SLOT"
            },
            "DEGREE": {
                "type": "number",
                "defaultValue": 90
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.unoShieldSetServerAngleCodesCode,
                "sections": {
                    "include": [
                        "<MeShield.h>"
                    ],
                    "declare": this.funcs.unoShieldSetServerAngleCodesDeclare,
                    "setup": this.funcs.unoShieldSetServerAngleCodesSetup
                }
            }
        },
        "handler": this.funcs.uno_shield_set_server_angle
    },
    {
        "opcode": "uno_shield_stepper_motor_pos",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "UNO_SHIELD_SET_MOTOR_POWER_PORT"
            },
            "SPEED": {
                "type": "number",
                "defaultValue": 1800
            },
            "STEP": {
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
                "code": this.funcs.unoShieldStepperMotorPosCodesCode,
                "sections": {
                    "include": [
                        "<MeShield.h>"
                    ],
                    "declare": this.funcs.unoShieldStepperMotorPosCodesDeclare,
                    "_loop": `stepper_/*{PORT}*/.runSpeedToPosition();`
                }
            }
        },
        "handler": this.funcs.uno_shield_stepper_motor_pos
    },
    {
        "opcode": "uno_shield_run_encoder_motor",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "UNO_SHIELD_SET_MOTOR_POWER_PORT"
            },
            "SLOT": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "UNO_SHIELD_SET_SERVER_ANGLE_SLOT"
            },
            "POWER": {
                "type": "number",
                "defaultValue": 50
            },
            "DEGREE": {
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
                "code": this.funcs.unoShieldRunEncoderMotorCodesCode,
                "sections": {
                    "include": [
                        "<MeShield.h>"
                    ],
                    "declare": this.funcs.unoShieldRunEncoderMotorCodesDeclare,
                    "setup": this.funcs.unoShieldRunEncoderMotorCodesSetup
                }
            }
        },
        "handler": this.funcs.uno_shield_run_encoder_motor
    },
    {
        "opcode": "uno_shield_show_7segments_number",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "inputMenu",
                "defaultValue": "3",
                "menu": "UNO_SHIELD_SHOW_7SEGMENTS_NUMBER_PORT"
            },
            "NUMBER": {
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
                "code": this.funcs.unoShieldShow7SegmentsNumberCodesCode,
                "sections": {
                    "include": [
                        "<MeShield.h>"
                    ],
                    "declare": this.funcs.unoShieldShow7SegmentsNumberCodesDeclare
                }
            }
        },
        "handler": this.funcs.uno_shield_show_7segments_number
    },
    {
        "opcode": "uno_shield_show_external_led_rgb",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "inputMenu",
                "defaultValue": "3",
                "menu": "UNO_SHIELD_SET_SERVER_ANGLE_PORT"
            },
            "LED_POSTION": {
                "type": "inputMenu",
                "defaultValue": "0",
                "menu": "UNO_SHIELD_SHOW_EXTERNAL_LED_RGB_LED_POSTION"
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
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.unoShieldShowExternalLedRgbCodesCode,
                "sections": {
                    "include": [
                        "<MeShield.h>"
                    ],
                    "declare": this.funcs.unoShieldShowExternalLedRgbCodesDeclare,
                    "setup": this.funcs.unoShieldShowExternalLedRgbCodesSetup
                }
            }
        },
        "handler": this.funcs.uno_shield_show_external_led_rgb
    },
    {
        "opcode": "uno_shield_show_ledstrip_rbg",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "inputMenu",
                "defaultValue": "3",
                "menu": "UNO_SHIELD_SET_SERVER_ANGLE_PORT"
            },
            "SLOT": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "UNO_SHIELD_SET_SERVER_ANGLE_SLOT"
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
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.unoShieldShowLedstripRbgCodesCode,
                "sections": {
                    "include": [
                        "<MeShield.h>"
                    ],
                    "declare": this.funcs.unoShieldShowLedstripRbgCodesDeclare,
                    "setup": this.funcs.unoShieldShowLedstripRbgCodesSetup
                }
            }
        },
        "handler": this.funcs.uno_shield_show_ledstrip_rbg
    },
    {
        "opcode": "uno_shield_set_light_sensor_led",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "inputMenu",
                "defaultValue": "7",
                "menu": "UNO_SHIELD_SET_LIGHT_SENSOR_LED_PORT"
            },
            "STATUS": {
                "type": "inputMenu",
                "defaultValue": "0",
                "menu": "UNO_SHIELD_SET_LIGHT_SENSOR_LED_STATUS"
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
                    "include": [
                        "<MeShield.h>"
                    ],
                    "declare": this.funcs.unoShieldSetLightSensorLedCodesDeclare
                }
            }
        },
        "handler": this.funcs.uno_shield_set_light_sensor_led
    },
    {
        "opcode": "uno_shield_shutter_set_fun",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "inputMenu",
                "defaultValue": "3",
                "menu": "UNO_SHIELD_SHOW_7SEGMENTS_NUMBER_PORT"
            },
            "SHUTTER_ACTION": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "UNO_SHIELD_SHUTTER_SET_FUN_SHUTTER_ACTION"
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
                    "include": [
                        "<MeShield.h>"
                    ],
                    "declare": this.funcs.unoShieldShutterSetFunCodesDeclare
                }
            }
        },
        "handler": this.funcs.uno_shield_shutter_set_fun
    },
    {
        "opcode": "uno_shield_ultrasonic_dis",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "inputMenu",
                "defaultValue": "3",
                "menu": "UNO_SHIELD_SET_SERVER_ANGLE_PORT"
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
                    "include": [
                        "<MeShield.h>"
                    ],
                    "declare": this.funcs.unoShieldUltrasonicDisCodesDeclare
                }
            }
        },
        "handler": this.funcs.uno_shield_ultrasonic_dis
    },
    {
        "opcode": "uno_shield_linefollower_status",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "inputMenu",
                "defaultValue": "3",
                "menu": "UNO_SHIELD_SHOW_7SEGMENTS_NUMBER_PORT"
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
                    "include": [
                        "<MeShield.h>"
                    ],
                    "declare": this.funcs.unoShieldLinefollowerStatusCodesDeclare
                }
            }
        },
        "handler": this.funcs.uno_shield_linefollower_status
    },
    {
        "opcode": "uno_shield_light_sensor_read",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "inputMenu",
                "defaultValue": "7",
                "menu": "UNO_SHIELD_SET_LIGHT_SENSOR_LED_PORT"
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
                    "include": [
                        "<MeShield.h>"
                    ],
                    "declare": this.funcs.unoShieldLightSensorReadCodesDeclare
                }
            }
        },
        "handler": this.funcs.uno_shield_light_sensor_read
    },
    {
        "opcode": "uno_shield_joystick",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "inputMenu",
                "defaultValue": "7",
                "menu": "UNO_SHIELD_SET_LIGHT_SENSOR_LED_PORT"
            },
            "AXIS_X_Y": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "UNO_SHIELD_JOYSTICK_AXIS_X_Y"
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
                    "include": [
                        "<MeShield.h>"
                    ],
                    "declare": this.funcs.unoShieldJoystickCodesDeclare
                }
            }
        },
        "handler": this.funcs.uno_shield_joystick
    },
    {
        "opcode": "uno_shield_pointmeter",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "inputMenu",
                "defaultValue": "7",
                "menu": "UNO_SHIELD_SET_LIGHT_SENSOR_LED_PORT"
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
                    "include": [
                        "<MeShield.h>"
                    ],
                    "declare": this.funcs.unoShieldPointmeterCodesDeclare
                }
            }
        },
        "handler": this.funcs.uno_shield_pointmeter
    },
    {
        "opcode": "uno_shield_soundsensor",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "inputMenu",
                "defaultValue": "7",
                "menu": "UNO_SHIELD_SET_LIGHT_SENSOR_LED_PORT"
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
                    "include": [
                        "<MeShield.h>"
                    ],
                    "declare": this.funcs.unoShieldSoundsensorCodesDeclare
                }
            }
        },
        "handler": this.funcs.uno_shield_soundsensor
    },
    {
        "opcode": "uno_shield_ir_sensor",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "inputMenu",
                "defaultValue": "3",
                "menu": "UNO_SHIELD_SHOW_7SEGMENTS_NUMBER_PORT"
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
                    "include": [
                        "<MeShield.h>"
                    ],
                    "declare": this.funcs.unoShieldIrSensorCodesDeclare,
                    "setup": this.funcs.unoShieldIrSensorCodesSetup,
                    "_loop": `ir_/*{PORT}*/.loop();`
                }
            }
        },
        "handler": this.funcs.uno_shield_ir_sensor
    },
    {
        "opcode": "uno_shield_limitswitch",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "inputMenu",
                "defaultValue": "3",
                "menu": "UNO_SHIELD_SET_SERVER_ANGLE_PORT"
            },
            "SLOT": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "UNO_SHIELD_SET_SERVER_ANGLE_SLOT"
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
                    "include": [
                        "<MeShield.h>"
                    ],
                    "declare": this.funcs.unoShieldLimitswitchCodesDeclare
                }
            }
        },
        "handler": this.funcs.uno_shield_limitswitch
    },
    {
        "opcode": "uno_shield_human_ir",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "inputMenu",
                "defaultValue": "3",
                "menu": "UNO_SHIELD_SHOW_7SEGMENTS_NUMBER_PORT"
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
                    "include": [
                        "<MeShield.h>"
                    ],
                    "declare": this.funcs.unoShieldHumanIrCodesDeclare
                }
            }
        },
        "handler": this.funcs.uno_shield_human_ir
    },
    {
        "opcode": "uno_shield_tempsensor",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "inputMenu",
                "defaultValue": "3",
                "menu": "UNO_SHIELD_SET_SERVER_ANGLE_PORT"
            },
            "SLOT": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "UNO_SHIELD_SET_SERVER_ANGLE_SLOT"
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
                    "include": [
                        "<MeShield.h>"
                    ],
                    "declare": this.funcs.unoShieldTempsensorCodesDeclare
                }
            }
        },
        "handler": this.funcs.uno_shield_tempsensor
    },
    {
        "opcode": "uno_shield_gyro_sesor",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "AXIS": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "UNO_SHIELD_GYRO_SESOR_AXIS"
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
                    "include": [
                        "<MeShield.h>"
                    ],
                    "declare": this.funcs.unoShieldGyroSesorCodesDeclare,
                    "setup": this.funcs.unoShieldGyroSesorCodesSetup,
                    "_loop": `gyro_1.update();`
                }
            }
        },
        "handler": this.funcs.uno_shield_gyro_sesor
    },
    {
        "opcode": "uno_shield_temp_moisture_sensor",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "inputMenu",
                "defaultValue": "3",
                "menu": "UNO_SHIELD_SET_SERVER_ANGLE_PORT"
            },
            "TEMP_HUMITURE": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "UNO_SHIELD_TEMP_MOISTURE_SENSOR_TEMP_HUMITURE"
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
                    "include": [
                        "<MeShield.h>"
                    ],
                    "declare": this.funcs.unoShieldTempMoistureSensorCodesDeclare,
                    "_loop": `humiture_/*{PORT}*/.update();`
                }
            }
        },
        "handler": this.funcs.uno_shield_temp_moisture_sensor
    },
    {
        "opcode": "uno_shield_firesensor",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "inputMenu",
                "defaultValue": "7",
                "menu": "UNO_SHIELD_SET_LIGHT_SENSOR_LED_PORT"
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
                    "include": [
                        "<MeShield.h>"
                    ],
                    "declare": this.funcs.unoShieldFiresensorCodesDeclare
                }
            }
        },
        "handler": this.funcs.uno_shield_firesensor
    },
    {
        "opcode": "uno_shield_gassensor",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "inputMenu",
                "defaultValue": "7",
                "menu": "UNO_SHIELD_SET_LIGHT_SENSOR_LED_PORT"
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
                    "include": [
                        "<MeShield.h>"
                    ],
                    "declare": this.funcs.unoShieldGassensorCodesDeclare
                }
            }
        },
        "handler": this.funcs.uno_shield_gassensor
    },
    {
        "opcode": "uno_shield_touch_sensor_touch_detected",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "inputMenu",
                "defaultValue": "3",
                "menu": "UNO_SHIELD_SHOW_7SEGMENTS_NUMBER_PORT"
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
                    "include": [
                        "<MeShield.h>"
                    ],
                    "declare": this.funcs.unoShieldTouchSensorTouchDetectedCodesDeclare
                }
            }
        },
        "handler": this.funcs.uno_shield_touch_sensor_touch_detected
    },
    {
        "opcode": "uno_shield_button_pressed",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "inputMenu",
                "defaultValue": "7",
                "menu": "UNO_SHIELD_SET_LIGHT_SENSOR_LED_PORT"
            },
            "FOUR_KEY": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "UNO_SHIELD_BUTTON_PRESSED_FOUR_KEY"
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
                    "include": [
                        "<MeShield.h>"
                    ],
                    "declare": this.funcs.unoShieldButtonPressedCodesDeclare,
                    "_loop": `buttonSensor_/*{PORT}*/.pressed();`
                }
            }
        },
        "handler": this.funcs.uno_shield_button_pressed
    },
    {
        "opcode": "uno_shield_timer",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `getLastTime()`,
                "sections": {
                    "include": [
                        "<MeShield.h>"
                    ],
                    "declare": this.funcs.unoShieldTimerCodesDeclare
                }
            }
        },
        "handler": this.funcs.uno_shield_timer
    },
    {
        "opcode": "uno_shield_timer_set_zero",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `lastTime = millis()/1000.0;`,
                "sections": {
                    "include": [
                        "<MeShield.h>"
                    ],
                    "declare": this.funcs.unoShieldTimerSetZeroCodesDeclare
                }
            }
        },
        "handler": this.funcs.uno_shield_timer_set_zero
    },
    {
        "opcode": "BLOCK_1608630189153",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1608630189153
    }
]);

export default blocks;