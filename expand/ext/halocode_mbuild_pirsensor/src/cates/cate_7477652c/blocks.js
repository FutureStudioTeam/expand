const blocks = (extFacePanels) => ([{
        "opcode": "event_pir",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "EVENT_PIR_INDEX"
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
                "code": `mbuild.pir_sensor.is_activated({index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.event_pir
    },
    {
        "opcode": "pir_count",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "EVENT_PIR_INDEX"
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
                "code": `mbuild.pir_sensor.get_count({index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.pir_count
    },
    {
        "opcode": "pir_count_make_zero",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "EVENT_PIR_INDEX"
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
                "code": `mbuild.pir_sensor.reset_count({index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.pir_count_make_zero
    }
]);

export default blocks;