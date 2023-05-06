const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_IR_1574244770906",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_IR_1574244770906_NUM"
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "PORT1",
                "menu": "BLOCK_IR_1574244770906_PORT"
            },
            "INDEX": {
                "type": "fieldMenu",
                "defaultValue": "INDEX1",
                "menu": "BLOCK_IR_1574244770906_INDEX"
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
                    "from": `from mbuild.ir_transceiver import ir_transceiver_class`,
                    "new_class": `ir_transceiver_{NUM} = ir_transceiver_class(\"{PORT}\", \"{INDEX}\")`
                }
            }
        },
        "handler": this.funcs.BLOCK_IR_1574244770906
    },
    {
        "opcode": "BLOCK_1559548002545",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_IR_1574244770906_NUM"
            },
            "message": {
                "type": "string",
                "defaultValue": "Hi"
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
                "code": `ir_transceiver_{index}.send({message})`
            }
        },
        "handler": this.funcs.BLOCK_1559548002545
    },
    {
        "opcode": "BLOCK_1559640370045",
        "blockType": "string",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_IR_1574244770906_NUM"
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
                "code": `ir_transceiver_{index}.receive()`
            }
        },
        "handler": this.funcs.BLOCK_1559640370045
    },
    {
        "opcode": "BLOCK_1559641582335",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_IR_1574244770906_NUM"
            },
            "record_id": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1559641582335_RECORD_ID"
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
                "code": `ir_transceiver_{index}.learn({record_id})`
            }
        },
        "handler": this.funcs.BLOCK_1559641582335
    },
    {
        "opcode": "BLOCK_1559641607063",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_IR_1574244770906_NUM"
            },
            "record_id": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1559641582335_RECORD_ID"
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
                "code": `ir_transceiver_{index}.send_learned_result({record_id})`
            }
        },
        "handler": this.funcs.BLOCK_1559641607063
    },
    {
        "opcode": "BLOCK_1559641693311",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_IR_1574244770906_NUM"
            },
            "cmd": {
                "type": "fieldMenu",
                "defaultValue": "[0,69]",
                "menu": "BLOCK_1559641693311_CMD"
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
                "code": `ir_transceiver_{index}.is_receive({cmd})`
            }
        },
        "handler": this.funcs.BLOCK_1559641693311
    },
    {
        "opcode": "BLOCK_1559642108415",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_IR_1574244770906_NUM"
            },
            "cmd": {
                "type": "fieldMenu",
                "defaultValue": "[0,64]",
                "menu": "BLOCK_1559642108415_CMD"
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
                "code": `ir_transceiver_{index}.is_receive({cmd})`
            }
        },
        "handler": this.funcs.BLOCK_1559642108415
    },
    {
        "opcode": "BLOCK_1559644269893",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_IR_1574244770906_NUM"
            },
            "cmd": {
                "type": "fieldMenu",
                "defaultValue": "[0,22]",
                "menu": "BLOCK_1559644269893_CMD"
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
                "code": `ir_transceiver_{index}.is_receive({cmd})`
            }
        },
        "handler": this.funcs.BLOCK_1559644269893
    }
]);

export default blocks;