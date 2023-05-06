const blocks = (extFacePanels) => ([{
        "opcode": "codey_neuron_set_ledpanel_with_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'codeyneuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "PANEL": extFacePanels['49444059'],
            "TIME": {
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
                "code": this.funcs.codeyNeuronSetLedpanelWithTimeCodesCode,
                "sections": {
                    "import": ['time', 'neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_set_ledpanel_with_time
    },
    {
        "opcode": "codey_neuron_set_ledpanel_face",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'codeyneuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "PANEL": extFacePanels['49444059']
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.codeyNeuronSetLedpanelFaceCodesCode,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_set_ledpanel_face
    },
    {
        "opcode": "codey_neuron_set_ledpanel_text",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'codeyneuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "TEXT": {
                "type": "string",
                "defaultValue": "hello"
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
                "code": `neurons.led_panel.show_string(0, 255, 0, {TEXT}, {ID})`,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_set_ledpanel_text
    },
    {
        "opcode": "codey_neuron_set_ledpanel_position_color",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'codeyneuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "X": {
                "type": "number",
                "defaultValue": 0
            },
            "Y": {
                "type": "number",
                "defaultValue": 0
            },
            "COLOR": {
                "type": "fieldMenu",
                "defaultValue": "#ff0000",
                "menu": "CODEY_NEURON_SET_LEDPANEL_POSITION_COLOR_COLOR"
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
                "code": this.funcs.codeyNeuronSetLedpanelPositionColorCodesCode,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_set_ledpanel_position_color
    },
    {
        "opcode": "codey_neuron_set_ledpanel_postion_rgb",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'codeyneuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "X": {
                "type": "number",
                "defaultValue": 0
            },
            "Y": {
                "type": "number",
                "defaultValue": 0
            },
            "R": {
                "type": "number",
                "defaultValue": 255
            },
            "G": {
                "type": "number",
                "defaultValue": 0
            },
            "B": {
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
                "code": `neurons.led_panel.set_pixel({X}, {Y}, {R}, {G}, {B}, {ID})`,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_set_ledpanel_postion_rgb
    },
    {
        "opcode": "codey_neuron_turn_off_ledpanel_position",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'codeyneuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "X": {
                "type": "number",
                "defaultValue": 0
            },
            "Y": {
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
                "code": `neurons.led_panel.set_pixel({X}, {Y}, 0, 0, 0, {ID})`,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_turn_off_ledpanel_position
    },
    {
        "opcode": "codey_neuron_turn_off_ledpanel",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'codeyneuron')
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
        "codes": {
            "python": {
                "code": `neurons.led_panel.clear({ID})`,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_turn_off_ledpanel
    },
    {
        "opcode": "codey_neuron_set_ledstrip_mode",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'codeyneuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "STRIP": extFacePanels['04907424']
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.codeyNeuronSetLedstripModeCodesCode,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_set_ledstrip_mode
    },
    {
        "opcode": "codey_neuron_set_ledstrip_with_color",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'codeyneuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "POSITION": {
                "type": "number",
                "defaultValue": 1
            },
            "COLORLIST": {
                "type": "fieldMenu",
                "defaultValue": "#ff0000",
                "menu": "CODEY_NEURON_SET_LEDSTRIP_WITH_COLOR_COLORLIST"
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
                "code": this.funcs.codeyNeuronSetLedstripWithColorCodesCode,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_set_ledstrip_with_color
    },
    {
        "opcode": "codey_neuron_set_ledstrip_with_rgb",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'codeyneuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "POSITION": {
                "type": "number",
                "defaultValue": 1
            },
            "R": {
                "type": "number",
                "defaultValue": 255
            },
            "G": {
                "type": "number",
                "defaultValue": 0
            },
            "B": {
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
                "code": `neurons.led_strip.set_single({POSITION}, {R}, {G}, {B}, {ID})`,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_set_ledstrip_with_rgb
    },
    {
        "opcode": "codey_neuron_play_tone",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'codeyneuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "TONE": {
                "type": "fieldMenu",
                "defaultValue": "65",
                "menu": "CODEY_NEURON_PLAY_TONE_TONE"
            },
            "BEAT": {
                "type": "number",
                "defaultValue": 0.25
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
                "code": `neurons.buzzer.play_tone({TONE}, {BEAT}, {ID})`,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_play_tone
    },
    {
        "opcode": "codey_neuron_play_hz",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'codeyneuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "HZ": {
                "type": "number",
                "defaultValue": 700
            },
            "TIME": {
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
                "code": `neurons.buzzer.play_tone({HZ}, {TIME}, {ID})`,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_play_hz
    },
    {
        "opcode": "codey_neuron_run_dcmotor_with_speed_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'codeyneuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "CODEY_NEURON_RUN_DCMOTOR_WITH_SPEED_TIME_SLOT"
            },
            "POWER": {
                "type": "number",
                "defaultValue": 50
            },
            "TIME": {
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
                "code": this.funcs.codeyNeuronRunDcmotorWithSpeedTimeCodesCode,
                "sections": {
                    "import": ['time', 'neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_run_dcmotor_with_speed_time
    },
    {
        "opcode": "codey_neuron_run_dcmotor_with_speed",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'codeyneuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "CODEY_NEURON_RUN_DCMOTOR_WITH_SPEED_TIME_SLOT"
            },
            "POWER": {
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
                "code": `neurons.dc_motor_driver.set_power({POWER}, {SLOT}, {ID})`,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_run_dcmotor_with_speed
    },
    {
        "opcode": "codey_neuron_run_dcmotor_wheel",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'codeyneuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "POWER_LEFT": {
                "type": "number",
                "defaultValue": 50
            },
            "POWER_RIGHT": {
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
                "code": `neurons.dc_motor_driver.set_power({POWER_LEFT}, 1, {ID})\nneurons.dc_motor_driver.set_power({POWER_RIGHT}, 2, {ID})`,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_run_dcmotor_wheel
    },
    {
        "opcode": "codey_neuron_run_servo",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'codeyneuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "CODEY_NEURON_RUN_DCMOTOR_WITH_SPEED_TIME_SLOT"
            },
            "ANGLE": {
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
                "code": `neurons.servo_driver.set_angle({ANGLE}, {SLOT}, {ID})`,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_run_servo
    },
    {
        "opcode": "codey_neuron_event_touch_color",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'codeyneuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "COLOR": {
                "type": "fieldMenu",
                "defaultValue": "blue",
                "menu": "CODEY_NEURON_EVENT_TOUCH_COLOR_COLOR"
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
                "code": this.funcs.codeyNeuronEventTouchColorCodesCode,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_event_touch_color
    },
    {
        "opcode": "codey_neuron_detect_ultrasonic",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'codeyneuron')
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
        "codes": {
            "python": {
                "code": `neurons.ultrasonic_sensor.get_distance({ID})`,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_detect_ultrasonic
    },
    {
        "opcode": "codey_neuron_event_tilt",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'codeyneuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "DIRECTION": {
                "type": "fieldMenu",
                "defaultValue": "forward",
                "menu": "CODEY_NEURON_EVENT_TILT_DIRECTION"
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
                "code": this.funcs.codeyNeuronEventTiltCodesCode,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_event_tilt
    },
    {
        "opcode": "codey_neuron_event_shaked",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'codeyneuron')
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
        "codes": {
            "python": {
                "code": `neurons.gyro_sensor.is_shaked({ID})`,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_event_shaked
    },
    {
        "opcode": "codey_neuron_detect_gyro_angle",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'codeyneuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "COORDINATE": {
                "type": "fieldMenu",
                "defaultValue": "roll",
                "menu": "CODEY_NEURON_DETECT_GYRO_ANGLE_COORDINATE"
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
                "code": this.funcs.codeyNeuronDetectGyroAngleCodesCode,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_detect_gyro_angle
    },
    {
        "opcode": "codey_neuron_detect_gyro_speed",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'codeyneuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "COORDINATE": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "CODEY_NEURON_DETECT_GYRO_SPEED_COORDINATE"
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
                "code": `neurons.gyro_sensor.get_acceleration('{COORDINATE}', {ID})`,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_detect_gyro_speed
    },
    {
        "opcode": "codey_neuron_event_pir",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'codeyneuron')
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
        "codes": {
            "python": {
                "code": `neurons.pir_sensor.is_activated({ID})`,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_event_pir
    },
    {
        "opcode": "codey_neuron_detect_humidity",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'codeyneuron')
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
        "codes": {
            "python": {
                "code": `neurons.soil_moisture.get_humidity({ID})`,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_detect_humidity
    },
    {
        "opcode": "codey_neuron_button",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'codeyneuron')
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
        "codes": {
            "python": {
                "code": `neurons.button.is_pressed({ID})`,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_button
    },
    {
        "opcode": "codey_neuron_rgb_led_show_with_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/e2ff275a4ae5418a9601e7ec904b83a4.svg', 'codeyneuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "color_1": {
                "type": "color",
                "defaultValue": "#7ED321"
            },
            "time": {
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
                "code": this.funcs.codeyNeuronRgbLedShowWithTimeCodesCode,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_rgb_led_show_with_time
    },
    {
        "opcode": "codey_neuron_rgb_led_show",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/226b906aea054d11a0458356ab833f0e.svg', 'codeyneuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "color_1": {
                "type": "color",
                "defaultValue": "#7ED321"
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
                "code": this.funcs.codeyNeuronRgbLedShowCodesCode,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_rgb_led_show
    },
    {
        "opcode": "codey_neuron_rgb_led_set_rgb",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/5b361406a97f4cd8a6676c39d3b13a5c.svg', 'codeyneuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "R": {
                "type": "number",
                "defaultValue": 255
            },
            "G": {
                "type": "number",
                "defaultValue": 0
            },
            "B": {
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
                "code": `neurons.rgb_led.show({R}, {G}, {B}, {ID})\r`,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_rgb_led_set_rgb
    },
    {
        "opcode": "codey_neuron_display_show_image_with_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/5b361406a97f4cd8a6676c39d3b13a5c.svg', 'codeyneuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "emoji": {
                "type": "fieldMenu",
                "defaultValue": "normal",
                "menu": "CODEY_NEURON_DISPLAY_SHOW_IMAGE_WITH_TIME_EMOJI"
            },
            "time": {
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
                "code": this.funcs.codeyNeuronDisplayShowImageWithTimeCodesCode,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_display_show_image_with_time
    },
    {
        "opcode": "codey_neuron_display_show_image",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/5b361406a97f4cd8a6676c39d3b13a5c.svg', 'codeyneuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "emoji": {
                "type": "fieldMenu",
                "defaultValue": "normal",
                "menu": "CODEY_NEURON_DISPLAY_SHOW_IMAGE_WITH_TIME_EMOJI"
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
                "code": `neurons.display.show_image('{emoji}', True, {ID})`,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_display_show_image
    },
    {
        "opcode": "codey_neuron_display_show_string",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/5b361406a97f4cd8a6676c39d3b13a5c.svg', 'codeyneuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "icon": {
                "type": "fieldMenu",
                "defaultValue": "air",
                "menu": "CODEY_NEURON_DISPLAY_SHOW_STRING_ICON"
            },
            "text": {
                "type": "string",
                "defaultValue": "hello"
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
                "code": this.funcs.codeyNeuronDisplayShowStringCodesCode,
                "sections": {
                    "import": ['neurons'],
                    "lib": this.funcs.codeyNeuronDisplayShowStringCodesLib
                }
            }
        },
        "handler": this.funcs.codey_neuron_display_show_string
    },
    {
        "opcode": "codey_neuron_display_show_string_in_mutiple_lines",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/5b361406a97f4cd8a6676c39d3b13a5c.svg', 'codeyneuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "icon": {
                "type": "fieldMenu",
                "defaultValue": "air",
                "menu": "CODEY_NEURON_DISPLAY_SHOW_STRING_ICON"
            },
            "text": {
                "type": "string",
                "defaultValue": "hello"
            },
            "icon2": {
                "type": "fieldMenu",
                "defaultValue": "air",
                "menu": "CODEY_NEURON_DISPLAY_SHOW_STRING_ICON"
            },
            "text2": {
                "type": "string",
                "defaultValue": "hello"
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
                "code": this.funcs.codeyNeuronDisplayShowStringInMutipleLinesCodesCode,
                "sections": {
                    "import": ['neurons'],
                    "lib": this.funcs.codeyNeuronDisplayShowStringInMutipleLinesCodesLib
                }
            }
        },
        "handler": this.funcs.codey_neuron_display_show_string_in_mutiple_lines
    },
    {
        "opcode": "codey_neuron_el_wire_on",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/5b361406a97f4cd8a6676c39d3b13a5c.svg', 'codeyneuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "output": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "CODEY_NEURON_EL_WIRE_ON_OUTPUT"
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
                "code": `neurons.el_wire_driver.on({output}, {ID})`,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_el_wire_on
    },
    {
        "opcode": "codey_neuron_el_wire_off",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/5b361406a97f4cd8a6676c39d3b13a5c.svg', 'codeyneuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "output": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "CODEY_NEURON_EL_WIRE_OFF_OUTPUT"
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
                "code": `neurons.el_wire_driver.off({output}, {ID})`,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_el_wire_off
    },
    {
        "opcode": "codey_neuron_knob_get_value",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/5b361406a97f4cd8a6676c39d3b13a5c.svg', 'codeyneuron')
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
        "codes": {
            "python": {
                "code": `neurons.knob.get_value({ID})`,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_knob_get_value
    },
    {
        "opcode": "codey_neuron_joystic_get_dir",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'codeyneuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "direction": {
                "type": "fieldMenu",
                "defaultValue": "forward",
                "menu": "CODEY_NEURON_EVENT_TILT_DIRECTION"
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
                "code": this.funcs.codeyNeuronJoysticGetDirCodesCode,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_joystic_get_dir
    },
    {
        "opcode": "codey_neuron_joystic_get_value",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/5b361406a97f4cd8a6676c39d3b13a5c.svg', 'codeyneuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "axis": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "CODEY_NEURON_JOYSTIC_GET_VALUE_AXIS"
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
                "code": `neurons.joystick.get_value('{axis}', {ID})`,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_joystic_get_value
    },
    {
        "opcode": "codey_neuron_dual_ir_is_active",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'codeyneuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "option": {
                "type": "fieldMenu",
                "defaultValue": "left",
                "menu": "CODEY_NEURON_DUAL_IR_IS_ACTIVE_OPTION"
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
                "code": this.funcs.codeyNeuronDualIrIsActiveCodesCode,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_dual_ir_is_active
    },
    {
        "opcode": "codey_neuron_light_sensor_get_value",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/5b361406a97f4cd8a6676c39d3b13a5c.svg', 'codeyneuron')
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
        "codes": {
            "python": {
                "code": `neurons.light_sensor.get_value({ID})`,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_light_sensor_get_value
    },
    {
        "opcode": "codey_neuron_temperature_sensor_get_celsius",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/f42389854323454bba4758dd769ff113.svg', 'codeyneuron')
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
        "codes": {
            "python": {
                "code": `neurons.temperature_sensor.get_temperature(\"celsius\", {ID})`,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_temperature_sensor_get_celsius
    },
    {
        "opcode": "codey_neuron_humiture_sensor_get_humidity",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/5b361406a97f4cd8a6676c39d3b13a5c.svg', 'codeyneuron')
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
        "codes": {
            "python": {
                "code": `neurons.humiture_sensor.get_relative_humidity({ID})`,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_humiture_sensor_get_humidity
    },
    {
        "opcode": "codey_neuron_humiture_sensor_get_celsius",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/f42389854323454bba4758dd769ff113.svg', 'codeyneuron')
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
        "codes": {
            "python": {
                "code": `neurons.humiture_sensor.get_temperature(\"celsius\", {ID})`,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_humiture_sensor_get_celsius
    },
    {
        "opcode": "codey_neuron_humiture_sensor_get_fahrenheit",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/f42389854323454bba4758dd769ff113.svg', 'codeyneuron')
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
        "codes": {
            "python": {
                "code": `neurons.humiture_sensor.get_temperature(\"fahrenheit\", {ID})`,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_humiture_sensor_get_fahrenheit
    },
    {
        "opcode": "codey_neuron_ranging_sensor_get_distance",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/f42389854323454bba4758dd769ff113.svg', 'codeyneuron')
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
        "codes": {
            "python": {
                "code": `neurons.ranging_sensor.get_distance({ID})`,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_ranging_sensor_get_distance
    },
    {
        "opcode": "codey_neuron_color_sensor_get_value",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('codeyneuron/imgs/f42389854323454bba4758dd769ff113.svg', 'codeyneuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "color": {
                "type": "fieldMenu",
                "defaultValue": "red",
                "menu": "CODEY_NEURON_COLOR_SENSOR_GET_VALUE_COLOR"
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
                "code": `neurons.color_sensor.get_{color}({ID})`,
                "sections": {
                    "import": ['neurons']
                }
            }
        },
        "handler": this.funcs.codey_neuron_color_sensor_get_value
    }
]);

export default blocks;