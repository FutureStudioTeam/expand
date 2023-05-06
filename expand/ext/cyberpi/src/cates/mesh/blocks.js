const blocks = (extFacePanels) => ([{
        "opcode": "cyberpi_mesh_create",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "mesh_name": {
                "type": "string",
                "defaultValue": "mesh1"
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
                "code": `cyberpi.mesh.set({mesh_name})`
            }
        },
        "handler": this.funcs.cyberpi_mesh_create
    },
    {
        "opcode": "cyberpi_mesh_join",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 36,
        "arguments": {
            "mesh_name": {
                "type": "string",
                "defaultValue": "mesh1"
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
                "code": `cyberpi.mesh.join({mesh_name})`
            }
        },
        "handler": this.funcs.cyberpi_mesh_join
    },
    {
        "opcode": "cyberpi_set_wifi_broadcast",
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
                "code": `cyberpi.mesh_broadcast.set({message}, 0)`
            }
        },
        "handler": this.funcs.cyberpi_set_wifi_broadcast
    },
    {
        "opcode": "cyberpi_set_wifi_broadcast_with_value",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
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
                "code": `cyberpi.mesh_broadcast.set({message}, {value})`
            }
        },
        "handler": this.funcs.cyberpi_set_wifi_broadcast_with_value
    },
    {
        "opcode": "cyberpi_wifi_broadcast_when_received_message",
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
                "code": `@cyberpi.event.mesh_broadcast({message})\r\ndef on_mesh_broadcast{$INDEX}():\r\n    {{(this.$ALL_VARIABLES.length !== 0)?'global '+this.$ALL_VARIABLES.join(', '):'' }}\r\n    {$BRANCH}\r`,
                "sections": {
                    "import": ['event', 'time', 'cyberpi']
                }
            }
        },
        "handler": this.funcs.cyberpi_wifi_broadcast_when_received_message
    },
    {
        "opcode": "cyberpi_wifi_broadcast_get_value",
        "blockType": "string",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
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
                "code": `cyberpi.mesh_broadcast.get({message})`
            }
        },
        "handler": this.funcs.cyberpi_wifi_broadcast_get_value
    }
]);

export default blocks;