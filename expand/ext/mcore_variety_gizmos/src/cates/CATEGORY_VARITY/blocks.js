const blocks = (extFacePanels) => ([{
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
                "src": window.MbApi.getExtResPath('mcore_variety_gizmos/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_variety_gizmos')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_SHOW_EXTERNAL_LED_TIME_PORT"
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
                "src": window.MbApi.getExtResPath('mcore_variety_gizmos/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_variety_gizmos')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_SHOW_EXTERNAL_LED_TIME_PORT"
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
                "src": window.MbApi.getExtResPath('mcore_variety_gizmos/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_variety_gizmos')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_SHOW_EXTERNAL_LED_TIME_PORT"
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
                "src": window.MbApi.getExtResPath('mcore_variety_gizmos/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_variety_gizmos')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_SHOW_EXTERNAL_LED_TIME_PORT"
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
                "src": window.MbApi.getExtResPath('mcore_variety_gizmos/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_variety_gizmos')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_SHOW_EXTERNAL_LED_TIME_PORT"
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
        "opcode": "mcore_event_limit_switch",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_variety_gizmos/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_variety_gizmos')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_SHOW_EXTERNAL_LED_TIME_PORT"
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
    }
]);

export default blocks;