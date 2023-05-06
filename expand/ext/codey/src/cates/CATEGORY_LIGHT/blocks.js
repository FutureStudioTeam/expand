const blocks = (extFacePanels) => ([{
        "opcode": "meos_show_led_with_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
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
            "python": {
                "code": this.funcs.meosShowLedWithTimeCodesCode,
                "sections": {
                    "import": ['codey', 'time']
                }
            }
        },
        "handler": this.funcs.meos_show_led_with_time
    },
    {
        "opcode": "meos_show_led",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
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
            "python": {
                "code": this.funcs.meosShowLedCodesCode,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_show_led
    },
    {
        "opcode": "meos_show_led_rgb",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
            },
            "RGB": {
                "type": "fieldMenu",
                "defaultValue": "red",
                "menu": "MEOS_SHOW_LED_RGB_RGB"
            },
            "VALUE": {
                "type": "number",
                "defaultValue": 255
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": `codey.led.set_{RGB}({VALUE})`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_show_led_rgb
    },
    {
        "opcode": "meos_turn_off_led",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": `codey.led.off()`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_turn_off_led
    },
    {
        "opcode": "meos_rocky_show_led_color",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/efe396f42c824d15ab26f0cd9b8bfb42.svg', 'codey')
            },
            "COLORLIST": {
                "type": "fieldMenu",
                "defaultValue": "'red'",
                "menu": "MEOS_ROCKY_SHOW_LED_COLOR_COLORLIST"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": `rocky.color_ir_sensor.set_led_color({COLORLIST})`,
                "sections": {
                    "import": ['rocky']
                }
            }
        },
        "handler": this.funcs.meos_rocky_show_led_color
    },
    {
        "opcode": "meos_rocky_turn_off_led_color",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/efe396f42c824d15ab26f0cd9b8bfb42.svg', 'codey')
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": `rocky.color_ir_sensor.set_led_color('black')`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_rocky_turn_off_led_color
    }
]);

export default blocks;