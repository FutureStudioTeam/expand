const blocks = (extFacePanels) => ([{
        "opcode": "codey_emotion_look_up",
        "blockType": "command",
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
                "code": `codey.emotion.look_up()`,
                "sections": {
                    "import": ['codey', 'time']
                }
            }
        },
        "handler": this.funcs.codey_emotion_look_up
    },
    {
        "opcode": "codey_emotion_look_down",
        "blockType": "command",
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
                "code": `codey.emotion.look_down()`,
                "sections": {
                    "import": ['codey', 'time']
                }
            }
        },
        "handler": this.funcs.codey_emotion_look_down
    },
    {
        "opcode": "codey_emotion_look_left",
        "blockType": "command",
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
                "code": `codey.emotion.look_left()`,
                "sections": {
                    "import": ['codey', 'time']
                }
            }
        },
        "handler": this.funcs.codey_emotion_look_left
    },
    {
        "opcode": "codey_emotion_look_right",
        "blockType": "command",
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
                "code": `codey.emotion.look_right()`,
                "sections": {
                    "import": ['codey', 'time']
                }
            }
        },
        "handler": this.funcs.codey_emotion_look_right
    },
    {
        "opcode": "codey_emotion_look_around",
        "blockType": "command",
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
                "code": `codey.emotion.look_around()`,
                "sections": {
                    "import": ['codey', 'time']
                }
            }
        },
        "handler": this.funcs.codey_emotion_look_around
    },
    {
        "opcode": "codey_emotion_wink",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": `codey.emotion.blink()`,
                "sections": {
                    "import": ['codey', 'time']
                }
            }
        },
        "handler": this.funcs.codey_emotion_wink
    },
    {
        "opcode": "codey_emotion_smile",
        "blockType": "command",
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
                "code": `codey.emotion.smile()`,
                "sections": {
                    "import": ['codey', 'time']
                }
            }
        },
        "handler": this.funcs.codey_emotion_smile
    },
    {
        "opcode": "codey_emotion_yeah",
        "blockType": "command",
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
                "code": `codey.emotion.yeah()`,
                "sections": {
                    "import": ['codey', 'time']
                }
            }
        },
        "handler": this.funcs.codey_emotion_yeah
    },
    {
        "opcode": "codey_emotion_naughty",
        "blockType": "command",
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
                "code": `codey.emotion.naughty()`,
                "sections": {
                    "import": ['codey', 'time']
                }
            }
        },
        "handler": this.funcs.codey_emotion_naughty
    },
    {
        "opcode": "codey_emotion_proud",
        "blockType": "command",
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
                "code": `codey.emotion.proud()`,
                "sections": {
                    "import": ['codey', 'time']
                }
            }
        },
        "handler": this.funcs.codey_emotion_proud
    },
    {
        "opcode": "codey_emotion_coquetry",
        "blockType": "command",
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
                "code": `codey.emotion.yummy()`,
                "sections": {
                    "import": ['codey', 'time']
                }
            }
        },
        "handler": this.funcs.codey_emotion_coquetry
    },
    {
        "opcode": "codey_emotion_awkward",
        "blockType": "command",
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
                "code": `codey.emotion.uh_oh()`,
                "sections": {
                    "import": ['codey', 'time']
                }
            }
        },
        "handler": this.funcs.codey_emotion_awkward
    },
    {
        "opcode": "codey_emotion_exclaim",
        "blockType": "command",
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
                "code": `codey.emotion.wow()`,
                "sections": {
                    "import": ['codey', 'time']
                }
            }
        },
        "handler": this.funcs.codey_emotion_exclaim
    },
    {
        "opcode": "codey_emotion_aggrieved",
        "blockType": "command",
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
                "code": `codey.emotion.hurt()`,
                "sections": {
                    "import": ['codey', 'time']
                }
            }
        },
        "handler": this.funcs.codey_emotion_aggrieved
    },
    {
        "opcode": "codey_emotion_sad",
        "blockType": "command",
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
                "code": `codey.emotion.sad()`,
                "sections": {
                    "import": ['codey', 'time']
                }
            }
        },
        "handler": this.funcs.codey_emotion_sad
    },
    {
        "opcode": "codey_emotion_angry",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": `codey.emotion.angry()`,
                "sections": {
                    "import": ['codey', 'time']
                }
            }
        },
        "handler": this.funcs.codey_emotion_angry
    },
    {
        "opcode": "codey_emotion_greeting",
        "blockType": "command",
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
                "code": `codey.emotion.hello()`,
                "sections": {
                    "import": ['codey', 'time']
                }
            }
        },
        "handler": this.funcs.codey_emotion_greeting
    },
    {
        "opcode": "codey_emotion_sprint",
        "blockType": "command",
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
                "code": `codey.emotion.sprint()`,
                "sections": {
                    "import": ['codey', 'time']
                }
            }
        },
        "handler": this.funcs.codey_emotion_sprint
    },
    {
        "opcode": "codey_emotion_startle",
        "blockType": "command",
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
                "code": `codey.emotion.startle()`,
                "sections": {
                    "import": ['codey', 'time']
                }
            }
        },
        "handler": this.funcs.codey_emotion_startle
    },
    {
        "opcode": "codey_emotion_shiver",
        "blockType": "command",
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
                "code": `codey.emotion.shiver()`,
                "sections": {
                    "import": ['codey', 'time']
                }
            }
        },
        "handler": this.funcs.codey_emotion_shiver
    },
    {
        "opcode": "codey_emotion_dizzy",
        "blockType": "command",
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
                "code": `codey.emotion.dizzy()`,
                "sections": {
                    "import": ['codey', 'time']
                }
            }
        },
        "handler": this.funcs.codey_emotion_dizzy
    },
    {
        "opcode": "codey_emotion_sleepy",
        "blockType": "command",
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
                "code": `codey.emotion.sleepy()`,
                "sections": {
                    "import": ['codey', 'time']
                }
            }
        },
        "handler": this.funcs.codey_emotion_sleepy
    },
    {
        "opcode": "codey_emotion_sleeping",
        "blockType": "command",
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
                "code": `codey.emotion.zzz()`,
                "sections": {
                    "import": ['codey', 'time']
                }
            }
        },
        "handler": this.funcs.codey_emotion_sleeping
    },
    {
        "opcode": "codey_emotion_revive",
        "blockType": "command",
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
                "code": `codey.emotion.wake_up()`,
                "sections": {
                    "import": ['codey', 'time']
                }
            }
        },
        "handler": this.funcs.codey_emotion_revive
    },
    {
        "opcode": "codey_emotion_agree",
        "blockType": "command",
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
                "code": `codey.emotion.yes()`,
                "sections": {
                    "import": ['codey', 'time']
                }
            }
        },
        "handler": this.funcs.codey_emotion_agree
    },
    {
        "opcode": "codey_emotion_deny",
        "blockType": "command",
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
                "code": `codey.emotion.no()`,
                "sections": {
                    "import": ['codey', 'time']
                }
            }
        },
        "handler": this.funcs.codey_emotion_deny
    }
]);

export default blocks;