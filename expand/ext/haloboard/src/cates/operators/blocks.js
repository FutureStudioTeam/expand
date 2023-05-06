const blocks = (extFacePanels) => ([{
        "opcode": "operator_mathop",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('haloboard/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'haloboard')
            },
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
            "mblockweb",
            "mblockapp"
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
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('haloboard/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'haloboard')
            },
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
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.operatorRandomCodesCode,
                "sections": {
                    "import": ['random']
                }
            }
        }
    }
]);

export default blocks;