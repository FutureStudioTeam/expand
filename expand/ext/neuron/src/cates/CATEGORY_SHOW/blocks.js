const blocks = (extFacePanels) => ([{
        "opcode": "neuron_set_led_with_time",
        "blockType": "command",
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
            "COLOR": {
                "type": "color",
                "defaultValue": "#ff0000"
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
        "handler": this.funcs.neuron_set_led_with_time
    },
    {
        "opcode": "neuron_set_led",
        "blockType": "command",
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
            "COLOR": {
                "type": "color",
                "defaultValue": "#ff0000"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.neuron_set_led
    },
    {
        "opcode": "neuron_set_led_with_rgb",
        "blockType": "command",
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
        "handler": this.funcs.neuron_set_led_with_rgb
    },
    {
        "opcode": "neuron_turn_off_led",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'neuron')
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.neuron_turn_off_led
    },
    {
        "opcode": "neuron_set_ledstrip_mode",
        "blockType": "command",
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
            "STRIP": extFacePanels['21635e6f']
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.neuron_set_ledstrip_mode
    },
    {
        "opcode": "neuron_set_ledstrip_with_color",
        "blockType": "command",
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
            "POSITION": {
                "type": "number",
                "defaultValue": 1
            },
            "COLOR": {
                "type": "color",
                "defaultValue": "#ff0000"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.neuron_set_ledstrip_with_color
    },
    {
        "opcode": "neuron_set_ledstrip_with_rgb",
        "blockType": "command",
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
        "handler": this.funcs.neuron_set_ledstrip_with_rgb
    },
    {
        "opcode": "neuron_turn_off_ledstrip",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'neuron')
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.neuron_turn_off_ledstrip
    },
    {
        "opcode": "neuron_set_ledpanel_with_time",
        "blockType": "command",
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
            "PANEL": extFacePanels['5677aa39'],
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
        "handler": this.funcs.neuron_set_ledpanel_with_time
    },
    {
        "opcode": "neuron_set_ledpanel_face",
        "blockType": "command",
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
            "PANEL": extFacePanels['5677aa39']
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.neuron_set_ledpanel_face
    },
    {
        "opcode": "neuron_set_ledpanel_postion",
        "blockType": "command",
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
            "X": {
                "type": "number",
                "defaultValue": 0
            },
            "Y": {
                "type": "number",
                "defaultValue": 0
            },
            "COLOR": {
                "type": "color",
                "defaultValue": "#ff0000"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.neuron_set_ledpanel_postion
    },
    {
        "opcode": "neuron_set_ledpanel_postion_rgb",
        "blockType": "command",
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
        "handler": this.funcs.neuron_set_ledpanel_postion_rgb
    },
    {
        "opcode": "neuron_turn_off_ledpanel_postion",
        "blockType": "command",
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
        "handler": this.funcs.neuron_turn_off_ledpanel_postion
    },
    {
        "opcode": "neuron_turn_off_ledpanel",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'neuron')
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.neuron_turn_off_ledpanel
    },
    {
        "opcode": "neuron_display_emotion",
        "blockType": "command",
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
            "EMOTION": {
                "type": "fieldMenu",
                "defaultValue": "7",
                "menu": "NEURON_DISPLAY_EMOTION_EMOTION"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.neuron_display_emotion
    },
    {
        "opcode": "neuron_display_emotion_with_time",
        "blockType": "command",
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
            "EMOTION": {
                "type": "fieldMenu",
                "defaultValue": "7",
                "menu": "NEURON_DISPLAY_EMOTION_EMOTION"
            },
            "DURATION": {
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
        "handler": this.funcs.neuron_display_emotion_with_time
    },
    {
        "opcode": "neuron_display_icon",
        "blockType": "command",
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
            "ICON_ID": {
                "type": "fieldMenu",
                "defaultValue": "/ue804",
                "menu": "NEURON_DISPLAY_ICON_ICON_ID"
            },
            "STRING": {
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
        "handler": this.funcs.neuron_display_icon
    },
    {
        "opcode": "neuron_display_icon_with_pos",
        "blockType": "command",
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
            "ICON_ID_1": {
                "type": "fieldMenu",
                "defaultValue": "/ue804",
                "menu": "NEURON_DISPLAY_ICON_ICON_ID"
            },
            "STRING_1": {
                "type": "string",
                "defaultValue": "hello"
            },
            "ICON_ID_2": {
                "type": "fieldMenu",
                "defaultValue": "/ue804",
                "menu": "NEURON_DISPLAY_ICON_ICON_ID"
            },
            "STRING_2": {
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
        "handler": this.funcs.neuron_display_icon_with_pos
    },
    {
        "opcode": "neuron_light_on_el_wiredriver",
        "blockType": "command",
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
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "NEURON_LIGHT_ON_EL_WIREDRIVER_SLOT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.neuron_light_on_el_wiredriver
    },
    {
        "opcode": "neuron_light_off_el_wiredriver",
        "blockType": "command",
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
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "NEURON_LIGHT_ON_EL_WIREDRIVER_SLOT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.neuron_light_off_el_wiredriver
    }
]);

export default blocks;