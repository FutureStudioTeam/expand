const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1597654873314",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PIN": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "BLOCK_1597654873314_PIN"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `p{PIN}.read_digital()`,
                "sections": {
                    "declare": `p{PIN}=MPythonPin({PIN},PinMode.IN)`
                }
            }
        },
        "handler": this.funcs.BLOCK_1597654873314
    },
    {
        "opcode": "BLOCK_1597655139293",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PIN": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1597655139293_PIN"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `p{PIN}.read_analog()`,
                "sections": {
                    "declare": `p{PIN}=MPythonPin({PIN},PinMode.ANALOG)`
                }
            }
        },
        "handler": this.funcs.BLOCK_1597655139293
    },
    {
        "opcode": "BLOCK_1597655375406",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PIN": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "BLOCK_1597655375406_PIN"
            },
            "LEVEL": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "BLOCK_1597655375406_LEVEL"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `p{PIN}.write_digital({LEVEL})`,
                "sections": {
                    "declare": `p{PIN}=MPythonPin({PIN},PinMode.OUT)`
                }
            }
        },
        "handler": this.funcs.BLOCK_1597655375406
    },
    {
        "opcode": "BLOCK_1597655536175",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PIN": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "BLOCK_1597655375406_PIN"
            },
            "OUTPUT": {
                "type": "number",
                "defaultValue": 512
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `p{PIN}.write_analog(int({OUTPUT}))`,
                "sections": {
                    "declare": `p{PIN}=MPythonPin({PIN},PinMode.PWM)`
                }
            }
        },
        "handler": this.funcs.BLOCK_1597655536175
    }
]);

export default blocks;