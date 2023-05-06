const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1597648270782",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `{$BRANCH}`,
                "sections": {
                    "lib": `from mpython import *`
                }
            }
        },
        "handler": this.funcs.BLOCK_1597648270782
    },
    {
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
    }
]);

export default blocks;