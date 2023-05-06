const blocks = (extFacePanels) => ([{
        "opcode": "control_stop",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "TYPE": {
                "type": "fieldMenu",
                "defaultValue": "all",
                "menu": "CONTROL_STOP_TYPE"
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
        "opcode": "control_forever",
        "blockType": "conditional",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 1,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": `/*{{'while(1) {'}}*/\r\n    /*{$BRANCH1}*/\r\n    _loop();\r\n}\r`
            }
        }
    },
    {
        "opcode": "control_repeat_until",
        "blockType": "conditional",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "CONDITION": {
                "type": "boolean",
                "defaultValue": false
            }
        },
        "branchCount": 1,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": `while(!(/*{{this.CONDITION ? this.CONDITION : 0}}*/)) \r\n{\r\n  _loop();\r\n  /*{$BRANCH1}*/\r\n}`
            }
        }
    },
    {
        "opcode": "control_wait_until",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "CONDITION": {
                "type": "boolean",
                "defaultValue": false
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": `while(!(/*{{this.CONDITION ? this.CONDITION : 0}}*/))\r\n{\r\n  _loop();\r\n}`
            }
        }
    }
]);

export default blocks;