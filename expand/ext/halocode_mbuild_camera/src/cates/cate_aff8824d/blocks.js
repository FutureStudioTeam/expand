const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1565855617299",
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
                "code": `mbuild.smart_camera.set_mode(\"label\", {INDEX})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1565855617299
    },
    {
        "opcode": "BLOCK_2565095026871_1",
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
                "code": `mbuild.smart_camera.set_mode(\"line\", {INDEX})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_2565095026871_1
    },
    {
        "opcode": "BLOCK_25650950268712",
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
                "code": `mbuild.smart_camera.detect_label({LABEL}, {INDEX})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_25650950268712
    },
    {
        "opcode": "BLOCK_25650950268713",
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
            "LABEL": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_25650950268713_LABEL"
            },
            "COORD": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "BLOCK_25650950268713_COORD"
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
                "code": `mbuild.smart_camera.get_label_{COORD}({LABEL}, {INDEX})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_25650950268713
    },
    {
        "opcode": "BLOCK_25650950268723",
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
            "COORD": {
                "type": "fieldMenu",
                "defaultValue": "start_x",
                "menu": "BLOCK_25650950268723_COORD"
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
                "code": `mbuild.smart_camera.get_vector_{COORD}({INDEX})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_25650950268723
    },
    {
        "opcode": "BLOCK_25650950268715",
        "blockType": "boolean",
        "checkboxInFlyout": false,
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
                "code": `mbuild.smart_camera.detect_cross({INDEX})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_25650950268715
    },
    {
        "opcode": "BLOCK_25650950268716",
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
            "COORD": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "BLOCK_25650950268713_COORD"
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
                "code": `mbuild.smart_camera.get_cross_{COORD}({INDEX})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_25650950268716
    },
    {
        "opcode": "BLOCK_25650950268718",
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
                "code": `mbuild.smart_camera.get_cross_road({INDEX})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_25650950268718
    },
    {
        "opcode": "BLOCK_25650950268719",
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
            "NUM": {
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
            "python": {
                "code": `mbuild.smart_camera.get_cross_angle({NUM}, {INDEX})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_25650950268719
    },
    {
        "opcode": "BLOCK_25650950268720",
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
                "defaultValue": "black",
                "menu": "BLOCK_25650950268720_PARA"
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
                "code": `mbuild.smart_camera.set_line('{PARA}', {INDEX})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_25650950268720
    },
    {
        "opcode": "BLOCK_25650950268721",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "INDEX": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_2565095026871_INDEX"
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
            "python": {
                "code": `mbuild.smart_camera.set_vector_angle({ANGLE}, {INDEX})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_25650950268721
    },
    {
        "opcode": "BLOCK_25650950268722",
        "blockType": "number",
        "checkboxInFlyout": true,
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
                "code": `mbuild.smart_camera.get_vector_angle({INDEX})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_25650950268722
    }
]);

export default blocks;