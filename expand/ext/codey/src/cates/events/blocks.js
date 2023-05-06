const blocks = (extFacePanels) => ([{
        "opcode": "meos_when_board_launch",
        "blockType": "hat",
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
                "code": `@event.start\r\ndef on_start{$INDEX}():\r\n    {{(this.$ALL_VARIABLES.length !== 0)?'global '+this.$ALL_VARIABLES.join(', '):'' }}\r\n    {$BRANCH}\r`,
                "sections": {
                    "import": ['codey', 'event', 'time']
                }
            }
        },
        "handler": this.funcs.meos_when_board_launch
    },
    {
        "opcode": "meos_when_button_press",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
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
                "code": `@event.button_{BUTTONS}_pressed\r\ndef on_button_{BUTTONS}_pressed{$INDEX}():\r\n    {{(this.$ALL_VARIABLES.length !== 0)?'global '+this.$ALL_VARIABLES.join(', '):'' }}\r\n    {$BRANCH}\r`,
                "sections": {
                    "import": ['codey', 'event', 'time']
                }
            }
        },
        "handler": this.funcs.meos_when_button_press
    },
    {
        "opcode": "meos_when_board_shake",
        "blockType": "hat",
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
                "code": `@event.shaked\r\ndef on_shaked{$INDEX}():\r\n    {{(this.$ALL_VARIABLES.length !== 0)?'global '+this.$ALL_VARIABLES.join(', '):'' }}\r\n    {$BRANCH}\r`,
                "sections": {
                    "import": ['codey', 'event', 'time']
                }
            }
        },
        "handler": this.funcs.meos_when_board_shake
    },
    {
        "opcode": "meos_when_board_tilt",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
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
                "code": `@event.{{(function(direction) {\r\n    switch(direction) {\r\n      case 'left':\r\n        return 'tilted_left';\r\n      case 'right':\r\n        return 'tilted_right';\r\n      case 'backward':\r\n        return 'ears_up';\r\n      case 'forward':\r\n        return 'ears_down';\r\n    }\r\n  })(this.DIRECTION)}}\r\ndef on_{{(function(direction) {\r\n    switch(direction) {\r\n      case 'left':\r\n        return 'tilted_left';\r\n      case 'right':\r\n        return 'tilted_right';\r\n      case 'backward':\r\n        return 'ears_up';\r\n      case 'forward':\r\n        return 'ears_down';\r\n    }\r\n})(this.DIRECTION)}}{$INDEX}():\r\n    {{(this.$ALL_VARIABLES.length !== 0)?'global '+this.$ALL_VARIABLES.join(', '):'' }}\r\n    {$BRANCH}`,
                "sections": {
                    "import": ['codey', 'event', 'time']
                }
            }
        },
        "handler": this.funcs.meos_when_board_tilt
    },
    {
        "opcode": "meos_when_volume_over",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "MENU_LIST": {
                "type": "fieldMenu",
                "defaultValue": "on_sound_over",
                "menu": "MEOS_WHEN_VOLUME_OVER_MENU_LIST"
            },
            "SOUNDVOLUME": {
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
                "code": `@event.greater_than({SOUNDVOLUME}, {{this.MENU_LIST==='on_sound_over'?'\\'sound_sensor\\'':'\\'timer\\''}})\r\ndef on_greater_than{$INDEX}():\r\n    {{(this.$ALL_VARIABLES.length !== 0)?'global '+this.$ALL_VARIABLES.join(', '):'' }}\r\n    {$BRANCH}\r`,
                "sections": {
                    "import": ['codey', 'event', 'time']
                }
            }
        },
        "handler": this.funcs.meos_when_volume_over
    },
    {
        "opcode": "meos_when_brightness_less",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "BRIGHTNESS": {
                "type": "number",
                "defaultValue": 5
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
                "code": `@event.less_than({BRIGHTNESS}, 'light_sensor')\r\ndef on_less_than{$INDEX}():\r\n    {{(this.$ALL_VARIABLES.length !== 0)?'global '+this.$ALL_VARIABLES.join(', '):'' }}\r\n    {$BRANCH}\r`,
                "sections": {
                    "import": ['codey', 'event', 'time']
                }
            }
        },
        "handler": this.funcs.meos_when_brightness_less
    },
    {
        "opcode": "event_whenbroadcastreceived",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "BROADCAST_OPTION": {
                "type": "fieldVariable",
                "defaultValue": ""
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
                "code": `@event.received({BROADCAST_OPTION})\ndef on_received{$INDEX}():\n    {{(this.$ALL_VARIABLES.length !== 0)?'global '+this.$ALL_VARIABLES.join(', '):'' }}\n    {$BRANCH}`,
                "sections": {
                    "import": ['codey', 'event', 'time']
                }
            }
        }
    },
    {
        "opcode": "event_broadcast",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "BROADCAST_INPUT": {
                "type": "inputVariable",
                "defaultValue": "message1"
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
                "code": `codey.broadcast(str({BROADCAST_INPUT}))`,
                "sections": {
                    "import": ['codey']
                }
            }
        }
    },
    {
        "opcode": "event_broadcastandwait",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "BROADCAST_INPUT": {
                "type": "inputVariable",
                "defaultValue": ""
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
                "code": `broadcast(str({BROADCAST_INPUT}), wait = True)`,
                "sections": {
                    "import": ['codey']
                }
            }
        }
    },
    {
        "opcode": "event_whenflagclicked",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ]
    },
    {
        "opcode": "event_whenkeypressed",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ]
    }
]);

export default blocks;