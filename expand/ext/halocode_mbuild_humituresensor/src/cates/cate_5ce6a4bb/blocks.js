const blocks = (extFacePanels) => ([{
        "opcode": "op_temperature",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "OP_TEMPERATURE_INDEX"
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
                "code": `mbuild.humiture_sensor.get_temperature(\"celsius\", {index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.op_temperature
    },
    {
        "opcode": "op_htemperature",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "OP_TEMPERATURE_INDEX"
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
                "code": `(mbuild.humiture_sensor.get_temperature(\"fahrenheit\", {index}))`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.op_htemperature
    },
    {
        "opcode": "op_humidity",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "OP_TEMPERATURE_INDEX"
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
                "code": `mbuild.humiture_sensor.get_relative_humidity({index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.op_humidity
    }
]);

export default blocks;