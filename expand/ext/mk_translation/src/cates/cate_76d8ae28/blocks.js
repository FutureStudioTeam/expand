const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1597824372741",
        "blockType": "string",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "text": {
                "type": "string",
                "defaultValue": "你好"
            },
            "lang": {
                "type": "fieldMenu",
                "defaultValue": "zh",
                "menu": "BLOCK_1597824372741_LANG"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1597824372741
    },
    {
        "opcode": "BLOCK_1597825564660",
        "blockType": "string",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockweb",
            "mblockpc"
        ],
        "handler": this.funcs.BLOCK_1597825564660
    }
]);

export default blocks;