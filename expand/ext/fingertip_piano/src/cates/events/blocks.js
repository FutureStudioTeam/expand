const blocks = (extFacePanels) => ([{
        "opcode": "event_whenbroadcastreceived",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "BROADCAST_OPTION": {
                "type": "inputVariable",
                "defaultValue": ""
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ]
    },
    {
        "opcode": "event_broadcast",
        "blockType": "command",
        "checkboxInFlyout": false,
        "gap": 12,
        "arguments": {
            "BROADCAST_INPUT": {
                "type": "inputVariable"
            }
        },
        "branchCount": 0,
        "codes": {
            "python": {
                "code": `broadcast('{BROADCAST_INPUT}')`
            }
        }
    },
    {
        "opcode": "event_broadcastandwait",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "BROADCAST_INPUT": {
                "type": "inputVariable",
                "defaultValue": ""
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ]
    },
    {
        "opcode": "fingertip_piano_obstacle_event",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.fingertip_piano_obstacle_event
    },
    {
        "opcode": "fingertip_piano_detected_obstacle_event",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "attitude": {
                "type": "fieldMenu",
                "defaultValue": "close",
                "menu": "FINGERTIP_PIANO_DETECTED_OBSTACLE_DIRECTON_ATTITUDE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.fingertip_piano_detected_obstacle_event
    },
    {
        "opcode": "fingertip_piano_get_obstacle_event",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "distance": {
                "type": "number",
                "defaultValue": 50
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.fingertip_piano_get_obstacle_event
    },
    {
        "opcode": "fingertip_piano_touchpad_event",
        "blockType": "hat",
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
        "handler": this.funcs.fingertip_piano_touchpad_event
    },
    {
        "opcode": "fingertip_piano_button_event",
        "blockType": "hat",
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
        "handler": this.funcs.fingertip_piano_button_event
    },
    {
        "opcode": "fingertip_piano_joystick_event",
        "blockType": "hat",
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
        "handler": this.funcs.fingertip_piano_joystick_event
    },
    {
        "opcode": "fingertip_piano_gesture_event",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "attitude": {
                "type": "fieldMenu",
                "defaultValue": "up",
                "menu": "FINGERTIP_PIANO_GET_GESTURE_ATTITUDE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.fingertip_piano_gesture_event
    }
]);

export default blocks;