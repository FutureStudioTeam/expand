const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_SPEAKER_1574244770906",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "NUM": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_SPEAKER_1574244770906_NUM"
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "PORT1",
                "menu": "BLOCK_SPEAKER_1574244770906_PORT"
            },
            "INDEX": {
                "type": "fieldMenu",
                "defaultValue": "INDEX1",
                "menu": "BLOCK_SPEAKER_1574244770906_INDEX"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "sections": {
                    "from": `from mbuild.speaker import speaker_class`,
                    "new_class": `speaker_{NUM} = speaker_class(\"{PORT}\", \"{INDEX}\")`
                }
            }
        },
        "handler": this.funcs.BLOCK_SPEAKER_1574244770906
    },
    {
        "opcode": "BLOCK_1552140144617",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_SPEAKER_1574244770906_NUM"
            },
            "audio": {
                "type": "fieldMenu",
                "defaultValue": "!001",
                "menu": "BLOCK_1552140144617_AUDIO"
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
                "code": `mbuild.speaker.play_melody('{audio}', {index})`
            }
        },
        "handler": this.funcs.BLOCK_1552140144617
    },
    {
        "opcode": "BLOCK_1552140175522",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_SPEAKER_1574244770906_NUM"
            },
            "audio": {
                "type": "fieldMenu",
                "defaultValue": "!001",
                "menu": "BLOCK_1552140175522_AUDIO"
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
                "code": `mbuild.speaker.play_melody_until_done('{audio}', {index})`
            }
        },
        "handler": this.funcs.BLOCK_1552140175522
    },
    {
        "opcode": "BLOCK_1553621437508",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_SPEAKER_1574244770906_NUM"
            },
            "note": {
                "type": "fieldMenu",
                "defaultValue": "262",
                "menu": "BLOCK_1553621437508_NOTE"
            },
            "beat": {
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
                "code": `speaker_{index}.play_tone({note}, {beat})`
            }
        },
        "handler": this.funcs.BLOCK_1553621437508
    },
    {
        "opcode": "BLOCK_1552140203501",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_SPEAKER_1574244770906_NUM"
            },
            "scale": {
                "type": "fieldMenu",
                "defaultValue": "C4",
                "menu": "BLOCK_1552140203501_SCALE"
            },
            "note": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1552140203501_NOTE"
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
                "code": `mbuild.speaker.play_note('{scale}', {note}, {index})`
            }
        },
        "handler": this.funcs.BLOCK_1552140203501
    },
    {
        "opcode": "BLOCK_1551148572564",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_SPEAKER_1574244770906_NUM"
            },
            "hz": {
                "type": "number",
                "defaultValue": 700
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
                "code": `speaker_{index}.play_tone({hz}, {time})`
            }
        },
        "handler": this.funcs.BLOCK_1551148572564
    },
    {
        "opcode": "BLOCK_1553668530911",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_SPEAKER_1574244770906_NUM"
            },
            "hz": {
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
                "code": `speaker_{index}.play_tone({hz})`
            }
        },
        "handler": this.funcs.BLOCK_1553668530911
    },
    {
        "opcode": "BLOCK_1552140311744",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_SPEAKER_1574244770906_NUM"
            },
            "string": {
                "type": "string",
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
                "code": `speaker_{index}.play_melody({string})`
            }
        },
        "handler": this.funcs.BLOCK_1552140311744
    },
    {
        "opcode": "BLOCK_1552140277681",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_SPEAKER_1574244770906_NUM"
            },
            "string": {
                "type": "string",
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
                "code": `speaker_{index}.play_melody_until_done({string})`
            }
        },
        "handler": this.funcs.BLOCK_1552140277681
    },
    {
        "opcode": "BLOCK_1553791292879",
        "blockType": "string",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "emotion_sound": {
                "type": "fieldMenu",
                "defaultValue": "\"!101\"",
                "menu": "BLOCK_1553791292879_EMOTION_SOUND"
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
                "code": `{emotion_sound}`
            }
        },
        "handler": this.funcs.BLOCK_1553791292879
    },
    {
        "opcode": "BLOCK_1553791292879_new_ver1",
        "blockType": "string",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "emotion_sound": {
                "type": "fieldMenu",
                "defaultValue": "!101",
                "menu": "BLOCK_1553791292879_NEW_VER1_EMOTION_SOUND"
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
                "code": "'{emotion_sound}'"
            }
        },
        "handler": this.funcs.BLOCK_1553791292879_new_ver1
    },
    {
        "opcode": "BLOCK_1553791214384",
        "blockType": "string",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "electronic_sound": {
                "type": "fieldMenu",
                "defaultValue": "\"!201\"",
                "menu": "BLOCK_1553791214384_ELECTRONIC_SOUND"
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
                "code": `{electronic_sound}`
            }
        },
        "handler": this.funcs.BLOCK_1553791214384
    },
    {
        "opcode": "BLOCK_1553791214384_new_ver1",
        "blockType": "string",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "electronic_sound": {
                "type": "fieldMenu",
                "defaultValue": "!201",
                "menu": "BLOCK_1553791214384_NEW_VER1_ELECTRONIC_SOUND"
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
                "code": "'{electronic_sound}'"
            }
        },
        "handler": this.funcs.BLOCK_1553791214384_new_ver1
    },
    {
        "opcode": "BLOCK_1553790645898",
        "blockType": "string",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "physical_sound": {
                "type": "fieldMenu",
                "defaultValue": "\"!301\"",
                "menu": "BLOCK_1553790645898_PHYSICAL_SOUND"
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
                "code": `{physical_sound}`
            }
        },
        "handler": this.funcs.BLOCK_1553790645898
    },
    {
        "opcode": "BLOCK_1553790645898_new_ver1",
        "blockType": "string",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "physical_sound": {
                "type": "fieldMenu",
                "defaultValue": "!301",
                "menu": "BLOCK_1553790645898_NEW_VER1_PHYSICAL_SOUND"
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
                "code": "'{physical_sound}'"
            }
        },
        "handler": this.funcs.BLOCK_1553790645898_new_ver1
    },
    {
        "opcode": "BLOCK_1553791295663",
        "blockType": "string",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "number_letter_sound": {
                "type": "fieldMenu",
                "defaultValue": "\"!401\"",
                "menu": "BLOCK_1553791295663_NUMBER_LETTER_SOUND"
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
                "code": `{number_letter_sound}`
            }
        },
        "handler": this.funcs.BLOCK_1553791295663
    },
    {
        "opcode": "BLOCK_1553791295663_new_ver_1",
        "blockType": "string",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "number_letter_sound": {
                "type": "fieldMenu",
                "defaultValue": "!401",
                "menu": "BLOCK_1553791295663_NEW_VER_1_NUMBER_LETTER_SOUND"
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
                "code": "'{number_letter_sound}'"
            }
        },
        "handler": this.funcs.BLOCK_1553791295663_new_ver_1
    },
    {
        "opcode": "BLOCK_1553791315560",
        "blockType": "string",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "english_word": {
                "type": "fieldMenu",
                "defaultValue": "\"!501\"",
                "menu": "BLOCK_1553791315560_ENGLISH_WORD"
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
                "code": `{english_word}`
            }
        },
        "handler": this.funcs.BLOCK_1553791315560
    },
    {
        "opcode": "BLOCK_1553791315560_new_ver1",
        "blockType": "string",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "english_word": {
                "type": "fieldMenu",
                "defaultValue": "!501",
                "menu": "BLOCK_1553791315560_NEW_VER1_ENGLISH_WORD"
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
                "code": "'{english_word}'"
            }
        },
        "handler": this.funcs.BLOCK_1553791315560_new_ver1
    },
    {
        "opcode": "BLOCK_1552140248164",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_SPEAKER_1574244770906_NUM"
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
                "code": `speaker_{index}.stop_sounds()`
            }
        },
        "handler": this.funcs.BLOCK_1552140248164
    },
    {
        "opcode": "BLOCK_1552140340843",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_SPEAKER_1574244770906_NUM"
            },
            "volume": {
                "type": "number",
                "defaultValue": 20
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
                "code": `speaker_{index}.change_volume({volume})`
            }
        },
        "handler": this.funcs.BLOCK_1552140340843
    },
    {
        "opcode": "BLOCK_1552140362788",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_SPEAKER_1574244770906_NUM"
            },
            "volume": {
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
                "code": `speaker_{index}.set_volume({volume})`
            }
        },
        "handler": this.funcs.BLOCK_1552140362788
    },
    {
        "opcode": "BLOCK_1552140447611",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_SPEAKER_1574244770906_NUM"
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
                "code": `speaker_{index}.get_volume()`
            }
        },
        "handler": this.funcs.BLOCK_1552140447611
    },
    {
        "opcode": "BLOCK_1544499601258",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_SPEAKER_1574244770906_NUM"
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
                "code": `speaker_{index}.is_playing()`
            }
        },
        "handler": this.funcs.BLOCK_1544499601258
    }
]);

export default blocks;