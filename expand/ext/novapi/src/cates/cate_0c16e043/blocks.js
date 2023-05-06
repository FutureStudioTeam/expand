const blocks = (extFacePanels) => ([{
        "opcode": "DRGB_INIT",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "DRGB_INIT_NUM"
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "PORT1",
                "menu": "DRGB_INIT_PORT"
            },
            "INDEX": {
                "type": "fieldMenu",
                "defaultValue": "INDEX1",
                "menu": "DRGB_INIT_INDEX"
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
                    "from": `from mbuild.dual_rgb_sensor import dual_rgb_sensor_class`,
                    "new_class": `dual_rgb_sensor_{NUM} = dual_rgb_sensor_class(\"{PORT}\", \"{INDEX}\")`
                }
            }
        },
        "handler": this.funcs.DRGB_INIT
    },
    {
        "opcode": "DRGB_SET_SENSOR_KP",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "DRGB_INIT_NUM"
            },
            "KP": {
                "type": "number",
                "defaultValue": 0.3
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `dual_rgb_sensor_{NUM}.set_motor_diff_speed_kp({KP})`
            }
        },
        "handler": this.funcs.DRGB_SET_SENSOR_KP
    },
    {
        "opcode": "DRGB_SET_SENSOR_COLOR",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "DRGB_INIT_NUM"
            },
            "COLOR": {
                "type": "fieldMenu",
                "defaultValue": "red",
                "menu": "DRGB_SET_SENSOR_COLOR_COLOR"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `dual_rgb_sensor_{NUM}.set_led_color(\"{COLOR}\")`
            }
        },
        "handler": this.funcs.DRGB_SET_SENSOR_COLOR
    },
    {
        "opcode": "DRGB_CHECK_COLOR",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "DRGB_INIT_NUM"
            },
            "CHANNEL": {
                "type": "fieldMenu",
                "defaultValue": "RGB1",
                "menu": "DRGB_CHECK_COLOR_CHANNEL"
            },
            "COLOR": {
                "type": "fieldMenu",
                "defaultValue": "white",
                "menu": "DRGB_CHECK_COLOR_COLOR"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `dual_rgb_sensor_{NUM}.is_color(\"{CHANNEL}\", \"{COLOR}\")`
            }
        },
        "handler": this.funcs.DRGB_CHECK_COLOR
    },
    {
        "opcode": "DRGB_SENSOR_STATUS",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "DRGB_INIT_NUM"
            },
            "STATE": {
                "type": "fieldMenu",
                "defaultValue": "00",
                "menu": "DRGB_SENSOR_STATUS_STATE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `dual_rgb_sensor_{NUM}.is_state(\"{STATE}\")`
            }
        },
        "handler": this.funcs.DRGB_SENSOR_STATUS
    },
    {
        "opcode": "DRGB_BACKGROUND_DETECTED",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "DRGB_INIT_NUM"
            },
            "CHANNEL": {
                "type": "fieldMenu",
                "defaultValue": "RGB1",
                "menu": "DRGB_CHECK_COLOR_CHANNEL"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `dual_rgb_sensor_{NUM}.is_on_background(\"{CHANNEL}\")`
            }
        },
        "handler": this.funcs.DRGB_BACKGROUND_DETECTED
    },
    {
        "opcode": "DRGB_GET_INTENSITY",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "DRGB_INIT_NUM"
            },
            "CHANNEL": {
                "type": "fieldMenu",
                "defaultValue": "RGB1",
                "menu": "DRGB_CHECK_COLOR_CHANNEL"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `dual_rgb_sensor_{NUM}.get_intensity(\"{CHANNEL}\")`
            }
        },
        "handler": this.funcs.DRGB_GET_INTENSITY
    },
    {
        "opcode": "DRGB_GET_POSITION_OFFSET",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "DRGB_INIT_NUM"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `dual_rgb_sensor_{NUM}.get_offset_track_value()`
            }
        },
        "handler": this.funcs.DRGB_GET_POSITION_OFFSET
    },
    {
        "opcode": "DRGB_GET_POSITION_OFFSET_KP",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "DRGB_INIT_NUM"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `dual_rgb_sensor_{NUM}.get_motor_diff_speed()`
            }
        },
        "handler": this.funcs.DRGB_GET_POSITION_OFFSET_KP
    }
]);

export default blocks;