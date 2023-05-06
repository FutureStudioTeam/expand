const blocks = (extFacePanels) => ([{
        "opcode": "data_setvariableto",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "VARIABLE": {
                "type": "fieldVariable",
                "defaultValue": ""
            },
            "VALUE": {
                "type": "number",
                "defaultValue": 0
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ]
    },
    {
        "opcode": "data_variable",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "VARIABLE": {
                "type": "fieldVariable",
                "defaultValue": ""
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ]
    },
    {
        "opcode": "data_changevariableby",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "VARIABLE": {
                "type": "fieldVariable",
                "defaultValue": ""
            },
            "VALUE": {
                "type": "number",
                "defaultValue": 1
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ]
    }
]);

export default blocks;