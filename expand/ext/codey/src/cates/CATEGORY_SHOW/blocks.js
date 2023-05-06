const blocks = (extFacePanels) => ([{
        "opcode": "meos_show_led_matrix_face_with_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
            },
            "PANEL": extFacePanels['80dd5281-e401-4346-a1fd-64dce4a85461'],
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
                "code": this.funcs.meosShowLedMatrixFaceWithTimeCodesCode
            }
        },
        "handler": this.funcs.meos_show_led_matrix_face_with_time
    },
    {
        "opcode": "meos_show_led_matrix_face",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
            },
            "PANEL": extFacePanels['80dd5281-e401-4346-a1fd-64dce4a85461']
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.meosShowLedMatrixFaceCodesCode,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_show_led_matrix_face
    },
    {
        "opcode": "meos_show_led_matrix_face_position",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
            },
            "PANEL": extFacePanels['80dd5281-e401-4346-a1fd-64dce4a85461'],
            "AXIS-X": {
                "type": "number",
                "defaultValue": 0
            },
            "AXIS-Y": {
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
            "python": {
                "code": this.funcs.meosShowLedMatrixFacePositionCodesCode,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_show_led_matrix_face_position
    },
    {
        "opcode": "meos_show_led_matrix_turn_off",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
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
                "code": `codey.display.clear()`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_show_led_matrix_turn_off
    },
    {
        "opcode": "meos_show_led_matrix",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
            },
            "STRING": {
                "type": "string",
                "defaultValue": "hello",
                "checkNumber": true
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
                "code": `codey.display.show({STRING}, wait = False)`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_show_led_matrix
    },
    {
        "opcode": "meos_show_led_matrix_string",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
            },
            "STRING": {
                "type": "string",
                "defaultValue": "hello",
                "checkNumber": true
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
                "code": `codey.display.show({STRING})`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_show_led_matrix_string
    },
    {
        "opcode": "meos_show_led_matrix_string_position",
        "blockType": "command",
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
            "STRING": {
                "type": "string",
                "defaultValue": "hello"
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
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": `codey.display.show({STRING}, {X}, {Y})`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_show_led_matrix_string_position
    },
    {
        "opcode": "meos_show_led_matrix_position",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
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
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": `codey.display.set_pixel({X}, {Y}, True)`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_show_led_matrix_position
    },
    {
        "opcode": "meos_light_off_led_matrix_position",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
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
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": `codey.display.set_pixel({X}, {Y}, False)`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_light_off_led_matrix_position
    },
    {
        "opcode": "meos_toggle_led_matrix_position",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
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
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": `codey.display.toggle_pixel({X}, {Y})`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_toggle_led_matrix_position
    },
    {
        "opcode": "meos_event_led_matrix_position_is_light",
        "blockType": "boolean",
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
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": `codey.display.get_pixel({X}, {Y})`
            }
        },
        "handler": this.funcs.meos_event_led_matrix_position_is_light
    },
    {
        "opcode": "procedures_definition",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "sections": {
                    "lib": `def {$PROC_CODE}:\r\n    {{(this.$ALL_VARIABLES.length==0)?'':'global '+this.$ALL_VARIABLES.join(', ')}}\r\n    {$BRANCH}`
                }
            }
        }
    },
    {
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
                "code": `{{\r\n(function(OPERATOR, arg){\r\n  let code = '';\r\n  switch(OPERATOR){\r\n    case 'abs':\r\n        code = 'math.fabs(' + arg + ')';\r\n        break;\r\n    case 'floor':\r\n        code = 'math.floor(' + arg + ')';\r\n        break;\r\n    case 'ceiling':\r\n        code = 'math.ceil(' + arg + ')';\r\n        break;\r\n    case 'sqrt':\r\n        code = 'math.sqrt(' + arg + ')';\r\n        break;\r\n    case 'sin':\r\n        code = 'math.sin(' + arg + ' / 180.0 * math.pi)';\r\n        break;\r\n    case 'cos':\r\n        code = 'math.cos(' + arg + ' / 180.0 * math.pi)';\r\n        break;\r\n    case 'tan':\r\n        code = 'math.tan(' + arg + ' / 180.0 * math.pi)';\r\n        break;\r\n    case 'log':\r\n        code = 'math.log(' + arg + ' ,10)'; // microbit 不支持 log10，故此处统一为math.log(n, base)\r\n        break;\r\n    case 'ln': // 实际为 log(x)\r\n        code = 'math.log(' + arg + ')';\r\n        break;\r\n    case 'e ^':\r\n        code = 'math.exp(' + arg + ')';\r\n        break;\r\n    case 'exp': // exp 与 e ^ 等价\r\n        code = 'math.exp(' + arg + ')';\r\n        break;\r\n    case '10 ^':\r\n        code = 'math.pow(10, ' + arg + ')';\r\n        break;\r\n  };\r\n  return code\r\n})(this.OPERATOR, this.NUM)\r\n}}`,
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
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
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