const blocks = (extFacePanels) => ([{
        "opcode": "control_repeat",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "TIMES": {
                "type": "number",
                "defaultValue": 10
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `for i in range({TIMES}):\r\n    time.sleep(0.001)\r\n    {$BRANCH1}`
            }
        }
    },
    {
        "opcode": "control_forever",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `while True:\r\n    time.sleep(0.001)\r\n    {$BRANCH1}`
            }
        }
    },
    {
        "opcode": "control_repeat_until",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "CONDITION": {
                "type": "boolean",
                "defaultValue": true
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `while not ({CONDITION}):\r\n    time.sleep(0.001)\r\n    {$BRANCH1}`
            }
        }
    }
]);

export default blocks;