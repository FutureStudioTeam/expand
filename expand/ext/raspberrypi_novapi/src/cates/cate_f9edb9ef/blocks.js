const blocks = (extFacePanels) => ([{
        "opcode": "distance_sensor_init",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "SMARTSERVO_INIT_NUM"
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "PORT1",
                "menu": "DRGB_INIT_PORT"
            },
            "INDEX": {
                "type": "fieldMenu",
                "defaultValue": "INDEX1",
                "menu": "SMARTSERVO_INIT_INDEX"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "sections": {
                    "from": `from hardware.mbuild.ranging_sensor import ranging_sensor_class`,
                    "new_class": `__distance_sensor_{NUM} = ranging_sensor_class(\"{PORT}\", \"{INDEX}\", \"__distance_sensor_{NUM}\")`
                }
            }
        },
        "handler": this.funcs.distance_sensor_init
    },
    {
        "opcode": "distance_sensor_get_data",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "SMARTSERVO_INIT_NUM"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `__distance_sensor_{NUM}.get_distance()`,
                "sections": {
                    "from": `from hardware.mbuild.ranging_sensor import ranging_sensor_class`
                }
            }
        },
        "handler": this.funcs.distance_sensor_get_data
    }
]);

export default blocks;