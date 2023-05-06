const blocks = (extFacePanels) => ([{
        "opcode": "megapi_run_servo",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'megapi_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_RUN_SERVO_PORT"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MEGAPI_RUN_SERVO_SLOT"
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
                "code": this.funcs.megapiRunServoCodesCode,
                "sections": {
                    "lib": this.funcs.megapiRunServoCodesLib,
                    "setup": this.funcs.megapiRunServoCodesSetup
                }
            }
        },
        "handler": this.funcs.megapi_run_servo
    },
    {
        "opcode": "megapi_run_fan",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'megapi_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_RUN_SERVO_PORT"
            },
            "FAN_ROTATE": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MEGAPI_RUN_FAN_FAN_ROTATE"
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
                    "lib": this.funcs.megapiRunFanCodesLib,
                    "declare": this.funcs.megapiRunFanCodesDeclare
                }
            }
        },
        "handler": this.funcs.megapi_run_fan
    },
    {
        "opcode": "megapi_show_external_led_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'megapi_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_RUN_SERVO_PORT"
            },
            "LED_POSTION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "MEGAPI_SHOW_EXTERNAL_LED_TIME_LED_POSTION"
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
                "code": this.funcs.megapiShowExternalLedTimeCodesCode,
                "sections": {
                    "lib": this.funcs.megapiShowExternalLedTimeCodesLib,
                    "setup": this.funcs.megapiShowExternalLedTimeCodesSetup
                }
            }
        },
        "handler": this.funcs.megapi_show_external_led_time
    },
    {
        "opcode": "megapi_show_external_led",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'megapi_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_RUN_SERVO_PORT"
            },
            "LED_POSTION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "MEGAPI_SHOW_EXTERNAL_LED_TIME_LED_POSTION"
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
                "code": this.funcs.megapiShowExternalLedCodesCode,
                "sections": {
                    "lib": this.funcs.megapiShowExternalLedCodesLib,
                    "setup": this.funcs.megapiShowExternalLedCodesSetup
                }
            }
        },
        "handler": this.funcs.megapi_show_external_led
    },
    {
        "opcode": "megapi_show_external_led_rgb",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'megapi_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_RUN_SERVO_PORT"
            },
            "LED_POSTION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "MEGAPI_SHOW_EXTERNAL_LED_TIME_LED_POSTION"
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
                "code": this.funcs.megapiShowExternalLedRgbCodesCode,
                "sections": {
                    "lib": this.funcs.megapiShowExternalLedRgbCodesLib,
                    "setup": this.funcs.megapiShowExternalLedRgbCodesSetup
                }
            }
        },
        "handler": this.funcs.megapi_show_external_led_rgb
    },
    {
        "opcode": "megapi_show_all_ledstrip_color",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'megapi_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_RUN_SERVO_PORT"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MEGAPI_RUN_SERVO_SLOT"
            },
            "COLOR_LIST": {
                "type": "fieldMenu",
                "defaultValue": "#FF0000",
                "menu": "MEGAPI_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST"
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
                "code": this.funcs.megapiShowAllLedstripColorCodesCode,
                "sections": {
                    "lib": this.funcs.megapiShowAllLedstripColorCodesLib,
                    "setup": this.funcs.megapiShowAllLedstripColorCodesSetup
                }
            }
        },
        "handler": this.funcs.megapi_show_all_ledstrip_color
    },
    {
        "opcode": "megapi_show_ledstrip_color",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'megapi_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_RUN_SERVO_PORT"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MEGAPI_RUN_SERVO_SLOT"
            },
            "POS": {
                "type": "number",
                "defaultValue": 1
            },
            "COLOR_LIST": {
                "type": "fieldMenu",
                "defaultValue": "#FF0000",
                "menu": "MEGAPI_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST"
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
                "code": this.funcs.megapiShowLedstripColorCodesCode,
                "sections": {
                    "lib": this.funcs.megapiShowLedstripColorCodesLib,
                    "setup": this.funcs.megapiShowLedstripColorCodesSetup
                }
            }
        },
        "handler": this.funcs.megapi_show_ledstrip_color
    },
    {
        "opcode": "megapi_show_ledstrip_rbg",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'megapi_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_RUN_SERVO_PORT"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MEGAPI_RUN_SERVO_SLOT"
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
                "code": this.funcs.megapiShowLedstripRbgCodesCode,
                "sections": {
                    "lib": this.funcs.megapiShowLedstripRbgCodesLib,
                    "setup": this.funcs.megapiShowLedstripRbgCodesSetup
                }
            }
        },
        "handler": this.funcs.megapi_show_ledstrip_rbg
    },
    {
        "opcode": "megapi_show_7segments_number",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'megapi_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_RUN_SERVO_PORT"
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
                "code": this.funcs.megapiShow7SegmentsNumberCodesCode,
                "sections": {
                    "lib": this.funcs.megapiShow7SegmentsNumberCodesLib
                }
            }
        },
        "handler": this.funcs.megapi_show_7segments_number
    },
    {
        "opcode": "megapi_detect_external_light",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'megapi_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_RUN_SERVO_PORT"
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
                    "lib": this.funcs.megapiDetectExternalLightCodesLib
                }
            }
        },
        "handler": this.funcs.megapi_detect_external_light
    },
    {
        "opcode": "megapi_detect_external_loudness",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'megapi_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_RUN_SERVO_PORT"
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
                    "lib": this.funcs.megapiDetectExternalLoudnessCodesLib
                }
            }
        },
        "handler": this.funcs.megapi_detect_external_loudness
    },
    {
        "opcode": "megapi_detec_temperature",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'megapi_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_RUN_SERVO_PORT"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MEGAPI_RUN_SERVO_SLOT"
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
                    "lib": this.funcs.megapiDetecTemperatureCodesLib
                }
            }
        },
        "handler": this.funcs.megapi_detec_temperature
    },
    {
        "opcode": "megapi_detect_humiture",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'megapi_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_RUN_SERVO_PORT"
            },
            "TEMP_HUMITURE": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "MEGAPI_DETECT_HUMITURE_TEMP_HUMITURE"
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
                    "lib": this.funcs.megapiDetectHumitureCodesLib,
                    "_loop": `humiture_/*{PORT}*/.update();`
                }
            }
        },
        "handler": this.funcs.megapi_detect_humiture
    },
    {
        "opcode": "megapi_event_touch",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'megapi_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_RUN_SERVO_PORT"
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
                    "lib": this.funcs.megapiEventTouchCodesLib
                }
            }
        },
        "handler": this.funcs.megapi_event_touch
    },
    {
        "opcode": "megapi_detect_compass",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'megapi_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_RUN_SERVO_PORT"
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
                    "lib": this.funcs.megapiDetectCompassCodesLib,
                    "setup": `compass_/*{PORT}*/.begin();`
                }
            }
        },
        "handler": this.funcs.megapi_detect_compass
    },
    {
        "opcode": "megapi_detect_flame",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'megapi_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_RUN_SERVO_PORT"
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
                    "lib": this.funcs.megapiDetectFlameCodesLib
                }
            }
        },
        "handler": this.funcs.megapi_detect_flame
    },
    {
        "opcode": "megapi_detect_gas",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'megapi_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_RUN_SERVO_PORT"
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
                    "lib": this.funcs.megapiDetectGasCodesLib
                }
            }
        },
        "handler": this.funcs.megapi_detect_gas
    },
    {
        "opcode": "megapi_event_pir_motion",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'megapi_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_RUN_SERVO_PORT"
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
                    "lib": this.funcs.megapiEventPirMotionCodesLib
                }
            }
        },
        "handler": this.funcs.megapi_event_pir_motion
    },
    {
        "opcode": "megapi_event_button_press",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'megapi_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_RUN_SERVO_PORT"
            },
            "FOUR_KEY": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MEGAPI_EVENT_BUTTON_PRESS_FOUR_KEY"
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
                    "lib": this.funcs.megapiEventButtonPressCodesLib,
                    "_loop": `buttonSensor_/*{PORT}*/.pressed();`
                }
            }
        },
        "handler": this.funcs.megapi_event_button_press
    },
    {
        "opcode": "megapi_event_limit_switch",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'megapi_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_RUN_SERVO_PORT"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MEGAPI_RUN_SERVO_SLOT"
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
                    "lib": this.funcs.megapiEventLimitSwitchCodesLib
                }
            }
        },
        "handler": this.funcs.megapi_event_limit_switch
    },
    {
        "opcode": "megapi_detect_potentiometer",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'megapi_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_RUN_SERVO_PORT"
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
                    "lib": this.funcs.megapiDetectPotentiometerCodesLib
                }
            }
        },
        "handler": this.funcs.megapi_detect_potentiometer
    },
    {
        "opcode": "megapi_detect_joystick",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'megapi_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_RUN_SERVO_PORT"
            },
            "AXIS_X_Y": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MEGAPI_DETECT_JOYSTICK_AXIS_X_Y"
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
                    "lib": this.funcs.megapiDetectJoystickCodesLib
                }
            }
        },
        "handler": this.funcs.megapi_detect_joystick
    },
    {
        "opcode": "megapi_detect_infrared",
        "blockType": "string",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'megapi_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_RUN_SERVO_PORT"
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
                    "lib": this.funcs.megapiDetectInfraredCodesLib,
                    "setup": `ir_/*{PORT}*/.begin();`,
                    "_loop": `ir_/*{PORT}*/.loop();`
                }
            }
        },
        "handler": this.funcs.megapi_detect_infrared
    },
    {
        "opcode": "megapi_detect_pm25_sensor",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "image_1": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi_all/imgs/51ddfb30a98a4bfaa3aede66ad665905.svg', 'megapi_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "MEGAPI_RUN_SERVO_PORT"
            },
            "OPTION": {
                "type": "fieldMenu",
                "defaultValue": "2",
                "menu": "MEGAPI_DETECT_PM25_SENSOR_OPTION"
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
                    "include": [
                        "<MePm25Sensor.h>"
                    ],
                    "lib": this.funcs.megapiDetectPm25SensorCodesLib,
                    "declare": `uint16_t getPMValue(MePm25Sensor mePm25Sensor, int type)\r\n{\r\n    \tswitch(type)\r\n    \t{\r\n        \t\tcase 1:\r\n        \t\treturn mePm25Sensor.readPm1_0Concentration();\r\n        \t\t\tbreak;\r\n        \t\tcase 2:\r\n        \t\t\treturn mePm25Sensor.readPm2_5Concentration();\r\n        \t\t\t break;\r\n        \t\tcase 3:\r\n        \t\treturn mePm25Sensor.readPm10Concentration();\r\n        \t\t\tbreak;\r\n    \t}\r\n}`,
                    "setup": `myMePm25Sensor_/*{PORT}*/.begin(9600);`,
                    "_loop": `myMePm25Sensor_/*{PORT}*/.rxloop();`
                }
            }
        },
        "handler": this.funcs.megapi_detect_pm25_sensor
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
                "menu": "BLOCK_1575275074292_PORT"
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
        "hidden": false,
        "gap": 12,
        "arguments": {
            "image_1": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi_all/imgs/b2083f051d89435f9c0dc625ebfdc7ef.svg', 'megapi_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1575275074292_PORT"
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
                    "declare": `void isr_process_enhance_encoder1(void){\r\n  if(digitalRead(EnhanceEncoder_1.getPortB()) == 0){\r\n    EnhanceEncoder_1.pulsePosMinus();\r\n  }else{\r\n    EnhanceEncoder_1.pulsePosPlus();\r\n  }\r\n}\r\nvoid isr_process_enhance_encoder2(void){\r\n  if(digitalRead(EnhanceEncoder_2.getPortB()) == 0)\r\n  {\r\n    EnhanceEncoder_2.pulsePosMinus();\r\n  }else{\r\n    EnhanceEncoder_2.pulsePosPlus();\r\n  }\r\n}\r\nvoid isr_process_enhance_encoder3(void){\r\n  if(digitalRead(EnhanceEncoder_3.getPortB()) == 0){\r\n    EnhanceEncoder_3.pulsePosMinus();\r\n  }else{\r\n    EnhanceEncoder_3.pulsePosPlus();\r\n  }\r\n}\r\nvoid isr_process_enhance_encoder4(void){\r\n  if(digitalRead(EnhanceEncoder_4.getPortB()) == 0)\r\n  {\r\n    EnhanceEncoder_4.pulsePosMinus();\r\n  }else{\r\n    EnhanceEncoder_4.pulsePosPlus();\r\n  }\r\n}`,
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
            "image_1": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi_all/imgs/2b83bb1c785f43fd8401089446b287f0.svg', 'megapi_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1575275074292_PORT"
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
                    "declare": `void isr_process_enhance_encoder1(void){\r\n  if(digitalRead(EnhanceEncoder_1.getPortB()) == 0){\r\n    EnhanceEncoder_1.pulsePosMinus();\r\n  }else{\r\n    EnhanceEncoder_1.pulsePosPlus();\r\n  }\r\n}\r\nvoid isr_process_enhance_encoder2(void){\r\n  if(digitalRead(EnhanceEncoder_2.getPortB()) == 0)\r\n  {\r\n    EnhanceEncoder_2.pulsePosMinus();\r\n  }else{\r\n    EnhanceEncoder_2.pulsePosPlus();\r\n  }\r\n}\r\nvoid isr_process_enhance_encoder3(void){\r\n  if(digitalRead(EnhanceEncoder_3.getPortB()) == 0){\r\n    EnhanceEncoder_3.pulsePosMinus();\r\n  }else{\r\n    EnhanceEncoder_3.pulsePosPlus();\r\n  }\r\n}\r\nvoid isr_process_enhance_encoder4(void){\r\n  if(digitalRead(EnhanceEncoder_4.getPortB()) == 0)\r\n  {\r\n    EnhanceEncoder_4.pulsePosMinus();\r\n  }else{\r\n    EnhanceEncoder_4.pulsePosPlus();\r\n  }\r\n}`,
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
            "image_1": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('megapi_all/imgs/20f3365c8536461e97a0c9ed6ce46585.svg', 'megapi_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1575275074292_PORT"
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
                    "declare": `void isr_process_enhance_encoder1(void){\r\n  if(digitalRead(EnhanceEncoder_1.getPortB()) == 0){\r\n    EnhanceEncoder_1.pulsePosMinus();\r\n  }else{\r\n    EnhanceEncoder_1.pulsePosPlus();\r\n  }\r\n}\r\nvoid isr_process_enhance_encoder2(void){\r\n  if(digitalRead(EnhanceEncoder_2.getPortB()) == 0)\r\n  {\r\n    EnhanceEncoder_2.pulsePosMinus();\r\n  }else{\r\n    EnhanceEncoder_2.pulsePosPlus();\r\n  }\r\n}\r\nvoid isr_process_enhance_encoder3(void){\r\n  if(digitalRead(EnhanceEncoder_3.getPortB()) == 0){\r\n    EnhanceEncoder_3.pulsePosMinus();\r\n  }else{\r\n    EnhanceEncoder_3.pulsePosPlus();\r\n  }\r\n}\r\nvoid isr_process_enhance_encoder4(void){\r\n  if(digitalRead(EnhanceEncoder_4.getPortB()) == 0)\r\n  {\r\n    EnhanceEncoder_4.pulsePosMinus();\r\n  }else{\r\n    EnhanceEncoder_4.pulsePosPlus();\r\n  }\r\n}`,
                    "setup": this.funcs.enhancedEncoderMotorPosCodesSetup,
                    "_loop": `EnhanceEncoder_/*{PORT}*/.loop();`
                }
            }
        },
        "handler": this.funcs.enhanced_encoder_motor_pos
    }
]);

export default blocks;