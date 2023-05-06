const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_RGB_LED_1574244770906",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_RGB_LED_1574244770906_NUM"
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "PORT1",
                "menu": "BLOCK_RGB_LED_1574244770906_PORT"
            },
            "INDEX": {
                "type": "fieldMenu",
                "defaultValue": "INDEX1",
                "menu": "BLOCK_RGB_LED_1574244770906_INDEX"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "sections": {
                    "from": `from mbuild.rgb_led import rgb_led_class`,
                    "new_class": `rgb_led_{NUM} = rgb_led_class(\"{PORT}\", \"{INDEX}\")`
                }
            }
        },
        "handler": this.funcs.BLOCK_RGB_LED_1574244770906
    },
    {
        "opcode": "BLOCK_1565078276055",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_RGB_LED_1574244770906_NUM"
            },
            "color_2": {
                "type": "color",
                "defaultValue": "#ef1625"
            },
            "number_3": {
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
                "code": this.funcs.block1565078276055CodesCode
            }
        },
        "handler": this.funcs.BLOCK_1565078276055
    },
    {
        "opcode": "BLOCK_1565078427193",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_RGB_LED_1574244770906_NUM"
            },
            "color_2": {
                "type": "color",
                "defaultValue": "#ef1625"
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
                "code": this.funcs.block1565078427193CodesCode
            }
        },
        "handler": this.funcs.BLOCK_1565078427193
    },
    {
        "opcode": "BLOCK_1565078500887",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_RGB_LED_1574244770906_NUM"
            },
            "r": {
                "type": "number",
                "defaultValue": 255
            },
            "g": {
                "type": "number",
                "defaultValue": 0
            },
            "b": {
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
                "code": `rgb_led_{index}.show({r}, {g}, {b})`
            }
        },
        "handler": this.funcs.BLOCK_1565078500887
    },
    {
        "opcode": "BLOCK_1565078533128",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_RGB_LED_1574244770906_NUM"
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
                "code": `rgb_led_{index}.off()`
            }
        },
        "handler": this.funcs.BLOCK_1565078533128
    },
    {
        "opcode": "BLOCK_1569143379816",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_RGB_LED_1574244770906_NUM"
            },
            "color": {
                "type": "fieldMenu",
                "defaultValue": "red",
                "menu": "BLOCK_1569143379816_COLOR"
            },
            "value": {
                "type": "number",
                "defaultValue": 255
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
                "code": `rgb_led_{index}.set_{color}({value})`
            }
        },
        "handler": this.funcs.BLOCK_1569143379816
    },
    {
        "opcode": "BLOCK_1565078755274",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_RGB_LED_1574244770906_NUM"
            },
            "color": {
                "type": "fieldMenu",
                "defaultValue": "red",
                "menu": "BLOCK_1569143379816_COLOR"
            },
            "value": {
                "type": "number",
                "defaultValue": 255
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
                "code": `rgb_led_{index}.change_{color}({value})`
            }
        },
        "handler": this.funcs.BLOCK_1565078755274
    },
    {
        "opcode": "BLOCK_1565078777662",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_RGB_LED_1574244770906_NUM"
            },
            "color": {
                "type": "fieldMenu",
                "defaultValue": "red",
                "menu": "BLOCK_1569143379816_COLOR"
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
                "code": `rgb_led_{index}.get_{color}()`
            }
        },
        "handler": this.funcs.BLOCK_1565078777662
    }
]);

export default blocks;