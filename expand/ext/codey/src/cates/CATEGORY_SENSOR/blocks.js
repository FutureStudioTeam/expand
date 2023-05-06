const blocks = (extFacePanels) => ([{
        "opcode": "meos_event_button_pressed",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
            },
            "BUTTONS": {
                "type": "fieldMenu",
                "defaultValue": "a",
                "menu": "MEOS_EVENT_BUTTON_PRESSED_BUTTONS"
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
                "code": `codey.button_{BUTTONS}.is_pressed()`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_event_button_pressed
    },
    {
        "opcode": "meos_event_connect_rocky",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
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
                "code": `codey.is_rocky_connected()`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_event_connect_rocky
    },
    {
        "opcode": "meos_detect_potentiometer",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
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
                "code": `codey.potentiometer.get_value()`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_detect_potentiometer
    },
    {
        "opcode": "meos_detect_volume",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
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
                "code": `codey.sound_sensor.get_loudness()`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_detect_volume
    },
    {
        "opcode": "meos_detect_lightness",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
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
                "code": `codey.light_sensor.get_value()`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_detect_lightness
    },
    {
        "opcode": "meos_dump_energy",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
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
                "code": `codey.battery.get_percentage()`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_dump_energy
    },
    {
        "opcode": "meos_event_is_shaked",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
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
                "code": `codey.motion_sensor.is_shaked()`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_event_is_shaked
    },
    {
        "opcode": "meos_detect_shaked_strength",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
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
                "code": `codey.motion_sensor.get_shake_strength()`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_detect_shaked_strength
    },
    {
        "opcode": "meos_event_is_tilt",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
            },
            "DIRECTION": {
                "type": "fieldMenu",
                "defaultValue": "left",
                "menu": "MEOS_EVENT_IS_TILT_DIRECTION"
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
                "code": this.funcs.meosEventIsTiltCodesCode,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_event_is_tilt
    },
    {
        "opcode": "meos_event_is_orientate_to",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
            },
            "ORIENTATE": {
                "type": "fieldMenu",
                "defaultValue": "screen_up",
                "menu": "MEOS_EVENT_IS_ORIENTATE_TO_ORIENTATE"
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
                "code": this.funcs.meosEventIsOrientateToCodesCode,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_event_is_orientate_to
    },
    {
        "opcode": "meos_detect_gyro_roll_angle",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
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
                "code": `codey.motion_sensor.get_roll()`
            }
        },
        "handler": this.funcs.meos_detect_gyro_roll_angle
    },
    {
        "opcode": "meos_detect_gyro_pitch_angle",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
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
                "code": `codey.motion_sensor.get_pitch()`
            }
        },
        "handler": this.funcs.meos_detect_gyro_pitch_angle
    },
    {
        "opcode": "meos_detect_rotatex_angle",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
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
                "code": `codey.motion_sensor.get_rotation('x')`
            }
        },
        "handler": this.funcs.meos_detect_rotatex_angle
    },
    {
        "opcode": "meos_detect_rotatey_angle",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
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
                "code": `codey.motion_sensor.get_rotation('y')`
            }
        },
        "handler": this.funcs.meos_detect_rotatey_angle
    },
    {
        "opcode": "meos_detect_rotatez_angle",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
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
                "code": `codey.motion_sensor.get_rotation('z')`
            }
        },
        "handler": this.funcs.meos_detect_rotatez_angle
    },
    {
        "opcode": "meos_reset_angle",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
            },
            "AXIS": {
                "type": "fieldMenu",
                "defaultValue": "all",
                "menu": "MEOS_RESET_ANGLE_AXIS"
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
                "code": `codey.motion_sensor.reset_rotation('{AXIS}')`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_reset_angle
    },
    {
        "opcode": "meos_detect_time",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
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
                "code": `codey.get_timer()`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_detect_time
    },
    {
        "opcode": "meos_show_reset_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
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
                "code": `codey.reset_timer()`
            }
        },
        "handler": this.funcs.meos_show_reset_time
    },
    {
        "opcode": "meos_rocky_event_obstacles_ahead",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/efe396f42c824d15ab26f0cd9b8bfb42.svg', 'codey')
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
                "code": `rocky.color_ir_sensor.is_obstacle_ahead()`,
                "sections": {
                    "import": ['rocky']
                }
            }
        },
        "handler": this.funcs.meos_rocky_event_obstacles_ahead
    },
    {
        "opcode": "meos_event_is_color",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/efe396f42c824d15ab26f0cd9b8bfb42.svg', 'codey')
            },
            "COLOR": {
                "type": "fieldMenu",
                "defaultValue": "'red'",
                "menu": "MEOS_EVENT_IS_COLOR_COLOR"
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
                "code": `rocky.color_ir_sensor.is_color({COLOR})`,
                "sections": {
                    "import": ['rocky']
                }
            }
        },
        "handler": this.funcs.meos_event_is_color
    },
    {
        "opcode": "meos_rocky_detect_rgb",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/efe396f42c824d15ab26f0cd9b8bfb42.svg', 'codey')
            },
            "RGB": {
                "type": "fieldMenu",
                "defaultValue": "red",
                "menu": "MEOS_SHOW_LED_RGB_RGB"
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
                "code": `rocky.color_ir_sensor.get_{RGB}()`,
                "sections": {
                    "import": ['rocky']
                }
            }
        },
        "handler": this.funcs.meos_rocky_detect_rgb
    },
    {
        "opcode": "meos_rocky_detect_lightness",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/efe396f42c824d15ab26f0cd9b8bfb42.svg', 'codey')
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
                "code": `rocky.color_ir_sensor.get_light_strength()`,
                "sections": {
                    "import": ['rocky']
                }
            }
        },
        "handler": this.funcs.meos_rocky_detect_lightness
    },
    {
        "opcode": "meos_rocky_detect_reflection",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/efe396f42c824d15ab26f0cd9b8bfb42.svg', 'codey')
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
                "code": `rocky.color_ir_sensor.get_reflected_light()`,
                "sections": {
                    "import": ['rocky']
                }
            }
        },
        "handler": this.funcs.meos_rocky_detect_reflection
    },
    {
        "opcode": "meos_rocky_detect_ir_reflection",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/efe396f42c824d15ab26f0cd9b8bfb42.svg', 'codey')
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
                "code": `rocky.color_ir_sensor.get_reflected_infrared()`,
                "sections": {
                    "import": ['rocky']
                }
            }
        },
        "handler": this.funcs.meos_rocky_detect_ir_reflection
    },
    {
        "opcode": "meos_rocky_detect_grey",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/efe396f42c824d15ab26f0cd9b8bfb42.svg', 'codey')
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
                "code": `rocky.color_ir_sensor.get_greyness()`,
                "sections": {
                    "import": ['rocky']
                }
            }
        },
        "handler": this.funcs.meos_rocky_detect_grey
    },
    {
        "opcode": "meos_detect_rotate_angle",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
            },
            "AXIS": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "MEOS_DETECT_ROTATE_ANGLE_AXIS"
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
                "code": `codey.motion_sensor.get_rotation('{AXIS}')`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_detect_rotate_angle
    },
    {
        "opcode": "meos_detect_gyro_angle",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codey/imgs/cbb1d0b9c259468eaa9d12707474ffb6.svg', 'codey')
            },
            "AXIS": {
                "type": "fieldMenu",
                "defaultValue": "roll",
                "menu": "MEOS_DETECT_GYRO_ANGLE_AXIS"
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
                "code": `codey.motion_sensor.get_{AXIS}()`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_detect_gyro_angle
    }
]);

export default blocks;