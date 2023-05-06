const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_MOTION_SENSOR_1574244770906",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_MOTION_SENSOR_1574244770906_NUM"
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "PORT1",
                "menu": "BLOCK_MOTION_SENSOR_1574244770906_PORT"
            },
            "INDEX": {
                "type": "fieldMenu",
                "defaultValue": "INDEX1",
                "menu": "BLOCK_MOTION_SENSOR_1574244770906_INDEX"
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
                    "from": `from mbuild.motion_sensor import motion_sensor_class`,
                    "new_class": `motion_sensor_{NUM} = motion_sensor_class(\"{PORT}\", \"{INDEX}\")`
                }
            }
        },
        "handler": this.funcs.BLOCK_MOTION_SENSOR_1574244770906
    },
    {
        "opcode": "BLOCK_1560309782310",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_MOTION_SENSOR_1574244770906_NUM"
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
                "code": `motion_sensor_{index}.is_{dir}()`
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
                "menu": "BLOCK_MOTION_SENSOR_1574244770906_NUM"
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
                "code": `motion_sensor_{index}.is_shaked('{strength}')`
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
                "menu": "BLOCK_MOTION_SENSOR_1574244770906_NUM"
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
                "code": `motion_sensor_{index}.get_shake_strength()`
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
                "menu": "BLOCK_MOTION_SENSOR_1574244770906_NUM"
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
                "code": `motion_sensor_{index}.get_{posture}()`
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
                "menu": "BLOCK_MOTION_SENSOR_1574244770906_NUM"
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
                "code": `motion_sensor_{index}.get_rotation('{axis}')`
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
                "menu": "BLOCK_MOTION_SENSOR_1574244770906_NUM"
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
                "code": `motion_sensor_{index}.reset_rotation('{axis}')`
            }
        },
        "handler": this.funcs.BLOCK_1560320781489
    }
]);

export default blocks;