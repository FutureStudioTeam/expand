const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1616555651965",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "67",
                "menu": "BLOCK_1616555651965_PORT"
            },
            "FACE_PANEL": extFacePanels['1339ce76']
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.block1616555651965CodesCode,
                "sections": {
                    "lib": this.funcs.block1616555651965CodesLib,
                    "setup": this.funcs.block1616555651965CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1616555651965
    },
    {
        "opcode": "BLOCK_1617797266050",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "67",
                "menu": "BLOCK_1616555651965_PORT"
            },
            "POS": {
                "type": "number",
                "defaultValue": 1
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
            "arduinoc": {
                "code": this.funcs.block1617797266050CodesCode,
                "sections": {
                    "lib": this.funcs.block1617797266050CodesLib,
                    "setup": this.funcs.block1617797266050CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1617797266050
    },
    {
        "opcode": "BLOCK_1617797266243",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "67",
                "menu": "BLOCK_1616555651965_PORT"
            },
            "POS": {
                "type": "number",
                "defaultValue": 1
            },
            "R": {
                "type": "number",
                "defaultValue": 255
            },
            "G": {
                "type": "number",
                "defaultValue": 0
            },
            "B": {
                "type": "number",
                "defaultValue": 0
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.block1617797266243CodesCode,
                "sections": {
                    "lib": this.funcs.block1617797266243CodesLib,
                    "setup": this.funcs.block1617797266243CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1617797266243
    },
    {
        "opcode": "BLOCK_1617797266441",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "67",
                "menu": "BLOCK_1616555651965_PORT"
            },
            "POS": {
                "type": "number",
                "defaultValue": 1
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.block1617797266441CodesCode,
                "sections": {
                    "lib": this.funcs.block1617797266441CodesLib,
                    "setup": this.funcs.block1617797266441CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1617797266441
    },
    {
        "opcode": "BLOCK_1617797266298",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "67",
                "menu": "BLOCK_1616555651965_PORT"
            },
            "COLOR": {
                "type": "color",
                "defaultValue": "#7ED321"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.block1617797266298CodesCode,
                "sections": {
                    "lib": this.funcs.block1617797266298CodesLib,
                    "setup": this.funcs.block1617797266298CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1617797266298
    },
    {
        "opcode": "BLOCK_1617797266352",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "67",
                "menu": "BLOCK_1616555651965_PORT"
            },
            "R": {
                "type": "number",
                "defaultValue": 255
            },
            "G": {
                "type": "number",
                "defaultValue": 0
            },
            "B": {
                "type": "number",
                "defaultValue": 0
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.block1617797266352CodesCode,
                "sections": {
                    "lib": this.funcs.block1617797266352CodesLib,
                    "setup": this.funcs.block1617797266352CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1617797266352
    }
]);

export default blocks;