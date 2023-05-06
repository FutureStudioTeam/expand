const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1559703114098",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1559703114098_INDEX"
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
                "code": `mbuild.angle_sensor.get_angle({index})`,
                "sections": {
                    "import": ['mbuild'],
                    "lib": `mbuild.angle_sensor.set_report_mode(2, 100, 1)`
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
                "menu": "BLOCK_1559703114098_INDEX"
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
                "code": `mbuild.angle_sensor.reset_angle({index})`,
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
                "menu": "BLOCK_1559703114098_INDEX"
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
                "code": `mbuild.angle_sensor.get_angle_speed({index})`,
                "sections": {
                    "import": ['mbuild'],
                    "lib": `mbuild.angle_sensor.set_report_mode(2, 100, 1)`
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
                "menu": "BLOCK_1559703114098_INDEX"
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
                "code": `mbuild.angle_sensor.is_rotating_{dir}({index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1559703446126
    }
]);

export default blocks;