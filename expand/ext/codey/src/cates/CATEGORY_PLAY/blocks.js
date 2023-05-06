const blocks = (extFacePanels) => ([{
        "opcode": "meos_show_play_sound",
        "blockType": "command",
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
            "SOUNDLIST": {
                "type": "fieldMenu",
                "defaultValue": "hello.wav",
                "menu": "MEOS_SHOW_PLAY_SOUND_SOUNDLIST"
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
                "code": `codey.speaker.play_melody('{SOUNDLIST}')`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_show_play_sound
    },
    {
        "opcode": "meos_show_play_sound_wait",
        "blockType": "command",
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
            "SOUNDLIST": {
                "type": "fieldMenu",
                "defaultValue": "hello.wav",
                "menu": "MEOS_SHOW_PLAY_SOUND_SOUNDLIST"
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
                "code": `codey.speaker.play_melody('{SOUNDLIST}', True)`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_show_play_sound_wait
    },
    {
        "opcode": "meos_show_stop_allsound",
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
                "code": `codey.speaker.stop_sounds()`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_show_stop_allsound
    },
    {
        "opcode": "meos_show_play_note_with_string",
        "blockType": "command",
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
            "SOUNDNOTE": {
                "type": "fieldMenu",
                "defaultValue": "60",
                "menu": "MEOS_SHOW_PLAY_NOTE_WITH_STRING_SOUNDNOTE"
            },
            "SOUNDBEAT": {
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
                "code": `codey.speaker.play_note({SOUNDNOTE}, {SOUNDBEAT})`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_show_play_note_with_string
    },
    {
        "opcode": "meos_show_pause_note",
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
            "TIME": {
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
                "code": this.funcs.meosShowPauseNoteCodesCode,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_show_pause_note
    },
    {
        "opcode": "meos_show_play_hz",
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
                "code": `codey.speaker.play_tone({HZ}, {TIME})`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_show_play_hz
    },
    {
        "opcode": "meos_show_change_volume",
        "blockType": "command",
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
            "VOLUME": {
                "type": "number",
                "defaultValue": -10
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
                "code": `codey.speaker.volume = codey.speaker.volume + ({VOLUME})`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_show_change_volume
    },
    {
        "opcode": "meos_show_set_volume",
        "blockType": "command",
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
            "VOLUME": {
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
        "codes": {
            "python": {
                "code": `codey.speaker.volume = ({VOLUME})`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_show_set_volume
    },
    {
        "opcode": "meos_detect_sound_volume",
        "blockType": "number",
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
                "code": `codey.speaker.volume`,
                "sections": {
                    "import": ['codey']
                }
            }
        },
        "handler": this.funcs.meos_detect_sound_volume
    }
]);

export default blocks;