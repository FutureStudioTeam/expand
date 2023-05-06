const blocks = (extFacePanels) => ([{
        "opcode": "timer",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `getLastTime()`,
                "sections": {
                    "lib": this.funcs.timerCodesLib,
                    "declare": `double getLastTime(){\r\n  return currentTime = millis()/1000.0 - lastTime;\r\n}`
                }
            }
        },
        "handler": this.funcs.timer
    },
    {
        "opcode": "timer_reset",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `lastTime = millis()/1000.0;`,
                "sections": {
                    "lib": this.funcs.timerResetCodesLib
                }
            }
        },
        "handler": this.funcs.timer_reset
    }
]);

export default blocks;