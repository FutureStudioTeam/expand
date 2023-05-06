const blocks = (extFacePanels) => ([{
        "opcode": "cyberpi_when_launch",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('cyberpi/imgs/5e323b4d147f481e9bc4f867c99131eb.svg', 'cyberpi')
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
                "code": `@event.start\r\ndef on_start{$INDEX}():\r\n    {{\r\n        (()=>{\r\n            let variableList = this.$ALL_VARIABLES.concat(this.$ALL_LISTVARIABLES);\r\n            return variableList.length>0?'global '+variableList.join(', '):''\r\n        })()\r\n    }}\r\n    {$BRANCH}\r\n    `,
                "sections": {
                    "import": ['event', 'time', 'cyberpi']
                }
            }
        },
        "handler": this.funcs.cyberpi_when_launch
    },
    {
        "opcode": "cyberpi_when_direction_key_press",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "image_1": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('cyberpi/imgs/4be49f89f3254cba8310a70355a92b45.svg', 'cyberpi')
            },
            "fieldMenu_2": {
                "type": "fieldMenu",
                "defaultValue": "up",
                "menu": "CYBERPI_DIRECTION_KEY_COUNT_FIELDMENU_1"
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
                "code": `@event.is_press('{fieldMenu_2}')\r\ndef is_joy_press{$INDEX}():\r\n    {{\r\n        (()=>{\r\n            let variableList = this.$ALL_VARIABLES.concat(this.$ALL_LISTVARIABLES);\r\n            return variableList.length>0?'global '+variableList.join(', '):''\r\n        })()\r\n    }}\r\n    {$BRANCH}\r`,
                "sections": {
                    "import": ['event', 'time', 'cyberpi']
                }
            }
        },
        "handler": this.funcs.cyberpi_when_direction_key_press
    },
    {
        "opcode": "cyberpi_when_button_press",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "image_1": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('cyberpi/imgs/4be49f89f3254cba8310a70355a92b45.svg', 'cyberpi')
            },
            "fieldMenu_2": {
                "type": "fieldMenu",
                "defaultValue": "a",
                "menu": "CYBERPI_BUTTON_COUNT_FIELDMENU_1"
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
                "code": `@event.is_press('{fieldMenu_2}')\r\ndef is_btn_press{$INDEX}():\r\n    {{\r\n        (()=>{\r\n            let variableList = this.$ALL_VARIABLES.concat(this.$ALL_LISTVARIABLES);\r\n            return variableList.length>0?'global '+variableList.join(', '):''\r\n        })()\r\n    }}\r\n    {$BRANCH}\r`,
                "sections": {
                    "import": ['event', 'time', 'cyberpi']
                }
            }
        },
        "handler": this.funcs.cyberpi_when_button_press
    },
    {
        "opcode": "cyberpi_when_detect_attitude",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "image_1": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('cyberpi/imgs/3c4f5ea1ce8a43b8ac009bef1001324c.svg', 'cyberpi')
            },
            "tilt": {
                "type": "fieldMenu",
                "defaultValue": "is_tiltleft",
                "menu": "CYBERPI_WHEN_DETECT_ATTITUDE_TILT"
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
                "code": `@event.{tilt}\r\ndef on_{tilt}{$INDEX}():\r\n    {{\r\n        (()=>{\r\n            let variableList = this.$ALL_VARIABLES.concat(this.$ALL_LISTVARIABLES);\r\n            return variableList.length>0?'global '+variableList.join(', '):''\r\n        })()\r\n    }}\r\n    {$BRANCH}`,
                "sections": {
                    "import": ['event', 'time', 'cyberpi']
                }
            }
        },
        "handler": this.funcs.cyberpi_when_detect_attitude
    },
    {
        "opcode": "cyberpi_when_detect_action",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "image_1": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('cyberpi/imgs/a0d1d1cd18be48f3b571472f2c2114bf.svg', 'cyberpi')
            },
            "tilt": {
                "type": "fieldMenu",
                "defaultValue": "is_waveleft",
                "menu": "CYBERPI_WHEN_DETECT_ACTION_TILT"
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
                "code": `@event.{tilt}\r\ndef on_{tilt}{$INDEX}():\r\n    {{\r\n        (()=>{\r\n            let variableList = this.$ALL_VARIABLES.concat(this.$ALL_LISTVARIABLES);\r\n            return variableList.length>0?'global '+variableList.join(', '):''\r\n        })()\r\n    }}\r\n    {$BRANCH}`,
                "sections": {
                    "import": ['event', 'time', 'cyberpi']
                }
            }
        },
        "handler": this.funcs.cyberpi_when_detect_action
    },
    {
        "opcode": "cyberpi_when_sensor_value_bigger_or_smaller_than",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "image_1": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('cyberpi/imgs/a0d1d1cd18be48f3b571472f2c2114bf.svg', 'cyberpi')
            },
            "fieldMenu_2": {
                "type": "fieldMenu",
                "defaultValue": "light_sensor",
                "menu": "CYBERPI_WHEN_SENSOR_VALUE_BIGGER_OR_SMALLER_THAN_FIELDMENU_2"
            },
            "fieldMenu_3": {
                "type": "fieldMenu",
                "defaultValue": "greater",
                "menu": "CYBERPI_WHEN_SENSOR_VALUE_BIGGER_OR_SMALLER_THAN_FIELDMENU_3"
            },
            "number_3": {
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
                "code": `@event.{fieldMenu_3}_than({number_3}, \"{fieldMenu_2}\")\r\ndef on_compare_than{$INDEX}():\r\n    {{\r\n        (()=>{\r\n            let variableList = this.$ALL_VARIABLES.concat(this.$ALL_LISTVARIABLES);\r\n            return variableList.length>0?'global '+variableList.join(', '):''\r\n        })()\r\n    }}\r\n    {$BRANCH}`,
                "sections": {
                    "import": ['event', 'time', 'cyberpi']
                }
            }
        },
        "handler": this.funcs.cyberpi_when_sensor_value_bigger_or_smaller_than
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
                "code": `@event.receive({BROADCAST_OPTION})\ndef on_receive{$INDEX}():\n    {{\n        (()=>{\n            let variableList = this.$ALL_VARIABLES.concat(this.$ALL_LISTVARIABLES);\n            return variableList.length>0?'global '+variableList.join(', '):''\n        })()\n    }}\n    {$BRANCH}`,
                "sections": {
                    "import": ['event', 'time', 'cyberpi']
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
                "code": `cyberpi.broadcast({BROADCAST_INPUT})`,
                "sections": {
                    "import": ['cyberpi']
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
                "code": `cyberpi.broadcast_and_wait({BROADCAST_INPUT})`,
                "sections": {
                    "import": ['cyberpi']
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