const blocks = (extFacePanels) => ([{
        "opcode": "encoder_motor_power",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "M1",
                "menu": "ENCODER_MOTOR_POWER_PORT"
            },
            "POWER": {
                "type": "number",
                "defaultValue": 50
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `encoder_motor_{PORT}.set_power({POWER})`,
                "sections": {
                    "from": `from mbuild.encoder_motor import encoder_motor_class`,
                    "new_class": `encoder_motor_{PORT} = encoder_motor_class(\"{PORT}\", \"INDEX1\")`
                }
            }
        },
        "handler": this.funcs.encoder_motor_power
    },
    {
        "opcode": "encoder_motor_move",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "M1",
                "menu": "ENCODER_MOTOR_POWER_PORT"
            },
            "POSITION": {
                "type": "number",
                "defaultValue": 360
            },
            "SPEED": {
                "type": "number",
                "defaultValue": 10
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `encoder_motor_{PORT}.move({POSITION}, {SPEED})`,
                "sections": {
                    "from": `from mbuild.encoder_motor import encoder_motor_class`,
                    "new_class": `encoder_motor_{PORT} = encoder_motor_class(\"{PORT}\", \"INDEX1\")`
                }
            }
        },
        "handler": this.funcs.encoder_motor_move
    },
    {
        "opcode": "encoder_motor_move_to",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "M1",
                "menu": "ENCODER_MOTOR_POWER_PORT"
            },
            "POSITION": {
                "type": "number",
                "defaultValue": 360
            },
            "SPEED": {
                "type": "number",
                "defaultValue": 10
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `encoder_motor_{PORT}.move_to({POSITION}, {SPEED})`,
                "sections": {
                    "from": `from mbuild.encoder_motor import encoder_motor_class`,
                    "new_class": `encoder_motor_{PORT} = encoder_motor_class(\"{PORT}\", \"INDEX1\")`
                }
            }
        },
        "handler": this.funcs.encoder_motor_move_to
    },
    {
        "opcode": "encoder_motor_speed",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "M1",
                "menu": "ENCODER_MOTOR_POWER_PORT"
            },
            "SPEED": {
                "type": "number",
                "defaultValue": 10
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `encoder_motor_{PORT}.set_speed({SPEED})`,
                "sections": {
                    "from": `from mbuild.encoder_motor import encoder_motor_class`,
                    "new_class": `encoder_motor_{PORT} = encoder_motor_class(\"{PORT}\", \"INDEX1\")`
                }
            }
        },
        "handler": this.funcs.encoder_motor_speed
    },
    {
        "opcode": "encoder_motor_get_speed",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "M1",
                "menu": "ENCODER_MOTOR_POWER_PORT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `encoder_motor_{PORT}.get_value(\"speed\")`,
                "sections": {
                    "from": `from mbuild.encoder_motor import encoder_motor_class`,
                    "new_class": `encoder_motor_{PORT} = encoder_motor_class(\"{PORT}\", \"INDEX1\")`
                }
            }
        },
        "handler": this.funcs.encoder_motor_get_speed
    },
    {
        "opcode": "encoder_motor_get_pos",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "M1",
                "menu": "ENCODER_MOTOR_POWER_PORT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `encoder_motor_{PORT}.get_value(\"angle\")`,
                "sections": {
                    "from": `from mbuild.encoder_motor import encoder_motor_class`,
                    "new_class": `encoder_motor_{PORT} = encoder_motor_class(\"{PORT}\", \"INDEX1\")`
                }
            }
        },
        "handler": this.funcs.encoder_motor_get_pos
    }
]);

export default blocks;