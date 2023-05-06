const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1561630499729",
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
            "type": {
                "type": "fieldMenu",
                "defaultValue": "advancedGeneral",
                "menu": "BLOCK_1561630499729_TYPE"
            }
        },
        "branchCount": 0,
        "platform": [],
        "handler": this.funcs.BLOCK_1561630499729
    },
    {
        "opcode": "BLOCK_1561949535035",
        "blockType": "string",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [],
        "handler": this.funcs.BLOCK_1561949535035
    }
]);

export default blocks;