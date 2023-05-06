const blocks = (extFacePanels) => ([{
        "opcode": "haloboard_detect_button_pressed",
        "blockType": "boolean",
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
                "code": `halo.button.is_pressed()`
            }
        },
        "handler": this.funcs.haloboard_detect_button_pressed
    },
    {
        "opcode": "haloboard_detect_volume",
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
                "code": `halo.microphone.get_loudness(\"maximum\")`
            }
        },
        "handler": this.funcs.haloboard_detect_volume
    },
    {
        "opcode": "haloboard_detect_touch",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "touchpad_number": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "HALOBOARD_DETECT_TOUCH_TOUCHPAD_NUMBER"
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
                "code": `halo.touchpad{touchpad_number}.is_touched()`
            }
        },
        "handler": this.funcs.haloboard_detect_touch
    },
    {
        "opcode": "haloboard_detect_touch_value",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "touchpad_number": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "HALOBOARD_DETECT_TOUCH_TOUCHPAD_NUMBER"
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
                "code": `halo.touchpad{touchpad_number}.get_value()`
            }
        },
        "handler": this.funcs.haloboard_detect_touch_value
    },
    {
        "opcode": "BLOCK_1552905879755",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "touchpad_number": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "HALOBOARD_DETECT_TOUCH_TOUCHPAD_NUMBER"
            },
            "sensitivity": {
                "type": "fieldMenu",
                "defaultValue": "middle",
                "menu": "BLOCK_1552905879755_SENSITIVITY"
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
                "code": `halo.touchpad{touchpad_number}.set_touch_sensitivity('{sensitivity}')`
            }
        },
        "handler": this.funcs.BLOCK_1552905879755
    },
    {
        "opcode": "haloboard_detect_tilt_1",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "tilt": {
                "type": "fieldMenu",
                "defaultValue": "tilted_left",
                "menu": "HALOBOARD_DETECT_TILT_1_TILT"
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
                "code": this.funcs.haloboardDetectTilt1CodesCode
            }
        },
        "handler": this.funcs.haloboard_detect_tilt_1
    },
    {
        "opcode": "haloboard_detect_tilt",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "tilt": {
                "type": "fieldMenu",
                "defaultValue": "tilted_left",
                "menu": "HALOBOARD_DETECT_TILT_TILT"
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
                "code": `halo.motion_sensor.is_{tilt}()`
            }
        },
        "handler": this.funcs.haloboard_detect_tilt
    },
    {
        "opcode": "haloboard_detect_incline",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "incline": {
                "type": "fieldMenu",
                "defaultValue": "left_incline",
                "menu": "HALOBOARD_DETECT_INCLINE_INCLINE"
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
                "code": this.funcs.haloboardDetectInclineCodesCode
            }
        },
        "handler": this.funcs.haloboard_detect_incline
    },
    {
        "opcode": "haloboard_detect_shaked",
        "blockType": "boolean",
        "checkboxInFlyout": false,
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
                "code": `halo.motion_sensor.is_shaked()`
            }
        },
        "handler": this.funcs.haloboard_detect_shaked
    },
    {
        "opcode": "haloboard_detect_shaked_value",
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
                "code": `halo.motion_sensor.get_shake_strength()`
            }
        },
        "handler": this.funcs.haloboard_detect_shaked_value
    },
    {
        "opcode": "haloboard_detect_axis_acceleration",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "axis": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "HALOBOARD_DETECT_AXIS_ACCELERATION_AXIS"
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
                "code": `halo.motion_sensor.get_acceleration('{axis}')`
            }
        },
        "handler": this.funcs.haloboard_detect_axis_acceleration
    },
    {
        "opcode": "haloboard_detect_axis_gyro",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "axis": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "HALOBOARD_DETECT_AXIS_ACCELERATION_AXIS"
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
                "code": `halo.motion_sensor.get_gyroscope('{axis}')`
            }
        },
        "handler": this.funcs.haloboard_detect_axis_gyro
    },
    {
        "opcode": "haloboard_detect_tilt_degree",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "rotation": {
                "type": "fieldMenu",
                "defaultValue": "pitch",
                "menu": "HALOBOARD_DETECT_TILT_DEGREE_ROTATION"
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
                "code": `halo.motion_sensor.get_{rotation}()`
            }
        },
        "handler": this.funcs.haloboard_detect_tilt_degree
    },
    {
        "opcode": "haloboard_detect_rotation_degree",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "axis": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "HALOBOARD_DETECT_AXIS_ACCELERATION_AXIS"
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
                "code": `halo.motion_sensor.get_rotation('{axis}')`
            }
        },
        "handler": this.funcs.haloboard_detect_rotation_degree
    },
    {
        "opcode": "haloboard_reset_rotation_degree",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "axis": {
                "type": "fieldMenu",
                "defaultValue": "all",
                "menu": "HALOBOARD_RESET_ROTATION_DEGREE_AXIS"
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
                "code": `halo.motion_sensor.reset_rotation('{axis}')`
            }
        },
        "handler": this.funcs.haloboard_reset_rotation_degree
    },
    {
        "opcode": "haloboard_detect_time",
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
                "code": `halo.get_timer()`
            }
        },
        "handler": this.funcs.haloboard_detect_time
    },
    {
        "opcode": "haloboard_reset_time",
        "blockType": "command",
        "checkboxInFlyout": false,
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
                "code": `halo.reset_timer()`
            }
        },
        "handler": this.funcs.haloboard_reset_time
    }
]);

export default blocks;