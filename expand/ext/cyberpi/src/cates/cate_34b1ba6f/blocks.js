const blocks = (extFacePanels) => ([{
        "opcode": "cyberpi_play_audio_until_2",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "file_name": {
                "type": "inputMenu",
                "defaultValue": "hi",
                "menu": "CYBERPI_PLAY_AUDIO_UNTIL_2_FILE_NAME"
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
                "code": `cyberpi.audio.play_until('{file_name}')`
            }
        },
        "handler": this.funcs.cyberpi_play_audio_until_2
    },
    {
        "opcode": "cyberpi_play_audio_2",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 36,
        "arguments": {
            "file_name": {
                "type": "inputMenu",
                "defaultValue": "hi",
                "menu": "CYBERPI_PLAY_AUDIO_UNTIL_2_FILE_NAME"
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
                "code": `cyberpi.audio.play('{file_name}')`
            }
        },
        "handler": this.funcs.cyberpi_play_audio_2
    },
    {
        "opcode": "cyberpi_play_audio_until_3",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "file_name": {
                "type": "inputMenu",
                "defaultValue": "hi",
                "menu": "CYBERPI_PLAY_AUDIO_UNTIL_3_FILE_NAME"
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
                "code": `cyberpi.audio.play_until('{file_name}')`
            }
        },
        "handler": this.funcs.cyberpi_play_audio_until_3
    },
    {
        "opcode": "cyberpi_play_audio_3",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "file_name": {
                "type": "inputMenu",
                "defaultValue": "hi",
                "menu": "CYBERPI_PLAY_AUDIO_UNTIL_3_FILE_NAME"
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
                "code": `cyberpi.audio.play('{file_name}')`
            }
        },
        "handler": this.funcs.cyberpi_play_audio_3
    },
    {
        "opcode": "cyberpi_start_record",
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
                "code": `cyberpi.audio.record()`
            }
        },
        "handler": this.funcs.cyberpi_start_record
    },
    {
        "opcode": "cyberpi_stop_record",
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
                "code": `cyberpi.audio.stop_record()`
            }
        },
        "handler": this.funcs.cyberpi_stop_record
    },
    {
        "opcode": "cyberpi_play_record_until",
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
                "code": `cyberpi.audio.play_record_until()`
            }
        },
        "handler": this.funcs.cyberpi_play_record_until
    },
    {
        "opcode": "cyberpi_play_record",
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
                "code": `cyberpi.audio.play_record()`
            }
        },
        "handler": this.funcs.cyberpi_play_record
    },
    {
        "opcode": "cyberpi_play_music_with_tone_and_note",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "number_1": {
                "type": "number",
                "defaultValue": 60
            },
            "number_2": {
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
                "code": this.funcs.cyberpiPlayMusicWithToneAndNoteCodesCode
            }
        },
        "handler": this.funcs.cyberpi_play_music_with_tone_and_note
    },
    {
        "opcode": "cyberpi_play_music_with_tone_and_note_2",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "number_1": {
                "type": "note",
                "defaultValue": 60
            },
            "number_2": {
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
                "code": this.funcs.cyberpiPlayMusicWithToneAndNote2CodesCode
            }
        },
        "handler": this.funcs.cyberpi_play_music_with_tone_and_note_2
    },
    {
        "opcode": "cyberpi_play_music_with_note",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "snare",
                "menu": "CYBERPI_PLAY_MUSIC_WITH_NOTE_FIELDMENU_1"
            },
            "number_3": {
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
                "code": `cyberpi.audio.play_drum('{fieldMenu_1}', {number_3})`
            }
        },
        "handler": this.funcs.cyberpi_play_music_with_note
    },
    {
        "opcode": "cyberpi_add_audio_speed",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "number_1": {
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
                "code": `cyberpi.audio.add_tempo({number_1})`
            }
        },
        "handler": this.funcs.cyberpi_add_audio_speed
    },
    {
        "opcode": "cyberpi_set_audio_speed",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "number_1": {
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
                "code": `cyberpi.audio.set_tempo({number_1})`
            }
        },
        "handler": this.funcs.cyberpi_set_audio_speed
    },
    {
        "opcode": "cyberpi_get_audio_speed",
        "blockType": "number",
        "checkboxInFlyout": true,
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
                "code": `cyberpi.audio.get_tempo()`
            }
        },
        "handler": this.funcs.cyberpi_get_audio_speed
    },
    {
        "opcode": "cyberpi_add_volume",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "number_1": {
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
                "code": `cyberpi.audio.add_vol({number_1})`
            }
        },
        "handler": this.funcs.cyberpi_add_volume
    },
    {
        "opcode": "cyberpi_set_volume",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "number_1": {
                "type": "number",
                "defaultValue": 30
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
                "code": `cyberpi.audio.set_vol({number_1})`
            }
        },
        "handler": this.funcs.cyberpi_set_volume
    },
    {
        "opcode": "cyberpi_get_volume",
        "blockType": "number",
        "checkboxInFlyout": true,
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
                "code": `cyberpi.audio.get_vol()`
            }
        },
        "handler": this.funcs.cyberpi_get_volume
    },
    {
        "opcode": "cyberpi_play_buzzer_tone_with_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "number_1": {
                "type": "number",
                "defaultValue": 700
            },
            "number_2": {
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
                "code": `cyberpi.audio.play_tone({number_1}, {number_2})`
            }
        },
        "handler": this.funcs.cyberpi_play_buzzer_tone_with_time
    },
    {
        "opcode": "cyberpi_play_buzzer_tone",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "number_2": {
                "type": "number",
                "defaultValue": 700
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
                "code": `cyberpi.audio.play_tone({number_2})`
            }
        },
        "handler": this.funcs.cyberpi_play_buzzer_tone
    },
    {
        "opcode": "cyberpi_stop_audio",
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
                "code": `cyberpi.audio.stop()`
            }
        },
        "handler": this.funcs.cyberpi_stop_audio
    },
    {
        "opcode": "cyberpi_play_audio_until",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "file_name": {
                "type": "fieldMenu",
                "defaultValue": "hi",
                "menu": "CYBERPI_PLAY_AUDIO_UNTIL_FILE_NAME"
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
                "code": `cyberpi.audio.play_until('{file_name}.mp3')`
            }
        },
        "handler": this.funcs.cyberpi_play_audio_until
    },
    {
        "opcode": "cyberpi_play_audio",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 36,
        "arguments": {
            "file_name": {
                "type": "fieldMenu",
                "defaultValue": "hi",
                "menu": "CYBERPI_PLAY_AUDIO_FILE_NAME"
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
                "code": `cyberpi.audio.play('{file_name}.mp3')`
            }
        },
        "handler": this.funcs.cyberpi_play_audio
    }
]);

export default blocks;