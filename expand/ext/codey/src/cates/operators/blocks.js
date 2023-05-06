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
            "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
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
}]);

export default blocks;