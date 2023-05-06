const blocks = (extFacePanels) => ([{
        "opcode": "timer",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `novapi.timer()`
            }
        },
        "handler": this.funcs.timer
    },
    {
        "opcode": "timer_reset",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `novapi.reset_timer()`
            }
        },
        "handler": this.funcs.timer_reset
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
            "mblockweb"
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
        "opcode": "motion_sensor_acc",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "AXIS": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "MOTION_SENSOR_ACC_AXIS"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `novapi.get_acceleration(\"{AXIS}\")`
            }
        },
        "handler": this.funcs.motion_sensor_acc
    },
    {
        "opcode": "motion_sensor_gyro",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "AXIS": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "MOTION_SENSOR_ACC_AXIS"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `novapi.get_gyroscope(\"{AXIS}\")`
            }
        },
        "handler": this.funcs.motion_sensor_gyro
    },
    {
        "opcode": "motion_sensor_angle",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "AXIS": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "MOTION_SENSOR_ACC_AXIS"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": this.funcs.motionSensorAngleCodesCode
            }
        },
        "handler": this.funcs.motion_sensor_angle
    },
    {
        "opcode": "motion_sensor_set_threshold",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "THRESHOLD": {
                "type": "number",
                "defaultValue": 20
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `novapi.set_shake_threshold({THRESHOLD})`
            }
        },
        "handler": this.funcs.motion_sensor_set_threshold
    },
    {
        "opcode": "motion_sensor_check_shake",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `novapi.is_shaked()`
            }
        },
        "handler": this.funcs.motion_sensor_check_shake
    },
    {
        "opcode": "motion_sensor_reset_rotation",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "AXIS": {
                "type": "fieldMenu",
                "defaultValue": "z",
                "menu": "MOTION_SENSOR_RESET_ROTATION_AXIS"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `novapi.reset_rotation(\"{AXIS}\")`
            }
        },
        "handler": this.funcs.motion_sensor_reset_rotation
    }
]);

export default blocks;