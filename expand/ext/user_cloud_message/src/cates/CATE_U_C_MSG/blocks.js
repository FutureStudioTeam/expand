const blocks = (extFacePanels) => ([{
        "opcode": "SEND_USER_CLOUD_MSG",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "message": {
                "type": "string",
                "defaultValue": "message"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.SEND_USER_CLOUD_MSG
    },
    {
        "opcode": "SEND_USER_CLOUD_MSG_VALUE",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "message": {
                "type": "string",
                "defaultValue": "message"
            },
            "value": {
                "type": "string",
                "defaultValue": "1",
                "checkNumber": true
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.SEND_USER_CLOUD_MSG_VALUE
    },
    {
        "opcode": "SEND_USER_CLOUD_MSG_WAIT",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "message": {
                "type": "string",
                "defaultValue": "message"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.SEND_USER_CLOUD_MSG_WAIT
    },
    {
        "opcode": "SEND_USER_CLOUD_MSG_VALUE_WAIT",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 36,
        "arguments": {
            "message": {
                "type": "string",
                "defaultValue": "message"
            },
            "value": {
                "type": "string",
                "defaultValue": "1",
                "checkNumber": true
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.SEND_USER_CLOUD_MSG_VALUE_WAIT
    },
    {
        "opcode": "WHEN_RECEIVE_USER_CLOUD_MSG",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "message": {
                "type": "string",
                "defaultValue": "message"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.WHEN_RECEIVE_USER_CLOUD_MSG
    },
    {
        "opcode": "GET_USER_CLOUD_MSG_VALUE",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "message": {
                "type": "string",
                "defaultValue": "message"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.GET_USER_CLOUD_MSG_VALUE
    }
]);

export default blocks;