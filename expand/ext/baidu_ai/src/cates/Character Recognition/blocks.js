const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1561624758631",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "time": {
                "type": "fieldMenu",
                "defaultValue": "2",
                "menu": "BLOCK_1561624758631_TIME"
            },
            "langType": {
                "type": "fieldMenu",
                "defaultValue": "CHN_ENG",
                "menu": "BLOCK_1561624758631_LANGTYPE"
            }
        },
        "branchCount": 0,
        "platform": [],
        "handler": this.funcs.BLOCK_1561624758631
    },
    {
        "opcode": "BLOCK_1561625370451",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "url": {
                "type": "string",
                "defaultValue": "https://mblock-extend.oss-cn-shenzhen.aliyuncs.com/prod/makeblock.png"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1561625370451
    },
    {
        "opcode": "BLOCK_1561625486745",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "time": {
                "type": "fieldMenu",
                "defaultValue": "2",
                "menu": "BLOCK_1561624758631_TIME"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1561625486745
    },
    {
        "opcode": "BLOCK_1561625681766",
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
        "handler": this.funcs.BLOCK_1561625681766
    },
    {
        "opcode": "BLOCK_1575254974753",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "time": {
                "type": "fieldMenu",
                "defaultValue": "2",
                "menu": "BLOCK_1561624758631_TIME"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1575254974753
    },
    {
        "opcode": "BLOCK_1575255036017",
        "blockType": "string",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "type": {
                "type": "fieldMenu",
                "defaultValue": "number",
                "menu": "BLOCK_1575255036017_TYPE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1575255036017
    }
]);

export default blocks;