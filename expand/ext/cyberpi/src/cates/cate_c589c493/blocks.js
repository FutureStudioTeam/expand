const blocks = (extFacePanels) => ([{
        "opcode": "cyberpi_follow_mblock_sprite",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "spriteMenu_1": {
                "type": "spriteMenu"
            },
            "GRADE": {
                "type": "inputMenu",
                "defaultValue": "0.2",
                "menu": "CYBERPI_FOLLOW_MBLOCK_SPRITE_GRADE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.cyberpi_follow_mblock_sprite
    },
    {
        "opcode": "cyberpi_detect_attitude",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "tilt": {
                "type": "fieldMenu",
                "defaultValue": "tiltforward",
                "menu": "CYBERPI_DETECT_ATTITUDE_TILT"
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
                "code": `cyberpi.is_{tilt}()`
            }
        },
        "handler": this.funcs.cyberpi_detect_attitude
    },
    {
        "opcode": "cyberpi_detect_action",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "tilt": {
                "type": "fieldMenu",
                "defaultValue": "waveup",
                "menu": "CYBERPI_DETECT_ACTION_TILT"
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
                "code": `cyberpi.is_{tilt}()`
            }
        },
        "handler": this.funcs.cyberpi_detect_action
    },
    {
        "opcode": "cyberpi_shaked_value",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": `cyberpi.get_shakeval()`
            }
        },
        "handler": this.funcs.cyberpi_shaked_value
    },
    {
        "opcode": "cyberpi_wave_angle",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": `cyberpi.get_wave_angle()`
            }
        },
        "handler": this.funcs.cyberpi_wave_angle
    },
    {
        "opcode": "cyberpi_wave_speed",
        "blockType": "number",
        "checkboxInFlyout": true,
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
                "code": `cyberpi.get_wave_speed()`
            }
        },
        "handler": this.funcs.cyberpi_wave_speed
    },
    {
        "opcode": "cyberpi_tilt_degree",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "rotation": {
                "type": "fieldMenu",
                "defaultValue": "up",
                "menu": "CYBERPI_TILT_DEGREE_ROTATION"
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
                "code": this.funcs.cyberpiTiltDegreeCodesCode
            }
        },
        "handler": this.funcs.cyberpi_tilt_degree
    },
    {
        "opcode": "cyberpi_axis_acceleration",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "axis": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "CYBERPI_AXIS_ACCELERATION_AXIS"
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
                "code": `cyberpi.get_acc('{axis}')`
            }
        },
        "handler": this.funcs.cyberpi_axis_acceleration
    },
    {
        "opcode": "cyberpi_axis_angle_speed",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "axis": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "CYBERPI_AXIS_ACCELERATION_AXIS"
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
                "code": `cyberpi.get_gyro('{axis}')`
            }
        },
        "handler": this.funcs.cyberpi_axis_angle_speed
    },
    {
        "opcode": "cyberpi_axis_rotation_angle",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "axis": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "CYBERPI_AXIS_ACCELERATION_AXIS"
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
                "code": `cyberpi.get_rotation('{axis}')`
            }
        },
        "handler": this.funcs.cyberpi_axis_rotation_angle
    },
    {
        "opcode": "cyberpi_reset_axis_rotation_angle",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "axis": {
                "type": "fieldMenu",
                "defaultValue": "all",
                "menu": "CYBERPI_RESET_AXIS_ROTATION_ANGLE_AXIS"
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
                "code": `cyberpi.reset_rotation('{axis}')`
            }
        },
        "handler": this.funcs.cyberpi_reset_axis_rotation_angle
    },
    {
        "opcode": "cyberpi_reset_yaw",
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
                "code": `cyberpi.reset_yaw()`
            }
        },
        "handler": this.funcs.cyberpi_reset_yaw
    }
]);

export default blocks;