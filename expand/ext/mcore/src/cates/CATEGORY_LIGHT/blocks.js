const blocks = (extFacePanels) => ([{
        "opcode": "mcore_show_led_time",
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
            "LED_POSTION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "MCORE_SHOW_LED_TIME_LED_POSTION"
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
                "code": this.funcs.mcoreShowLedTimeCodesCode,
                "sections": {
                    "lib": this.funcs.mcoreShowLedTimeCodesLib,
                    "setup": this.funcs.mcoreShowLedTimeCodesSetup
                }
            }
        },
        "handler": this.funcs.mcore_show_led_time
    },
    {
        "opcode": "mcore_show_led",
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
            "LED_POSTION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "MCORE_SHOW_LED_TIME_LED_POSTION"
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
                "code": this.funcs.mcoreShowLedCodesCode,
                "sections": {
                    "lib": this.funcs.mcoreShowLedCodesLib,
                    "setup": this.funcs.mcoreShowLedCodesSetup
                }
            }
        },
        "handler": this.funcs.mcore_show_led
    },
    {
        "opcode": "mcore_show_led_rgb",
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
            },
            "LED_POSTION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "MCORE_SHOW_LED_TIME_LED_POSTION"
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
                "code": this.funcs.mcoreShowLedRgbCodesCode,
                "sections": {
                    "lib": this.funcs.mcoreShowLedRgbCodesLib,
                    "setup": this.funcs.mcoreShowLedRgbCodesSetup
                }
            }
        },
        "handler": this.funcs.mcore_show_led_rgb
    },
    {
        "opcode": "mcore_sound_play_note",
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
            "NOTE": {
                "type": "fieldMenu",
                "defaultValue": "262",
                "menu": "MCORE_SOUND_PLAY_NOTE_NOTE"
            },
            "BEAT": {
                "type": "number",
                "defaultValue": 0.25
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
                "code": this.funcs.mcoreSoundPlayNoteCodesCode,
                "sections": {
                    "lib": this.funcs.mcoreSoundPlayNoteCodesLib
                }
            }
        },
        "handler": this.funcs.mcore_sound_play_note
    },
    {
        "opcode": "mcore_sound_play_hz",
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
            },
            "HZ": {
                "type": "number",
                "defaultValue": 700
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
                "code": this.funcs.mcoreSoundPlayHzCodesCode,
                "sections": {
                    "lib": this.funcs.mcoreSoundPlayHzCodesLib
                }
            }
        },
        "handler": this.funcs.mcore_sound_play_hz
    },
    {
        "opcode": "mcore_show_external_led_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
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
                "code": `rgbled_/*{PORT}*/.setColor(/*{LED_POSTION}*/, /*{COLOR}*/);\r\nrgbled_/*{PORT}*/.show();\r\n_delay(/*{TIME}*/);\r\nrgbled_/*{PORT}*/.setColor(/*{LED_POSTION}*/, 0, 0, 0);\r\nrgbled_/*{PORT}*/.show();`,
                "sections": {
                    "declare": `MeRGBLed rgbled_/*{PORT}*/(/*{PORT}*/, 4);`
                }
            }
        },
        "handler": this.funcs.mcore_show_external_led_time
    },
    {
        "opcode": "mcore_show_external_led",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
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
                "code": `rgbled_/*{PORT}*/.setColor(/*{LED_POSTION}*/, /*{COLOR}*/);\r\nrgbled_/*{PORT}*/.show();`,
                "sections": {
                    "declare": `MeRGBLed rgbled_/*{PORT}*/(/*{PORT}*/, 4);`
                }
            }
        },
        "handler": this.funcs.mcore_show_external_led
    },
    {
        "opcode": "mcore_show_external_led_rgb",
        "blockType": "command",
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
                "code": `rgbled_/*{PORT}*/.setColor(/*{LED_POSTION}*/, /*{R}*/, /*{G}*/, /*{B}*/);\r\nrgbled_/*{PORT}*/.show();`,
                "sections": {
                    "declare": `MeRGBLed rgbled_/*{PORT}*/(/*{PORT}*/, 4);`
                }
            }
        },
        "handler": this.funcs.mcore_show_external_led_rgb
    },
    {
        "opcode": "mcore_show_all_ledstrip_color",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
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
                "code": `rgbled_/*{PORT}*/_/*{SLOT}*/.setColor(0, /*{COLOR_LIST}*/);\r\nrgbled_/*{PORT}*/_/*{SLOT}*/.show();`,
                "sections": {
                    "declare": `MeRGBLed rgbled_/*{PORT}*/_/*{SLOT}*/(/*{PORT}*/, /*{SLOT}*/, 32);`
                }
            }
        },
        "handler": this.funcs.mcore_show_all_ledstrip_color
    },
    {
        "opcode": "mcore_show_ledstrip_color",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
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
                "code": `rgbled_/*{PORT}*/_/*{SLOT}*/.setColor(/*{POS}*/, /*{COLOR_LIST}*/);\r\nrgbled_/*{PORT}*/_/*{SLOT}*/.show();`,
                "sections": {
                    "declare": `MeRGBLed rgbled_/*{PORT}*/_/*{SLOT}*/(/*{PORT}*/, /*{SLOT}*/, 32);`
                }
            }
        },
        "handler": this.funcs.mcore_show_ledstrip_color
    },
    {
        "opcode": "mcore_show_ledstrip_rbg",
        "blockType": "command",
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
                "code": `rgbled_/*{PORT}*/_/*{SLOT}*/.setColor(/*{POS}*/, /*{R}*/, /*{G}*/, /*{B}*/);\r\nrgbled_/*{PORT}*/_/*{SLOT}*/.show();`,
                "sections": {
                    "declare": `MeRGBLed rgbled_/*{PORT}*/_/*{SLOT}*/(/*{PORT}*/, /*{SLOT}*/, 32);`
                }
            }
        },
        "handler": this.funcs.mcore_show_ledstrip_rbg
    }
]);

export default blocks;