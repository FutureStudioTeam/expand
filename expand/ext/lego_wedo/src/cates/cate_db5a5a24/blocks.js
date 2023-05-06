const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1598607079201",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "MOTOR_ID": {
                "type": "fieldMenu",
                "defaultValue": "motor",
                "menu": "BLOCK_1598607079201_MOTOR_ID"
            },
            "DURATION": {
                "type": "number",
                "defaultValue": 1
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1598607079201
    },
    {
        "opcode": "BLOCK_1598607480941",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "MOTOR_ID": {
                "type": "fieldMenu",
                "defaultValue": "motor",
                "menu": "BLOCK_1598607079201_MOTOR_ID"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1598607480941
    },
    {
        "opcode": "BLOCK_1598607566123",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "MOTOR_ID": {
                "type": "fieldMenu",
                "defaultValue": "motor",
                "menu": "BLOCK_1598607079201_MOTOR_ID"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1598607566123
    },
    {
        "opcode": "BLOCK_1598607636946",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "MOTOR_ID": {
                "type": "fieldMenu",
                "defaultValue": "motor",
                "menu": "BLOCK_1598607079201_MOTOR_ID"
            },
            "POWER": {
                "type": "number",
                "defaultValue": 100
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1598607636946
    },
    {
        "opcode": "BLOCK_1598607898218",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "MOTOR_ID": {
                "type": "fieldMenu",
                "defaultValue": "motor",
                "menu": "BLOCK_1598607079201_MOTOR_ID"
            },
            "MOTOR_DIRECTION": {
                "type": "fieldMenu",
                "defaultValue": "this way",
                "menu": "BLOCK_1598607898218_MOTOR_DIRECTION"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1598607898218
    }
]);

export default blocks;