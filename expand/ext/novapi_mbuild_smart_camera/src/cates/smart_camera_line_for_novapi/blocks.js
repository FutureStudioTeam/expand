const blocks = (extFacePanels) => ([{
        "opcode": "SMART_CAMERA_INIT_2",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "SMART_CAMERA_INIT_1_NUM"
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "PORT1",
                "menu": "SMART_CAMERA_INIT_1_PORT"
            },
            "INDEX": {
                "type": "fieldMenu",
                "defaultValue": "INDEX1",
                "menu": "SMART_CAMERA_INIT_1_INDEX"
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
                    "from": `from mbuild.smart_camera import smart_camera_class`,
                    "new_class": `smart_camera_{NUM} = smart_camera_class(\"{PORT}\", \"{INDEX}\")`
                }
            }
        },
        "handler": this.funcs.SMART_CAMERA_INIT_2
    },
    {
        "opcode": "SMART_CAMERA_CHANGE_LINE",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `smart_camera_{NUM}.set_mode(\"line\")`
            }
        },
        "handler": this.funcs.SMART_CAMERA_CHANGE_LINE
    },
    {
        "opcode": "BLOCK_25650950268712",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
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
                "code": `smart_camera_{NUM}.detect_label({LABEL})`,
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
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
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
                "code": `smart_camera_{NUM}.get_label_{COORD}({LABEL})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_25650950268713
    },
    {
        "opcode": "SMART_CAMERA_GET_LINE_VALUE",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
            },
            "TYPE": {
                "type": "fieldMenu",
                "defaultValue": "start_x",
                "menu": "SMART_CAMERA_GET_LINE_VALUE_TYPE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `smart_camera_{NUM}.get_vector_{TYPE}()`
            }
        },
        "handler": this.funcs.SMART_CAMERA_GET_LINE_VALUE
    },
    {
        "opcode": "SMART_CAMERA_DETECT_CROSS",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `smart_camera_{NUM}.detect_cross()`
            }
        },
        "handler": this.funcs.SMART_CAMERA_DETECT_CROSS
    },
    {
        "opcode": "SMART_CAMERA_GET_CROSS_VALUE",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
            },
            "TYPE": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "SMART_CAMERA_GET_CROSS_VALUE_TYPE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `smart_camera_{NUM}.get_cross_{TYPE}()`
            }
        },
        "handler": this.funcs.SMART_CAMERA_GET_CROSS_VALUE
    },
    {
        "opcode": "BLOCK_25650950268718",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
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
                "code": `smart_camera_{NUM}.get_cross_road()`,
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
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
            },
            "sn": {
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
                "code": `smart_camera_{NUM}.get_cross_angle({sn})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_25650950268719
    },
    {
        "opcode": "SMART_CAMERA_SET_LINE_MODE",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
            },
            "LINEMODE": {
                "type": "fieldMenu",
                "defaultValue": "black",
                "menu": "SMART_CAMERA_SET_LINE_MODE_LINEMODE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `smart_camera_{NUM}.set_line(\"{LINEMODE}\")`
            }
        },
        "handler": this.funcs.SMART_CAMERA_SET_LINE_MODE
    }
]);

export default blocks;