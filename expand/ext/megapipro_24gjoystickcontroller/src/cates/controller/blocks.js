const blocks = (extFacePanels) => ([{
        "opcode": "get24JoystickValue",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "AXIS": {
                "type": "fieldMenu",
                "defaultValue": "RX",
                "menu": "GET24JOYSTICKVALUE_AXIS"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.get24JoystickValueCodesCode,
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
        "handler": this.funcs.get24JoystickValue
    },
    {
        "opcode": "check24JoystickKey",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "AXIS": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "CHECK24JOYSTICKKEY_AXIS"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.check24JoystickKeyCodesCode,
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
        "handler": this.funcs.check24JoystickKey
    }
]);

export default blocks;