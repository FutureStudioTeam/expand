const blocks = (extFacePanels) => ([{
        "opcode": "SMART_CAMERA_INIT_3",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "SMART_CAMERA_CHANGE_CCC_NUM"
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
        "handler": this.funcs.SMART_CAMERA_INIT_3
    },
    {
        "opcode": "SMART_CAMERA_SET_KP",
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
            "KP": {
                "type": "number",
                "defaultValue": 0.5
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `smart_camera_{NUM}.set_kp({KP})`
            }
        },
        "handler": this.funcs.SMART_CAMERA_SET_KP
    },
    {
        "opcode": "SMART_CAMERA_DIFF_SPEED_CCC",
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
            "SIG": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "SMART_CAMERA_START_LEARN_CCC_SIG"
            },
            "AXIS": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "BLOCK_25650950268713_COORD"
            },
            "TARGET": {
                "type": "number",
                "defaultValue": 150
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `smart_camera_{NUM}.get_sign_diff_speed({SIG}, \"{AXIS}\", {TARGET})`
            }
        },
        "handler": this.funcs.SMART_CAMERA_DIFF_SPEED_CCC
    },
    {
        "opcode": "SMART_CAMERA_DIIF_SPEED_LABEL",
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
            "LABEL": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL"
            },
            "AXIS": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "BLOCK_25650950268713_COORD"
            },
            "TARGET": {
                "type": "number",
                "defaultValue": 150
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `smart_camera_{NUM}.get_label_diff_speed({LABEL}, \"{AXIS}\", {TARGET})`
            }
        },
        "handler": this.funcs.SMART_CAMERA_DIIF_SPEED_LABEL
    },
    {
        "opcode": "SMART_CAMERA_DIFF_SPEED_LINE",
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
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `smart_camera_{NUM}.get_follow_vector_diff_speed()`
            }
        },
        "handler": this.funcs.SMART_CAMERA_DIFF_SPEED_LINE
    },
    {
        "opcode": "SMART_CAMERA_IS_LOCK_CCC",
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
            "SIG": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "SMART_CAMERA_START_LEARN_CCC_SIG"
            },
            "AXIS": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "BLOCK_25650950268713_COORD"
            },
            "TARGET": {
                "type": "number",
                "defaultValue": 150
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `smart_camera_{NUM}.is_lock_sign({SIG}, \"{AXIS}\", {TARGET})`
            }
        },
        "handler": this.funcs.SMART_CAMERA_IS_LOCK_CCC
    },
    {
        "opcode": "SMART_CAMERA_IS_LOCK_LABEL",
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
                "menu": "SMART_CAMERA_DIIF_SPEED_LABEL_LABEL"
            },
            "AXIS": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "BLOCK_25650950268713_COORD"
            },
            "TARGET": {
                "type": "number",
                "defaultValue": 150
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `smart_camera_{NUM}.is_lock_label({LABEL}, \"{AXIS}\", {TARGET})`
            }
        },
        "handler": this.funcs.SMART_CAMERA_IS_LOCK_LABEL
    }
]);

export default blocks;