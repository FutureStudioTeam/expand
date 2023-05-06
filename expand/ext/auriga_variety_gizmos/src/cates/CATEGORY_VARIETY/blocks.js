const blocks = (extFacePanels) => ([{
        "opcode": "auriga_show_external_led_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_variety_gizmos/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_variety_gizmos')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_SHOW_EXTERNAL_LED_TIME_PORT"
            },
            "LED_POSTION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "AURIGA_SHOW_EXTERNAL_LED_TIME_LED_POSTION"
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
                "code": this.funcs.aurigaShowExternalLedTimeCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaShowExternalLedTimeCodesLib,
                    "setup": this.funcs.aurigaShowExternalLedTimeCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_show_external_led_time
    },
    {
        "opcode": "auriga_show_external_led",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_variety_gizmos/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_variety_gizmos')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_SHOW_EXTERNAL_LED_TIME_PORT"
            },
            "LED_POSTION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "AURIGA_SHOW_EXTERNAL_LED_TIME_LED_POSTION"
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
                "code": this.funcs.aurigaShowExternalLedCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaShowExternalLedCodesLib,
                    "setup": this.funcs.aurigaShowExternalLedCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_show_external_led
    },
    {
        "opcode": "auriga_show_external_led_rgb",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_variety_gizmos/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_variety_gizmos')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_SHOW_EXTERNAL_LED_TIME_PORT"
            },
            "LED_POSTION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "AURIGA_SHOW_EXTERNAL_LED_TIME_LED_POSTION"
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
                "code": this.funcs.aurigaShowExternalLedRgbCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaShowExternalLedRgbCodesLib,
                    "setup": this.funcs.aurigaShowExternalLedRgbCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_show_external_led_rgb
    },
    {
        "opcode": "auriga_run_servo",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_variety_gizmos/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_variety_gizmos')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_SHOW_EXTERNAL_LED_TIME_PORT"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_RUN_SERVO_SLOT"
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
                "code": this.funcs.aurigaRunServoCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaRunServoCodesLib,
                    "setup": this.funcs.aurigaRunServoCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_run_servo
    },
    {
        "opcode": "auriga_show_7segments_number",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_variety_gizmos/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_variety_gizmos')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_SHOW_EXTERNAL_LED_TIME_PORT"
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
                "code": this.funcs.aurigaShow7SegmentsNumberCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaShow7SegmentsNumberCodesLib
                }
            }
        },
        "handler": this.funcs.auriga_show_7segments_number
    },
    {
        "opcode": "auriga_event_limit_switch",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_variety_gizmos/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_variety_gizmos')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_SHOW_EXTERNAL_LED_TIME_PORT"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_RUN_SERVO_SLOT"
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
                    "lib": this.funcs.aurigaEventLimitSwitchCodesLib
                }
            }
        },
        "handler": this.funcs.auriga_event_limit_switch
    }
]);

export default blocks;