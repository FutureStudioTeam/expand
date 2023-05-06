const blocks = (extFacePanels) => ([{
        "opcode": "SendUploadModeMessage",
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
        "codes": {
            "python": {
                "code": `codey.upload_mode_message.broadcast({message}, '')`
            }
        },
        "handler": this.funcs.SendUploadModeMessage
    },
    {
        "opcode": "SendUploadModeMessageWithValue",
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
        "codes": {
            "python": {
                "code": `codey.upload_mode_message.broadcast({message}, {value})`
            }
        },
        "handler": this.funcs.SendUploadModeMessageWithValue
    },
    {
        "opcode": "whenReceivingUploadModeMessage ",
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
        "codes": {
            "python": {
                "code": `@event.upload_mode_message({message})\r\ndef on_upload_mode_message{$INDEX}():\r\n    {{(this.$ALL_VARIABLES.length !== 0)?'global '+this.$ALL_VARIABLES.join(', '):'' }}\r\n    {$BRANCH}`,
                "sections": {
                    "import": ['codey', 'event', 'time']
                }
            }
        },
        "handler": this.funcs.whenReceivingUploadModeMessage
    },
    {
        "opcode": "UploadModeMessageValue",
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
        "codes": {
            "python": {
                "code": `codey.upload_mode_message.get_info({message})`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.UploadModeMessageValue
    }
]);

export default blocks;