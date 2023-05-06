const blocks = (extFacePanels) => ([{
        "opcode": "smartservo_init",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "SMARTSERVO_INIT_NUM"
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "M1",
                "menu": "ENCODER_MOTOR_POWER_PORT"
            },
            "INDEX": {
                "type": "fieldMenu",
                "defaultValue": "INDEX1",
                "menu": "SMARTSERVO_INIT_INDEX"
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
                    "from": `from hardware.mbuild.smartserver import smartservo_class`,
                    "new_class": `__smartservo_{NUM} = smartservo_class(\"{PORT}\", \"{INDEX}\", \"__smartservo_{NUM}\")`
                }
            }
        },
        "handler": this.funcs.smartservo_init
    },
    {
        "opcode": "smartservo_move",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "SMARTSERVO_INIT_NUM"
            },
            "POSITION": {
                "type": "number",
                "defaultValue": 90
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
                "code": `__smartservo_{NUM}.move({POSITION}, {SPEED})`
            }
        },
        "handler": this.funcs.smartservo_move
    },
    {
        "opcode": "smartservo_move_to",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "SMARTSERVO_INIT_NUM"
            },
            "POSITION": {
                "type": "number",
                "defaultValue": 90
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
                "code": `__smartservo_{NUM}.move_to({POSITION}, {SPEED})`
            }
        },
        "handler": this.funcs.smartservo_move_to
    },
    {
        "opcode": "smartservo_set_power",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "SMARTSERVO_INIT_NUM"
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
                "code": `__smartservo_{NUM}.set_power({POWER})`
            }
        },
        "handler": this.funcs.smartservo_set_power
    },
    {
        "opcode": "SMARTSERVO_POWER",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "SMARTSERVO_INIT_NUM"
            },
            "TYPE": {
                "type": "fieldMenu",
                "defaultValue": "current",
                "menu": "SMARTSERVO_POWER_TYPE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `__smartservo_{NUM}.get_value(\"{TYPE}\")`
            }
        },
        "handler": this.funcs.SMARTSERVO_POWER
    }
]);

export default blocks;