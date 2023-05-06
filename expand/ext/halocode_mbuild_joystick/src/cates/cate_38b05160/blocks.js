const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1559707965944",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1559707965944_INDEX"
            },
            "dir": {
                "type": "fieldMenu",
                "defaultValue": "up",
                "menu": "BLOCK_1559707965944_DIR"
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
                "code": `mbuild.joystick.is_active('{dir}', {index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1559707965944
    },
    {
        "opcode": "BLOCK_1559708436297",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1559707965944_INDEX"
            },
            "axis": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "BLOCK_1559708436297_AXIS"
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
                "code": `mbuild.joystick.get_value('{axis}', {index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1559708436297
    }
]);

export default blocks;