const blocks = (extFacePanels) => ([{
        "opcode": "audioplayer_init",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "sections": {
                    "include": [
                        "\"src/MeAudioPlayer.h\""
                    ],
                    "lib": `MeAudioPlayer meAudioPlayer(0);`,
                    "setup": `meAudioPlayer.PlayerInit();\r\n_delay(0.1);`
                }
            }
        },
        "handler": this.funcs.audioplayer_init
    },
    {
        "opcode": "audioplayer_play_by_sn",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "FILE_SN": {
                "type": "number",
                "defaultValue": 1
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.audioplayerPlayBySnCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeAudioPlayer.h\""
                    ]
                }
            }
        },
        "handler": this.funcs.audioplayer_play_by_sn
    },
    {
        "opcode": "audioplayer_play_by_name",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "FILE_NAME": {
                "type": "string",
                "defaultValue": "T001"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `meAudioPlayer.playMusicFileName(String(/*{FILE_NAME}*/));\r\n_delay(0.1);`,
                "sections": {
                    "include": [
                        "\"src/MeAudioPlayer.h\""
                    ]
                }
            }
        },
        "handler": this.funcs.audioplayer_play_by_name
    },
    {
        "opcode": "audioplayer_set_play_mode",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PLAY_MODE": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "AUDIOPLAYER_SET_PLAY_MODE_PLAY_MODE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `meAudioPlayer.setMusicPlayMode(/*{PLAY_MODE}*/);\r\n_delay(0.1);`,
                "sections": {
                    "include": [
                        "\"src/MeAudioPlayer.h\""
                    ]
                }
            }
        },
        "handler": this.funcs.audioplayer_set_play_mode
    },
    {
        "opcode": "audioplayer_play_previous",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `meAudioPlayer.playPrevMusic();\r\n_delay(0.1);`,
                "sections": {
                    "include": [
                        "\"src/MeAudioPlayer.h\""
                    ]
                }
            }
        },
        "handler": this.funcs.audioplayer_play_previous
    },
    {
        "opcode": "audioplayer_play_next",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `meAudioPlayer.playNextMusic();\r\n_delay(0.1);`,
                "sections": {
                    "include": [
                        "\"src/MeAudioPlayer.h\""
                    ]
                }
            }
        },
        "handler": this.funcs.audioplayer_play_next
    },
    {
        "opcode": "audioplayer_pause",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `meAudioPlayer.pauseMusic();\r\n_delay(0.1);`,
                "sections": {
                    "include": [
                        "\"src/MeAudioPlayer.h\""
                    ]
                }
            }
        },
        "handler": this.funcs.audioplayer_pause
    },
    {
        "opcode": "audioplayer_stop",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `meAudioPlayer.stopMusic();\r\n_delay(0.1);`,
                "sections": {
                    "include": [
                        "\"src/MeAudioPlayer.h\""
                    ]
                }
            }
        },
        "handler": this.funcs.audioplayer_stop
    },
    {
        "opcode": "audioplayer_set_volume",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "VOLUME": {
                "type": "number",
                "defaultValue": 50
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.audioplayerSetVolumeCodesCode,
                "sections": {
                    "include": [
                        "\"src/MeAudioPlayer.h\""
                    ]
                }
            }
        },
        "handler": this.funcs.audioplayer_set_volume
    },
    {
        "opcode": "audioplayer_volume_up",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `meAudioPlayer.volumeUp();\r\n_delay(0.1);`,
                "sections": {
                    "include": [
                        "\"src/MeAudioPlayer.h\""
                    ]
                }
            }
        },
        "handler": this.funcs.audioplayer_volume_up
    },
    {
        "opcode": "audioplayer_volume_down",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `meAudioPlayer.volumeDown();\r\n_delay(0.1);`,
                "sections": {
                    "include": [
                        "\"src/MeAudioPlayer.h\""
                    ]
                }
            }
        },
        "handler": this.funcs.audioplayer_volume_down
    },
    {
        "opcode": "audioplayer_record",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "FILE_NAME": {
                "type": "string",
                "defaultValue": "T001"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `meAudioPlayer.startRecordingFileName(String(/*{FILE_NAME}*/));\r\n_delay(0.1);`,
                "sections": {
                    "include": [
                        "\"src/MeAudioPlayer.h\""
                    ]
                }
            }
        },
        "handler": this.funcs.audioplayer_record
    },
    {
        "opcode": "audioplayer_record_stop",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `meAudioPlayer.stopRecording();\r\n_delay(0.1);`,
                "sections": {
                    "include": [
                        "\"src/MeAudioPlayer.h\""
                    ]
                }
            }
        },
        "handler": this.funcs.audioplayer_record_stop
    }
]);

export default blocks;