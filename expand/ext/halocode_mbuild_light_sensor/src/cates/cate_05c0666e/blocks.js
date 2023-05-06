const blocks = (extFacePanels) => ([{
    "opcode": "BLOCK_1559813805438",
    "blockType": "number",
    "checkboxInFlyout": true,
    "hidden": false,
    "gap": 12,
    "arguments": {
        "index": {
            "type": "fieldMenu",
            "defaultValue": "1",
            "menu": "BLOCK_1559813805438_INDEX"
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
            "code": `mbuild.light_sensor.get_value({index})`,
            "sections": {
                "import": ['mbuild']
            }
        }
    },
    "handler": this.funcs.BLOCK_1559813805438
}]);

export default blocks;