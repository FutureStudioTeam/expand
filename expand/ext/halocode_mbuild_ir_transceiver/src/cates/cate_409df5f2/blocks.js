const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1559548002545",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1559548002545_INDEX"
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
                "code": `mbuild.ir_transceiver.send({message}, {index})`,
                "sections": {
                    "import": ['mbuild']
                }
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
                "menu": "BLOCK_1559548002545_INDEX"
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
                "code": `mbuild.ir_transceiver.receive({index})`,
                "sections": {
                    "import": ['mbuild']
                }
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
                "menu": "BLOCK_1559548002545_INDEX"
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
                "code": `mbuild.ir_transceiver.learn({record_id}, {index})`,
                "sections": {
                    "import": ['mbuild']
                }
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
                "menu": "BLOCK_1559548002545_INDEX"
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
                "code": `mbuild.ir_transceiver.send_learned_result({record_id}, {index})`,
                "sections": {
                    "import": ['mbuild']
                }
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
                "menu": "BLOCK_1559548002545_INDEX"
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
                "code": `(mbuild.ir_transceiver.receive_remote_code({index}) == {cmd})`,
                "sections": {
                    "import": ['mbuild']
                }
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
                "menu": "BLOCK_1559548002545_INDEX"
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
                "code": `(mbuild.ir_transceiver.receive_remote_code({index}) == {cmd})`,
                "sections": {
                    "import": ['mbuild']
                }
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
                "menu": "BLOCK_1559548002545_INDEX"
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
                "code": `(mbuild.ir_transceiver.receive_remote_code({index}) == {cmd})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1559644269893
    }
]);

export default blocks;