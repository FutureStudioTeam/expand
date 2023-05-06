const blocks = (extFacePanels) => ([{
        "opcode": "mcore_detect_external_light",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore/imgs/6c349822610c452596e1a23bdaf41e5f.svg', 'mcore')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MCORE_DETECT_EXTERNAL_LIGHT_PORT"
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
                    "lib": this.funcs.mcoreDetectExternalLightCodesLib
                }
            }
        },
        "handler": this.funcs.mcore_detect_external_light
    },
    {
        "opcode": "mcore_detect_external_ultrasonic",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore/imgs/6c349822610c452596e1a23bdaf41e5f.svg', 'mcore')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "3",
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
                    "lib": this.funcs.mcoreDetectExternalUltrasonicCodesLib
                }
            }
        },
        "handler": this.funcs.mcore_detect_external_ultrasonic
    },
    {
        "opcode": "mcore_detect_external_linefollower",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore/imgs/6c349822610c452596e1a23bdaf41e5f.svg', 'mcore')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "2",
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
                    "lib": this.funcs.mcoreDetectExternalLinefollowerCodesLib
                }
            }
        },
        "handler": this.funcs.mcore_detect_external_linefollower
    },
    {
        "opcode": "mcore_event_external_linefollower",
        "blockType": "boolean",
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
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "2",
                "menu": "MCORE_SHOW_FACE_TIME_PORT"
            },
            "LINEFOLLOW_STATE": {
                "type": "fieldMenu",
                "defaultValue": "2",
                "menu": "MCORE_EVENT_EXTERNAL_LINEFOLLOWER_LINEFOLLOW_STATE"
            },
            "BLACK_WHITE": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "MCORE_EVENT_EXTERNAL_LINEFOLLOWER_BLACK_WHITE"
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
                    "lib": this.funcs.mcoreEventExternalLinefollowerCodesLib
                }
            }
        },
        "handler": this.funcs.mcore_event_external_linefollower
    },
    {
        "opcode": "mcore_event_board_button_pressed",
        "blockType": "boolean",
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
            "OPTION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "MCORE_EVENT_BOARD_BUTTON_PRESSED_OPTION"
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
                "code": `(/*{OPTION}*/ ^ (analogRead(A7) > 10 ? 0 : 1))`,
                "sections": {
                    "setup": `pinMode(A7, INPUT);`
                }
            }
        },
        "handler": this.funcs.mcore_event_board_button_pressed
    },
    {
        "opcode": "mcore_event_ir_remote",
        "blockType": "boolean",
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
            "REMOTE_KEY": {
                "type": "fieldMenu",
                "defaultValue": "69",
                "menu": "MCORE_EVENT_IR_REMOTE_REMOTE_KEY"
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
                "code": `ir.keyPressed(/*{REMOTE_KEY}*/)`,
                "sections": {
                    "lib": this.funcs.mcoreEventIrRemoteCodesLib,
                    "setup": this.funcs.mcoreEventIrRemoteCodesSetup,
                    "_loop": `ir.loop();`
                }
            }
        },
        "handler": this.funcs.mcore_event_ir_remote
    },
    {
        "opcode": "mcore_send_ir",
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
            "MESSAGE": {
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
                "code": `ir.sendString(/*{MESSAGE}*/);`,
                "sections": {
                    "lib": this.funcs.mcoreSendIrCodesLib,
                    "setup": this.funcs.mcoreSendIrCodesSetup
                }
            }
        },
        "handler": this.funcs.mcore_send_ir
    },
    {
        "opcode": "mcore_detect_ir",
        "blockType": "string",
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
                "code": `ir.getString()`,
                "sections": {
                    "lib": this.funcs.mcoreDetectIrCodesLib,
                    "setup": this.funcs.mcoreDetectIrCodesSetup
                }
            }
        },
        "handler": this.funcs.mcore_detect_ir
    },
    {
        "opcode": "mcore_detect_timer",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
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
                "code": `getLastTime()`,
                "sections": {
                    "lib": this.funcs.mcoreDetectTimerCodesLib,
                    "declare": this.funcs.mcoreDetectTimerCodesDeclare
                }
            }
        },
        "handler": this.funcs.mcore_detect_timer
    },
    {
        "opcode": "mcore_reset_timer",
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
                "code": `lastTime = millis() / 1000.0;`,
                "sections": {
                    "lib": this.funcs.mcoreResetTimerCodesLib
                }
            }
        },
        "handler": this.funcs.mcore_reset_timer
    },
    {
        "opcode": "mcore_detect_external_loudness",
        "blockType": "number",
        "checkboxInFlyout": true,
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
                "defaultValue": "3",
                "menu": "MCORE_DETECT_EXTERNAL_LOUDNESS_PORT"
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
                    "declare": `MeSoundSensor soundsensor_/*{PORT}*/(/*{PORT}*/);`
                }
            }
        },
        "handler": this.funcs.mcore_detect_external_loudness
    },
    {
        "opcode": "mcore_detec_temperature",
        "blockType": "number",
        "checkboxInFlyout": true,
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
                "defaultValue": "3",
                "menu": "MCORE_SHOW_FACE_TIME_PORT"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_SHOW_ALL_LEDSTRIP_COLOR_SLOT"
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
                    "declare": `MeTemperature temperature_/*{PORT}*/_/*{SLOT}*/(/*{PORT}*/, /*{SLOT}*/);`
                }
            }
        },
        "handler": this.funcs.mcore_detec_temperature
    },
    {
        "opcode": "mcore_detect_humiture",
        "blockType": "number",
        "checkboxInFlyout": true,
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
            "TEMP_HUMITURE": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "MCORE_DETECT_HUMITURE_TEMP_HUMITURE"
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
                    "declare": `MeHumiture humiture_/*{PORT}*/(/*{PORT}*/);`,
                    "_loop": `humiture_/*{PORT}*/.update();`
                }
            }
        },
        "handler": this.funcs.mcore_detect_humiture
    },
    {
        "opcode": "mcore_event_touch",
        "blockType": "boolean",
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
                    "declare": `MeTouchSensor touchSensor_/*{PORT}*/(/*{PORT}*/);`
                }
            }
        },
        "handler": this.funcs.mcore_event_touch
    },
    {
        "opcode": "mcore_detect_compass",
        "blockType": "number",
        "checkboxInFlyout": true,
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
                    "declare": `MeCompass compass_/*{PORT}*/(/*{PORT}*/);`,
                    "setup": `compass_/*{PORT}*/.begin();`
                }
            }
        },
        "handler": this.funcs.mcore_detect_compass
    },
    {
        "opcode": "mcore_detect_flame",
        "blockType": "number",
        "checkboxInFlyout": true,
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
                "defaultValue": "3",
                "menu": "MCORE_DETECT_EXTERNAL_LOUDNESS_PORT"
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
                    "declare": `MeFlameSensor flameSensor_/*{PORT}*/(/*{PORT}*/);`
                }
            }
        },
        "handler": this.funcs.mcore_detect_flame
    },
    {
        "opcode": "mcore_detect_gas",
        "blockType": "number",
        "checkboxInFlyout": true,
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
                "defaultValue": "3",
                "menu": "MCORE_DETECT_EXTERNAL_LOUDNESS_PORT"
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
                    "declare": `MeGasSensor gasSensor_/*{PORT}*/(/*{PORT}*/);`
                }
            }
        },
        "handler": this.funcs.mcore_detect_gas
    },
    {
        "opcode": "mcore_detect_gyro_angle",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": true,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore')
            },
            "AXIS": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_DETECT_GYRO_ANGLE_AXIS"
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
                "code": `gyro.getAngle(/*{AXIS}*/)`,
                "sections": {
                    "declare": `MeGyro gyro;`,
                    "setup": `gyro.begin();`,
                    "_loop": `gyro.update();`
                }
            }
        },
        "handler": this.funcs.mcore_detect_gyro_angle
    },
    {
        "opcode": "mcore_event_pir_motion",
        "blockType": "boolean",
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
                "defaultValue": "2",
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
                "code": `pir_/*{PORT}*/.isHumanDetected()`,
                "sections": {
                    "declare": `MePIRMotionSensor pir_/*{PORT}*/(/*{PORT}*/);`
                }
            }
        },
        "handler": this.funcs.mcore_event_pir_motion
    },
    {
        "opcode": "mcore_event_button_press",
        "blockType": "boolean",
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
                "defaultValue": "3",
                "menu": "MCORE_DETECT_EXTERNAL_LOUDNESS_PORT"
            },
            "FOUR_KEY": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_EVENT_BUTTON_PRESS_FOUR_KEY"
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
                "code": `(buttonSensor_/*{PORT}*/.pressed() == /*{FOUR_KEY}*/)`,
                "sections": {
                    "declare": `Me4Button buttonSensor_/*{PORT}*/(/*{PORT}*/);`,
                    "_loop": `buttonSensor_/*{PORT}*/.pressed();`
                }
            }
        },
        "handler": this.funcs.mcore_event_button_press
    },
    {
        "opcode": "mcore_event_limit_switch",
        "blockType": "boolean",
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
                    "declare": `MeLimitSwitch sw_/*{PORT}*/_/*{SLOT}*/(/*{PORT}*/, /*{SLOT}*/);`
                }
            }
        },
        "handler": this.funcs.mcore_event_limit_switch
    },
    {
        "opcode": "mcore_detect_potentiometer",
        "blockType": "number",
        "checkboxInFlyout": true,
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
                "defaultValue": "3",
                "menu": "MCORE_DETECT_EXTERNAL_LOUDNESS_PORT"
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
                    "declare": `MePotentiometer potentiometer_/*{PORT}*/(/*{PORT}*/);`
                }
            }
        },
        "handler": this.funcs.mcore_detect_potentiometer
    },
    {
        "opcode": "mcore_detect_joystick",
        "blockType": "number",
        "checkboxInFlyout": true,
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
                "defaultValue": "3",
                "menu": "MCORE_DETECT_EXTERNAL_LOUDNESS_PORT"
            },
            "AXIS_X_Y": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_DETECT_JOYSTICK_AXIS_X_Y"
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
                    "declare": `MeJoystick joystick_/*{PORT}*/(/*{PORT}*/);`
                }
            }
        },
        "handler": this.funcs.mcore_detect_joystick
    },
    {
        "opcode": "mcore_detect_infrared",
        "blockType": "string",
        "checkboxInFlyout": true,
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
                    "declare": `MeInfraredReceiver ir_/*{PORT}*/(/*{PORT}*/);`,
                    "setup": `ir_/*{PORT}*/.begin();`,
                    "_loop": `ir_/*{PORT}*/.loop();`
                }
            }
        },
        "handler": this.funcs.mcore_detect_infrared
    },
    {
        "opcode": "mcore_event_linefollower",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore')
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
                "code": `(true&&(!linefollower_2.readSensors()&3))`,
                "sections": {
                    "declare": `MeLineFollower linefollower_2(2);`
                }
            }
        },
        "handler": this.funcs.mcore_event_linefollower
    },
    {
        "opcode": "mcore_event_obstacle",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore')
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
                "code": `(ultrasonic_3.distanceCm() < 20)`,
                "sections": {
                    "declare": this.funcs.mcoreEventObstacleCodesDeclare
                }
            }
        },
        "handler": this.funcs.mcore_event_obstacle
    },
    {
        "opcode": "mcore_detect_obstacle_distance",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore')
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
                "code": `ultrasonic_3.distanceCm()`,
                "sections": {
                    "declare": this.funcs.mcoreDetectObstacleDistanceCodesDeclare
                }
            }
        },
        "handler": this.funcs.mcore_detect_obstacle_distance
    },
    {
        "opcode": "mcore_detect_light",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore')
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
                "code": `lightsensor_6.read()`,
                "sections": {
                    "declare": this.funcs.mcoreDetectLightCodesDeclare
                }
            }
        },
        "handler": this.funcs.mcore_detect_light
    }
]);

export default blocks;