const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1597646752853",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "BUTTON": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1597646752853_BUTTON"
            },
            "ACTION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "BLOCK_1597646752853_ACTION"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": this.funcs.block1597646752853CodesCode
            }
        },
        "handler": this.funcs.BLOCK_1597646752853
    },
    {
        "opcode": "BLOCK_1597648696547",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "BUTTON": {
                "type": "fieldMenu",
                "defaultValue": "P",
                "menu": "BLOCK_1597648696547_BUTTON"
            },
            "ACTION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "BLOCK_1597648696547_ACTION"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": this.funcs.block1597648696547CodesCode
            }
        },
        "handler": this.funcs.BLOCK_1597648696547
    },
    {
        "opcode": "BLOCK_1597648969425",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `sound.read()`
            }
        },
        "handler": this.funcs.BLOCK_1597648969425
    },
    {
        "opcode": "BLOCK_1597649030548",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `light.read()`
            }
        },
        "handler": this.funcs.BLOCK_1597649030548
    },
    {
        "opcode": "BLOCK_1597649059800",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "COORDINATE": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "BLOCK_1597649059800_COORDINATE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `accelerometer.get_{COORDINATE}()*1000`
            }
        },
        "handler": this.funcs.BLOCK_1597649059800
    }
]);

export default blocks;