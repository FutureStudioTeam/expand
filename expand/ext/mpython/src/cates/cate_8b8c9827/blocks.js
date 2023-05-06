const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1597650884381",
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
                "code": `rgb.write()`
            }
        },
        "handler": this.funcs.BLOCK_1597650884381
    },
    {
        "opcode": "BLOCK_1597650999469",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "INDEX": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "BLOCK_1597650999469_INDEX"
            },
            "COLOR": {
                "type": "color",
                "defaultValue": "#7ED321"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": this.funcs.block1597650999469CodesCode,
                "sections": {
                    "declare": `brightness=9 # default lightness`
                }
            }
        },
        "handler": this.funcs.BLOCK_1597650999469
    },
    {
        "opcode": "BLOCK_1597653998465",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "INDEX": {
                "type": "fieldMenu",
                "defaultValue": "-1",
                "menu": "BLOCK_1597653998465_INDEX"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": this.funcs.block1597653998465CodesCode
            }
        },
        "handler": this.funcs.BLOCK_1597653998465
    },
    {
        "opcode": "BLOCK_1597654403315",
        "blockType": "string",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "R": {
                "type": "number",
                "defaultValue": 255
            },
            "G": {
                "type": "number",
                "defaultValue": 255
            },
            "B": {
                "type": "number",
                "defaultValue": 255
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `({R}* brightness//9,{G}* brightness//9,{B}* brightness//9)`
            }
        },
        "handler": this.funcs.BLOCK_1597654403315
    },
    {
        "opcode": "BLOCK_1597654520081",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "LEVEL": {
                "type": "fieldMenu",
                "defaultValue": "9",
                "menu": "BLOCK_1597654520081_LEVEL"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `brightness={LEVEL}`,
                "sections": {
                    "declare": `brightness=9 # default lightness`
                }
            }
        },
        "handler": this.funcs.BLOCK_1597654520081
    },
    {
        "opcode": "BLOCK_1597654689811",
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
                "code": `brightness`,
                "sections": {
                    "declare": `brightness=9 # default lightness`
                }
            }
        },
        "handler": this.funcs.BLOCK_1597654689811
    }
]);

export default blocks;