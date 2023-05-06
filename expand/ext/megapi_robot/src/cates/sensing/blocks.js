const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1616555666950",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "60",
                "menu": "BLOCK_1616555666950_PORT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": `barrier_/*{PORT}*/.isBarried()`,
                "sections": {
                    "lib": this.funcs.block1616555666950CodesLib
                }
            }
        },
        "handler": this.funcs.BLOCK_1616555666950
    },
    {
        "opcode": "BLOCK_1616555667136",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "63",
                "menu": "BLOCK_1616555667136_PORT"
            },
            "COLOR": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "BLOCK_1616555667136_COLOR"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": `(linefollower_/*{PORT}*/.readSensor() == /*{COLOR}*/)`,
                "sections": {
                    "lib": this.funcs.block1616555667136CodesLib
                }
            }
        },
        "handler": this.funcs.BLOCK_1616555667136
    },
    {
        "opcode": "BLOCK_1616555667069",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "65",
                "menu": "BLOCK_1616555667069_PORT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": `collision_/*{PORT}*/.isCollision()`,
                "sections": {
                    "lib": this.funcs.block1616555667069CodesLib
                }
            }
        },
        "handler": this.funcs.BLOCK_1616555667069
    },
    {
        "opcode": "detect_timer",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": `getLastTime()`,
                "sections": {
                    "lib": this.funcs.detectTimerCodesLib,
                    "declare": this.funcs.detectTimerCodesDeclare
                }
            }
        },
        "handler": this.funcs.detect_timer
    },
    {
        "opcode": "reset_timer",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": `lastTime = millis()/1000.0;`,
                "sections": {
                    "lib": this.funcs.resetTimerCodesLib
                }
            }
        },
        "handler": this.funcs.reset_timer
    }
]);

export default blocks;