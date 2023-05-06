const blocks = (extFacePanels) => ([{
        "opcode": "open_camera",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `makex_symbol_process.set_send_frame_flag(True)`,
                "sections": {
                    "from": `import makex_symbol_process`,
                    "lib": `makex_symbol_process.setup()`
                }
            }
        },
        "handler": this.funcs.open_camera
    },
    {
        "opcode": "close_camera",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `makex_symbol_process.set_send_frame_flag(False)`,
                "sections": {
                    "from": `import makex_symbol_process`,
                    "lib": `makex_symbol_process.setup()`
                }
            }
        },
        "handler": this.funcs.close_camera
    },
    {
        "opcode": "recognize_symbol",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "SIZE": {
                "type": "fieldMenu",
                "defaultValue": "130.0",
                "menu": "RECOGNIZE_SYMBOL_SIZE"
            },
            "LETTER": {
                "type": "fieldMenu",
                "defaultValue": "M",
                "menu": "RECOGNIZE_SYMBOL_LETTER"
            },
            "TYPE": {
                "type": "fieldMenu",
                "defaultValue": "X",
                "menu": "RECOGNIZE_SYMBOL_TYPE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `makex_symbol_process.get_symbol_result({SIZE}, \"{LETTER}\", \"{TYPE}\")`
            }
        },
        "handler": this.funcs.recognize_symbol
    }
]);

export default blocks;