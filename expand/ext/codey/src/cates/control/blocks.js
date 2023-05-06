const blocks = (extFacePanels) => ([{
    "opcode": "control_stop",
    "blockType": "command",
    "checkboxInFlyout": false,
    "hidden": false,
    "gap": 12,
    "arguments": {
        "STOP_OPTION": {
            "type": "fieldMenu",
            "defaultValue": "all",
            "menu": "CONTROL_STOP_STOP_OPTION"
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
            "code": `{{\r\n  if(this.STOP_OPTION == 'all'){'codey.stop_all_scripts()'}\r\n  else if(this.STOP_OPTION == 'this script'){'codey.stop_this_script()'}\r\n  else{'codey.stop_other_scripts()'}   \r\n}}`,
            "sections": {
                "import": ['codey']
            }
        }
    }
}]);

export default blocks;