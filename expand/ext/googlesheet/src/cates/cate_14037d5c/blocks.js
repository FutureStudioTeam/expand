const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1552896553516",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "url": {
                "type": "string",
                "defaultValue": "https://docs.google.com/spreadsheets"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.block1552896553516
    },
    {
        "opcode": "BLOCK_1552896647935",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "col": {
                "type": "number",
                "defaultValue": 1
            },
            "row": {
                "type": "number",
                "defaultValue": 1
            },
            "value": {
                "type": "string",
                "defaultValue": "50"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.block1552896647935
    },
    {
        "opcode": "BLOCK_1552896647936",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "col": {
                "type": "number",
                "defaultValue": 1
            },
            "row": {
                "type": "number",
                "defaultValue": 1
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.block1552896647936
    }
]);

export default blocks;