const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1567596489377",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1566199596519_PORT"
            },
            "KP": {
                "type": "number",
                "defaultValue": 0.5
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.block1567596489377CodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.block1567596489377CodesLib,
                    "setup": this.funcs.block1567596489377CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1567596489377
    },
    {
        "opcode": "BLOCK_1567596489390",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1566199596519_PORT"
            },
            "SIG": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1566200061809_SIG"
            },
            "LOCATION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "BLOCK_1566200305130_BARCODEINFO"
            },
            "NUMBER": {
                "type": "number",
                "defaultValue": 150
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.block1567596489390CodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.block1567596489390CodesLib,
                    "setup": this.funcs.block1567596489390CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1567596489390
    },
    {
        "opcode": "BLOCK_1567596489391",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1566199596519_PORT"
            },
            "BARCODE": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1566200281367_BARCODE"
            },
            "LOCATION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "BLOCK_1566200305130_BARCODEINFO"
            },
            "NUMBER": {
                "type": "number",
                "defaultValue": 150
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.block1567596489391CodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.block1567596489391CodesLib,
                    "setup": this.funcs.block1567596489391CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1567596489391
    },
    {
        "opcode": "BLOCK_1567596489379",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1566199596519_PORT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `MeCamera_/*{PORT}*/.getFollowVectorValue()`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.block1567596489379CodesLib,
                    "setup": this.funcs.block1567596489379CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1567596489379
    },
    {
        "opcode": "BLOCK_1567596489392",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1566199596519_PORT"
            },
            "SIG": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1566200061809_SIG"
            },
            "LOCATION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "BLOCK_1566200305130_BARCODEINFO"
            },
            "NUMBER": {
                "type": "number",
                "defaultValue": 150
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.block1567596489392CodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.block1567596489392CodesLib,
                    "setup": this.funcs.block1567596489392CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1567596489392
    },
    {
        "opcode": "BLOCK_1567596489393",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1566199596519_PORT"
            },
            "BARCODE": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1566200281367_BARCODE"
            },
            "LOCATION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "BLOCK_1566200305130_BARCODEINFO"
            },
            "NUMBER": {
                "type": "number",
                "defaultValue": 150
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.block1567596489393CodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.block1567596489393CodesLib,
                    "setup": `MeCamera_/*{PORT}*/.begin();`
                }
            }
        },
        "handler": this.funcs.BLOCK_1567596489393
    }
]);

export default blocks;