const blocks = (extFacePanels) => ([{
        "opcode": "fingertip_piano_is_touchpad_touched",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "channel": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "FINGERTIP_PIANO_IS_TOUCHPAD_TOUCHED_CHANNEL"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.fingertip_piano_is_touchpad_touched
    },
    {
        "opcode": "fingertip_piano_is_button_pressed",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "button": {
                "type": "fieldMenu",
                "defaultValue": "A",
                "menu": "FINGERTIP_PIANO_IS_BUTTON_PRESSED_BUTTON"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.fingertip_piano_is_button_pressed
    },
    {
        "opcode": "fingertip_piano_get_button_count",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "button": {
                "type": "fieldMenu",
                "defaultValue": "A",
                "menu": "FINGERTIP_PIANO_IS_BUTTON_PRESSED_BUTTON"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.fingertip_piano_get_button_count
    },
    {
        "opcode": "fingertip_piano_reset_button_count",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "button": {
                "type": "fieldMenu",
                "defaultValue": "A",
                "menu": "FINGERTIP_PIANO_IS_BUTTON_PRESSED_BUTTON"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.fingertip_piano_reset_button_count
    },
    {
        "opcode": "fingertip_piano_is_joystick_moved",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "direction": {
                "type": "fieldMenu",
                "defaultValue": "up",
                "menu": "FINGERTIP_PIANO_IS_JOYSTICK_MOVED_DIRECTION"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.fingertip_piano_is_joystick_moved
    },
    {
        "opcode": "fingertip_piano_touchpad_value",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "channel": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "FINGERTIP_PIANO_IS_TOUCHPAD_TOUCHED_CHANNEL"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.fingertip_piano_touchpad_value
    }
]);

export default blocks;