const blocks = (extFacePanels) => ([{
        "opcode": "auriga_show_all_led_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga/imgs/6c8d75b3c8ad4f74a2b982a5961de250.svg', 'auriga')
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
                "code": this.funcs.aurigaShowAllLedTimeCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaShowAllLedTimeCodesLib,
                    "setup": this.funcs.aurigaShowAllLedTimeCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_show_all_led_time
    },
    {
        "opcode": "auriga_show_all_led",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga/imgs/6c8d75b3c8ad4f74a2b982a5961de250.svg', 'auriga')
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
                "code": this.funcs.aurigaShowAllLedCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaShowAllLedCodesLib,
                    "setup": this.funcs.aurigaShowAllLedCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_show_all_led
    },
    {
        "opcode": "auriga_show_all_led_rgb",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga/imgs/6c8d75b3c8ad4f74a2b982a5961de250.svg', 'auriga')
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
                "code": this.funcs.aurigaShowAllLedRgbCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaShowAllLedRgbCodesLib,
                    "setup": this.funcs.aurigaShowAllLedRgbCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_show_all_led_rgb
    },
    {
        "opcode": "auriga_show_led_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga/imgs/6c8d75b3c8ad4f74a2b982a5961de250.svg', 'auriga')
            },
            "LED_POSTION": {
                "type": "number",
                "defaultValue": 1
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
                "code": this.funcs.aurigaShowLedTimeCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaShowLedTimeCodesLib,
                    "setup": this.funcs.aurigaShowLedTimeCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_show_led_time
    },
    {
        "opcode": "auriga_show_led",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga/imgs/6c8d75b3c8ad4f74a2b982a5961de250.svg', 'auriga')
            },
            "LED_POSTION": {
                "type": "number",
                "defaultValue": 1
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
                "code": this.funcs.aurigaShowLedCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaShowLedCodesLib,
                    "setup": this.funcs.aurigaShowLedCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_show_led
    },
    {
        "opcode": "auriga_show_led_rgb",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga/imgs/6c8d75b3c8ad4f74a2b982a5961de250.svg', 'auriga')
            },
            "LED_POSTION": {
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
                "code": this.funcs.aurigaShowLedRgbCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaShowLedRgbCodesLib,
                    "setup": this.funcs.aurigaShowLedRgbCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_show_led_rgb
    },
    {
        "opcode": "auriga_sound_play_note",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga/imgs/6c8d75b3c8ad4f74a2b982a5961de250.svg', 'auriga')
            },
            "NOTE": {
                "type": "fieldMenu",
                "defaultValue": "262",
                "menu": "AURIGA_SOUND_PLAY_NOTE_NOTE"
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
                "code": this.funcs.aurigaSoundPlayNoteCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaSoundPlayNoteCodesLib,
                    "setup": this.funcs.aurigaSoundPlayNoteCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_sound_play_note
    },
    {
        "opcode": "auriga_sound_play_hz",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga/imgs/6c8d75b3c8ad4f74a2b982a5961de250.svg', 'auriga')
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
                "code": this.funcs.aurigaSoundPlayHzCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaSoundPlayHzCodesLib,
                    "setup": this.funcs.aurigaSoundPlayHzCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_sound_play_hz
    }
]);

export default blocks;