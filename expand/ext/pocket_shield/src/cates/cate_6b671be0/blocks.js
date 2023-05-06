const blocks = (extFacePanels) => ([{
        "opcode": "pocket_motor_set_power_cw",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "all",
                "menu": "POCKET_MOTOR_SET_POWER_CW_FIELDMENU_1"
            },
            "number_2": {
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
                "code": `cyberpi.pocket.motor_set({number_2},\"{fieldMenu_1}\")`
            }
        },
        "handler": this.funcs.pocket_motor_set_power_cw
    },
    {
        "opcode": "pocket_motor_add_power_cw",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "all",
                "menu": "POCKET_MOTOR_SET_POWER_CW_FIELDMENU_1"
            },
            "power": {
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
                "code": `cyberpi.pocket.motor_add({power},\"{fieldMenu_1}\")`
            }
        },
        "handler": this.funcs.pocket_motor_add_power_cw
    },
    {
        "opcode": "pocket_motor_driver_power_cw",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "number_1": {
                "type": "number",
                "defaultValue": 50
            },
            "number_2": {
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
                "code": `cyberpi.pocket.motor_drive({number_1},{number_2})`
            }
        },
        "handler": this.funcs.pocket_motor_driver_power_cw
    },
    {
        "opcode": "pocket_motor_get_power_cw",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "M1",
                "menu": "POCKET_MOTOR_GET_POWER_CW_FIELDMENU_1"
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
                "code": `cyberpi.pocket.motor_get(\"{fieldMenu_1}\")`
            }
        },
        "handler": this.funcs.pocket_motor_get_power_cw
    },
    {
        "opcode": "pocket_motor_stop_power",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "all",
                "menu": "POCKET_MOTOR_SET_POWER_CW_FIELDMENU_1"
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
                "code": `cyberpi.pocket.motor_stop(\"{fieldMenu_1}\")`
            }
        },
        "handler": this.funcs.pocket_motor_stop_power
    },
    {
        "opcode": "pocket_servo_set_angle",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "all",
                "menu": "POCKET_SERVO_SET_ANGLE_FIELDMENU_1"
            },
            "angle": {
                "type": "number",
                "defaultValue": 90
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
                "code": `cyberpi.pocket.servo_set({angle},\"{fieldMenu_1}\")`
            }
        },
        "handler": this.funcs.pocket_servo_set_angle
    },
    {
        "opcode": "pocket_servo_add_angle",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "all",
                "menu": "POCKET_SERVO_SET_ANGLE_FIELDMENU_1"
            },
            "angle": {
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
                "code": `cyberpi.pocket.servo_add({angle},\"{fieldMenu_1}\")`
            }
        },
        "handler": this.funcs.pocket_servo_add_angle
    },
    {
        "opcode": "pocket_servo_driver",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "number_1": {
                "type": "number",
                "defaultValue": 90
            },
            "number_2": {
                "type": "number",
                "defaultValue": 90
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
                "code": `cyberpi.pocket.servo_drive({number_1},{number_2})`
            }
        },
        "handler": this.funcs.pocket_servo_driver
    },
    {
        "opcode": "pocket_servo_get_angle",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "S1",
                "menu": "POCKET_SERVO_GET_ANGLE_FIELDMENU_1"
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
                "code": `cyberpi.pocket.servo_get(\"{fieldMenu_1}\")`
            }
        },
        "handler": this.funcs.pocket_servo_get_angle
    },
    {
        "opcode": "pocket_servo_release_angle",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "all",
                "menu": "POCKET_SERVO_SET_ANGLE_FIELDMENU_1"
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
                "code": `cyberpi.pocket.servo_release(\"{fieldMenu_1}\")`
            }
        },
        "handler": this.funcs.pocket_servo_release_angle
    },
    {
        "opcode": "pocket_servo_reset_angle_to_zero",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "all",
                "menu": "POCKET_SERVO_SET_ANGLE_FIELDMENU_1"
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
                "code": `cyberpi.pocket.servo_set(0,\"{fieldMenu_1}\")`
            }
        },
        "handler": this.funcs.pocket_servo_reset_angle_to_zero
    },
    {
        "opcode": "pocket_led_show",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "all",
                "menu": "POCKET_SERVO_SET_ANGLE_FIELDMENU_1"
            },
            "facePanel": extFacePanels['d1839bb5']
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.pocketLedShowCodesCode
            }
        },
        "handler": this.funcs.pocket_led_show
    },
    {
        "opcode": "pocket_led_on_with_color",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "all",
                "menu": "POCKET_SERVO_SET_ANGLE_FIELDMENU_1"
            },
            "fieldMenu_2": {
                "type": "inputMenu",
                "defaultValue": "\"all\"",
                "menu": "POCKET_LED_ON_WITH_COLOR_FIELDMENU_2"
            },
            "color_1": {
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
                "code": this.funcs.pocketLedOnWithColorCodesCode
            }
        },
        "handler": this.funcs.pocket_led_on_with_color
    },
    {
        "opcode": "pocket_led_on_with_rgb",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "all",
                "menu": "POCKET_SERVO_SET_ANGLE_FIELDMENU_1"
            },
            "fieldMenu_2": {
                "type": "inputMenu",
                "defaultValue": "\"all\"",
                "menu": "POCKET_LED_ON_WITH_COLOR_FIELDMENU_2"
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
                "code": `cyberpi.pocket.led_on({r}, {g}, {b}, {fieldMenu_2}, \"{fieldMenu_1}\")`
            }
        },
        "handler": this.funcs.pocket_led_on_with_rgb
    },
    {
        "opcode": "pocket_led_move_with_cycle",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "all",
                "menu": "POCKET_SERVO_SET_ANGLE_FIELDMENU_1"
            },
            "number_2": {
                "type": "number",
                "defaultValue": 1
            },
            "number_3": {
                "type": "number",
                "defaultValue": 15
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
                "code": `cyberpi.pocket.led_move({number_2}, {number_3}, \"{fieldMenu_1}\")`
            }
        },
        "handler": this.funcs.pocket_led_move_with_cycle
    },
    {
        "opcode": "pocket_led_off",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "all",
                "menu": "POCKET_SERVO_SET_ANGLE_FIELDMENU_1"
            },
            "fieldMenu_2": {
                "type": "inputMenu",
                "defaultValue": "\"all\"",
                "menu": "POCKET_LED_ON_WITH_COLOR_FIELDMENU_2"
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
                "code": `cyberpi.pocket.led_off({fieldMenu_2}, \"{fieldMenu_1}\")`
            }
        },
        "handler": this.funcs.pocket_led_off
    },
    {
        "opcode": "pocket_led_add_brightness",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "all",
                "menu": "POCKET_SERVO_SET_ANGLE_FIELDMENU_1"
            },
            "number_1": {
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
                "code": `cyberpi.pocket.led_add_bri({number_1}, \"{fieldMenu_1}\")`
            }
        },
        "handler": this.funcs.pocket_led_add_brightness
    },
    {
        "opcode": "pocket_led_set_brightness",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "all",
                "menu": "POCKET_SERVO_SET_ANGLE_FIELDMENU_1"
            },
            "number_1": {
                "type": "number",
                "defaultValue": 30
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
                "code": `cyberpi.pocket.led_set_bri({number_1}, \"{fieldMenu_1}\")`
            }
        },
        "handler": this.funcs.pocket_led_set_brightness
    },
    {
        "opcode": "pocket_led_get_brightness",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "S1",
                "menu": "POCKET_SERVO_GET_ANGLE_FIELDMENU_1"
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
                "code": `cyberpi.pocket.led_get_bri(\"{fieldMenu_1}\")`
            }
        },
        "handler": this.funcs.pocket_led_get_brightness
    },
    {
        "opcode": "pocket_pin_is_high",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "pin_number": {
                "type": "inputMenu",
                "defaultValue": "S1",
                "menu": "POCKET_SERVO_GET_ANGLE_FIELDMENU_1"
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
                "code": `cyberpi.pocket.read_digital(\"{pin_number}\")`
            }
        },
        "handler": this.funcs.pocket_pin_is_high
    },
    {
        "opcode": "pocket_pin_read_digtial",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "pin_number": {
                "type": "inputMenu",
                "defaultValue": "S1",
                "menu": "POCKET_SERVO_GET_ANGLE_FIELDMENU_1"
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
                "code": `cyberpi.pocket.read_digital(\"{pin_number}\")`
            }
        },
        "handler": this.funcs.pocket_pin_read_digtial
    },
    {
        "opcode": "pocket_pin_read_analog",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "pin_number": {
                "type": "inputMenu",
                "defaultValue": "S1",
                "menu": "POCKET_SERVO_GET_ANGLE_FIELDMENU_1"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.pocket_pin_read_analog
    },
    {
        "opcode": "pocket_pin_use_5V_read_digtial",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "inputMenu_1": {
                "type": "inputMenu",
                "defaultValue": "S1",
                "menu": "POCKET_SERVO_GET_ANGLE_FIELDMENU_1"
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
                "code": `round(cyberpi.pocket.read_analog(\"{inputMenu_1}\"), 1)`
            }
        },
        "handler": this.funcs.pocket_pin_use_5V_read_digtial
    },
    {
        "opcode": "pocket_pin_write_digtial",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "all",
                "menu": "POCKET_SERVO_SET_ANGLE_FIELDMENU_1"
            },
            "Digtial_value": {
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
                "code": `cyberpi.pocket.write_digital({Digtial_value}, \"{fieldMenu_1}\")`
            }
        },
        "handler": this.funcs.pocket_pin_write_digtial
    },
    {
        "opcode": "pocket_pin_set_pwm_with_duty_and_frquency",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "pin_number": {
                "type": "inputMenu",
                "defaultValue": "all",
                "menu": "POCKET_SERVO_SET_ANGLE_FIELDMENU_1"
            },
            "PWM_value": {
                "type": "number",
                "defaultValue": 50
            },
            "fieldMenu_3": {
                "type": "inputMenu",
                "defaultValue": "2000",
                "menu": "POCKET_PIN_SET_PWM_WITH_DUTY_AND_FRQUENCY_FIELDMENU_3"
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
                "code": `cyberpi.pocket.set_pwm({PWM_value}, {fieldMenu_3}, \"{pin_number}\")`
            }
        },
        "handler": this.funcs.pocket_pin_set_pwm_with_duty_and_frquency
    }
]);

export default blocks;