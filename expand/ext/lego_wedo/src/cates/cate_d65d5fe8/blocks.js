const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1599103209202",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1599103209202
    },
    {
        "opcode": "BLOCK_1599103209359",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "TILT_DIRECTION_ANY": {
                "type": "fieldMenu",
                "defaultValue": "any",
                "menu": "BLOCK_1599103209359_TILT_DIRECTION_ANY"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1599103209359
    },
    {
        "opcode": "BLOCK_1599103209450",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "TILT_DIRECTION": {
                "type": "fieldMenu",
                "defaultValue": "up",
                "menu": "BLOCK_1599103209450_TILT_DIRECTION"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1599103209450
    }
]);

export default blocks;