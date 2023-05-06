const blocks = (extFacePanels) => ([{
        "opcode": "neuron_event_button_pressed",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'neuron')
            },
            "ID": {
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
        "handler": this.funcs.neuron_event_button_pressed
    },
    {
        "opcode": "neuron_detect_knob",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'neuron')
            },
            "ID": {
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
        "handler": this.funcs.neuron_detect_knob
    },
    {
        "opcode": "neuron_detect_temperature",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'neuron')
            },
            "ID": {
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
        "handler": this.funcs.neuron_detect_temperature
    },
    {
        "opcode": "neuron_event_linefollow",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'neuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "AXIS": {
                "type": "fieldMenu",
                "defaultValue": "2",
                "menu": "NEURON_EVENT_LINEFOLLOW_AXIS"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.neuron_event_linefollow
    },
    {
        "opcode": "neuron_detect_lightness",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'neuron')
            },
            "ID": {
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
        "handler": this.funcs.neuron_detect_lightness
    },
    {
        "opcode": "neuron_event_touch_color",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'neuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "COLOR": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "NEURON_EVENT_TOUCH_COLOR_COLOR"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.neuron_event_touch_color
    },
    {
        "opcode": "neuron_detect_volume",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'neuron')
            },
            "ID": {
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
        "handler": this.funcs.neuron_detect_volume
    },
    {
        "opcode": "neuron_detect_ultrasonic",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'neuron')
            },
            "ID": {
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
        "handler": this.funcs.neuron_detect_ultrasonic
    },
    {
        "opcode": "neuron_event_tilt",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'neuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "DIRECTION": {
                "type": "fieldMenu",
                "defaultValue": "forward",
                "menu": "NEURON_EVENT_TILT_DIRECTION"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.neuron_event_tilt
    },
    {
        "opcode": "neuron_event_shaked",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'neuron')
            },
            "ID": {
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
        "handler": this.funcs.neuron_event_shaked
    },
    {
        "opcode": "neuron_detect_gyro_angle",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'neuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "COORDINATE": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "NEURON_DETECT_GYRO_ANGLE_COORDINATE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.neuron_detect_gyro_angle
    },
    {
        "opcode": "neuron_detect_gyro_speed",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'neuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "COORDINATE": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "NEURON_DETECT_GYRO_SPEED_COORDINATE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.neuron_detect_gyro_speed
    },
    {
        "opcode": "neuron_detect_color_sensor",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'neuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "COLOR": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "NEURON_DETECT_COLOR_SENSOR_COLOR"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.neuron_detect_color_sensor
    },
    {
        "opcode": "neuron_event_josystick_direction",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'neuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "DIRECTION": {
                "type": "fieldMenu",
                "defaultValue": "forward",
                "menu": "NEURON_EVENT_TILT_DIRECTION"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.neuron_event_josystick_direction
    },
    {
        "opcode": "neuron_detect_joystick",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'neuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "AXIS": {
                "type": "fieldMenu",
                "defaultValue": "X-Axis",
                "menu": "NEURON_DETECT_JOYSTICK_AXIS"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.neuron_detect_joystick
    },
    {
        "opcode": "neuron_event_pir",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'neuron')
            },
            "ID": {
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
        "handler": this.funcs.neuron_event_pir
    },
    {
        "opcode": "neuron_detect_humidity",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'neuron')
            },
            "ID": {
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
        "handler": this.funcs.neuron_detect_humidity
    },
    {
        "opcode": "op_ranging",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'neuron')
            },
            "ID": {
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
        "handler": this.funcs.op_ranging
    },
    {
        "opcode": "op_humidity",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'neuron')
            },
            "ID": {
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
        "handler": this.funcs.op_humidity
    },
    {
        "opcode": "op_temperature",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'neuron')
            },
            "ID": {
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
        "handler": this.funcs.op_temperature
    },
    {
        "opcode": "op_htemperature",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'neuron')
            },
            "ID": {
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
        "handler": this.funcs.op_htemperature
    }
]);

export default blocks;