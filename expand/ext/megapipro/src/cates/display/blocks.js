const blocks = (extFacePanels) => ([{
        "opcode": "seg7_show_number",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "SEG7_SHOW_NUMBER_PORT"
            },
            "NUMBER": {
                "type": "number",
                "defaultValue": 1000
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.seg7ShowNumberCodesCode,
                "sections": {
                    "lib": this.funcs.seg7ShowNumberCodesLib
                }
            }
        },
        "handler": this.funcs.seg7_show_number
    },
    {
        "opcode": "mcore_show_face_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "SEG7_SHOW_NUMBER_PORT"
            },
            "FACE_PANEL": extFacePanels['80dd5281-e401-4346-a1fd-64dce4a85461'],
            "TIME": {
                "type": "number",
                "defaultValue": 3
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.mcoreShowFaceTimeCodesCode,
                "sections": {
                    "lib": this.funcs.mcoreShowFaceTimeCodesLib,
                    "setup": this.funcs.mcoreShowFaceTimeCodesSetup
                }
            }
        },
        "handler": this.funcs.mcore_show_face_time
    },
    {
        "opcode": "mcore_show_face",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "SEG7_SHOW_NUMBER_PORT"
            },
            "FACE_PANEL": extFacePanels['80dd5281-e401-4346-a1fd-64dce4a85461']
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.mcoreShowFaceCodesCode,
                "sections": {
                    "lib": this.funcs.mcoreShowFaceCodesLib,
                    "setup": this.funcs.mcoreShowFaceCodesSetup
                }
            }
        },
        "handler": this.funcs.mcore_show_face
    },
    {
        "opcode": "mcore_show_face_position",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "SEG7_SHOW_NUMBER_PORT"
            },
            "FACE_PANEL": extFacePanels['80dd5281-e401-4346-a1fd-64dce4a85461'],
            "X": {
                "type": "number",
                "defaultValue": 0
            },
            "Y": {
                "type": "number",
                "defaultValue": 0
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.mcoreShowFacePositionCodesCode,
                "sections": {
                    "lib": this.funcs.mcoreShowFacePositionCodesLib,
                    "setup": this.funcs.mcoreShowFacePositionCodesSetup
                }
            }
        },
        "handler": this.funcs.mcore_show_face_position
    },
    {
        "opcode": "mcore_show_text",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "SEG7_SHOW_NUMBER_PORT"
            },
            "TEXT": {
                "type": "string",
                "defaultValue": "Hi"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `ledMtx_/*{PORT}*/.drawStr(0, 0 + 7, String(/*{TEXT}*/).c_str());`,
                "sections": {
                    "lib": this.funcs.mcoreShowTextCodesLib,
                    "setup": this.funcs.mcoreShowTextCodesSetup
                }
            }
        },
        "handler": this.funcs.mcore_show_text
    },
    {
        "opcode": "mcore_show_text_position",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "SEG7_SHOW_NUMBER_PORT"
            },
            "TEXT": {
                "type": "string",
                "defaultValue": "Hi"
            },
            "X": {
                "type": "number",
                "defaultValue": 0
            },
            "Y": {
                "type": "number",
                "defaultValue": 0
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.mcoreShowTextPositionCodesCode,
                "sections": {
                    "lib": this.funcs.mcoreShowTextPositionCodesLib,
                    "setup": this.funcs.mcoreShowTextPositionCodesSetup
                }
            }
        },
        "handler": this.funcs.mcore_show_text_position
    },
    {
        "opcode": "mcore_show_number",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "SEG7_SHOW_NUMBER_PORT"
            },
            "NUMBER": {
                "type": "number",
                "defaultValue": 2048
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.mcoreShowNumberCodesCode,
                "sections": {
                    "lib": this.funcs.mcoreShowNumberCodesLib,
                    "setup": this.funcs.mcoreShowNumberCodesSetup
                }
            }
        },
        "handler": this.funcs.mcore_show_number
    },
    {
        "opcode": "mcore_show_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "SEG7_SHOW_NUMBER_PORT"
            },
            "NUMBER1": {
                "type": "number",
                "defaultValue": 12
            },
            "NUMBER2": {
                "type": "number",
                "defaultValue": 30
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.mcoreShowTimeCodesCode,
                "sections": {
                    "lib": this.funcs.mcoreShowTimeCodesLib,
                    "setup": this.funcs.mcoreShowTimeCodesSetup
                }
            }
        },
        "handler": this.funcs.mcore_show_time
    }
]);

export default blocks;