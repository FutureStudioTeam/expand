const blocks = (extFacePanels) => ([{
    "opcode": "procedures_definition",
    "blockType": "command",
    "checkboxInFlyout": false,
    "hidden": false,
    "gap": 36,
    "arguments": {},
    "branchCount": 0,
    "platform": [
        "mblockpc",
        "mblockweb",
        "mblockapp"
    ],
    "codes": {
        "arduinoc": {
            "sections": {
                "declare": this.funcs.proceduresDefinitionCodesDeclare
            }
        }
    }
}]);

export default blocks;