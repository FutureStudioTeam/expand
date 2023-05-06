const blocks = (extFacePanels) => ([{
        "opcode": "cyberpi_play_led_animation_until",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "LED_animation": {
                "type": "fieldMenu",
                "defaultValue": "rainbow",
                "menu": "CYBERPI_PLAY_LED_ANIMATION_UNTIL_LED_ANIMATION"
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
                "code": `cyberpi.led.play('{LED_animation}')`
            }
        },
        "handler": this.funcs.cyberpi_play_led_animation_until
    },
    {
        "opcode": "cyberpi_show_led",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ledRing": extFacePanels['c5b42c4d']
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.cyberpiShowLedCodesCode,
                "sections": {
                    "import": ['time']
                }
            }
        },
        "handler": this.funcs.cyberpi_show_led
    },
    {
        "opcode": "cyberpi_move_led",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "led_number": {
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
                "code": `cyberpi.led.move({led_number})`
            }
        },
        "handler": this.funcs.cyberpi_move_led
    },
    {
        "opcode": "cyberpi_led_show_single_with_color_and_time_2",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "\"all\"",
                "menu": "CYBERPI_LED_SHOW_SINGLE_WITH_COLOR_AND_TIME_2_FIELDMENU_1"
            },
            "color_1": {
                "type": "color",
                "defaultValue": "#d0021b"
            },
            "number_3": {
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
                "code": this.funcs.cyberpiLedShowSingleWithColorAndTime2CodesCode
            }
        },
        "handler": this.funcs.cyberpi_led_show_single_with_color_and_time_2
    },
    {
        "opcode": "cyberpi_led_show_single_with_color_2",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "\"all\"",
                "menu": "CYBERPI_LED_SHOW_SINGLE_WITH_COLOR_AND_TIME_2_FIELDMENU_1"
            },
            "color_1": {
                "type": "color",
                "defaultValue": "#d0021b"
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
                "code": this.funcs.cyberpiLedShowSingleWithColor2CodesCode
            }
        },
        "handler": this.funcs.cyberpi_led_show_single_with_color_2
    },
    {
        "opcode": "cyberpi_led_show_single_with_rgb_and_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "\"all\"",
                "menu": "CYBERPI_LED_SHOW_SINGLE_WITH_COLOR_AND_TIME_2_FIELDMENU_1"
            },
            "r": {
                "type": "number",
                "defaultValue": 255
            },
            "g": {
                "type": "number",
                "defaultValue": 0
            },
            "b": {
                "type": "number",
                "defaultValue": 0
            },
            "number_5": {
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
                "code": this.funcs.cyberpiLedShowSingleWithRgbAndTimeCodesCode
            }
        },
        "handler": this.funcs.cyberpi_led_show_single_with_rgb_and_time
    },
    {
        "opcode": "cyberpi_led_show_single_with_rgb_2",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "\"all\"",
                "menu": "CYBERPI_LED_SHOW_SINGLE_WITH_COLOR_AND_TIME_2_FIELDMENU_1"
            },
            "r": {
                "type": "number",
                "defaultValue": 255
            },
            "g": {
                "type": "number",
                "defaultValue": 0
            },
            "b": {
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
            "python": {
                "code": this.funcs.cyberpiLedShowSingleWithRgb2CodesCode
            }
        },
        "handler": this.funcs.cyberpi_led_show_single_with_rgb_2
    },
    {
        "opcode": "cyberpi_add_led_brightness",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "number_1": {
                "type": "number",
                "defaultValue": 10
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
                "code": `cyberpi.led.add_bri({number_1})`
            }
        },
        "handler": this.funcs.cyberpi_add_led_brightness
    },
    {
        "opcode": "cyberpi_set_led_brightness",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "number_1": {
                "type": "number",
                "defaultValue": 30
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
                "code": `cyberpi.led.set_bri({number_1})`
            }
        },
        "handler": this.funcs.cyberpi_set_led_brightness
    },
    {
        "opcode": "cyberpi_get_led_brightness",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": `cyberpi.led.get_bri()`
            }
        },
        "handler": this.funcs.cyberpi_get_led_brightness
    },
    {
        "opcode": "cyberpi_led_off_2",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "\"all\"",
                "menu": "CYBERPI_LED_SHOW_SINGLE_WITH_COLOR_AND_TIME_2_FIELDMENU_1"
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
                "code": `cyberpi.led.off({fieldMenu_1})`
            }
        },
        "handler": this.funcs.cyberpi_led_off_2
    },
    {
        "opcode": "cyberpi_led_show_single_with_color_and_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "CYBERPI_LED_SHOW_SINGLE_WITH_COLOR_AND_TIME_FIELDMENU_1"
            },
            "color_1": {
                "type": "color",
                "defaultValue": "#d0021b"
            },
            "number_3": {
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
                "code": this.funcs.cyberpiLedShowSingleWithColorAndTimeCodesCode
            }
        },
        "handler": this.funcs.cyberpi_led_show_single_with_color_and_time
    },
    {
        "opcode": "cyberpi_led_show_single_with_color",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "CYBERPI_LED_SHOW_SINGLE_WITH_COLOR_AND_TIME_FIELDMENU_1"
            },
            "color_1": {
                "type": "color",
                "defaultValue": "#d0021b"
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
                "code": this.funcs.cyberpiLedShowSingleWithColorCodesCode
            }
        },
        "handler": this.funcs.cyberpi_led_show_single_with_color
    },
    {
        "opcode": "cyberpi_led_show_single_with_rgb",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 36,
        "arguments": {
            "fieldMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "CYBERPI_LED_SHOW_SINGLE_WITH_COLOR_AND_TIME_FIELDMENU_1"
            },
            "r": {
                "type": "number",
                "defaultValue": 255
            },
            "g": {
                "type": "number",
                "defaultValue": 0
            },
            "b": {
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
            "python": {
                "code": this.funcs.cyberpiLedShowSingleWithRgbCodesCode
            }
        },
        "handler": this.funcs.cyberpi_led_show_single_with_rgb
    },
    {
        "opcode": "cyberpi_led_off",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 36,
        "arguments": {
            "fieldMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "CYBERPI_LED_SHOW_SINGLE_WITH_COLOR_AND_TIME_FIELDMENU_1"
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
                "code": `cyberpi.led.off({fieldMenu_1})`
            }
        },
        "handler": this.funcs.cyberpi_led_off
    }
]);

export default blocks;