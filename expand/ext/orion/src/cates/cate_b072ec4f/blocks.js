const blocks = (extFacePanels) => ([{
    "opcode": "runSevseg",
    "blockType": "command",
    "checkboxInFlyout": false,
    "hidden": false,
    "gap": 12,
    "arguments": {
        "bluePorts": {
            "type": "fieldMenu",
            "defaultValue": "3",
            "menu": "RUNSEVSEG_BLUEPORTS"
        },
        "args0": {
            "type": "number",
            "defaultValue": 100
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
            "code": this.funcs.runSevsegCodesCode,
            "sections": {
                "lib": this.funcs.runSevsegCodesLib
            }
        }
    },
    "handler": this.funcs.runSevseg
}]);

export default blocks;