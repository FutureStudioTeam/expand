const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_2565095026870",
        "blockType": "button",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 36,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_2565095026870
    },
    {
        "opcode": "BLOCK_2565095026871",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "INDEX": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_2565095026871_INDEX"
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
                "code": `mbuild.smart_camera.set_mode(\"color\", {INDEX})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_2565095026871
    },
    {
        "opcode": "BLOCK_2565095026872",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "INDEX": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_2565095026871_INDEX"
            },
            "SIGN": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_2565095026872_SIGN"
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
                "code": `mbuild.smart_camera.learn({SIGN}, \"until_button\", {INDEX})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_2565095026872
    },
    {
        "opcode": "BLOCK_1561689384426",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "fieldMenu_3": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_2565095026871_INDEX"
            },
            "fieldMenu_2": {
                "type": "fieldMenu",
                "defaultValue": "中心",
                "menu": "BLOCK_1561689384426_FIELDMENU_2"
            },
            "fieldMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "饱和度",
                "menu": "BLOCK_1561689384426_FIELDMENU_1"
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
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1561689384426
    },
    {
        "opcode": "BLOCK_2565095026873",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "INDEX": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_2565095026871_INDEX"
            },
            "SIGN": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_2565095026872_SIGN"
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
                "code": `mbuild.smart_camera.detect_sign({SIGN}, {INDEX})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_2565095026873
    },
    {
        "opcode": "BLOCK_2565095026874",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "INDEX": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_2565095026871_INDEX"
            },
            "SIGN": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_2565095026872_SIGN"
            },
            "LOCATION": {
                "type": "fieldMenu",
                "defaultValue": "middle",
                "menu": "BLOCK_2565095026874_LOCATION"
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
                "code": `mbuild.smart_camera.detect_sign_location({SIGN}, '{LOCATION}', {INDEX})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_2565095026874
    },
    {
        "opcode": "BLOCK_2565095026875",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "INDEX": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_2565095026871_INDEX"
            },
            "SIGN": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_2565095026872_SIGN"
            },
            "PARA": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "BLOCK_2565095026875_PARA"
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
                "code": `mbuild.smart_camera.get_sign_{PARA}({SIGN}, {INDEX})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_2565095026875
    },
    {
        "opcode": "BLOCK_2565095026879",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "INDEX": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_2565095026871_INDEX"
            },
            "PARA": {
                "type": "fieldMenu",
                "defaultValue": "open_light",
                "menu": "BLOCK_2565095026879_PARA"
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
                "code": `mbuild.smart_camera.{PARA}({INDEX})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_2565095026879
    },
    {
        "opcode": "BLOCK_25650950268711",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "INDEX": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_2565095026871_INDEX"
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
                "code": `mbuild.smart_camera.reset({INDEX})\r\ntime.sleep(5)`,
                "sections": {
                    "import": ['mbuild', 'time']
                }
            }
        },
        "handler": this.funcs.BLOCK_25650950268711
    }
]);

export default blocks;