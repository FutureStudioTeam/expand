const blocks = (extFacePanels) => ([{
        "opcode": "getBluetoothJoystickValue",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "AXIS": {
                "type": "fieldMenu",
                "defaultValue": "Rx",
                "menu": "GETBLUETOOTHJOYSTICKVALUE_AXIS"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `gamepad.get_joystick('{AXIS}')`,
                "sections": {
                    "import": ['gamepad']
                }
            }
        },
        "handler": this.funcs.getBluetoothJoystickValue
    },
    {
        "opcode": "CheckBluetoothKey",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "AXIS": {
                "type": "fieldMenu",
                "defaultValue": "N1",
                "menu": "CHECKBLUETOOTHKEY_AXIS"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `gamepad.is_key_pressed('{AXIS}')`,
                "sections": {
                    "import": ['gamepad']
                }
            }
        },
        "handler": this.funcs.CheckBluetoothKey
    }
]);

export default blocks;