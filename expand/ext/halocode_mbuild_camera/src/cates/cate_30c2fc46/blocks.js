const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_25650950268727",
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
            "NUM": {
                "type": "number",
                "defaultValue": 0.5
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
                "code": `mbuild.smart_camera.set_kp({NUM}, {INDEX})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_25650950268727
    },
    {
        "opcode": "BLOCK_25650950268728",
        "blockType": "number",
        "checkboxInFlyout": true,
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
            "COORD": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "BLOCK_25650950268713_COORD"
            },
            "NUM": {
                "type": "number",
                "defaultValue": 100
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
                "code": `mbuild.smart_camera.get_sign_diff_speed({SIGN}, '{COORD}', {NUM}, {INDEX})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_25650950268728
    },
    {
        "opcode": "BLOCK_25650950268730",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "INDEX": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_2565095026871_INDEX"
            },
            "LABEL": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_25650950268712_LABEL"
            },
            "COORD": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "BLOCK_25650950268713_COORD"
            },
            "NUM": {
                "type": "number",
                "defaultValue": 100
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
                "code": `mbuild.smart_camera.get_label_diff_speed({LABEL}, '{COORD}', {NUM}, {INDEX})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_25650950268730
    },
    {
        "opcode": "BLOCK_25650950268732",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
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
                "code": `mbuild.smart_camera.get_follow_vector_diff_speed({INDEX})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_25650950268732
    },
    {
        "opcode": "BLOCK_25650950268733",
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
            "COORD": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "BLOCK_25650950268713_COORD"
            },
            "NUM": {
                "type": "number",
                "defaultValue": 100
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
                "code": `mbuild.smart_camera.is_lock_sign({SIGN}, '{COORD}', {NUM}, {INDEX})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_25650950268733
    },
    {
        "opcode": "BLOCK_25650950268735",
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
            "LABEL": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_25650950268712_LABEL"
            },
            "COORD": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "BLOCK_25650950268713_COORD"
            },
            "NUM": {
                "type": "number",
                "defaultValue": 100
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
                "code": `mbuild.smart_camera.is_lock_label({LABEL}, '{COORD}', {NUM}, {INDEX})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_25650950268735
    },
    {
        "opcode": "BLOCK_1567922355409xxx",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
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
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1567922355409xxx
    }
]);

export default blocks;