const blocks = (extFacePanels) => ([{
        "opcode": "BT_CONTROLLER_BUTTON_PRESSED",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "BUTTON": {
                "type": "fieldMenu",
                "defaultValue": "N1",
                "menu": "BT_CONTROLLER_BUTTON_PRESSED_BUTTON"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `gamepad.is_key_pressed(\"{BUTTON}\")`,
                "sections": {
                    "from": `from mbuild import gamepad`
                }
            }
        },
        "handler": this.funcs.BT_CONTROLLER_BUTTON_PRESSED
    },
    {
        "opcode": "BT_CONTROLLER_JOYSTICK",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "POSITION": {
                "type": "fieldMenu",
                "defaultValue": "Lx",
                "menu": "BT_CONTROLLER_JOYSTICK_POSITION"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `gamepad.get_joystick(\"{POSITION}\")`,
                "sections": {
                    "from": `from mbuild import gamepad`
                }
            }
        },
        "handler": this.funcs.BT_CONTROLLER_JOYSTICK
    }
]);

export default blocks;