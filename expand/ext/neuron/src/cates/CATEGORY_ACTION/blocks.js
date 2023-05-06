const blocks = (extFacePanels) => ([{
        "opcode": "neuron_run_dcmotor_with_time",
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
                "menu": "NEURON_RUN_DCMOTOR_WITH_TIME_SLOT"
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
        "handler": this.funcs.neuron_run_dcmotor_with_time
    },
    {
        "opcode": "neuron_run_dcmotor_with_speed",
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
                "menu": "NEURON_RUN_DCMOTOR_WITH_TIME_SLOT"
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
        "handler": this.funcs.neuron_run_dcmotor_with_speed
    },
    {
        "opcode": "neuron_run_dcmotors",
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
        "handler": this.funcs.neuron_run_dcmotors
    },
    {
        "opcode": "neuron_run_servo",
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
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "NEURON_RUN_DCMOTOR_WITH_TIME_SLOT"
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
        "handler": this.funcs.neuron_run_servo
    },
    {
        "opcode": "BLOCK_1566873821085",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/58a25fe02bd54f73af9ba92d8f9f2030.svg', 'neuron')
            },
            "index": {
                "type": "number",
                "defaultValue": 1
            },
            "angle": {
                "type": "number",
                "defaultValue": 90
            },
            "speed": {
                "type": "number",
                "defaultValue": 180
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.BLOCK_1566873821085
    },
    {
        "opcode": "BLOCK_1566873830496",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/58a25fe02bd54f73af9ba92d8f9f2030.svg', 'neuron')
            },
            "index": {
                "type": "number",
                "defaultValue": 1
            },
            "angle": {
                "type": "number",
                "defaultValue": 0
            },
            "speed": {
                "type": "number",
                "defaultValue": 180
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.BLOCK_1566873830496
    },
    {
        "opcode": "BLOCK_1566873904029",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/58a25fe02bd54f73af9ba92d8f9f2030.svg', 'neuron')
            },
            "index": {
                "type": "number",
                "defaultValue": 1
            },
            "speed_percent": {
                "type": "number",
                "defaultValue": 100
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
        "handler": this.funcs.BLOCK_1566873904029
    },
    {
        "opcode": "BLOCK_1566873923438",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/58a25fe02bd54f73af9ba92d8f9f2030.svg', 'neuron')
            },
            "index": {
                "type": "number",
                "defaultValue": 1
            },
            "speed_percent": {
                "type": "number",
                "defaultValue": 100
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.BLOCK_1566873923438
    },
    {
        "opcode": "BLOCK_1566874019471",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/58a25fe02bd54f73af9ba92d8f9f2030.svg', 'neuron')
            },
            "index": {
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
        "handler": this.funcs.BLOCK_1566874019471
    },
    {
        "opcode": "BLOCK_1566874230002",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/58a25fe02bd54f73af9ba92d8f9f2030.svg', 'neuron')
            },
            "index": {
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
        "handler": this.funcs.BLOCK_1566874230002
    },
    {
        "opcode": "BLOCK_1566874263478",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/58a25fe02bd54f73af9ba92d8f9f2030.svg', 'neuron')
            },
            "index": {
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
        "handler": this.funcs.BLOCK_1566874263478
    },
    {
        "opcode": "BLOCK_1566874323828",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/58a25fe02bd54f73af9ba92d8f9f2030.svg', 'neuron')
            },
            "index": {
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
        "handler": this.funcs.BLOCK_1566874323828
    },
    {
        "opcode": "BLOCK_1566874317863",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/58a25fe02bd54f73af9ba92d8f9f2030.svg', 'neuron')
            },
            "index": {
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
        "handler": this.funcs.BLOCK_1566874317863
    },
    {
        "opcode": "BLOCK_1566874339176",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/58a25fe02bd54f73af9ba92d8f9f2030.svg', 'neuron')
            },
            "index": {
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
        "handler": this.funcs.BLOCK_1566874339176
    },
    {
        "opcode": "BLOCK_1566985510345",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/58a25fe02bd54f73af9ba92d8f9f2030.svg', 'neuron')
            },
            "index": {
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
        "handler": this.funcs.BLOCK_1566985510345
    }
]);

export default blocks;