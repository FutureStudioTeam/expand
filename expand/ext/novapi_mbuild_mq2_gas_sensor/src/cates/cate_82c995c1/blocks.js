const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1574232106708",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1574232106708_INDEX"
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "PORT1",
                "menu": "BLOCK_1574232106708_PORT"
            },
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "INDEX1",
                "menu": "BLOCK_1574232106708_NUM"
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
                    "from": `from mbuild.mq2_gas_sensor import mq2_gas_sensor_class`,
                    "new_class": `mq2_gas_sensor_{index} = mq2_gas_sensor_class(\"{PORT}\", \"{NUM}\")`
                }
            }
        },
        "handler": this.funcs.BLOCK_1574232106708
    },
    {
        "opcode": "BLOCK_1560258942584",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1574232106708_INDEX"
            },
            "sen": {
                "type": "fieldMenu",
                "defaultValue": "low",
                "menu": "BLOCK_1560258942584_SEN"
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
                "code": `mq2_gas_sensor_{index}.is_activated('{sen}')`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1560258942584
    }
]);

export default blocks;