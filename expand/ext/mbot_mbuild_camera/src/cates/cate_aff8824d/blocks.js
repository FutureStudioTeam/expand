const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1566200222835",
        "blockType": "button",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 36,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1566200222835
    },
    {
        "opcode": "BLOCK_1566200260586",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
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
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": `MeCamera_/*{PORT}*/.setCameraMode(LINE_MODE);`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.block1566200260586CodesLib,
                    "setup": this.funcs.block1566200260586CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1566200260586
    },
    {
        "opcode": "BLOCK_1566200281367",
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
                "code": this.funcs.block1566200281367CodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.block1566200281367CodesLib,
                    "setup": this.funcs.block1566200281367CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1566200281367
    },
    {
        "opcode": "BLOCK_1566200305130",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
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
            "BARCODEINFO": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "BLOCK_1566200305130_BARCODEINFO"
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
                "code": `MeCamera_/*{PORT}*/.getBarCodeValue(/*{BARCODE}*/, /*{BARCODEINFO}*/)`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.block1566200305130CodesLib,
                    "setup": this.funcs.block1566200305130CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1566200305130
    },
    {
        "opcode": "BLOCK_1566200324089",
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
            "LINEINFO": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "BLOCK_1566200324089_LINEINFO"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockapp",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `MeCamera_/*{PORT}*/.getVectorValue(/*{LINEINFO}*/)`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.block1566200324089CodesLib,
                    "setup": this.funcs.block1566200324089CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1566200324089
    },
    {
        "opcode": "BLOCK_1566200343169",
        "blockType": "boolean",
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
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.block1566200343169CodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.block1566200343169CodesLib,
                    "setup": this.funcs.block1566200343169CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1566200343169
    },
    {
        "opcode": "BLOCK_1566200380110",
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
            "COORDINATES": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "BLOCK_1566200305130_BARCODEINFO"
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
                "code": `MeCamera_/*{PORT}*/.getIntersectionValue(/*{COORDINATES}*/)`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.block1566200380110CodesLib,
                    "setup": this.funcs.block1566200380110CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1566200380110
    },
    {
        "opcode": "BLOCK_1566200395762",
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
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": `MeCamera_/*{PORT}*/.getIntersectionValue(2)`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.block1566200395762CodesLib,
                    "setup": this.funcs.block1566200395762CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1566200395762
    },
    {
        "opcode": "BLOCK_1566200411758",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1566199596519_PORT"
            },
            "NUMBER": {
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
                "code": this.funcs.block1566200411758CodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.block1566200411758CodesLib,
                    "setup": this.funcs.block1566200411758CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1566200411758
    },
    {
        "opcode": "BLOCK_1566200440316",
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
            "LINEMODE": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "BLOCK_1566200440316_LINEMODE"
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
                "code": `MeCamera_/*{PORT}*/.setLineMode(/*{LINEMODE}*/);`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.block1566200440316CodesLib,
                    "setup": this.funcs.block1566200440316CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1566200440316
    },
    {
        "opcode": "BLOCK_1566200454757",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1566199596519_PORT"
            },
            "ANGLE": {
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
                "code": `MeCamera_/*{PORT}*/.setNextTurnAngle(/*{ANGLE}*/);`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.block1566200454757CodesLib,
                    "setup": this.funcs.block1566200454757CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1566200454757
    },
    {
        "opcode": "BLOCK_1566200474887",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": true,
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
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": `MeCamera_/*{PORT}*/.getNextTurnAngle()`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.block1566200474887CodesLib,
                    "setup": this.funcs.block1566200474887CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1566200474887
    }
]);

export default blocks;