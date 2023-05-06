const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1618397452023",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1618397452023_INDEX"
            },
            "inputMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "line",
                "menu": "BLOCK_1618397452023_INPUTMENU_1"
            },
            "inputMenu_2": {
                "type": "inputMenu",
                "defaultValue": "3",
                "menu": "BLOCK_1618397452023_INPUTMENU_2"
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
                "code": this.funcs.block1618397452023CodesCode,
                "sections": {
                    "import": ['mbuild'],
                    "lib": `def get_color_sta_byte(color,index = 1):\r\n    if not isinstance(index, (int, float)):\r\n        return False\r\n\r\n    obj_color = mbuild.quad_rgb_sensor._get_color_id(color);\r\n    value = mbuild.quad_rgb_sensor.get_all_data(index);\r\n    sta = [0,0,0,0]\r\n    for n in range(2):\r\n        if value[n+9+1] == obj_color:\r\n            sta[n+1] = 1\r\n    status = int(sta[1] | (sta[2]<<1))\r\n    return status   \r\n\r\n\r`
                }
            }
        },
        "handler": this.funcs.BLOCK_1618397452023
    },
    {
        "opcode": "BLOCK_1618397596925",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1618397452023_INDEX"
            },
            "inputMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "line",
                "menu": "BLOCK_1618397452023_INPUTMENU_1"
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
                "code": this.funcs.block1618397596925CodesCode,
                "sections": {
                    "import": ['mbuild'],
                    "lib": `def get_color_sta_byte(color,index = 1):\r\n    if not isinstance(index, (int, float)):\r\n        return False\r\n\r\n    obj_color = mbuild.quad_rgb_sensor._get_color_id(color);\r\n    value = mbuild.quad_rgb_sensor.get_all_data(index);\r\n    sta = [0,0,0,0]\r\n    for n in range(2):\r\n        if value[n+9+1] == obj_color:\r\n            sta[n+1] = 1\r\n    status = int(sta[1] | (sta[2]<<1))\r\n    return status   \r\n\r\n\r`
                }
            }
        },
        "handler": this.funcs.BLOCK_1618397596925
    },
    {
        "opcode": "BLOCK_1618364921511",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1618397452023_INDEX"
            },
            "inputMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "line",
                "menu": "BLOCK_1618397452023_INPUTMENU_1"
            },
            "inputMenu_2": {
                "type": "inputMenu",
                "defaultValue": "15",
                "menu": "BLOCK_1618364921511_INPUTMENU_2"
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
                "code": this.funcs.block1618364921511CodesCode,
                "sections": {
                    "import": ['mbuild'],
                    "lib": `def get_color_sta_bytes(color,index = 1):\r\n    if not isinstance(index, (int, float)):\r\n        return False\r\n\r\n    obj_color = mbuild.quad_rgb_sensor._get_color_id(color);\r\n    value = mbuild.quad_rgb_sensor.get_all_data(index);\r\n    sta = [0,0,0,0]\r\n    for n in range(4):\r\n        if value[n+9] == obj_color:\r\n            sta[n] = 1\r\n    status = int(sta[0] | (sta[1]<<1) | (sta[2]<< 2) | (sta[3]<<3))\r\n    return status   \r\n\r\n\r\n\r`
                }
            }
        },
        "handler": this.funcs.BLOCK_1618364921511
    },
    {
        "opcode": "BLOCK_1618397679204",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1618397452023_INDEX"
            },
            "inputMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "line",
                "menu": "BLOCK_1618397452023_INPUTMENU_1"
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
                "code": this.funcs.block1618397679204CodesCode,
                "sections": {
                    "import": ['mbuild'],
                    "lib": `def get_color_sta_bytes(color,index = 1):\r\n    if not isinstance(index, (int, float)):\r\n        return False\r\n\r\n    obj_color = mbuild.quad_rgb_sensor._get_color_id(color);\r\n    value = mbuild.quad_rgb_sensor.get_all_data(index);\r\n    sta = [0,0,0,0]\r\n    for n in range(4):\r\n        if value[n+9] == obj_color:\r\n            sta[n] = 1\r\n    status = int(sta[0] | (sta[1]<<1) | (sta[2]<< 2) | (sta[3]<<3))\r\n    return status   \r\n\r`
                }
            }
        },
        "handler": this.funcs.BLOCK_1618397679204
    },
    {
        "opcode": "mbuild_quad_color_sensor_is_line_and_background",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1618397452023_INDEX"
            },
            "inputMenu_2": {
                "type": "inputMenu",
                "defaultValue": "R2",
                "menu": "MBUILD_QUAD_COLOR_SENSOR_IS_LINE_AND_BACKGROUND_INPUTMENU_2"
            },
            "inputMenu_3": {
                "type": "inputMenu",
                "defaultValue": "line",
                "menu": "MBUILD_QUAD_COLOR_SENSOR_IS_LINE_AND_BACKGROUND_INPUTMENU_3"
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
                "code": this.funcs.mbuildQuadColorSensorIsLineAndBackgroundCodesCode,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_quad_color_sensor_is_line_and_background
    },
    {
        "opcode": "mbuild_quad_color_sensor_get_rgb_gray_light",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1618397452023_INDEX"
            },
            "inputMenu_2": {
                "type": "inputMenu",
                "defaultValue": "R2",
                "menu": "MBUILD_QUAD_COLOR_SENSOR_GET_RGB_GRAY_LIGHT_INPUTMENU_2"
            },
            "inputMenu_3": {
                "type": "inputMenu",
                "defaultValue": "color_sta",
                "menu": "MBUILD_QUAD_COLOR_SENSOR_GET_RGB_GRAY_LIGHT_INPUTMENU_3"
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
                "code": `mbuild.quad_rgb_sensor.get_{inputMenu_3}(\"{inputMenu_2}\",{index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_quad_color_sensor_get_rgb_gray_light
    },
    {
        "opcode": "mbuild_quad_color_sensor_get_off_track",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1618397452023_INDEX"
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
                "code": `mbuild.quad_rgb_sensor.get_offset_track({index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_quad_color_sensor_get_off_track
    },
    {
        "opcode": "BLOCK_1618382823173",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1618397452023_INDEX"
            },
            "fieldMenu_3": {
                "type": "fieldMenu",
                "defaultValue": "green",
                "menu": "BLOCK_1618382823173_FIELDMENU_3"
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
                "code": `mbuild.quad_rgb_sensor.set_led_color(\"{fieldMenu_3}\", {index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1618382823173
    },
    {
        "opcode": "BLOCK_1620904215289",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1618397452023_INDEX"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `mbuild.quad_rgb_sensor.set_led(\"black\", {index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1620904215289
    },
    {
        "opcode": "mbuild_quad_color_sensor_set_led",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1618397452023_INDEX"
            },
            "fieldMenu_3": {
                "type": "fieldMenu",
                "defaultValue": "white",
                "menu": "MBUILD_QUAD_COLOR_SENSOR_SET_LED_FIELDMENU_3"
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
                "code": `mbuild.quad_rgb_sensor.set_led(\"{fieldMenu_3}\", {index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_quad_color_sensor_set_led
    },
    {
        "opcode": "mbuild_quad_color_sensor_off_led",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1618397452023_INDEX"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `mbuild.quad_rgb_sensor.off_led({index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_quad_color_sensor_off_led
    },
    {
        "opcode": "BLOCK_1619088858273",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1618397452023_INDEX"
            },
            "channel": {
                "type": "fieldMenu",
                "defaultValue": "R2",
                "menu": "BLOCK_1619088858273_CHANNEL"
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
            },
            "tolerance": {
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
                "code": `is_rgb_data(\"{channel}\",{r},{g},{b},{tolerance},{index})`,
                "sections": {
                    "import": ['math', 'mbuild'],
                    "lib": `def is_rgb_data(channel,color_r,color_g,color_b,tolerance,index = 1):\r\n    if not isinstance(index, (int, float)):\r\n        return False\r\n    r = mbuild.quad_rgb_sensor._get_rgb_value(0,channel,index)\r\n    g = mbuild.quad_rgb_sensor._get_rgb_value(1,channel,index)\r\n    b = mbuild.quad_rgb_sensor._get_rgb_value(2,channel,index)\r\n    if math.fabs(color_r - r) <= tolerance and math.fabs(color_g - g) <= tolerance and math.fabs(color_b - b) <= tolerance:\r\n        return True\r\n    else:\r\n        return False\r\n\r`
                }
            }
        },
        "handler": this.funcs.BLOCK_1619088858273
    },
    {
        "opcode": "mbuild_quad_color_sensor_is_color",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1618397452023_INDEX"
            },
            "inputMenu_2": {
                "type": "inputMenu",
                "defaultValue": "R1",
                "menu": "MBUILD_QUAD_COLOR_SENSOR_IS_LINE_AND_BACKGROUND_INPUTMENU_2"
            },
            "inputMenu_3": {
                "type": "inputMenu",
                "defaultValue": "white",
                "menu": "MBUILD_QUAD_COLOR_SENSOR_IS_COLOR_INPUTMENU_3"
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
                "code": `mbuild.quad_rgb_sensor.is_color(\"{inputMenu_3}\",\"{inputMenu_2}\",{index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_quad_color_sensor_is_color
    },
    {
        "opcode": "mbuild_quad_color_sensor_get_line_sta_with_inputMenu",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1618397452023_INDEX"
            },
            "inputMenu_2": {
                "type": "inputMenu",
                "defaultValue": "0",
                "menu": "BLOCK_1618364921511_INPUTMENU_2"
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
                "code": `(mbuild.quad_rgb_sensor.get_line_sta({index}) == {inputMenu_2})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_quad_color_sensor_get_line_sta_with_inputMenu
    },
    {
        "opcode": "mbuild_quad_color_sensor_get_line_sta_with_number",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1618397452023_INDEX"
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
                "code": `mbuild.quad_rgb_sensor.get_line_sta({index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_quad_color_sensor_get_line_sta_with_number
    }
]);

export default blocks;