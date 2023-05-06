const blocks = (extFacePanels) => ([{
    "opcode": "BLOCK_1552140810502",
    "blockType": "number",
    "checkboxInFlyout": true,
    "hidden": false,
    "gap": 36,
    "arguments": {
        "index": {
            "type": "fieldMenu",
            "defaultValue": "1",
            "menu": "BLOCK_1552140810502_INDEX"
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
            "code": `mbuild.slider.get_value({index})`,
            "sections": {
                "import": ['mbuild']
            }
        }
    },
    "handler": this.funcs.BLOCK_1552140810502
}]);

export default blocks;