const blocks = (extFacePanels) => ([{
        "opcode": "mbot2_motor_set_power_cw",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "all",
                "menu": "MBOT2_MOTOR_SET_POWER_CW_FIELDMENU_1"
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
                "code": `mbot2.motor_set({number_2},\"{fieldMenu_1}\")`,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_motor_set_power_cw
    },
    {
        "opcode": "mbot2_motor_add_power_cw",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "all",
                "menu": "MBOT2_MOTOR_SET_POWER_CW_FIELDMENU_1"
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
                "code": `mbot2.motor_add({power},\"{fieldMenu_1}\")`,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_motor_add_power_cw
    },
    {
        "opcode": "mbot2_motor_driver_power_cw",
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
                "code": `mbot2.motor_drive({number_1},{number_2})`,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_motor_driver_power_cw
    },
    {
        "opcode": "mbot2_motor_get_power_cw",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "M1",
                "menu": "MBOT2_MOTOR_GET_POWER_CW_FIELDMENU_1"
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
                "code": `mbot2.motor_get(\"{fieldMenu_1}\")`,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_motor_get_power_cw
    },
    {
        "opcode": "mbot2_motor_stop_power",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "all",
                "menu": "MBOT2_MOTOR_SET_POWER_CW_FIELDMENU_1"
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
                "code": `mbot2.motor_stop(\"{fieldMenu_1}\")`,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_motor_stop_power
    },
    {
        "opcode": "mbot2_servo_set_angle",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "all",
                "menu": "MBOT2_SERVO_SET_ANGLE_FIELDMENU_1"
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
                "code": `mbot2.servo_set({angle},\"{fieldMenu_1}\")`,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_servo_set_angle
    },
    {
        "opcode": "mbot2_servo_add_angle",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "all",
                "menu": "MBOT2_SERVO_SET_ANGLE_FIELDMENU_1"
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
                "code": `mbot2.servo_add({angle},\"{fieldMenu_1}\")`,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_servo_add_angle
    },
    {
        "opcode": "mbot2_servo_driver",
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
            },
            "number_3": {
                "type": "number",
                "defaultValue": 90
            },
            "number_4": {
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
                "code": `mbot2.servo_drive({number_1},{number_2},{number_3},{number_4})`,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_servo_driver
    },
    {
        "opcode": "mbot2_servo_get_angle",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "S1",
                "menu": "MBOT2_SERVO_GET_ANGLE_FIELDMENU_1"
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
                "code": `mbot2.servo_get(\"{fieldMenu_1}\")`,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_servo_get_angle
    },
    {
        "opcode": "mbot2_servo_release_angle",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "all",
                "menu": "MBOT2_SERVO_SET_ANGLE_FIELDMENU_1"
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
                "code": `mbot2.servo_release(\"{fieldMenu_1}\")`,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_servo_release_angle
    },
    {
        "opcode": "mbot2_servo_reset_angle_to_zero",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "all",
                "menu": "MBOT2_SERVO_SET_ANGLE_FIELDMENU_1"
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
                "code": `mbot2.servo_set(0,\"{fieldMenu_1}\")`,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_servo_reset_angle_to_zero
    },
    {
        "opcode": "mbot2_led_show",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "all",
                "menu": "MBOT2_LED_SHOW_FIELDMENU_1"
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
                "code": this.funcs.mbot2LedShowCodesCode,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_led_show
    },
    {
        "opcode": "mbot2_led_on_with_color",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "all",
                "menu": "MBOT2_LED_SHOW_FIELDMENU_1"
            },
            "fieldMenu_2": {
                "type": "inputMenu",
                "defaultValue": "\"all\"",
                "menu": "MBOT2_LED_ON_WITH_COLOR_FIELDMENU_2"
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
                "code": this.funcs.mbot2LedOnWithColorCodesCode,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_led_on_with_color
    },
    {
        "opcode": "mbot2_led_on_with_rgb",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "all",
                "menu": "MBOT2_LED_SHOW_FIELDMENU_1"
            },
            "fieldMenu_2": {
                "type": "inputMenu",
                "defaultValue": "\"all\"",
                "menu": "MBOT2_LED_ON_WITH_COLOR_FIELDMENU_2"
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
                "code": `mbot2.led_on({r}, {g}, {b}, {fieldMenu_2}, \"{fieldMenu_1}\")`,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_led_on_with_rgb
    },
    {
        "opcode": "mbot2_led_move_with_cycle",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "all",
                "menu": "MBOT2_LED_SHOW_FIELDMENU_1"
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
                "code": `mbot2.led_move({number_2}, {number_3}, \"{fieldMenu_1}\")`,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_led_move_with_cycle
    },
    {
        "opcode": "mbot2_led_off",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "all",
                "menu": "MBOT2_LED_SHOW_FIELDMENU_1"
            },
            "fieldMenu_2": {
                "type": "inputMenu",
                "defaultValue": "\"all\"",
                "menu": "MBOT2_LED_ON_WITH_COLOR_FIELDMENU_2"
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
                "code": `mbot2.led_off({fieldMenu_2}, \"{fieldMenu_1}\")`,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_led_off
    },
    {
        "opcode": "mbot2_led_add_brightness",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "all",
                "menu": "MBOT2_LED_SHOW_FIELDMENU_1"
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
                "code": `mbot2.led_add_bri({number_1}, \"{fieldMenu_1}\")`,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_led_add_brightness
    },
    {
        "opcode": "mbot2_led_set_brightness",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "all",
                "menu": "MBOT2_LED_SHOW_FIELDMENU_1"
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
                "code": `mbot2.led_set_bri({number_1}, \"{fieldMenu_1}\")`,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_led_set_brightness
    },
    {
        "opcode": "mbot2_led_get_brightness",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "S1",
                "menu": "MBOT2_LED_GET_BRIGHTNESS_FIELDMENU_1"
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
                "code": `mbot2.led_get_bri(\"{fieldMenu_1}\")`,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_led_get_brightness
    },
    {
        "opcode": "mbot2_pin_is_high",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "pin_number": {
                "type": "inputMenu",
                "defaultValue": "S1",
                "menu": "MBOT2_LED_GET_BRIGHTNESS_FIELDMENU_1"
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
                "code": `mbot2.read_digital(\"{pin_number}\")`,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_pin_is_high
    },
    {
        "opcode": "mbot2_pin_read_digtial",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "pin_number": {
                "type": "inputMenu",
                "defaultValue": "S1",
                "menu": "MBOT2_LED_GET_BRIGHTNESS_FIELDMENU_1"
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
                "code": `mbot2.read_digital(\"{pin_number}\")`,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_pin_read_digtial
    },
    {
        "opcode": "mbot2_pin_use_5V_read_digtial",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "inputMenu_1": {
                "type": "inputMenu",
                "defaultValue": "S1",
                "menu": "MBOT2_LED_GET_BRIGHTNESS_FIELDMENU_1"
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
                "code": `round(mbot2.read_analog(\"{inputMenu_1}\"), 1)`,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_pin_use_5V_read_digtial
    },
    {
        "opcode": "mbot2_pin_write_digtial",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "all",
                "menu": "MBOT2_LED_SHOW_FIELDMENU_1"
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
                "code": `mbot2.write_digital({Digtial_value}, \"{fieldMenu_1}\")`,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_pin_write_digtial
    },
    {
        "opcode": "mbot2_pin_set_pwm_with_duty_and_frquency",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "pin_number": {
                "type": "inputMenu",
                "defaultValue": "all",
                "menu": "MBOT2_LED_SHOW_FIELDMENU_1"
            },
            "PWM_value": {
                "type": "number",
                "defaultValue": 50
            },
            "fieldMenu_3": {
                "type": "inputMenu",
                "defaultValue": "2000",
                "menu": "MBOT2_PIN_SET_PWM_WITH_DUTY_AND_FRQUENCY_FIELDMENU_3"
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
                "code": `mbot2.set_pwm({PWM_value}, {fieldMenu_3}, \"{pin_number}\")`,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_pin_set_pwm_with_duty_and_frquency
    }
]);

export default blocks;