const blocks = (extFacePanels) => ([{
        "opcode": "fingertip_piano_set_rgb_clolor",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "color": {
                "type": "color",
                "defaultValue": "#7ED321"
            },
            "lightness": {
                "type": "number",
                "defaultValue": 50
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.fingertip_piano_set_rgb_clolor
    },
    {
        "opcode": "fingertip_piano_reset_rgb",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.fingertip_piano_reset_rgb
    },
    {
        "opcode": "fingertip_piano_set_rgb_value",
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
            "mblockweb"
        ],
        "handler": this.funcs.fingertip_piano_set_rgb_value
    }
]);

export default blocks;