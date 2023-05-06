const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1570879365614",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "LED_animation": {
                "type": "fieldMenu",
                "defaultValue": "rainbow",
                "menu": "BLOCK_1570879365614_LED_ANIMATION"
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
                "code": `halo.led.show_animation('{LED_animation}')\r`
            }
        },
        "handler": this.funcs.BLOCK_1570879365614
    },
    {
        "opcode": "haloboard_show_ring_effect",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 36,
        "arguments": {
            "LED_animation": {
                "type": "fieldMenu",
                "defaultValue": "rainbow",
                "menu": "HALOBOARD_SHOW_RING_EFFECT_LED_ANIMATION"
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
                "code": `halo.led.show_animation('{LED_animation}')\r`
            }
        },
        "handler": this.funcs.haloboard_show_ring_effect
    },
    {
        "opcode": "haloboard_show_ring_color",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ledRing": extFacePanels['9d03c0b1']
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.haloboardShowRingColorCodesCode
            }
        },
        "handler": this.funcs.haloboard_show_ring_color
    },
    {
        "opcode": "haloboard_show_rotation_color",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "rotate": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('haloboard/imgs/be012f84b110491c960518767f54a4bd.svg', 'haloboard')
            },
            "led_number": {
                "type": "number",
                "defaultValue": 1
            },
            "ledRing": extFacePanels['9d03c0b1']
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.haloboardShowRotationColorCodesCode
            }
        },
        "handler": this.funcs.haloboard_show_rotation_color
    },
    {
        "opcode": "haloboard_show_all_leds",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
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
                "code": this.funcs.haloboardShowAllLedsCodesCode
            }
        },
        "handler": this.funcs.haloboard_show_all_leds
    },
    {
        "opcode": "haloboard_show_all_leds_with_lightness",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "color_1": {
                "type": "color",
                "defaultValue": "#d0021b"
            },
            "lightness": {
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
            "python": {
                "code": this.funcs.haloboardShowAllLedsWithLightnessCodesCode
            }
        },
        "handler": this.funcs.haloboard_show_all_leds_with_lightness
    },
    {
        "opcode": "haloboard_off_all_leds",
        "blockType": "command",
        "checkboxInFlyout": false,
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
                "code": `halo.led.off_all()`
            }
        },
        "handler": this.funcs.haloboard_off_all_leds
    },
    {
        "opcode": "haloboard_show_all_leds_with_rgb",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
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
                "code": `halo.led.show_all({r}, {g}, {b})`
            }
        },
        "handler": this.funcs.haloboard_show_all_leds_with_rgb
    },
    {
        "opcode": "haloboard_show_single_led_with_rgb",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "led_id": {
                "type": "number",
                "defaultValue": 1
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
                "code": `halo.led.show_single({led_id}, {r}, {g}, {b})`
            }
        },
        "handler": this.funcs.haloboard_show_single_led_with_rgb
    },
    {
        "opcode": "haloboard_off_single_led",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "led_id": {
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
                "code": `halo.led.off_single({led_id})`
            }
        },
        "handler": this.funcs.haloboard_off_single_led
    },
    {
        "opcode": "haloboard_show_percentage",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "percentage": {
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
            "python": {
                "code": `halo.led.ring_graph({percentage})`
            }
        },
        "handler": this.funcs.haloboard_show_percentage
    }
]);

export default blocks;