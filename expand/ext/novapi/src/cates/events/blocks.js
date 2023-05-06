const blocks = (extFacePanels) => ([{
        "opcode": "NovaPi main program setup",
        "blockType": "hat",
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
                "code": `{$REST}`
            }
        },
        "handler": this.funcs.NovaPimainprogramsetup
    },
    {
        "opcode": "event_whenflagclicked",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ]
    }
]);

export default blocks;