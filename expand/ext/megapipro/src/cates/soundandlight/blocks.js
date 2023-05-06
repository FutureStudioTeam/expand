const blocks = (extFacePanels) => ([{
        "opcode": "led_module_set_color",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "SEG7_SHOW_NUMBER_PORT"
            },
            "LED_POSTION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "LED_MODULE_SET_COLOR_LED_POSTION"
            },
            "R": {
                "type": "number",
                "defaultValue": 255
            },
            "G": {
                "type": "number",
                "defaultValue": 255
            },
            "B": {
                "type": "number",
                "defaultValue": 255
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.ledModuleSetColorCodesCode,
                "sections": {
                    "lib": this.funcs.ledModuleSetColorCodesLib,
                    "setup": this.funcs.ledModuleSetColorCodesSetup
                }
            }
        },
        "handler": this.funcs.led_module_set_color
    },
    {
        "opcode": "led_strip_set_color",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "SEG7_SHOW_NUMBER_PORT"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "LED_STRIP_SET_COLOR_SLOT"
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
                "defaultValue": 255
            },
            "B": {
                "type": "number",
                "defaultValue": 255
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.ledStripSetColorCodesCode,
                "sections": {
                    "lib": this.funcs.ledStripSetColorCodesLib,
                    "setup": this.funcs.ledStripSetColorCodesSetup
                }
            }
        },
        "handler": this.funcs.led_strip_set_color
    }
]);

export default blocks;