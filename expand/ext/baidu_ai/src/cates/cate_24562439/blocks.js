const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1565074256065",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "type": {
                "type": "fieldMenu",
                "defaultValue": "lexer",
                "menu": "BLOCK_1565074256065_TYPE"
            },
            "text": {
                "type": "string",
                "defaultValue": "童心制物，让更多人享受创造的乐趣。"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1565074256065
    },
    {
        "opcode": "BLOCK_1565077155104",
        "blockType": "string",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "number": {
                "type": "number",
                "defaultValue": 1
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1565077155104
    },
    {
        "opcode": "BLOCK_1565077155103",
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
        "handler": this.funcs.BLOCK_1565077155103
    },
    {
        "opcode": "BLOCK_1565077353814",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "text_1": {
                "type": "string",
                "defaultValue": "北京"
            },
            "text_2": {
                "type": "string",
                "defaultValue": "上海"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1565077353814
    },
    {
        "opcode": "BLOCK_1565077448839",
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
        "handler": this.funcs.BLOCK_1565077448839
    }
]);

export default blocks;