const blocks = (extFacePanels) => ([{
        "opcode": "auriga_show_all_ledstrip_color",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_laser_sword/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_laser_sword')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_PORT"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_SLOT"
            },
            "COLOR_LIST": {
                "type": "fieldMenu",
                "defaultValue": "#FF0000",
                "menu": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.aurigaShowAllLedstripColorCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaShowAllLedstripColorCodesLib,
                    "setup": this.funcs.aurigaShowAllLedstripColorCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_show_all_ledstrip_color
    },
    {
        "opcode": "auriga_show_ledstrip_color",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_laser_sword/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_laser_sword')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_PORT"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_SLOT"
            },
            "POS": {
                "type": "number",
                "defaultValue": 1
            },
            "COLOR_LIST": {
                "type": "fieldMenu",
                "defaultValue": "#FF0000",
                "menu": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.aurigaShowLedstripColorCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaShowLedstripColorCodesLib,
                    "setup": this.funcs.aurigaShowLedstripColorCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_show_ledstrip_color
    },
    {
        "opcode": "auriga_show_ledstrip_rbg",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_laser_sword/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_laser_sword')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_PORT"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_SLOT"
            },
            "POS": {
                "type": "number",
                "defaultValue": 1
            },
            "R": {
                "type": "number",
                "defaultValue": 255
            },
            "G": {
                "type": "number",
                "defaultValue": 0
            },
            "B": {
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
            "arduinoc": {
                "code": this.funcs.aurigaShowLedstripRbgCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaShowLedstripRbgCodesLib,
                    "setup": this.funcs.aurigaShowLedstripRbgCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_show_ledstrip_rbg
    }
]);

export default blocks;