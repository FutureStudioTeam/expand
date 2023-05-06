const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1574218254527",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1574218254527_INDEX"
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "PORT1",
                "menu": "BLOCK_1574218254527_PORT"
            },
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "INDEX1",
                "menu": "BLOCK_1574218254527_NUM"
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
                    "from": `from mbuild.pir_sensor import pir_sensor_class`,
                    "new_class": `pir_sensor_{index} = pir_sensor_class(\"{PORT}\", \"{NUM}\")`
                }
            }
        },
        "handler": this.funcs.BLOCK_1574218254527
    },
    {
        "opcode": "event_pir",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1574218254527_INDEX"
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
                "code": `pir_sensor_{index}.is_activated()`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.event_pir
    },
    {
        "opcode": "pir_count",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1574218254527_INDEX"
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
                "code": `pir_sensor_{index}.get_count()`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.pir_count
    },
    {
        "opcode": "pir_count_make_zero",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1574218254527_INDEX"
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
                "code": `pir_sensor_{index}.reset_count()`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.pir_count_make_zero
    }
]);

export default blocks;