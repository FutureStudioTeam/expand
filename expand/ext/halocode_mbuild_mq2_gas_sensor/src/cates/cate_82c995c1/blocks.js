const blocks = (extFacePanels) => ([{
    "opcode": "BLOCK_1560258942584",
    "blockType": "boolean",
    "checkboxInFlyout": false,
    "hidden": false,
    "gap": 12,
    "arguments": {
        "index": {
            "type": "fieldMenu",
            "defaultValue": "1",
            "menu": "BLOCK_1560258942584_INDEX"
        },
        "sen": {
            "type": "fieldMenu",
            "defaultValue": "low",
            "menu": "BLOCK_1560258942584_SEN"
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
            "code": `mbuild.mq2_gas_sensor.is_active('{sen}', {index})`,
            "sections": {
                "import": ['mbuild']
            }
        }
    },
    "handler": this.funcs.BLOCK_1560258942584
}]);

export default blocks;