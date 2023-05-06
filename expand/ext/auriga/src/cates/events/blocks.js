const blocks = (extFacePanels) => ([{
        "opcode": "auriga_when_board_launch",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": "/*{$BRANCH}*/",
                "sections": {
                    "include": [
                        "<Arduino.h>",
                        "<Wire.h>",
                        "<SoftwareSerial.h>",
                        "<MeAuriga.h>"
                    ],
                    "lib": this.funcs.aurigaWhenBoardLaunchCodesLib,
                    "setup": this.funcs.aurigaWhenBoardLaunchCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_when_board_launch
    },
    {
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
    },
    {
        "opcode": "event_whenflagclicked",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ]
    },
    {
        "opcode": "event_whenkeypressed",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ]
    }
]);

export default blocks;