const blocks = (extFacePanels) => ([{
        "opcode": "LED_PANEL_INIT_1",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "LED_PANEL_INIT_1_NUM"
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "PORT1",
                "menu": "LED_PANEL_INIT_1_PORT"
            },
            "INDEX": {
                "type": "fieldMenu",
                "defaultValue": "INDEX1",
                "menu": "LED_PANEL_INIT_1_INDEX"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "sections": {
                    "from": `from mbuild.led_matrix import led_matrix_class`,
                    "new_class": `led_matrix_{NUM} = led_matrix_class(\"{PORT}\", \"{INDEX}\")`
                }
            }
        },
        "handler": this.funcs.LED_PANEL_INIT_1
    },
    {
        "opcode": "BLOCK_1574043705050",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "LED_PANEL_INIT_1_NUM"
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
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": this.funcs.block1574043705050CodesCode
            }
        },
        "handler": this.funcs.BLOCK_1574043705050
    },
    {
        "opcode": "BLOCK_1574043725470",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "LED_PANEL_INIT_1_NUM"
            },
            "panel": extFacePanels['ca2ed3e0']
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": this.funcs.block1574043725470CodesCode
            }
        },
        "handler": this.funcs.BLOCK_1574043725470
    },
    {
        "opcode": "BLOCK_1574043736010",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "LED_PANEL_INIT_1_NUM"
            },
            "panel": extFacePanels['ca2ed3e0'],
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
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": this.funcs.block1574043736010CodesCode
            }
        },
        "handler": this.funcs.BLOCK_1574043736010
    },
    {
        "opcode": "BLOCK_1574043738662",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "LED_PANEL_INIT_1_NUM"
            },
            "string": {
                "type": "string",
                "defaultValue": "Hello"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `led_matrix_{index}.show({string}, wait = False)`
            }
        },
        "handler": this.funcs.BLOCK_1574043738662
    },
    {
        "opcode": "BLOCK_1574043741731",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "LED_PANEL_INIT_1_NUM"
            },
            "string": {
                "type": "string",
                "defaultValue": "Hello"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `led_matrix_{index}.show({string}, wait = True)`
            }
        },
        "handler": this.funcs.BLOCK_1574043741731
    },
    {
        "opcode": "BLOCK_1574043745383",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "LED_PANEL_INIT_1_NUM"
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
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `led_matrix_{index}.show({string}, pos_x = {pos_x}, pos_y = {pos_y})`
            }
        },
        "handler": this.funcs.BLOCK_1574043745383
    },
    {
        "opcode": "BLOCK_1574043751221",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "LED_PANEL_INIT_1_NUM"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `led_matrix_{index}.clear()`
            }
        },
        "handler": this.funcs.BLOCK_1574043751221
    },
    {
        "opcode": "BLOCK_1574043760063",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "LED_PANEL_INIT_1_NUM"
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
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `led_matrix_{index}.set_pixel({pos_x}, {pos_y}, True)`
            }
        },
        "handler": this.funcs.BLOCK_1574043760063
    },
    {
        "opcode": "BLOCK_1574043763532",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "LED_PANEL_INIT_1_NUM"
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
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `led_matrix_{index}.set_pixel({pos_x}, {pos_y}, False)`
            }
        },
        "handler": this.funcs.BLOCK_1574043763532
    },
    {
        "opcode": "BLOCK_1574043766677",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "LED_PANEL_INIT_1_NUM"
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
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `led_matrix_{index}.toggle_pixel({pos_x}, {pos_y})`
            }
        },
        "handler": this.funcs.BLOCK_1574043766677
    },
    {
        "opcode": "BLOCK_1574043769245",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "LED_PANEL_INIT_1_NUM"
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
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `led_matrix_{index}.get_pixel({pos_x}, {pos_y})`
            }
        },
        "handler": this.funcs.BLOCK_1574043769245
    }
]);

export default blocks;