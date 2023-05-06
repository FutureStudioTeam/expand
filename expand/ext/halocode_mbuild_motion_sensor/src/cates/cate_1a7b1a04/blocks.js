const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1560309782310",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1560309782310_INDEX"
            },
            "dir": {
                "type": "fieldMenu",
                "defaultValue": "tilted_left",
                "menu": "BLOCK_1560309782310_DIR"
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
                "code": `mbuild.motion_sensor.is_{dir}({index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1560309782310
    },
    {
        "opcode": "BLOCK_1560309306419",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1560309782310_INDEX"
            },
            "strength": {
                "type": "fieldMenu",
                "defaultValue": "light",
                "menu": "BLOCK_1560309306419_STRENGTH"
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
                "code": `mbuild.motion_sensor.is_shaked('{strength}', {index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1560309306419
    },
    {
        "opcode": "BLOCK_1560309209133",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1560309782310_INDEX"
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
                "code": `mbuild.motion_sensor.get_shake_strength({index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1560309209133
    },
    {
        "opcode": "BLOCK_1560314176719",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1560309782310_INDEX"
            },
            "posture": {
                "type": "fieldMenu",
                "defaultValue": "pitch",
                "menu": "BLOCK_1560314176719_POSTURE"
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
                "code": `mbuild.motion_sensor.get_{posture}({index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1560314176719
    },
    {
        "opcode": "BLOCK_1560314360278",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1560309782310_INDEX"
            },
            "axis": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "BLOCK_1560314360278_AXIS"
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
                "code": `mbuild.motion_sensor.get_rotation('{axis}', {index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1560314360278
    },
    {
        "opcode": "BLOCK_1560320781489",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1560309782310_INDEX"
            },
            "axis": {
                "type": "fieldMenu",
                "defaultValue": "all",
                "menu": "BLOCK_1560320781489_AXIS"
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
                "code": `mbuild.motion_sensor.reset_rotation('{axis}', {index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1560320781489
    }
]);

export default blocks;