const blocks = (extFacePanels) => ([{
        "opcode": "mcore_run_shutter",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_SHUTTER_PORT"
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
                    "lib": this.funcs.mcoreRunShutterCodesLib
                }
            }
        },
        "handler": this.funcs.mcore_run_shutter
    },
    {
        "opcode": "mcore_run_motor",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
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
                "code": this.funcs.mcoreRunMotorCodesCode,
                "sections": {
                    "lib": this.funcs.mcoreRunMotorCodesLib
                }
            }
        },
        "handler": this.funcs.mcore_run_motor
    },
    {
        "opcode": "mcore_run_servo",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_SHUTTER_PORT"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_SERVO_SLOT"
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
                "code": this.funcs.mcoreRunServoCodesCode,
                "sections": {
                    "lib": this.funcs.mcoreRunServoCodesLib,
                    "setup": this.funcs.mcoreRunServoCodesSetup
                }
            }
        },
        "handler": this.funcs.mcore_run_servo
    },
    {
        "opcode": "mcore_run_fan",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_SHUTTER_PORT"
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
                    "lib": this.funcs.mcoreRunFanCodesLib,
                    "declare": this.funcs.mcoreRunFanCodesDeclare
                }
            }
        },
        "handler": this.funcs.mcore_run_fan
    },
    {
        "opcode": "mcore_show_face_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_SHUTTER_PORT"
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
                "code": this.funcs.mcoreShowFaceTimeCodesCode,
                "sections": {
                    "lib": this.funcs.mcoreShowFaceTimeCodesLib,
                    "setup": this.funcs.mcoreShowFaceTimeCodesSetup
                }
            }
        },
        "handler": this.funcs.mcore_show_face_time
    },
    {
        "opcode": "mcore_show_face",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_SHUTTER_PORT"
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
                "code": this.funcs.mcoreShowFaceCodesCode,
                "sections": {
                    "lib": this.funcs.mcoreShowFaceCodesLib,
                    "setup": this.funcs.mcoreShowFaceCodesSetup
                }
            }
        },
        "handler": this.funcs.mcore_show_face
    },
    {
        "opcode": "mcore_show_face_position",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_SHUTTER_PORT"
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
                "code": this.funcs.mcoreShowFacePositionCodesCode,
                "sections": {
                    "lib": this.funcs.mcoreShowFacePositionCodesLib,
                    "setup": this.funcs.mcoreShowFacePositionCodesSetup
                }
            }
        },
        "handler": this.funcs.mcore_show_face_position
    },
    {
        "opcode": "mcore_show_text",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_SHUTTER_PORT"
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
                    "lib": this.funcs.mcoreShowTextCodesLib,
                    "setup": this.funcs.mcoreShowTextCodesSetup
                }
            }
        },
        "handler": this.funcs.mcore_show_text
    },
    {
        "opcode": "mcore_show_text_position",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_SHUTTER_PORT"
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
                "code": this.funcs.mcoreShowTextPositionCodesCode,
                "sections": {
                    "lib": this.funcs.mcoreShowTextPositionCodesLib,
                    "setup": this.funcs.mcoreShowTextPositionCodesSetup
                }
            }
        },
        "handler": this.funcs.mcore_show_text_position
    },
    {
        "opcode": "mcore_show_number",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_SHUTTER_PORT"
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
                "code": this.funcs.mcoreShowNumberCodesCode,
                "sections": {
                    "lib": this.funcs.mcoreShowNumberCodesLib,
                    "setup": this.funcs.mcoreShowNumberCodesSetup
                }
            }
        },
        "handler": this.funcs.mcore_show_number
    },
    {
        "opcode": "mcore_show_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_SHUTTER_PORT"
            },
            "NUMBER1": {
                "type": "number",
                "defaultValue": 12
            },
            "NUMBER2": {
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
                "code": this.funcs.mcoreShowTimeCodesCode,
                "sections": {
                    "lib": this.funcs.mcoreShowTimeCodesLib,
                    "setup": this.funcs.mcoreShowTimeCodesSetup
                }
            }
        },
        "handler": this.funcs.mcore_show_time
    },
    {
        "opcode": "mcore_show_face_off",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_SHUTTER_PORT"
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
                    "lib": this.funcs.mcoreShowFaceOffCodesLib,
                    "setup": this.funcs.mcoreShowFaceOffCodesSetup
                }
            }
        },
        "handler": this.funcs.mcore_show_face_off
    },
    {
        "opcode": "mcore_show_external_led_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_SHUTTER_PORT"
            },
            "LED_POSTION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "MCORE_SHOW_EXTERNAL_LED_TIME_LED_POSTION"
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
                "code": this.funcs.mcoreShowExternalLedTimeCodesCode,
                "sections": {
                    "lib": this.funcs.mcoreShowExternalLedTimeCodesLib,
                    "setup": this.funcs.mcoreShowExternalLedTimeCodesSetup
                }
            }
        },
        "handler": this.funcs.mcore_show_external_led_time
    },
    {
        "opcode": "mcore_show_external_led",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_SHUTTER_PORT"
            },
            "LED_POSTION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "MCORE_SHOW_EXTERNAL_LED_TIME_LED_POSTION"
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
                "code": this.funcs.mcoreShowExternalLedCodesCode,
                "sections": {
                    "lib": this.funcs.mcoreShowExternalLedCodesLib,
                    "setup": this.funcs.mcoreShowExternalLedCodesSetup
                }
            }
        },
        "handler": this.funcs.mcore_show_external_led
    },
    {
        "opcode": "mcore_show_external_led_rgb",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_SHUTTER_PORT"
            },
            "LED_POSTION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "MCORE_SHOW_EXTERNAL_LED_TIME_LED_POSTION"
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
                "code": this.funcs.mcoreShowExternalLedRgbCodesCode,
                "sections": {
                    "lib": this.funcs.mcoreShowExternalLedRgbCodesLib,
                    "setup": this.funcs.mcoreShowExternalLedRgbCodesSetup
                }
            }
        },
        "handler": this.funcs.mcore_show_external_led_rgb
    },
    {
        "opcode": "mcore_show_all_ledstrip_color",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_SHUTTER_PORT"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_SERVO_SLOT"
            },
            "COLOR_LIST": {
                "type": "fieldMenu",
                "defaultValue": "#FF0000",
                "menu": "MCORE_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST"
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
                "code": this.funcs.mcoreShowAllLedstripColorCodesCode,
                "sections": {
                    "lib": this.funcs.mcoreShowAllLedstripColorCodesLib,
                    "setup": this.funcs.mcoreShowAllLedstripColorCodesSetup
                }
            }
        },
        "handler": this.funcs.mcore_show_all_ledstrip_color
    },
    {
        "opcode": "mcore_show_ledstrip_color",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_SHUTTER_PORT"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_SERVO_SLOT"
            },
            "POS": {
                "type": "number",
                "defaultValue": 1
            },
            "COLOR_LIST": {
                "type": "fieldMenu",
                "defaultValue": "#FF0000",
                "menu": "MCORE_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST"
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
                "code": this.funcs.mcoreShowLedstripColorCodesCode,
                "sections": {
                    "lib": this.funcs.mcoreShowLedstripColorCodesLib,
                    "setup": this.funcs.mcoreShowLedstripColorCodesSetup
                }
            }
        },
        "handler": this.funcs.mcore_show_ledstrip_color
    },
    {
        "opcode": "mcore_show_ledstrip_rbg",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_SHUTTER_PORT"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_SERVO_SLOT"
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
                "code": this.funcs.mcoreShowLedstripRbgCodesCode,
                "sections": {
                    "lib": this.funcs.mcoreShowLedstripRbgCodesLib,
                    "setup": this.funcs.mcoreShowLedstripRbgCodesSetup
                }
            }
        },
        "handler": this.funcs.mcore_show_ledstrip_rbg
    },
    {
        "opcode": "mcore_show_7segments_number",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_SHUTTER_PORT"
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
                "code": this.funcs.mcoreShow7SegmentsNumberCodesCode,
                "sections": {
                    "lib": this.funcs.mcoreShow7SegmentsNumberCodesLib
                }
            }
        },
        "handler": this.funcs.mcore_show_7segments_number
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
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "3",
                "menu": "MCORE_RUN_SHUTTER_PORT"
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
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
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
        "opcode": "mcore_detect_external_loudness",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
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
                    "lib": this.funcs.mcoreDetectExternalLoudnessCodesLib
                }
            }
        },
        "handler": this.funcs.mcore_detect_external_loudness
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
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "2",
                "menu": "MCORE_RUN_SHUTTER_PORT"
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
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "2",
                "menu": "MCORE_RUN_SHUTTER_PORT"
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
                "code": `/*{BLACK_WHITE}*/?(/*{LINEFOLLOW_STATE}*/==0?linefollower_/*{PORT}*/.readSensors()==0:(linefollower_/*{PORT}*/.readSensors() & /*{LINEFOLLOW_STATE}*/)==/*{LINEFOLLOW_STATE}*/):(/*{LINEFOLLOW_STATE}*/==0?linefollower_/*{PORT}*/.readSensors()==3:(linefollower_/*{PORT}*/.readSensors() & /*{LINEFOLLOW_STATE}*/)==0)`,
                "sections": {
                    "lib": this.funcs.mcoreEventExternalLinefollowerCodesLib
                }
            }
        },
        "handler": this.funcs.mcore_event_external_linefollower
    },
    {
        "opcode": "mcore_detec_temperature",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "3",
                "menu": "MCORE_RUN_SHUTTER_PORT"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_SERVO_SLOT"
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
                    "lib": this.funcs.mcoreDetecTemperatureCodesLib
                }
            }
        },
        "handler": this.funcs.mcore_detec_temperature
    },
    {
        "opcode": "mcore_detect_humiture",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_SHUTTER_PORT"
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
                    "lib": this.funcs.mcoreDetectHumitureCodesLib,
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
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_SHUTTER_PORT"
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
                    "lib": this.funcs.mcoreEventTouchCodesLib
                }
            }
        },
        "handler": this.funcs.mcore_event_touch
    },
    {
        "opcode": "mcore_detect_compass",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_SHUTTER_PORT"
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
                    "lib": this.funcs.mcoreDetectCompassCodesLib,
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
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
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
                    "lib": this.funcs.mcoreDetectFlameCodesLib
                }
            }
        },
        "handler": this.funcs.mcore_detect_flame
    },
    {
        "opcode": "mcore_detect_gas",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
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
                    "lib": this.funcs.mcoreDetectGasCodesLib
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
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
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
                    "lib": this.funcs.mcoreDetectGyroAngleCodesLib,
                    "setup": `gyro.begin();`,
                    "_loop": `gyro.update();`
                }
            }
        },
        "handler": this.funcs.mcore_detect_gyro_angle
    },
    {
        "opcode": "mcore_detect_gyro_angle_1",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
            },
            "GyroAxis": {
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
                "code": `gyro.getAngle(/*{GyroAxis}*/)`,
                "sections": {
                    "lib": this.funcs.mcoreDetectGyroAngle1CodesLib,
                    "setup": `gyro.begin();`,
                    "_loop": `gyro.update();`
                }
            }
        },
        "handler": this.funcs.mcore_detect_gyro_angle_1
    },
    {
        "opcode": "mcore_event_pir_motion",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "2",
                "menu": "MCORE_RUN_SHUTTER_PORT"
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
                    "lib": this.funcs.mcoreEventPirMotionCodesLib
                }
            }
        },
        "handler": this.funcs.mcore_event_pir_motion
    },
    {
        "opcode": "mcore_event_button_press",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
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
                    "lib": this.funcs.mcoreEventButtonPressCodesLib,
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
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_SHUTTER_PORT"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_SERVO_SLOT"
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
                    "lib": this.funcs.mcoreEventLimitSwitchCodesLib
                }
            }
        },
        "handler": this.funcs.mcore_event_limit_switch
    },
    {
        "opcode": "mcore_detect_potentiometer",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
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
                    "lib": this.funcs.mcoreDetectPotentiometerCodesLib
                }
            }
        },
        "handler": this.funcs.mcore_detect_potentiometer
    },
    {
        "opcode": "mcore_detect_joystick",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
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
                    "lib": this.funcs.mcoreDetectJoystickCodesLib
                }
            }
        },
        "handler": this.funcs.mcore_detect_joystick
    },
    {
        "opcode": "mcore_detect_infrared",
        "blockType": "string",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_all/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_SHUTTER_PORT"
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
                    "lib": this.funcs.mcoreDetectInfraredCodesLib,
                    "setup": this.funcs.mcoreDetectInfraredCodesSetup,
                    "_loop": `ir_/*{PORT}*/.loop();`
                }
            }
        },
        "handler": this.funcs.mcore_detect_infrared
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
                "src": window.MbApi.getExtResPath('mcore_all/imgs/8e5cbd8f849a4a378fef50ccfec1ed47.svg', 'mcore_all')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_SHUTTER_PORT"
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
                    "include": [
                        "<MePm25Sensor.h>"
                    ],
                    "lib": this.funcs.aurigaDetectPm25SensorCodesLib,
                    "declare": `uint16_t getPMValue(MePm25Sensor mePm25Sensor, int type)\r\n{\r\n    \tswitch(type)\r\n    \t{\r\n        \t\tcase 1:\r\n        \t\treturn mePm25Sensor.readPm1_0Concentration();\r\n        \t\t\tbreak;\r\n        \t\tcase 2:\r\n        \t\t\treturn mePm25Sensor.readPm2_5Concentration();\r\n        \t\t\t break;\r\n        \t\tcase 3:\r\n        \t\treturn mePm25Sensor.readPm10Concentration();\r\n        \t\t\tbreak;\r\n    \t}\r\n}`,
                    "setup": `myMePm25Sensor_/*{PORT}*/.begin(9600);`,
                    "_loop": `myMePm25Sensor_/*{PORT}*/.rxloop();`
                }
            }
        },
        "handler": this.funcs.auriga_detect_pm25_sensor
    }
]);

export default blocks;