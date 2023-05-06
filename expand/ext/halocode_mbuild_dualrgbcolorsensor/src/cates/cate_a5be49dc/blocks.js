const blocks = (extFacePanels) => ([{
        "opcode": "DUAL_RGB_IS_COLOR",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "DUAL_RGB_IS_COLOR_INDEX"
            },
            "prob": {
                "type": "fieldMenu",
                "defaultValue": "RGB1",
                "menu": "DUAL_RGB_IS_COLOR_PROB"
            },
            "color": {
                "type": "fieldMenu",
                "defaultValue": "white",
                "menu": "DUAL_RGB_IS_COLOR_COLOR"
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
                "code": `mbuild.dual_rgb_sensor.is_color('{prob}', '{color}', {index})`,
                "sections": {
                    "import": ['mbuild'],
                    "lib": `mbuild.dual_rgb_sensor.__REPORT_TIME = 100`
                }
            }
        },
        "handler": this.funcs.DUAL_RGB_IS_COLOR
    },
    {
        "opcode": "DUAL_RGB_GET_RGB_VALUE",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "DUAL_RGB_GET_RGB_VALUE_INDEX"
            },
            "prob": {
                "type": "fieldMenu",
                "defaultValue": "RGB1",
                "menu": "DUAL_RGB_IS_COLOR_PROB"
            },
            "color": {
                "type": "fieldMenu",
                "defaultValue": "红色",
                "menu": "DUAL_RGB_GET_RGB_VALUE_COLOR"
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
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.DUAL_RGB_GET_RGB_VALUE
    },
    {
        "opcode": "DUAL_RGB_GET_INTENSITY",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "DUAL_RGB_IS_COLOR_INDEX"
            },
            "prob": {
                "type": "fieldMenu",
                "defaultValue": "RGB1",
                "menu": "DUAL_RGB_IS_COLOR_PROB"
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
                "code": `mbuild.dual_rgb_sensor.get_intensity('{prob}', {index})`,
                "sections": {
                    "import": ['mbuild'],
                    "lib": `mbuild.dual_rgb_sensor.__REPORT_TIME = 100`
                }
            }
        },
        "handler": this.funcs.DUAL_RGB_GET_INTENSITY
    },
    {
        "opcode": "DUAL_RGB_GET_INFLECTION_INTENSITY",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "DUAL_RGB_GET_RGB_VALUE_INDEX"
            },
            "prob": {
                "type": "fieldMenu",
                "defaultValue": "RGB1",
                "menu": "DUAL_RGB_IS_COLOR_PROB"
            }
        },
        "branchCount": 0,
        "platform": [],
        "codes": {
            "python": {
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.DUAL_RGB_GET_INFLECTION_INTENSITY
    },
    {
        "opcode": "DUAL_RGB_SET_SUPPLEMENT_LIGHT_WITH_FACE",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "DUAL_RGB_GET_RGB_VALUE_INDEX"
            },
            "prob": {
                "type": "fieldMenu",
                "defaultValue": "RGB1",
                "menu": "DUAL_RGB_IS_COLOR_PROB"
            },
            "color": {
                "type": "color",
                "defaultValue": "#d0021b"
            }
        },
        "branchCount": 0,
        "platform": [],
        "codes": {
            "python": {
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.DUAL_RGB_SET_SUPPLEMENT_LIGHT_WITH_FACE
    },
    {
        "opcode": "DUAL_RGB_SET_SUPPLEMENT_LIGHT_WITH_RGB",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "DUAL_RGB_SET_SUPPLEMENT_LIGHT_WITH_RGB_INDEX"
            },
            "prob": {
                "type": "fieldMenu",
                "defaultValue": "RGB1",
                "menu": "DUAL_RGB_IS_COLOR_PROB"
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
        "platform": [],
        "codes": {
            "python": {
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.DUAL_RGB_SET_SUPPLEMENT_LIGHT_WITH_RGB
    }
]);

export default blocks;