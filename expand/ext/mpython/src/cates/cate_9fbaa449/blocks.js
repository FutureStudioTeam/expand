const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1597649283384",
        "blockType": "command",
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
                "code": `oled.show()`
            }
        },
        "handler": this.funcs.BLOCK_1597649283384
    },
    {
        "opcode": "BLOCK_1597649387742",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "TEXT": {
                "type": "string",
                "defaultValue": "makeblock"
            },
            "X": {
                "type": "number",
                "defaultValue": 42
            },
            "Y": {
                "type": "number",
                "defaultValue": 22
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `oled.DispChar({TEXT}, {X}, {Y})`
            }
        },
        "handler": this.funcs.BLOCK_1597649387742
    },
    {
        "opcode": "BLOCK_1597649723544",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "COLOR": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "BLOCK_1597649723544_COLOR"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `oled.fill({COLOR})`
            }
        },
        "handler": this.funcs.BLOCK_1597649723544
    },
    {
        "opcode": "BLOCK_1597650017255",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "X": {
                "type": "number",
                "defaultValue": 0
            },
            "Y": {
                "type": "number",
                "defaultValue": 0
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `oled.pixel({X},{Y},1)`
            }
        },
        "handler": this.funcs.BLOCK_1597650017255
    },
    {
        "opcode": "BLOCK_1597650081439",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "X1": {
                "type": "number",
                "defaultValue": 0
            },
            "Y1": {
                "type": "number",
                "defaultValue": 0
            },
            "X2": {
                "type": "number",
                "defaultValue": 0
            },
            "Y2": {
                "type": "number",
                "defaultValue": 0
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `oled.line({X1},{Y1},{X2},{Y2},1)`
            }
        },
        "handler": this.funcs.BLOCK_1597650081439
    },
    {
        "opcode": "BLOCK_1597650278342",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ACTION": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1597650278342_ACTION"
            },
            "X": {
                "type": "number",
                "defaultValue": 0
            },
            "Y": {
                "type": "number",
                "defaultValue": 0
            },
            "WIDTH": {
                "type": "number",
                "defaultValue": 0
            },
            "HEIGHT": {
                "type": "number",
                "defaultValue": 0
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `oled.{{this.ACTION == 1?'fill_rect':'rect'}}({X},{Y},{WIDTH},{HEIGHT},1)`
            }
        },
        "handler": this.funcs.BLOCK_1597650278342
    }
]);

export default blocks;