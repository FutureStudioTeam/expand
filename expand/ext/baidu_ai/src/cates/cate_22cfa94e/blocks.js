const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1560423221767",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "type": {
                "type": "fieldMenu",
                "defaultValue": "1536",
                "menu": "BLOCK_1560423221767_TYPE"
            },
            "time": {
                "type": "fieldMenu",
                "defaultValue": "2",
                "menu": "BLOCK_1560423221767_TIME"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1560423221767
    },
    {
        "opcode": "BLOCK_1560423400710",
        "blockType": "string",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1560423400710
    },
    {
        "opcode": "say_text",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "text": {
                "type": "string",
                "defaultValue": "makeblock  童心制物"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.say_text
    },
    {
        "opcode": "BLOCK_1560423463409",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "text": {
                "type": "string",
                "defaultValue": "makeblock  童心制物"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1560423463409
    },
    {
        "opcode": "BLOCK_1560424027453",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "per": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1560424027453_PER"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1560424027453
    },
    {
        "opcode": "BLOCK_1560424411359",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "type": {
                "type": "fieldMenu",
                "defaultValue": "spd",
                "menu": "BLOCK_1560424411359_TYPE"
            },
            "num": {
                "type": "fieldMenu",
                "defaultValue": "5",
                "menu": "BLOCK_1560424411359_NUM"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1560424411359
    }
]);

export default blocks;