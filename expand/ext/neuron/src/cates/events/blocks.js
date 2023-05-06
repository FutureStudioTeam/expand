const blocks = (extFacePanels) => ([{
        "opcode": "event_whenbroadcastreceived",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "BROADCAST_OPTION": {
                "type": "inputVariable",
                "defaultValue": ""
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ]
    },
    {
        "opcode": "event_broadcast",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "BROADCAST_INPUT": {
                "type": "inputVariable",
                "defaultValue": ""
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ]
    },
    {
        "opcode": "event_broadcastandwait",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "BROADCAST_INPUT": {
                "type": "inputVariable",
                "defaultValue": ""
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ]
    }
]);

export default blocks;