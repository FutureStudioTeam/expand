const blocks = (extFacePanels) => ([{
        "opcode": "cyberpi_direction_key_press",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "middle",
                "menu": "CYBERPI_DIRECTION_KEY_PRESS_FIELDMENU_1"
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
                "code": `cyberpi.controller.is_press('{fieldMenu_1}')`
            }
        },
        "handler": this.funcs.cyberpi_direction_key_press
    },
    {
        "opcode": "cyberpi_direction_key_count",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "middle",
                "menu": "CYBERPI_DIRECTION_KEY_COUNT_FIELDMENU_1"
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
                "code": `cyberpi.controller.get_count('{fieldMenu_1}')`
            }
        },
        "handler": this.funcs.cyberpi_direction_key_count
    },
    {
        "opcode": "cyberpi_direction_key_count_reset",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "fieldMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "middle",
                "menu": "CYBERPI_DIRECTION_KEY_PRESS_FIELDMENU_1"
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
                "code": `cyberpi.controller.reset_count('{fieldMenu_1}')`
            }
        },
        "handler": this.funcs.cyberpi_direction_key_count_reset
    },
    {
        "opcode": "cyberpi_button_press",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "a",
                "menu": "CYBERPI_BUTTON_PRESS_FIELDMENU_1"
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
                "code": `cyberpi.controller.is_press('{fieldMenu_1}')`
            }
        },
        "handler": this.funcs.cyberpi_button_press
    },
    {
        "opcode": "cyberpi_button_count",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "a",
                "menu": "CYBERPI_BUTTON_COUNT_FIELDMENU_1"
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
                "code": `cyberpi.controller.get_count('{fieldMenu_1}')`
            }
        },
        "handler": this.funcs.cyberpi_button_count
    },
    {
        "opcode": "cyberpi_button_count_reset",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "fieldMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "a",
                "menu": "CYBERPI_BUTTON_PRESS_FIELDMENU_1"
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
                "code": `cyberpi.controller.reset_count('{fieldMenu_1}')`
            }
        },
        "handler": this.funcs.cyberpi_button_count_reset
    },
    {
        "opcode": "cyberpi_loudness",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": `cyberpi.get_loudness(\"maximum\")`
            }
        },
        "handler": this.funcs.cyberpi_loudness
    },
    {
        "opcode": "cyberpi_brightness",
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
                "code": `cyberpi.get_bri()`
            }
        },
        "handler": this.funcs.cyberpi_brightness
    },
    {
        "opcode": "cyberpi_timer_get",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": `cyberpi.timer.get()`
            }
        },
        "handler": this.funcs.cyberpi_timer_get
    },
    {
        "opcode": "cyberpi_timer_reset",
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
                "code": `cyberpi.timer.reset()`
            }
        },
        "handler": this.funcs.cyberpi_timer_reset
    },
    {
        "opcode": "cyberpi_name",
        "blockType": "string",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": `cyberpi.get_name()`
            }
        },
        "handler": this.funcs.cyberpi_name
    },
    {
        "opcode": "cyberpi_battery_macaddress_blename_and_so_on",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "fieldMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "battery",
                "menu": "CYBERPI_BATTERY_MACADDRESS_BLENAME_AND_SO_ON_FIELDMENU_1"
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
                "code": this.funcs.cyberpiBatteryMacaddressBlenameAndSoOnCodesCode
            }
        },
        "handler": this.funcs.cyberpi_battery_macaddress_blename_and_so_on
    }
]);

export default blocks;