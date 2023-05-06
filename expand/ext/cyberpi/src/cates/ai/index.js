import blocks from './blocks.js';

const ai = (facepanels) => ({
    "name": "ai",
    "colors": [
        "#A6D200",
        "#95BD00",
        "#85A800"
    ],
    "menuIconURI": window.MbApi.getExtResPath('cyberpi/imgs/655c3b37b5e04e2fb3911f8192540657.svg', 'cyberpi'),
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('cyberpi/imgs/48fe6b32601545f883508a9cbc0fe4d3.svg', 'cyberpi')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "CYBERPI_SPEAK_WITH_SOME_LANGUAGE_FIELDMENU_1": [{
                "text": "CYBERPI_SPEAK_WITH_SOME_LANGUAGE_FIELDMENU_1_0",
                "value": "zh"
            },
            {
                "text": "CYBERPI_SPEAK_WITH_SOME_LANGUAGE_FIELDMENU_1_1",
                "value": "台湾普通话"
            },
            {
                "text": "CYBERPI_SPEAK_WITH_SOME_LANGUAGE_FIELDMENU_1_2",
                "value": "粤语"
            },
            {
                "text": "CYBERPI_SPEAK_WITH_SOME_LANGUAGE_FIELDMENU_1_3",
                "value": "日语"
            },
            {
                "text": "CYBERPI_SPEAK_WITH_SOME_LANGUAGE_FIELDMENU_1_4",
                "value": "英语"
            },
            {
                "text": "CYBERPI_SPEAK_WITH_SOME_LANGUAGE_FIELDMENU_1_5",
                "value": "法语"
            },
            {
                "text": "CYBERPI_SPEAK_WITH_SOME_LANGUAGE_FIELDMENU_1_6",
                "value": "德语"
            },
            {
                "text": "CYBERPI_SPEAK_WITH_SOME_LANGUAGE_FIELDMENU_1_7",
                "value": "西班牙语"
            },
            {
                "text": "CYBERPI_SPEAK_WITH_SOME_LANGUAGE_FIELDMENU_1_8",
                "value": "葡萄牙语"
            },
            {
                "text": "CYBERPI_SPEAK_WITH_SOME_LANGUAGE_FIELDMENU_1_9",
                "value": "俄语"
            },
            {
                "text": "CYBERPI_SPEAK_WITH_SOME_LANGUAGE_FIELDMENU_1_10",
                "value": "韩文"
            },
            {
                "text": "CYBERPI_SPEAK_WITH_SOME_LANGUAGE_FIELDMENU_1_11",
                "value": "意大利语"
            },
            {
                "text": "CYBERPI_SPEAK_WITH_SOME_LANGUAGE_FIELDMENU_1_12",
                "value": "荷兰语"
            }
        ],
        "CYBERPI_SPEAK_WITH_SOME_LANGUAGE_2_FIELDMENU_1": [{
                "text": "CYBERPI_SPEAK_WITH_SOME_LANGUAGE_2_FIELDMENU_1_0",
                "value": "zh"
            },
            {
                "text": "CYBERPI_SPEAK_WITH_SOME_LANGUAGE_2_FIELDMENU_1_1",
                "value": "zh"
            }
        ],
        "CYBERPI_SPEAK_WITH_SOME_LANGUAGE_3_FIELDMENU_1": [{
            "text": "CYBERPI_SPEAK_WITH_SOME_LANGUAGE_3_FIELDMENU_1_0",
            "value": "zh"
        }],
        "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_3_FIELDMENU_1": [{
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_3_FIELDMENU_1_0",
                "value": "chinese"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_3_FIELDMENU_1_1",
                "value": "chinese_taiwan"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_3_FIELDMENU_1_2",
                "value": "cantonese"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_3_FIELDMENU_1_3",
                "value": "english"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_3_FIELDMENU_1_4",
                "value": "french"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_3_FIELDMENU_1_5",
                "value": "german"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_3_FIELDMENU_1_6",
                "value": "spanish"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_3_FIELDMENU_1_7",
                "value": "italian"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_3_FIELDMENU_1_8",
                "value": "japanese"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_3_FIELDMENU_1_9",
                "value": "portuguese"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_3_FIELDMENU_1_10",
                "value": "russian"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_3_FIELDMENU_1_11",
                "value": "korean"
            }
        ],
        "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_2_FIELDMENU_1": [{
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_2_FIELDMENU_1_0",
                "value": "mandarin"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_2_FIELDMENU_1_1",
                "value": "mandarin_taiwan"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_2_FIELDMENU_1_2",
                "value": "cantonese"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_2_FIELDMENU_1_3",
                "value": "english"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_2_FIELDMENU_1_4",
                "value": "French"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_2_FIELDMENU_1_5",
                "value": "German"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_2_FIELDMENU_1_6",
                "value": "spanish"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_2_FIELDMENU_1_7",
                "value": "italian"
            }
        ],
        "CYBERPI_SPEECH_RECOGNITION_WITH_RECORD_2_FIELDMENU_1": [{
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_RECORD_2_FIELDMENU_1_0",
                "value": "(1) 普通话"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_RECORD_2_FIELDMENU_1_1",
                "value": "(2) 台湾普通话"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_RECORD_2_FIELDMENU_1_2",
                "value": "(3) 粤语"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_RECORD_2_FIELDMENU_1_3",
                "value": "(4) 日语"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_RECORD_2_FIELDMENU_1_4",
                "value": "(5) 英语"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_RECORD_2_FIELDMENU_1_5",
                "value": "(6) 法语"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_RECORD_2_FIELDMENU_1_6",
                "value": "(7) 德语"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_RECORD_2_FIELDMENU_1_7",
                "value": "(8) 西班牙语"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_RECORD_2_FIELDMENU_1_8",
                "value": "(9) 葡萄牙语"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_RECORD_2_FIELDMENU_1_9",
                "value": "(10) 俄语"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_RECORD_2_FIELDMENU_1_10",
                "value": "(11) 韩文"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_RECORD_2_FIELDMENU_1_11",
                "value": "(12) 意大利语"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_RECORD_2_FIELDMENU_1_12",
                "value": "(13) 荷兰语"
            }
        ],
        "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_FIELDMENU_1": [{
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_FIELDMENU_1_0",
                "value": "mandarin"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_FIELDMENU_1_1",
                "value": "mandarin_taiwan"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_FIELDMENU_1_2",
                "value": "cantonese"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_FIELDMENU_1_3",
                "value": "japanese"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_FIELDMENU_1_4",
                "value": "english"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_FIELDMENU_1_5",
                "value": "French"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_FIELDMENU_1_6",
                "value": "German"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_FIELDMENU_1_7",
                "value": "spanish"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_FIELDMENU_1_8",
                "value": "portuguese"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_FIELDMENU_1_9",
                "value": "russian"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_FIELDMENU_1_10",
                "value": "korean"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_FIELDMENU_1_11",
                "value": "italian"
            },
            {
                "text": "CYBERPI_SPEECH_RECOGNITION_WITH_TIME_FIELDMENU_1_12",
                "value": "dutch"
            }
        ],
        "CYBERPI_TRANSLATE_TO_SOME_LANGUAGE_2_FIELDMENU_2": [{
                "text": "CYBERPI_TRANSLATE_TO_SOME_LANGUAGE_2_FIELDMENU_2_0",
                "value": "chinese"
            },
            {
                "text": "CYBERPI_TRANSLATE_TO_SOME_LANGUAGE_2_FIELDMENU_2_1",
                "value": "english"
            },
            {
                "text": "CYBERPI_TRANSLATE_TO_SOME_LANGUAGE_2_FIELDMENU_2_2",
                "value": "cantonese"
            },
            {
                "text": "CYBERPI_TRANSLATE_TO_SOME_LANGUAGE_2_FIELDMENU_2_3",
                "value": "japanese"
            },
            {
                "text": "CYBERPI_TRANSLATE_TO_SOME_LANGUAGE_2_FIELDMENU_2_4",
                "value": "french"
            },
            {
                "text": "CYBERPI_TRANSLATE_TO_SOME_LANGUAGE_2_FIELDMENU_2_5",
                "value": "german"
            },
            {
                "text": "CYBERPI_TRANSLATE_TO_SOME_LANGUAGE_2_FIELDMENU_2_6",
                "value": "spanish"
            },
            {
                "text": "CYBERPI_TRANSLATE_TO_SOME_LANGUAGE_2_FIELDMENU_2_7",
                "value": "portuguese"
            },
            {
                "text": "CYBERPI_TRANSLATE_TO_SOME_LANGUAGE_2_FIELDMENU_2_8",
                "value": "russian"
            },
            {
                "text": "CYBERPI_TRANSLATE_TO_SOME_LANGUAGE_2_FIELDMENU_2_9",
                "value": "korean"
            },
            {
                "text": "CYBERPI_TRANSLATE_TO_SOME_LANGUAGE_2_FIELDMENU_2_10",
                "value": "italian"
            },
            {
                "text": "CYBERPI_TRANSLATE_TO_SOME_LANGUAGE_2_FIELDMENU_2_11",
                "value": "dutch"
            }
        ],
        "CYBERPI_TRANSLATE_TO_SOME_LANGUAGE_FIELDMENU_2": [{
                "text": "CYBERPI_TRANSLATE_TO_SOME_LANGUAGE_FIELDMENU_2_0",
                "value": "chinese"
            },
            {
                "text": "CYBERPI_TRANSLATE_TO_SOME_LANGUAGE_FIELDMENU_2_1",
                "value": "english"
            }
        ]
    }
});

export default ai;