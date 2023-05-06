const blocks = (extFacePanels) => ([{
        "opcode": "runLed",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "lport": {
                "type": "fieldMenu",
                "defaultValue": "3",
                "menu": "RUNLED_LPORT"
            },
            "index": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "RUNLED_INDEX"
            },
            "color": {
                "type": "color",
                "defaultValue": "#ff0000"
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
                "code": this.funcs.runLedCodesCode,
                "sections": {
                    "lib": this.funcs.runLedCodesLib,
                    "setup": this.funcs.runLedCodesSetup
                }
            }
        },
        "handler": this.funcs.runLed
    },
    {
        "opcode": "BLOCK_1569571656649",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "lport": {
                "type": "fieldMenu",
                "defaultValue": "3",
                "menu": "RUNLED_LPORT"
            },
            "index": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "RUNLED_INDEX"
            },
            "value": {
                "type": "number",
                "defaultValue": 100
            },
            "value1": {
                "type": "number",
                "defaultValue": 0
            },
            "value2": {
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
                "code": this.funcs.block1569571656649CodesCode,
                "sections": {
                    "lib": this.funcs.block1569571656649CodesLib,
                    "setup": this.funcs.block1569571656649CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1569571656649
    },
    {
        "opcode": "BLOCK_1569572294998",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "normalPort": {
                "type": "fieldMenu",
                "defaultValue": "3",
                "menu": "RUNLED_LPORT"
            },
            "slot": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1569572294998_SLOT"
            },
            "color": {
                "type": "color",
                "defaultValue": "#ff0000"
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
                "code": this.funcs.block1569572294998CodesCode,
                "sections": {
                    "lib": this.funcs.block1569572294998CodesLib,
                    "setup": this.funcs.block1569572294998CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1569572294998
    },
    {
        "opcode": "BLOCK_1571019759214",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "normalPort": {
                "type": "fieldMenu",
                "defaultValue": "3",
                "menu": "RUNLED_LPORT"
            },
            "slot": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1569572294998_SLOT"
            },
            "index": {
                "type": "number",
                "defaultValue": 1
            },
            "color": {
                "type": "color",
                "defaultValue": "#ff0000"
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
                "code": this.funcs.block1571019759214CodesCode,
                "sections": {
                    "lib": this.funcs.block1571019759214CodesLib,
                    "setup": this.funcs.block1571019759214CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1571019759214
    },
    {
        "opcode": "runLedStrip",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "normalPort": {
                "type": "fieldMenu",
                "defaultValue": "3",
                "menu": "RUNLED_LPORT"
            },
            "slot": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1569572294998_SLOT"
            },
            "value": {
                "type": "number",
                "defaultValue": 100
            },
            "value1": {
                "type": "number",
                "defaultValue": 0
            },
            "value2": {
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
                "code": this.funcs.runLedStripCodesCode,
                "sections": {
                    "lib": this.funcs.runLedStripCodesLib,
                    "setup": this.funcs.runLedStripCodesSetup
                }
            }
        },
        "handler": this.funcs.runLedStrip
    },
    {
        "opcode": "BLOCK_1571022561858",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "normalPort": {
                "type": "fieldMenu",
                "defaultValue": "3",
                "menu": "RUNLED_LPORT"
            },
            "slot": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1569572294998_SLOT"
            },
            "index2": {
                "type": "number",
                "defaultValue": 1
            },
            "value": {
                "type": "number",
                "defaultValue": 100
            },
            "value1": {
                "type": "number",
                "defaultValue": 0
            },
            "value2": {
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
                "code": this.funcs.block1571022561858CodesCode,
                "sections": {
                    "lib": this.funcs.block1571022561858CodesLib,
                    "setup": this.funcs.block1571022561858CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1571022561858
    }
]);

export default blocks;