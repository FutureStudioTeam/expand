const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1559810784185",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1559810784185_INDEX"
            },
            "tp_num": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1559810784185_INDEX"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": `mbuild.multi_touch.is_active({tp_num}, {index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1559810784185
    },
    {
        "opcode": "BLOCK_1559811080887",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1559810784185_INDEX"
            },
            "sensitivity": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1559811080887_SENSITIVITY"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": `mbuild.multi_touch.set_sensitivity({sensitivity}, {index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1559811080887
    }
]);

export default blocks;