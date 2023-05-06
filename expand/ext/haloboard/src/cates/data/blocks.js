const blocks = (extFacePanels) => ([{
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
        ],
        "codes": {
            "python": {
                "code": `{{this.getSafeName(this.VARIABLE)}}`
            }
        }
    },
    {
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
        ],
        "codes": {
            "python": {
                "code": `{{this.getSafeName(this.VARIABLE)}} = {VALUE}`
            }
        }
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
        ],
        "codes": {
            "python": {
                "code": `{{this.getSafeName(this.VARIABLE)}} = {{this.getSafeName(this.VARIABLE)}} + {VALUE}`
            }
        }
    },
    {
        "opcode": "data_showvariable",
        "blockType": "command",
        "checkboxInFlyout": false,
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
        "opcode": "data_hidevariable",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
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
        "opcode": "data_showlist",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "LIST": {
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
        "opcode": "data_hidelist",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "LIST": {
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
    }
]);

export default blocks;