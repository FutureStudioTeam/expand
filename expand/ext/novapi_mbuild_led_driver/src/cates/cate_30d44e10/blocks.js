const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1574391311283",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1574391311283_INDEX"
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "PORT1",
                "menu": "BLOCK_1574391311283_PORT"
            },
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "INDEX1",
                "menu": "BLOCK_1574391311283_NUM"
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
                    "from": `from mbuild.led_driver import led_driver_class`,
                    "new_class": `led_driver_{index} = led_driver_class(\"{PORT}\", \"{NUM}\")`
                }
            }
        },
        "handler": this.funcs.BLOCK_1574391311283
    },
    {
        "opcode": "BLOCK_1550541402675",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1574391311283_INDEX"
            },
            "facePanel": extFacePanels['8be13698']
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.block1550541402675CodesCode,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1550541402675
    },
    {
        "opcode": "BLOCK_1550541816855",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1574391311283_INDEX"
            },
            "POSITION": {
                "type": "number",
                "defaultValue": 1
            },
            "color": {
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
                "code": this.funcs.block1550541816855CodesCode,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1550541816855
    },
    {
        "opcode": "BLOCK_1550541885794",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1574391311283_INDEX"
            },
            "position": {
                "type": "number",
                "defaultValue": 1
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
                "code": `led_driver_{index}.set_single({position}, {r}, {g}, {b})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1550541885794
    },
    {
        "opcode": "BLOCK_1550541898810",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1574391311283_INDEX"
            },
            "position": {
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
                "code": `led_driver_{index}.set_single({position}, 0, 0, 0)\r`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1550541898810
    },
    {
        "opcode": "BLOCK_1550541910495",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1574391311283_INDEX"
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
                "code": `led_driver_{index}.set_all(0, 0, 0)`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1550541910495
    },
    {
        "opcode": "BLOCK_1550541922579",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1574391311283_INDEX"
            },
            "position": {
                "type": "number",
                "defaultValue": 1
            },
            "color": {
                "type": "fieldMenu",
                "defaultValue": "red",
                "menu": "BLOCK_1550541922579_COLOR"
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
                "code": `led_driver_{index}.set_{color}({position}, {value})\r`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1550541922579
    },
    {
        "opcode": "BLOCK_1550541936947",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1574391311283_INDEX"
            },
            "position": {
                "type": "number",
                "defaultValue": 1
            },
            "color": {
                "type": "fieldMenu",
                "defaultValue": "red",
                "menu": "BLOCK_1550541922579_COLOR"
            },
            "value": {
                "type": "number",
                "defaultValue": 20
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
                "code": `led_driver_{index}.change_{color}({position}, {value})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1550541936947
    },
    {
        "opcode": "BLOCK_1550541949702",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1574391311283_INDEX"
            },
            "mode": {
                "type": "fieldMenu",
                "defaultValue": "static",
                "menu": "BLOCK_1550541949702_MODE"
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
                "code": `led_driver_{index}.set_mode('{mode}')`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1550541949702
    }
]);

export default blocks;