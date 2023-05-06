const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1574066208471",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1574066208471_INDEX"
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "PORT1",
                "menu": "BLOCK_1574066208471_PORT"
            },
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "INDEX1",
                "menu": "BLOCK_1574066208471_NUM"
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
                    "from": `from mbuild.button import button_class`,
                    "new_class": `button_{index} = button_class(\"{PORT}\", \"{NUM}\")`
                }
            }
        },
        "handler": this.funcs.BLOCK_1574066208471
    },
    {
        "opcode": "BLOCK_1559700086192",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1574066208471_INDEX"
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
                "code": `button_{index}.is_pressed()`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1559700086192
    },
    {
        "opcode": "BLOCK_1559700149950",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1574066208471_INDEX"
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
                "code": `button_{index}.get_count()`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1559700149950
    },
    {
        "opcode": "BLOCK_1559700240893",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1574066208471_INDEX"
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
                "code": `button_{index}.reset_count()`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1559700240893
    }
]);

export default blocks;