const blocks = (extFacePanels) => ([{
        "opcode": "mbuild_ultrasonic2_get_distance",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "MBUILD_ULTRASONIC2_GET_DISTANCE_INDEX"
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
                "code": `mbuild.ultrasonic2.get({index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_ultrasonic2_get_distance
    },
    {
        "opcode": "mbuild_ultrasonic2_out_of_range",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "MBUILD_ULTRASONIC2_GET_DISTANCE_INDEX"
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
                "code": `(mbuild.ultrasonic2.get({index}) >= 300)`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_ultrasonic2_out_of_range
    },
    {
        "opcode": "mbuild_ultrasonic2_show_with_facepanel",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 36,
        "arguments": {
            "inputMenu_1": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "MBUILD_ULTRASONIC2_GET_DISTANCE_INDEX"
            },
            "facePanel_1": extFacePanels['295abf37'],
            "facePanel_2": extFacePanels['4402180e']
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `mbuild.ultrasonic.led_show({bv1}, {bv2}, {bv3}, {bv4}, {bv5}, {bv6}, {bv7}, {bv8}, {index})`
            }
        },
        "handler": this.funcs.mbuild_ultrasonic2_show_with_facepanel
    },
    {
        "opcode": "mbuild_ultrasonic2_set_bri",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "MBUILD_ULTRASONIC2_GET_DISTANCE_INDEX"
            },
            "order": {
                "type": "inputMenu",
                "defaultValue": "\"all\"",
                "menu": "MBUILD_ULTRASONIC2_SET_BRI_ORDER"
            },
            "bv": {
                "type": "number",
                "defaultValue": 50
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockweb",
            "mblockpc",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": `mbuild.ultrasonic2.set_bri({bv}, {order}, {index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_ultrasonic2_set_bri
    },
    {
        "opcode": "mbuild_ultrasonic2_add_bri",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "MBUILD_ULTRASONIC2_GET_DISTANCE_INDEX"
            },
            "order": {
                "type": "inputMenu",
                "defaultValue": "\"all\"",
                "menu": "MBUILD_ULTRASONIC2_SET_BRI_ORDER"
            },
            "bv": {
                "type": "number",
                "defaultValue": 20
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
                "code": `mbuild.ultrasonic2.add_bri({bv}, {order}, {index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_ultrasonic2_add_bri
    },
    {
        "opcode": "mbuild_ultrasonic2_get_bri",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "MBUILD_ULTRASONIC2_GET_DISTANCE_INDEX"
            },
            "order": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "MBUILD_ULTRASONIC2_GET_DISTANCE_INDEX"
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
                "code": `mbuild.ultrasonic2.get_bri({order}, {index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_ultrasonic2_get_bri
    },
    {
        "opcode": "mbuild_ultrasonic2_off_led",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "MBUILD_ULTRASONIC2_GET_DISTANCE_INDEX"
            },
            "inputMenu_3": {
                "type": "inputMenu",
                "defaultValue": "\"all\"",
                "menu": "MBUILD_ULTRASONIC2_SET_BRI_ORDER"
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
                "code": `mbuild.ultrasonic2.set_bri(0, {inputMenu_3}, {index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_ultrasonic2_off_led
    },
    {
        "opcode": "mbuild_ultrasonic2_show_one_by_one",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MBUILD_ULTRASONIC2_GET_DISTANCE_INDEX"
            },
            "bv1": {
                "type": "number",
                "defaultValue": 50
            },
            "bv2": {
                "type": "number",
                "defaultValue": 50
            },
            "bv3": {
                "type": "number",
                "defaultValue": 50
            },
            "bv4": {
                "type": "number",
                "defaultValue": 50
            },
            "bv5": {
                "type": "number",
                "defaultValue": 50
            },
            "bv6": {
                "type": "number",
                "defaultValue": 50
            },
            "bv7": {
                "type": "number",
                "defaultValue": 50
            },
            "bv8": {
                "type": "number",
                "defaultValue": 50
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `mbuild.led_ultrasonic_sensor.set_both_led_bri({bv1}, {bv2}, {bv3}, {bv4}, {bv5}, {bv6}, {bv7}, {bv8}, {index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_ultrasonic2_show_one_by_one
    },
    {
        "opcode": "mbuild_ultrasonic2_show_emotion",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "MBUILD_ULTRASONIC2_GET_DISTANCE_INDEX"
            },
            "emotion": {
                "type": "inputMenu",
                "defaultValue": "sleepy",
                "menu": "MBUILD_ULTRASONIC2_SHOW_EMOTION_EMOTION"
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
                "code": `mbuild.ultrasonic2.play(\"{emotion}\", {index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_ultrasonic2_show_emotion
    }
]);

export default blocks;