const blocks = (extFacePanels) => ([{
        "opcode": "operator_mathop",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "OPERATOR": {
                "type": "fieldMenu",
                "defaultValue": " fabs",
                "menu": "OPERATOR_MATHOP_OPERATOR"
            },
            "NUM": {
                "type": "number",
                "defaultValue": 1
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": this.funcs.operatorMathopCodesCode,
                "sections": {
                    "import": ['math']
                }
            }
        }
    },
    {
        "opcode": "operator_random",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "FROM": {
                "type": "number",
                "defaultValue": 1
            },
            "TO": {
                "type": "number",
                "defaultValue": 10
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `random.randint({FROM}, {TO})`,
                "sections": {
                    "import": ['random']
                }
            }
        }
    }
]);

export default blocks;