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
        "mblockweb"
    ],
    "codes": {
        "python": {
            "sections": {
                "lib": `def {$PROC_CODE}:\r\n    {{(this.$ALL_VARIABLES.length==0)?'':'global '+this.$ALL_VARIABLES.join(', ')}}\r\n    {$BRANCH}`
            }
        }
    }
}]);

export default blocks;