const blocks = (extFacePanels) => ([{
    "opcode": "BLOCK_1559814177378",
    "blockType": "number",
    "checkboxInFlyout": true,
    "hidden": false,
    "gap": 12,
    "arguments": {
        "index": {
            "type": "fieldMenu",
            "defaultValue": "1",
            "menu": "BLOCK_1559814177378_INDEX"
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
            "code": `mbuild.sound_sensor.get_loudness({index})`,
            "sections": {
                "import": ['mbuild']
            }
        }
    },
    "handler": this.funcs.BLOCK_1559814177378
}]);

export default blocks;