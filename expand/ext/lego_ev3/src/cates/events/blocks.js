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
        "opcode": "BLOCK_1600244397480",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "BLOCK_1600244821767_PORT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1600244397480
    },
    {
        "opcode": "BLOCK_1600244527347",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "DISTANCE": {
                "type": "number",
                "defaultValue": 5
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1600244527347
    },
    {
        "opcode": "BLOCK_1600244758221",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
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
        "handler": this.funcs.BLOCK_1600244758221
    }
]);

export default blocks;