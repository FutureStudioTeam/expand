const blocks = (extFacePanels) => ([{
        "opcode": "getBluetoothJoystickValue",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "AXIS": {
                "type": "fieldMenu",
                "defaultValue": "RX",
                "menu": "GETBLUETOOTHJOYSTICKVALUE_AXIS"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.getBluetoothJoystickValueCodesCode,
                "sections": {
                    "include": [
                        "<MePS2.h>"
                    ],
                    "declare": `MePS2 MePS2(PORT_15);`,
                    "setup": `MePS2.begin(115200);`,
                    "_loop": `MePS2.loop();`
                }
            }
        },
        "handler": this.funcs.getBluetoothJoystickValue
    },
    {
        "opcode": "checkBluetoothKey",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "AXIS": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "CHECKBLUETOOTHKEY_AXIS"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.checkBluetoothKeyCodesCode,
                "sections": {
                    "include": [
                        "<MePS2.h>"
                    ],
                    "declare": `MePS2 MePS2(PORT_15);`,
                    "setup": `MePS2.begin(115200);`,
                    "_loop": `MePS2.loop();`
                }
            }
        },
        "handler": this.funcs.checkBluetoothKey
    }
]);

export default blocks;