const blocks = (extFacePanels) => ([{
        "opcode": "haloboard_when_launch",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('haloboard/imgs/62d1aedd553c4563be98093ae2582b65.svg', 'haloboard')
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
                "code": `@event.start\r\ndef on_start{$INDEX}():\r\n    {{\r\n        (()=>{\r\n            let variableList = this.$ALL_VARIABLES.concat(this.$ALL_LISTVARIABLES);\r\n            return variableList.length>0?'global '+variableList.join(', '):''\r\n        })()\r\n    }}\r\n    {$BRANCH}\r\n\r\n\r\n\r`,
                "sections": {
                    "import": ['event', 'halo', 'time']
                }
            }
        },
        "handler": this.funcs.haloboard_when_launch
    },
    {
        "opcode": "haloboard_when_button_pressed",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('haloboard/imgs/99b45368c7f64d2fa44825c501c183fa.svg', 'haloboard')
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
                "code": `@event.button_pressed\r\ndef on_button_pressed{$INDEX}():\r\n    {{\r\n        (()=>{\r\n            let variableList = this.$ALL_VARIABLES.concat(this.$ALL_LISTVARIABLES);\r\n            return variableList.length>0?'global '+variableList.join(', '):''\r\n        })()\r\n    }}\r\n    {$BRANCH}\r`,
                "sections": {
                    "import": ['event', 'halo', 'time']
                }
            }
        },
        "handler": this.funcs.haloboard_when_button_pressed
    },
    {
        "opcode": "haloboard_when_shaked",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('haloboard/imgs/2609befcc6d84dbc845c17dd2c1cf15b.svg', 'haloboard')
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
                "code": `@event.shaked\r\ndef on_shaked{$INDEX}():\r\n    {{\r\n        (()=>{\r\n            let variableList = this.$ALL_VARIABLES.concat(this.$ALL_LISTVARIABLES);\r\n            return variableList.length>0?'global '+variableList.join(', '):''\r\n        })()\r\n    }}\r\n    {$BRANCH}\r`,
                "sections": {
                    "import": ['event', 'halo', 'time']
                }
            }
        },
        "handler": this.funcs.haloboard_when_shaked
    },
    {
        "opcode": "haloboard_when_tilt",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('haloboard/imgs/b276ba4f590c42309b6e43dd2cfcb072.svg', 'haloboard')
            },
            "tilt": {
                "type": "fieldMenu",
                "defaultValue": "arrow_up",
                "menu": "HALOBOARD_WHEN_TILT_TILT"
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
                "code": `@event.{tilt}\r\ndef on_{tilt}{$INDEX}():\r\n    {{(this.$ALL_VARIABLES.length !== 0)?'global '+this.$ALL_VARIABLES.join(', '):'' }}\r\n    {$BRANCH}\r`,
                "sections": {
                    "import": ['event', 'halo', 'time']
                }
            }
        },
        "handler": this.funcs.haloboard_when_tilt
    },
    {
        "opcode": "haloboard_when_tilt_1",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('haloboard/imgs/b276ba4f590c42309b6e43dd2cfcb072.svg', 'haloboard')
            },
            "tilt": {
                "type": "fieldMenu",
                "defaultValue": "arrow_up",
                "menu": "HALOBOARD_WHEN_TILT_1_TILT"
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
                "code": `@event.{tilt}\r\ndef on_tilt{$INDEX}():\r\n    {{\r\n        (()=>{\r\n            let variableList = this.$ALL_VARIABLES.concat(this.$ALL_LISTVARIABLES);\r\n            return variableList.length>0?'global '+variableList.join(', '):''\r\n        })()\r\n    }}\r\n    {$BRANCH}\r`,
                "sections": {
                    "import": ['event', 'halo', 'time']
                }
            }
        },
        "handler": this.funcs.haloboard_when_tilt_1
    },
    {
        "opcode": "haloboard_when_tilt_2",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('haloboard/imgs/b276ba4f590c42309b6e43dd2cfcb072.svg', 'haloboard')
            },
            "tilt": {
                "type": "fieldMenu",
                "defaultValue": "arrow_up",
                "menu": "HALOBOARD_WHEN_TILT_2_TILT"
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
                "code": `@event.{tilt}\r\ndef on_tilt{$INDEX}():\r\n    {{\r\n        (()=>{\r\n            let variableList = this.$ALL_VARIABLES.concat(this.$ALL_LISTVARIABLES);\r\n            return variableList.length>0?'global '+variableList.join(', '):''\r\n        })()\r\n    }}\r\n    {$BRANCH}\r`,
                "sections": {
                    "import": ['event', 'halo', 'time']
                }
            }
        },
        "handler": this.funcs.haloboard_when_tilt_2
    },
    {
        "opcode": "haloboard_when_touched",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('haloboard/imgs/1f7db6b84c644884ab98546ff4cd0d05.svg', 'haloboard')
            },
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
                "code": `@event.touchpad{touchpad_number}_active\r\ndef on_{touchpad_number}_active{$INDEX}():\r\n    {{\r\n        (()=>{\r\n            let variableList = this.$ALL_VARIABLES.concat(this.$ALL_LISTVARIABLES);\r\n            return variableList.length>0?'global '+variableList.join(', '):''\r\n        })()\r\n    }}\r\n    {$BRANCH}\r`,
                "sections": {
                    "import": ['event', 'halo', 'time']
                }
            }
        },
        "handler": this.funcs.haloboard_when_touched
    },
    {
        "opcode": "haloboard_when_greater_than",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('haloboard/imgs/7d845547407141cfb05da60cc4a0dc46.svg', 'haloboard')
            },
            "category": {
                "type": "fieldMenu",
                "defaultValue": "timer",
                "menu": "HALOBOARD_WHEN_GREATER_THAN_CATEGORY"
            },
            "value": {
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
                "code": `@event.greater_than({value}, '{category}')\r\ndef on_greater_than{$INDEX}():\r\n    {{(this.$ALL_VARIABLES.length !== 0)?'global '+this.$ALL_VARIABLES.join(', '):'' }}\r\n    {$BRANCH}`,
                "sections": {
                    "import": ['event', 'halo', 'time']
                }
            }
        },
        "handler": this.funcs.haloboard_when_greater_than
    },
    {
        "opcode": "haloboard_when_greater_than_1",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('haloboard/imgs/7d845547407141cfb05da60cc4a0dc46.svg', 'haloboard')
            },
            "category": {
                "type": "fieldMenu",
                "defaultValue": "timer",
                "menu": "HALOBOARD_WHEN_GREATER_THAN_1_CATEGORY"
            },
            "value": {
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
                "code": `@event.greater_than({value}, '{category}')\r\ndef on_greater_than{$INDEX}():\r\n    {{\r\n        (()=>{\r\n            let variableList = this.$ALL_VARIABLES.concat(this.$ALL_LISTVARIABLES);\r\n            return variableList.length>0?'global '+variableList.join(', '):''\r\n        })()\r\n    }}\r\n    {$BRANCH}`,
                "sections": {
                    "import": ['event', 'halo', 'time'],
                    "lib": this.funcs.haloboardWhenGreaterThan1CodesLib
                }
            }
        },
        "handler": this.funcs.haloboard_when_greater_than_1
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
                "code": `@event.received({BROADCAST_OPTION})\ndef on_received{$INDEX}():\n    {{\n        (()=>{\n            let variableList = this.$ALL_VARIABLES.concat(this.$ALL_LISTVARIABLES);\n            return variableList.length>0?'global '+variableList.join(', '):''\n        })()\n    }}\n    {$BRANCH}`,
                "sections": {
                    "import": ['event', 'halo', 'time']
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
                "code": `halo.broadcast({BROADCAST_INPUT})`,
                "sections": {
                    "import": ['halo']
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
                "code": `halo.broadcast_and_wait({BROADCAST_INPUT})`,
                "sections": {
                    "import": ['halo']
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