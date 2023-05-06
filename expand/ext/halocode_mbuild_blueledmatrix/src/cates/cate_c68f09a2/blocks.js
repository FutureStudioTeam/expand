const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1550543294244",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1550543294244_INDEX"
            },
            "panel": extFacePanels['ca2ed3e0'],
            "time": {
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
                "code": this.funcs.block1550543294244CodesCode,
                "sections": {
                    "import": ['mbuild', 'time']
                }
            }
        },
        "handler": this.funcs.BLOCK_1550543294244
    },
    {
        "opcode": "BLOCK_1550543302075",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1550543294244_INDEX"
            },
            "face_panel": extFacePanels['ca2ed3e0']
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.block1550543302075CodesCode,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1550543302075
    },
    {
        "opcode": "BLOCK_1550543309462",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1550543294244_INDEX"
            },
            "face_panel": extFacePanels['ca2ed3e0'],
            "x": {
                "type": "number",
                "defaultValue": 0
            },
            "y": {
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
                "code": this.funcs.block1550543309462CodesCode,
                "sections": {
                    "import": ['mbuild'],
                    "lib": `def __panelInfoAdapter(info, pos_x, pos_y):\r\n    if pos_x > 15 or pos_x < -15 or pos_y > 7 or pos_y < -7:\r\n        return \"00000000000000000000000000000000\";\r\n        \r\n    if pos_y < 0:\r\n        infoValue = [0] * 16\r\n        for i in range(32):\r\n            if i % 2 != 0:\r\n                infoValue[(i - 1) // 2] = int(info[i - 1: i + 1], 16)\r\n        for i in range(16):\r\n            for j in range (-pos_y):\r\n                infoValue[i] &= (~(1 << (7 - j)))\r\n            infoValue[i] = hex(infoValue[i])[2:]\r\n            print(infoValue[i])\r\n            if len(infoValue[i]) == 1:\r\n                infoValue[i] = \"0\" + infoValue[i]\r\n        return ''.join(infoValue);\r\n    else:\r\n        return info;`
                }
            }
        },
        "handler": this.funcs.BLOCK_1550543309462
    },
    {
        "opcode": "BLOCK_1550543317242",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1550543294244_INDEX"
            },
            "string": {
                "type": "string",
                "defaultValue": "Hello"
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
                "code": `mbuild.led_panel.show({string}, wait = False, index = {index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1550543317242
    },
    {
        "opcode": "BLOCK_1550543324310",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1550543294244_INDEX"
            },
            "string": {
                "type": "string",
                "defaultValue": "Hello"
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
                "code": `mbuild.led_panel.show({string}, wait = True, index = {index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1550543324310
    },
    {
        "opcode": "BLOCK_1550543331829",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1550543294244_INDEX"
            },
            "pos_x": {
                "type": "number",
                "defaultValue": 0
            },
            "pos_y": {
                "type": "number",
                "defaultValue": 0
            },
            "string": {
                "type": "string",
                "defaultValue": "Hello"
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
                "code": `mbuild.led_panel.show({string}, pos_x = {pos_x}, pos_y = {pos_y}, index = {index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1550543331829
    },
    {
        "opcode": "BLOCK_1550543356832",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1550543294244_INDEX"
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
                "code": `mbuild.led_panel.clear({index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1550543356832
    },
    {
        "opcode": "BLOCK_1552138178736",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1550543294244_INDEX"
            },
            "pos_x": {
                "type": "number",
                "defaultValue": 0
            },
            "pos_y": {
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
                "code": `mbuild.led_panel.set_pixel({pos_x}, {pos_y}, True, {index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1552138178736
    },
    {
        "opcode": "BLOCK_1552138216442",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1550543294244_INDEX"
            },
            "pos_x": {
                "type": "number",
                "defaultValue": 0
            },
            "pos_y": {
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
                "code": `mbuild.led_panel.set_pixel({pos_x}, {pos_y}, False, {index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1552138216442
    },
    {
        "opcode": "BLOCK_1552139669994",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1550543294244_INDEX"
            },
            "pos_x": {
                "type": "number",
                "defaultValue": 0
            },
            "pos_y": {
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
                "code": `mbuild.led_panel.toggle_pixel({pos_x}, {pos_y}, {index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1552139669994
    },
    {
        "opcode": "BLOCK_1552139701778",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1550543294244_INDEX"
            },
            "pos_x": {
                "type": "number",
                "defaultValue": 0
            },
            "pos_y": {
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
                "code": `mbuild.led_panel.get_pixel({pos_x}, {pos_y}, {index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1552139701778
    }
]);

export default blocks;