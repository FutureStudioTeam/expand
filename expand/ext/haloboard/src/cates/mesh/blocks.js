const blocks = (extFacePanels) => ([{
        "opcode": "haloboard_mesh_create1",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
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
                "code": `halo.mesh.start_group({mesh_name})`,
                "sections": {
                    "lib": `# halo.mesh.set_mode(\"mesh\")`
                }
            }
        },
        "handler": this.funcs.haloboard_mesh_create1
    },
    {
        "opcode": "haloboard_mesh_join1",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
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
                "code": `halo.mesh.join_group({mesh_name})`,
                "sections": {
                    "lib": `#halo.mesh.set_mode(\"mesh\")`
                }
            }
        },
        "handler": this.funcs.haloboard_mesh_join1
    },
    {
        "opcode": "haloboard_mesh_broadcast_message",
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
                "code": `halo.mesh.broadcast({message})\r`
            }
        },
        "handler": this.funcs.haloboard_mesh_broadcast_message
    },
    {
        "opcode": "haloboard_mesh_broadcast_message_with_value",
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
                "code": `halo.mesh.broadcast({message}, {value})`
            }
        },
        "handler": this.funcs.haloboard_mesh_broadcast_message_with_value
    },
    {
        "opcode": "haloboard_mesh_when_received_message",
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
                "code": `@event.mesh_message({message})\r\ndef on_mesh_message{$INDEX}():\r\n    {{\r\n        (()=>{\r\n            let variableList = this.$ALL_VARIABLES.concat(this.$ALL_LISTVARIABLES);\r\n            return variableList.length>0?'global '+variableList.join(', '):''\r\n        })()\r\n    }}\r\n    {$BRANCH}\r\n\r`,
                "sections": {
                    "import": ['event', 'halo', 'time']
                }
            }
        },
        "handler": this.funcs.haloboard_mesh_when_received_message
    },
    {
        "opcode": "haloboard_mesh_get_value",
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
                "code": `halo.mesh.get_info({message})`
            }
        },
        "handler": this.funcs.haloboard_mesh_get_value
    },
    {
        "opcode": "BLOCK_1554191633131",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 36,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.BLOCK_1554191633131
    }
]);

export default blocks;