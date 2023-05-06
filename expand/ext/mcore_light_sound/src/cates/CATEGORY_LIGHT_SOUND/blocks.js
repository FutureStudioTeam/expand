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
                "src": window.MbApi.getExtResPath('mcore_light_sound/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_light_sound')
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
                "src": window.MbApi.getExtResPath('mcore_light_sound/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_light_sound')
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
                "src": window.MbApi.getExtResPath('mcore_light_sound/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_light_sound')
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
                "src": window.MbApi.getExtResPath('mcore_light_sound/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_light_sound')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "3",
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
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_light_sound/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_light_sound')
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
    }
]);

export default blocks;