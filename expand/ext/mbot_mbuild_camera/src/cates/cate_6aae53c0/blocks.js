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
        "opcode": "BLOCK_1566199596519",
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
                "code": `MeCamera_/*{PORT}*/.setCameraMode(CCC_MODE);`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.block1566199596519CodesLib,
                    "setup": this.funcs.block1566199596519CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1566199596519
    },
    {
        "opcode": "BLOCK_1566200061809",
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
            "SIG": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1566200061809_SIG"
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
                "code": `MeCamera_/*{PORT}*/.startStudyCCC(/*{SIG}*/, 0);`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.block1566200061809CodesLib,
                    "setup": this.funcs.block1566200061809CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1566200061809
    },
    {
        "opcode": "BLOCK_1566200086536",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "饱和度",
                "menu": "BLOCK_1566200086536_FIELDMENU_1"
            },
            "fieldMenu_2": {
                "type": "fieldMenu",
                "defaultValue": "中心",
                "menu": "BLOCK_1566200086536_FIELDMENU_2"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.BLOCK_1566200086536
    },
    {
        "opcode": "BLOCK_1566200107336",
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
                "code": this.funcs.block1566200107336CodesCode,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.block1566200107336CodesLib,
                    "setup": this.funcs.block1566200107336CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1566200107336
    },
    {
        "opcode": "BLOCK_1566200125249",
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
                "defaultValue": "1",
                "menu": "BLOCK_1566200125249_LOCATION"
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
                "code": `getCCC_location(/*{SIG}*/, /*{LOCATION}*/, MeCamera_/*{PORT}*/.getCCCValue(/*{SIG}*/, 0), MeCamera_/*{PORT}*/.getCCCValue(/*{SIG}*/, 1))`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.block1566200125249CodesLib,
                    "declare": this.funcs.block1566200125249CodesDeclare,
                    "setup": this.funcs.block1566200125249CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1566200125249
    },
    {
        "opcode": "BLOCK_1566200149400",
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
            "SIG": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1566200061809_SIG"
            },
            "CCCINFO": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "BLOCK_1566200149400_CCCINFO"
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
                "code": `MeCamera_/*{PORT}*/.getCCCValue(/*{SIG}*/, /*{CCCINFO}*/)`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.block1566200149400CodesLib,
                    "setup": this.funcs.block1566200149400CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1566200149400
    },
    {
        "opcode": "BLOCK_1566200169775",
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
            "STATE": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1566200169775_STATE"
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
                "code": `MeCamera_/*{PORT}*/.setLED(/*{STATE}*/);`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.block1566200169775CodesLib,
                    "setup": this.funcs.block1566200169775CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1566200169775
    },
    {
        "opcode": "BLOCK_1566200199500",
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
                "code": `MeCamera_/*{PORT}*/.startStudyCCC(8, 5);`,
                "sections": {
                    "include": [
                        "\"src/MeCamera.h\""
                    ],
                    "lib": this.funcs.block1566200199500CodesLib,
                    "setup": this.funcs.block1566200199500CodesSetup
                }
            }
        },
        "handler": this.funcs.BLOCK_1566200199500
    }
]);

export default blocks;