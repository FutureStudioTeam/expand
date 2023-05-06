const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1574413926331",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1574413926331_INDEX"
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "PORT1",
                "menu": "BLOCK_1574413926331_PORT"
            },
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "INDEX1",
                "menu": "BLOCK_1574413926331_NUM"
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
                    "from": `from mbuild.angle_sensor import angle_sensor_class`,
                    "new_class": `angle_sensor_{index} = angle_sensor_class(\"{PORT}\", \"{NUM}\")`
                }
            }
        },
        "handler": this.funcs.BLOCK_1574413926331
    },
    {
        "opcode": "BLOCK_1559703114098",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1574413926331_INDEX"
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
                "code": `angle_sensor_{index}.get_angle()`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1559703114098
    },
    {
        "opcode": "BLOCK_1559703352577",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1574413926331_INDEX"
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
                "code": `angle_sensor_{index}.reset_angle()`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1559703352577
    },
    {
        "opcode": "BLOCK_1559703305709",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1574413926331_INDEX"
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
                "code": `angle_sensor_{index}.get_angle_speed()`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1559703305709
    },
    {
        "opcode": "BLOCK_1559703446126",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1574413926331_INDEX"
            },
            "dir": {
                "type": "fieldMenu",
                "defaultValue": "clockwise",
                "menu": "BLOCK_1559703446126_DIR"
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
                "code": `angle_sensor_{index}.is_rotating_{dir}()`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1559703446126
    }
]);

export default blocks;