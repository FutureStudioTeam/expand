const blocks = (extFacePanels) => ([{
    "opcode": "BLOCK_1560256139660",
    "blockType": "number",
    "checkboxInFlyout": true,
    "hidden": false,
    "gap": 12,
    "arguments": {
        "index": {
            "type": "fieldMenu",
            "defaultValue": "1",
            "menu": "BLOCK_1560256139660_INDEX"
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
            "code": `mbuild.soil_moisture.get_humidity({index})`,
            "sections": {
                "import": ['mbuild']
            }
        }
    },
    "handler": this.funcs.BLOCK_1560256139660
}]);

export default blocks;