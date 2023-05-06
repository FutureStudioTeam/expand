const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1552140144617",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1552140144617_INDEX"
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
                "code": `mbuild.speaker.play_melody('{audio}', {index})`,
                "sections": {
                    "import": ['mbuild']
                }
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
                "menu": "BLOCK_1552140144617_INDEX"
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
                "code": `mbuild.speaker.play_melody_until_done('{audio}', {index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1552140175522
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
                "menu": "BLOCK_1552140144617_INDEX"
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
                "code": `mbuild.speaker.play_note('{scale}', {note}, {index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1552140203501
    },
    {
        "opcode": "BLOCK_1607418092151",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1552140144617_INDEX"
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
                "code": `time.sleep((60/mbuild.speaker.speed)*{beat})`,
                "sections": {
                    "import": ['mbuild', 'time'],
                    "lib": `mbuild.speaker.speed = 60;`
                }
            }
        },
        "handler": this.funcs.BLOCK_1607418092151
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
                "menu": "BLOCK_1552140144617_INDEX"
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
                "code": `mbuild.speaker.play_tone({note},(60/mbuild.speaker.speed)*{beat},{index})`,
                "sections": {
                    "import": ['mbuild'],
                    "lib": `mbuild.speaker.speed = 60;`
                }
            }
        },
        "handler": this.funcs.BLOCK_1553621437508
    },
    {
        "opcode": "BLOCK_1607418195369",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1552140144617_INDEX"
            },
            "number_2": {
                "type": "number",
                "defaultValue": 60
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
                "code": `mbuild.speaker.speed = {number_2};`,
                "sections": {
                    "import": ['mbuild'],
                    "lib": `mbuild.speaker.speed = 60;`
                }
            }
        },
        "handler": this.funcs.BLOCK_1607418195369
    },
    {
        "opcode": "BLOCK_1607418239915",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1552140144617_INDEX"
            },
            "number_2": {
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
                "code": `mbuild.speaker.speed += {number_2};`,
                "sections": {
                    "import": ['mbuild'],
                    "lib": `mbuild.speaker.speed = 60;`
                }
            }
        },
        "handler": this.funcs.BLOCK_1607418239915
    },
    {
        "opcode": "BLOCK_1607418255791",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "index": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1552140144617_INDEX"
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
                "code": `mbuild.speaker.speed `,
                "sections": {
                    "import": ['mbuild'],
                    "lib": `mbuild.speaker.speed = 60;`
                }
            }
        },
        "handler": this.funcs.BLOCK_1607418255791
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
                "menu": "BLOCK_1552140144617_INDEX"
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
                "code": `mbuild.speaker.play_tone({hz}, {time}, {index})`,
                "sections": {
                    "import": ['mbuild']
                }
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
                "menu": "BLOCK_1552140144617_INDEX"
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
                "code": `mbuild.speaker.play_tone({hz}, index = {index})`,
                "sections": {
                    "import": ['mbuild']
                }
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
                "menu": "BLOCK_1552140144617_INDEX"
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
                "code": `mbuild.speaker.play_melody({string}, {index})`,
                "sections": {
                    "import": ['mbuild']
                }
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
                "menu": "BLOCK_1552140144617_INDEX"
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
                "code": `mbuild.speaker.play_melody_until_done({string}, {index})`,
                "sections": {
                    "import": ['mbuild']
                }
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
        "gap": 12,
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
        "opcode": "BLOCK_1615356974651_new_ver1",
        "blockType": "string",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "animal_sound": {
                "type": "fieldMenu",
                "defaultValue": "!601",
                "menu": "BLOCK_1615356974651_NEW_VER1_ANIMAL_SOUND"
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
                "code": "'{animal_sound}'"
            }
        },
        "handler": this.funcs.BLOCK_1615356974651_new_ver1
    },
    {
        "opcode": "BLOCK_1615357470900_new_ver1",
        "blockType": "string",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "traffic_sound": {
                "type": "fieldMenu",
                "defaultValue": "!701",
                "menu": "BLOCK_1615357470900_NEW_VER1_TRAFFIC_SOUND"
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
                "code": "'{traffic_sound}'"
            }
        },
        "handler": this.funcs.BLOCK_1615357470900_new_ver1
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
                "menu": "BLOCK_1552140144617_INDEX"
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
                "code": `mbuild.speaker.stop_sounds({index})`,
                "sections": {
                    "import": ['mbuild']
                }
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
                "menu": "BLOCK_1552140144617_INDEX"
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
                "code": `mbuild.speaker.change_volume({volume}, {index})`,
                "sections": {
                    "import": ['mbuild']
                }
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
                "menu": "BLOCK_1552140144617_INDEX"
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
                "code": `mbuild.speaker.set_volume({volume}, {index})`,
                "sections": {
                    "import": ['mbuild']
                }
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
                "menu": "BLOCK_1552140144617_INDEX"
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
                "code": `mbuild.speaker.get_volume({index})`,
                "sections": {
                    "import": ['mbuild']
                }
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
                "menu": "BLOCK_1552140144617_INDEX"
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
                "code": `mbuild.speaker.is_playing({index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.BLOCK_1544499601258
    }
]);

export default blocks;