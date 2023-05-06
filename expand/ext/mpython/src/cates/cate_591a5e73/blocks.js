const blocks = (extFacePanels) => ([{
    "opcode": "BLOCK_1597655719054",
    "blockType": "command",
    "checkboxInFlyout": false,
    "hidden": false,
    "gap": 12,
    "arguments": {
        "TEXT": {
            "type": "string",
            "defaultValue": "makeblock"
        }
    },
    "branchCount": 0,
    "platform": [
        "mblockpc",
        "mblockweb"
    ],
    "codes": {
        "python": {
            "code": `print({TEXT})`
        }
    },
    "handler": this.funcs.BLOCK_1597655719054
}]);

export default blocks;