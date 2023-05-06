const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1551748322055",
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
                "code": `cyberpi.upload_broadcast.set({message}, 0)`,
                "sections": {
                    "import": ['cyberpi']
                }
            }
        },
        "handler": this.funcs.BLOCK_1551748322055
    },
    {
        "opcode": "BLOCK_1551748500023",
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
                "code": `cyberpi.upload_broadcast.set({message}, {value})`,
                "sections": {
                    "import": ['cyberpi']
                }
            }
        },
        "handler": this.funcs.BLOCK_1551748500023
    },
    {
        "opcode": "BLOCK_1551748632732",
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
                "code": `@cyberpi.event.upload_broadcast({message})\r\ndef on_upload_mode_message{$INDEX}():\r\n    {{(this.$ALL_VARIABLES.length !== 0)?'global '+this.$ALL_VARIABLES.join(', '):'' }}\r\n    {$BRANCH}\r`,
                "sections": {
                    "import": ['event', 'cyberpi']
                }
            }
        },
        "handler": this.funcs.BLOCK_1551748632732
    },
    {
        "opcode": "BLOCK_1551748721826",
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
                "code": `cyberpi.upload_broadcast.get({message})`,
                "sections": {
                    "import": ['cyberpi']
                }
            }
        },
        "handler": this.funcs.BLOCK_1551748721826
    }
]);

export default blocks;