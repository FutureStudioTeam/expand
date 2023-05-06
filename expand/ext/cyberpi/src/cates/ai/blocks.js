const blocks = (extFacePanels) => ([{
        "opcode": "cyberpi_wifi_set",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ssid": {
                "type": "string",
                "defaultValue": "ssid"
            },
            "wifipassword": {
                "type": "string",
                "defaultValue": "password"
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
                "code": `cyberpi.wifi.connect({ssid}, {wifipassword})`
            }
        },
        "handler": this.funcs.cyberpi_wifi_set
    },
    {
        "opcode": "cyberpi_wifi_is_connect",
        "blockType": "boolean",
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
                "code": `cyberpi.wifi.is_connect()`
            }
        },
        "handler": this.funcs.cyberpi_wifi_is_connect
    },
    {
        "opcode": "cyberpi_speak_with_some_language",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 36,
        "arguments": {
            "fieldMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "zh",
                "menu": "CYBERPI_SPEAK_WITH_SOME_LANGUAGE_FIELDMENU_1"
            },
            "string_2": {
                "type": "string",
                "defaultValue": "你好，世界"
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
                "code": `cyberpi.cloud.tts(\"zh\", {string_2})`
            }
        },
        "handler": this.funcs.cyberpi_speak_with_some_language
    },
    {
        "opcode": "cyberpi_speak_with_some_language_2",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 36,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "zh",
                "menu": "CYBERPI_SPEAK_WITH_SOME_LANGUAGE_2_FIELDMENU_1"
            },
            "string_2": {
                "type": "string",
                "defaultValue": "hello world"
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
                "code": `cyberpi.cloud.tts(\"zh\", {string_2})`,
                "sections": {
                    "lib": this.funcs.cyberpiSpeakWithSomeLanguage2CodesLib
                }
            }
        },
        "handler": this.funcs.cyberpi_speak_with_some_language_2
    },
    {
        "opcode": "cyberpi_speak_with_some_language_3",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "zh",
                "menu": "CYBERPI_SPEAK_WITH_SOME_LANGUAGE_3_FIELDMENU_1"
            },
            "string_2": {
                "type": "string",
                "defaultValue": "hello world"
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
                "code": `cyberpi.cloud.tts(\"zh\", {string_2})`,
                "sections": {
                    "lib": this.funcs.cyberpiSpeakWithSomeLanguage3CodesLib
                }
            }
        },
        "handler": this.funcs.cyberpi_speak_with_some_language_3
    },
    {
        "opcode": "cyberpi_speech_recognition_with_time_3",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "chinese",
                "menu": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_3_FIELDMENU_1"
            },
            "number_2": {
                "type": "number",
                "defaultValue": 3
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
                "code": `cyberpi.cloud.listen('{fieldMenu_1}', {number_2})`,
                "sections": {
                    "lib": this.funcs.cyberpiSpeechRecognitionWithTime3CodesLib
                }
            }
        },
        "handler": this.funcs.cyberpi_speech_recognition_with_time_3
    },
    {
        "opcode": "cyberpi_speech_recognition_with_time_2",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "mandarin",
                "menu": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_2_FIELDMENU_1"
            },
            "number_3": {
                "type": "number",
                "defaultValue": 3
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
                "code": `cyberpi.cloud.listen('{fieldMenu_1}', {number_3})`,
                "sections": {
                    "lib": this.funcs.cyberpiSpeechRecognitionWithTime2CodesLib
                }
            }
        },
        "handler": this.funcs.cyberpi_speech_recognition_with_time_2
    },
    {
        "opcode": "cyberpi_speech_recognition_with_record_2",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "(1) 普通话",
                "menu": "CYBERPI_SPEECH_RECOGNITION_WITH_RECORD_2_FIELDMENU_1"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.cyberpi_speech_recognition_with_record_2
    },
    {
        "opcode": "cyberpi_speech_recognition_with_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "mandarin",
                "menu": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_FIELDMENU_1"
            },
            "number_3": {
                "type": "number",
                "defaultValue": 3
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
                "code": `cyberpi.cloud.listen('{fieldMenu_1}', {number_3})`,
                "sections": {
                    "lib": this.funcs.cyberpiSpeechRecognitionWithTimeCodesLib
                }
            }
        },
        "handler": this.funcs.cyberpi_speech_recognition_with_time
    },
    {
        "opcode": "BLOCK_1599643085220",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "mandarin",
                "menu": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_FIELDMENU_1"
            },
            "number_3": {
                "type": "number",
                "defaultValue": 3
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
                "code": `cyberpi.cloud.listen('{fieldMenu_1}', {number_3})`,
                "sections": {
                    "lib": this.funcs.block1599643085220CodesLib
                }
            }
        },
        "handler": this.funcs.BLOCK_1599643085220
    },
    {
        "opcode": "cyberpi_speech_recognition_with_record",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "mandarin",
                "menu": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_FIELDMENU_1"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.cyberpi_speech_recognition_with_record
    },
    {
        "opcode": "cyberpi_speech_recognition_result",
        "blockType": "string",
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
                "code": `cyberpi.cloud.listen_result()`
            }
        },
        "handler": this.funcs.cyberpi_speech_recognition_result
    },
    {
        "opcode": "cyberpi_translate_to_some_language_2",
        "blockType": "string",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "string_1": {
                "type": "string",
                "defaultValue": "hello"
            },
            "fieldMenu_2": {
                "type": "inputMenu",
                "defaultValue": "chinese",
                "menu": "CYBERPI_TRANSLATE_TO_SOME_LANGUAGE_2_FIELDMENU_2"
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
                "code": `cyberpi.cloud.translate(\"{fieldMenu_2}\", {string_1})`,
                "sections": {
                    "lib": this.funcs.cyberpiTranslateToSomeLanguage2CodesLib
                }
            }
        },
        "handler": this.funcs.cyberpi_translate_to_some_language_2
    },
    {
        "opcode": "cyberpi_translate_to_some_language",
        "blockType": "string",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 36,
        "arguments": {
            "string_1": {
                "type": "string",
                "defaultValue": "hello"
            },
            "fieldMenu_2": {
                "type": "fieldMenu",
                "defaultValue": "chinese",
                "menu": "CYBERPI_TRANSLATE_TO_SOME_LANGUAGE_FIELDMENU_2"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `cyberpi.cloud.translate(\"{fieldMenu_2}\", {string_1})`,
                "sections": {
                    "lib": this.funcs.cyberpiTranslateToSomeLanguageCodesLib
                }
            }
        },
        "handler": this.funcs.cyberpi_translate_to_some_language
    }
]);

export default blocks;