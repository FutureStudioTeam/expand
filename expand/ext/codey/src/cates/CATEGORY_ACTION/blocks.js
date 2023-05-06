const blocks = (extFacePanels) => ([{
        "opcode": "meos_move_forward_with_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/a423e3b79cd24bf986f865e79b2d14e7.svg', 'codey')
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
            "python": {
                "code": `rocky.forward({POWER}, {TIME})`,
                "sections": {
                    "import": ['rocky', 'time']
                }
            }
        },
        "handler": this.funcs.meos_move_forward_with_time
    },
    {
        "opcode": "meos_move_backward_with_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/a423e3b79cd24bf986f865e79b2d14e7.svg', 'codey')
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
            "python": {
                "code": `rocky.backward({POWER}, {TIME})`,
                "sections": {
                    "import": ['rocky', 'time']
                }
            }
        },
        "handler": this.funcs.meos_move_backward_with_time
    },
    {
        "opcode": "meos_move_left_with_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/a423e3b79cd24bf986f865e79b2d14e7.svg', 'codey')
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
            "python": {
                "code": `rocky.turn_left({POWER}, {TIME})`,
                "sections": {
                    "import": ['rocky', 'time']
                }
            }
        },
        "handler": this.funcs.meos_move_left_with_time
    },
    {
        "opcode": "meos_move_right_with_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/a423e3b79cd24bf986f865e79b2d14e7.svg', 'codey')
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
            "python": {
                "code": `rocky.turn_right({POWER}, {TIME})`,
                "sections": {
                    "import": ['rocky', 'time']
                }
            }
        },
        "handler": this.funcs.meos_move_right_with_time
    },
    {
        "opcode": "meos_rocky_keep_absolute_forward",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/a423e3b79cd24bf986f865e79b2d14e7.svg', 'codey')
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
            "python": {
                "code": `rocky.forward({POWER}, {TIME}, straight = True)`,
                "sections": {
                    "import": ['rocky', 'time']
                }
            }
        },
        "handler": this.funcs.meos_rocky_keep_absolute_forward
    },
    {
        "opcode": "meos_rocky_keep_absolute_backward",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/a423e3b79cd24bf986f865e79b2d14e7.svg', 'codey')
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
            "python": {
                "code": `rocky.backward({POWER}, {TIME}, straight = True)`,
                "sections": {
                    "import": ['rocky', 'time']
                }
            }
        },
        "handler": this.funcs.meos_rocky_keep_absolute_backward
    },
    {
        "opcode": "meos_move_left_with_angle",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "image_4": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/f5c03be4ac9146248e0f81741e087297.svg', 'codey')
            },
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/74deaeca652142f79677cafa45af3010.svg', 'codey')
            },
            "ANGLE": {
                "type": "number",
                "defaultValue": 15
            }
        },
        "branchCount": 0,
        "platform": [],
        "codes": {
            "python": {
                "code": `rocky.turn_left_by_degree({ANGLE})`,
                "sections": {
                    "import": ['rocky']
                }
            }
        },
        "handler": this.funcs.meos_move_left_with_angle
    },
    {
        "opcode": "meos_move_right_with_angle",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "image_5": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cb2423e886624c4c8ed23ff6762c6f2b.svg', 'codey')
            },
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/f35def0169944e83af0ba5b644b5d7e3.svg', 'codey')
            },
            "ANGLE": {
                "type": "number",
                "defaultValue": 15
            }
        },
        "branchCount": 0,
        "platform": [],
        "codes": {
            "python": {
                "code": `rocky.turn_right_by_degree({ANGLE})`,
                "sections": {
                    "import": ['rocky']
                }
            }
        },
        "handler": this.funcs.meos_move_right_with_angle
    },
    {
        "opcode": "meos_move",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/a423e3b79cd24bf986f865e79b2d14e7.svg', 'codey')
            },
            "DIRECTION": {
                "type": "fieldMenu",
                "defaultValue": "forward",
                "menu": "MEOS_MOVE_DIRECTION"
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
            "python": {
                "code": `rocky.{DIRECTION}({POWER})`,
                "sections": {
                    "import": ['rocky']
                }
            }
        },
        "handler": this.funcs.meos_move
    },
    {
        "opcode": "meos_move_with_motors",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/a423e3b79cd24bf986f865e79b2d14e7.svg', 'codey')
            },
            "LEFT_POWER": {
                "type": "number",
                "defaultValue": 50
            },
            "RIGHT_POWER": {
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
            "python": {
                "code": `rocky.drive({LEFT_POWER}, {RIGHT_POWER})`,
                "sections": {
                    "import": ['rocky']
                }
            }
        },
        "handler": this.funcs.meos_move_with_motors
    },
    {
        "opcode": "meos_move_stop",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/a423e3b79cd24bf986f865e79b2d14e7.svg', 'codey')
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
                "code": `rocky.stop()`,
                "sections": {
                    "import": ['rocky']
                }
            }
        },
        "handler": this.funcs.meos_move_stop
    },
    {
        "opcode": "meos_rocky_keep_absolute_run",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/a423e3b79cd24bf986f865e79b2d14e7.svg', 'codey')
            },
            "DIRECTION": {
                "type": "fieldMenu",
                "defaultValue": "forward",
                "menu": "MEOS_ROCKY_KEEP_ABSOLUTE_RUN_DIRECTION"
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
        "codes": {
            "python": {
                "code": `rocky.{DIRECTION}({POWER},{TIME},True)`,
                "sections": {
                    "import": ['rocky']
                }
            }
        },
        "handler": this.funcs.meos_rocky_keep_absolute_run
    }
]);

export default blocks;