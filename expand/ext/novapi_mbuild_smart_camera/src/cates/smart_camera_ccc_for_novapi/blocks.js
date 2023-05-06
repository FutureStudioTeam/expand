const blocks = (extFacePanels) => ([{
        "opcode": "SMART_CAMERA_INIT_1",
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
        "handler": this.funcs.SMART_CAMERA_INIT_1
    },
    {
        "opcode": "SMART_CAMERA_CHANGE_CCC",
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
                "code": `smart_camera_{NUM}.set_mode(\"color\")`
            }
        },
        "handler": this.funcs.SMART_CAMERA_CHANGE_CCC
    },
    {
        "opcode": "SMART_CAMERA_START_LEARN_CCC",
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
            "SIG": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "SMART_CAMERA_START_LEARN_CCC_SIG"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `smart_camera_{NUM}.learn({SIG}, \"until_button\")`
            }
        },
        "handler": this.funcs.SMART_CAMERA_START_LEARN_CCC
    },
    {
        "opcode": "SMART_CAMERA_DETECT_CCC",
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
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `smart_camera_{NUM}.detect_sign({SIG})`
            }
        },
        "handler": this.funcs.SMART_CAMERA_DETECT_CCC
    },
    {
        "opcode": "SMART_CAMERA_LOCATION",
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
            "LOCATION": {
                "type": "fieldMenu",
                "defaultValue": "middle",
                "menu": "SMART_CAMERA_LOCATION_LOCATION"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `smart_camera_{NUM}.detect_sign_location({SIG}, \"{LOCATION}\")`
            }
        },
        "handler": this.funcs.SMART_CAMERA_LOCATION
    },
    {
        "opcode": "SMART_CAMERA_VALUE",
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
            "SIG": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "SMART_CAMERA_START_LEARN_CCC_SIG"
            },
            "TYPE": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "SMART_CAMERA_VALUE_TYPE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `smart_camera_{NUM}.get_sign_{TYPE}({SIG})`
            }
        },
        "handler": this.funcs.SMART_CAMERA_VALUE
    },
    {
        "opcode": "SMART_CAMERA_SET_LED",
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
            "TYPE": {
                "type": "fieldMenu",
                "defaultValue": "open_light",
                "menu": "SMART_CAMERA_SET_LED_TYPE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `smart_camera_{NUM}.{TYPE}()`
            }
        },
        "handler": this.funcs.SMART_CAMERA_SET_LED
    },
    {
        "opcode": "SMART_CAMERA_RESET",
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
                "code": `smart_camera_{NUM}.reset()`
            }
        },
        "handler": this.funcs.SMART_CAMERA_RESET
    }
]);

export default blocks;