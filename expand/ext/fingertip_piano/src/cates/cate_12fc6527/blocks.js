const blocks = (extFacePanels) => ([{
        "opcode": "fingertip_piano_detected_obstacle",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.fingertip_piano_detected_obstacle
    },
    {
        "opcode": "fingertip_piano_detected_obstacle_directon",
        "blockType": "boolean",
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
        "handler": this.funcs.fingertip_piano_detected_obstacle_directon
    },
    {
        "opcode": "fingertip_piano_get_obstacle_distance",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.fingertip_piano_get_obstacle_distance
    },
    {
        "opcode": "fingertip_piano_get_ir_sensor_value",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.fingertip_piano_get_ir_sensor_value
    },
    {
        "opcode": "fingertip_piano_get_gesture",
        "blockType": "boolean",
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
        "handler": this.funcs.fingertip_piano_get_gesture
    }
]);

export default blocks;