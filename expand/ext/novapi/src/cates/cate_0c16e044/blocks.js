const blocks = (extFacePanels) => ([{
        "opcode": "POWER_EXPAND_DCmotor_power",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "CHANNEL": {
                "type": "fieldMenu",
                "defaultValue": "DC1",
                "menu": "POWER_EXPAND_DCMOTOR_POWER_CHANNEL"
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
                "code": `power_expand_board.set_power(\"{CHANNEL}\", {POWER})`,
                "sections": {
                    "from": `from mbuild import power_expand_board`
                }
            }
        },
        "handler": this.funcs.POWER_EXPAND_DCmotor_power
    },
    {
        "opcode": "POWER_EXPAND_DCmotor_stop",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "CHANNEL": {
                "type": "fieldMenu",
                "defaultValue": "DC1",
                "menu": "POWER_EXPAND_DCMOTOR_POWER_CHANNEL"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `power_expand_board.stop(\"{CHANNEL}\")`,
                "sections": {
                    "from": `from mbuild import power_expand_board`
                }
            }
        },
        "handler": this.funcs.POWER_EXPAND_DCmotor_stop
    },
    {
        "opcode": "POWER_EXPAND_BLmotor_power",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "CHANNEL": {
                "type": "fieldMenu",
                "defaultValue": "BL1",
                "menu": "POWER_EXPAND_BLMOTOR_POWER_CHANNEL"
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
                "code": `power_expand_board.set_power(\"{CHANNEL}\", {POWER})`,
                "sections": {
                    "from": `from mbuild import power_expand_board`
                }
            }
        },
        "handler": this.funcs.POWER_EXPAND_BLmotor_power
    },
    {
        "opcode": "POWER_EXPAND_BLmotor_stop",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "CHANNEL": {
                "type": "fieldMenu",
                "defaultValue": "BL1",
                "menu": "POWER_EXPAND_BLMOTOR_POWER_CHANNEL"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `power_expand_board.stop(\"{CHANNEL}\")`,
                "sections": {
                    "from": `from mbuild import power_expand_board`
                }
            }
        },
        "handler": this.funcs.POWER_EXPAND_BLmotor_stop
    },
    {
        "opcode": "POWER_EXPAND_solenoidvalve",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "CHANNEL": {
                "type": "fieldMenu",
                "defaultValue": "DC1",
                "menu": "POWER_EXPAND_DCMOTOR_POWER_CHANNEL"
            },
            "STATUS": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "POWER_EXPAND_SOLENOIDVALVE_STATUS"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": this.funcs.powerExpandSolenoidvalveCodesCode,
                "sections": {
                    "from": `from mbuild import power_expand_board`
                }
            }
        },
        "handler": this.funcs.POWER_EXPAND_solenoidvalve
    }
]);

export default blocks;