const blocks = (extFacePanels) => ([{
        "opcode": "meos_comm_send_ir",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
            },
            "STRING": {
                "type": "string",
                "defaultValue": "A"
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
                "code": `codey.ir.send({STRING})`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_comm_send_ir
    },
    {
        "opcode": "meos_comm_receive_ir",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
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
                "code": `codey.ir.receive()`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_comm_receive_ir
    },
    {
        "opcode": "meos_comm_learn_with_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
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
                "code": `codey.ir.learn(time_s = 3)`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_comm_learn_with_time
    },
    {
        "opcode": "meos_comm_send_learn_result",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
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
                "code": `codey.ir.send_learned_result()`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_comm_send_learn_result
    }
]);

export default blocks;