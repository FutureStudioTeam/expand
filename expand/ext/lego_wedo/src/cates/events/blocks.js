const blocks = (extFacePanels) => ([{
        "opcode": "event_whenbroadcastreceived",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "gap": 12,
        "arguments": {
            "BROADCAST_OPTION": {
                "type": "inputVariable"
            }
        },
        "branchCount": 0,
        "codes": {
            "python": {
                "code": `if message == \"{BROADCAST_OPTION}\":\n  {$BRANCH}`
            }
        }
    },
    {
        "opcode": "event_broadcastandwait",
        "blockType": "command",
        "checkboxInFlyout": false,
        "gap": 12,
        "arguments": {
            "BROADCAST_INPUT": {
                "type": "inputVariable"
            }
        },
        "branchCount": 0,
        "codes": {
            "python": {
                "code": `broadcast('{BROADCAST_INPUT}')`
            }
        }
    },
    {
        "opcode": "event_broadcast",
        "blockType": "command",
        "checkboxInFlyout": false,
        "gap": 12,
        "arguments": {
            "BROADCAST_INPUT": {
                "type": "inputVariable"
            }
        },
        "branchCount": 0,
        "codes": {
            "python": {
                "code": `broadcast('{BROADCAST_INPUT}')`
            }
        }
    },
    {
        "opcode": "BLOCK_1598608620452",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "OP": {
                "type": "fieldMenu",
                "defaultValue": "less-than",
                "menu": "BLOCK_1598608620452_OP"
            },
            "DISTANCE": {
                "type": "number",
                "defaultValue": 50
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1598608620452
    },
    {
        "opcode": "BLOCK_1598608792983",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "TILT_DIRECTION_ANY": {
                "type": "fieldMenu",
                "defaultValue": "up",
                "menu": "BLOCK_1599103209359_TILT_DIRECTION_ANY"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1598608792983
    }
]);

export default blocks;