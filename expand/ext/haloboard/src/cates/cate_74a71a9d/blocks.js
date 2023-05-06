const blocks = (extFacePanels) => ([{
        "opcode": "haloboard_pin_is_digtial",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "pin_number": {
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
                "code": `halo.pin{pin_number}.read_digital() == 1`
            }
        },
        "handler": this.funcs.haloboard_pin_is_digtial
    },
    {
        "opcode": "haloboard_pin_read_digtial",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "pin_number": {
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
                "code": `halo.pin{pin_number}.read_digital()`
            }
        },
        "handler": this.funcs.haloboard_pin_read_digtial
    },
    {
        "opcode": "haloboard_pin_read_analog",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "pin_number": {
                "type": "fieldMenu",
                "defaultValue": "2",
                "menu": "HALOBOARD_PIN_READ_ANALOG_PIN_NUMBER"
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
                "code": `halo.pin{pin_number}.read_analog()`
            }
        },
        "handler": this.funcs.haloboard_pin_read_analog
    },
    {
        "opcode": "haloboard_pin_write_digtial",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "pin_number": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "HALOBOARD_DETECT_TOUCH_TOUCHPAD_NUMBER"
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
                "code": `halo.pin{pin_number}.write_digital({Digtial_value})`
            }
        },
        "handler": this.funcs.haloboard_pin_write_digtial
    },
    {
        "opcode": "haloboard_pin_write_PWM",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "pin_number": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "HALOBOARD_DETECT_TOUCH_TOUCHPAD_NUMBER"
            },
            "PWM_value": {
                "type": "number",
                "defaultValue": 1023
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
                "code": `halo.pin{pin_number}.write_analog({PWM_value})`
            }
        },
        "handler": this.funcs.haloboard_pin_write_PWM
    },
    {
        "opcode": "haloboard_pin_set_servo",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "pin_number": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "HALOBOARD_DETECT_TOUCH_TOUCHPAD_NUMBER"
            },
            "ServoRotaryAngle": {
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
                "code": `halo.pin{pin_number}.servo_write({ServoRotaryAngle})`
            }
        },
        "handler": this.funcs.haloboard_pin_set_servo
    },
    {
        "opcode": "halo_pin_play_buzzer_with_frequency",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "pin_num": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "HALOBOARD_DETECT_TOUCH_TOUCHPAD_NUMBER"
            },
            "frequency": {
                "type": "number",
                "defaultValue": 700
            },
            "duration": {
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
                "code": `halo.pin{pin_num}.play_tone({frequency}, {duration})`
            }
        },
        "handler": this.funcs.halo_pin_play_buzzer_with_frequency
    },
    {
        "opcode": "halo_play_buzzer_with_note",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "pin_num": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "HALOBOARD_DETECT_TOUCH_TOUCHPAD_NUMBER"
            },
            "note": {
                "type": "fieldMenu",
                "defaultValue": "C4",
                "menu": "HALO_PLAY_BUZZER_WITH_NOTE_NOTE"
            },
            "beat": {
                "type": "fieldMenu",
                "defaultValue": "0.25",
                "menu": "HALO_PLAY_BUZZER_WITH_NOTE_BEAT"
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
                "code": `halo.pin{pin_num}.play_note({note}, {beat})`
            }
        },
        "handler": this.funcs.halo_play_buzzer_with_note
    }
]);

export default blocks;