const blocks = (extFacePanels) => ([{
        "opcode": "auriga_forward_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga/imgs/6c8d75b3c8ad4f74a2b982a5961de250.svg', 'auriga')
            },
            "POWER": {
                "type": "number",
                "defaultValue": 50
            },
            "TIME": {
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
            "arduinoc": {
                "code": this.funcs.aurigaForwardTimeCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaForwardTimeCodesLib,
                    "declare": this.funcs.aurigaForwardTimeCodesDeclare,
                    "setup": this.funcs.aurigaForwardTimeCodesSetup,
                    "_loop": this.funcs.aurigaForwardTimeCodesLoop
                }
            }
        },
        "handler": this.funcs.auriga_forward_time
    },
    {
        "opcode": "auriga_backward_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga/imgs/6c8d75b3c8ad4f74a2b982a5961de250.svg', 'auriga')
            },
            "POWER": {
                "type": "number",
                "defaultValue": 50
            },
            "TIME": {
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
            "arduinoc": {
                "code": this.funcs.aurigaBackwardTimeCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaBackwardTimeCodesLib,
                    "declare": this.funcs.aurigaBackwardTimeCodesDeclare,
                    "setup": this.funcs.aurigaBackwardTimeCodesSetup,
                    "_loop": this.funcs.aurigaBackwardTimeCodesLoop
                }
            }
        },
        "handler": this.funcs.auriga_backward_time
    },
    {
        "opcode": "auriga_turnleft_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga/imgs/6c8d75b3c8ad4f74a2b982a5961de250.svg', 'auriga')
            },
            "POWER": {
                "type": "number",
                "defaultValue": 50
            },
            "TIME": {
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
            "arduinoc": {
                "code": this.funcs.aurigaTurnleftTimeCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaTurnleftTimeCodesLib,
                    "declare": this.funcs.aurigaTurnleftTimeCodesDeclare,
                    "setup": this.funcs.aurigaTurnleftTimeCodesSetup,
                    "_loop": this.funcs.aurigaTurnleftTimeCodesLoop
                }
            }
        },
        "handler": this.funcs.auriga_turnleft_time
    },
    {
        "opcode": "auriga_turnright_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga/imgs/6c8d75b3c8ad4f74a2b982a5961de250.svg', 'auriga')
            },
            "POWER": {
                "type": "number",
                "defaultValue": 50
            },
            "TIME": {
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
            "arduinoc": {
                "code": this.funcs.aurigaTurnrightTimeCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaTurnrightTimeCodesLib,
                    "declare": this.funcs.aurigaTurnrightTimeCodesDeclare,
                    "setup": this.funcs.aurigaTurnrightTimeCodesSetup,
                    "_loop": this.funcs.aurigaTurnrightTimeCodesLoop
                }
            }
        },
        "handler": this.funcs.auriga_turnright_time
    },
    {
        "opcode": "auriga_move",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga/imgs/6c8d75b3c8ad4f74a2b982a5961de250.svg', 'auriga')
            },
            "MOVE_DIRECTION": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_MOVE_MOVE_DIRECTION"
            },
            "POWER": {
                "type": "number",
                "defaultValue": 50
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
                "code": this.funcs.aurigaMoveCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaMoveCodesLib,
                    "declare": this.funcs.aurigaMoveCodesDeclare,
                    "setup": this.funcs.aurigaMoveCodesSetup,
                    "_loop": this.funcs.aurigaMoveCodesLoop
                }
            }
        },
        "handler": this.funcs.auriga_move
    },
    {
        "opcode": "auriga_move_wheel_speed",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga/imgs/6c8d75b3c8ad4f74a2b982a5961de250.svg', 'auriga')
            },
            "POWER_LEFT": {
                "type": "number",
                "defaultValue": 50
            },
            "POWER_RIGHT": {
                "type": "number",
                "defaultValue": 50
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
                "code": this.funcs.aurigaMoveWheelSpeedCodesCode,
                "sections": {
                    "lib": this.funcs.aurigaMoveWheelSpeedCodesLib,
                    "declare": this.funcs.aurigaMoveWheelSpeedCodesDeclare,
                    "setup": this.funcs.aurigaMoveWheelSpeedCodesSetup,
                    "_loop": this.funcs.aurigaMoveWheelSpeedCodesLoop
                }
            }
        },
        "handler": this.funcs.auriga_move_wheel_speed
    },
    {
        "opcode": "auriga_move_stop",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga/imgs/6c8d75b3c8ad4f74a2b982a5961de250.svg', 'auriga')
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
                "code": `Encoder_1.setTarPWM(0);\nEncoder_2.setTarPWM(0);\n_delay(0.5);`,
                "sections": {
                    "lib": this.funcs.aurigaMoveStopCodesLib,
                    "declare": this.funcs.aurigaMoveStopCodesDeclare,
                    "setup": this.funcs.aurigaMoveStopCodesSetup
                }
            }
        },
        "handler": this.funcs.auriga_move_stop
    }
]);

export default blocks;