const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1565078276055",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1565078276055_INDEX"
            },
            "color_2": {
                "type": "color",
                "defaultValue": "#ef1625"
            },
            "number_3": {
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
                "code": this.funcs.block1565078276055CodesCode,
                "sections": {
                    "import": ['mbuild', 'time']
                }
            }
        },
        "handler": this.funcs.BLOCK_1565078276055
    },
    {
        "opcode": "BLOCK_1565078427193",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1565078276055_INDEX"
            },
            "color_2": {
                "type": "color",
                "defaultValue": "#ef1625"
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
                "code": this.funcs.block1565078427193CodesCode,
                "sections": {
                    "import": ['mbuild', 'time']
                }
            }
        },
        "handler": this.funcs.BLOCK_1565078427193
    },
    {
        "opcode": "BLOCK_1565078500887",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1565078276055_INDEX"
            },
            "r": {
                "type": "number",
                "defaultValue": 255
            },
            "g": {
                "type": "number",
                "defaultValue": 0
            },
            "b": {
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
                "code": `mbuild.rgb_led.show({r}, {g}, {b}, {index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1565078500887
    },
    {
        "opcode": "BLOCK_1565078533128",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1565078276055_INDEX"
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
                "code": `mbuild.rgb_led.off({index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1565078533128
    },
    {
        "opcode": "BLOCK_1569143379816",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1565078276055_INDEX"
            },
            "color": {
                "type": "fieldMenu",
                "defaultValue": "red",
                "menu": "BLOCK_1569143379816_COLOR"
            },
            "value": {
                "type": "number",
                "defaultValue": 255
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
                "code": `mbuild.rgb_led.set_{color}({value}, {index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1569143379816
    },
    {
        "opcode": "BLOCK_1565078755274",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1565078276055_INDEX"
            },
            "color": {
                "type": "fieldMenu",
                "defaultValue": "red",
                "menu": "BLOCK_1569143379816_COLOR"
            },
            "value": {
                "type": "number",
                "defaultValue": 255
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
                "code": `mbuild.rgb_led.change_{color}({value}, {index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1565078755274
    },
    {
        "opcode": "BLOCK_1565078777662",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1565078276055_INDEX"
            },
            "color": {
                "type": "fieldMenu",
                "defaultValue": "red",
                "menu": "BLOCK_1569143379816_COLOR"
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
                "code": `mbuild.rgb_led.get_{color}({index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1565078777662
    }
]);

export default blocks;