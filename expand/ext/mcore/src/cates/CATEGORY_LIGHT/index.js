import blocks from './blocks.js';

const CATEGORY_LIGHT = (facepanels) => ({
    "name": "CATEGORY_LIGHT",
    "colors": [
        "#9013FE",
        "#8301F5",
        "#7401D9"
    ],
    "menuIconURI": "",
    "blockIcon": null,
    "blocks": blocks(facepanels),
    "menus": {
        "MCORE_SHOW_LED_TIME_LED_POSTION": [{
                "text": "MCORE_SHOW_LED_TIME_LED_POSTION_0",
                "value": "0"
            },
            {
                "text": "MCORE_SHOW_LED_TIME_LED_POSTION_1",
                "value": "2"
            },
            {
                "text": "MCORE_SHOW_LED_TIME_LED_POSTION_2",
                "value": "1"
            }
        ],
        "MCORE_SOUND_PLAY_NOTE_NOTE": [{
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_0",
                "value": "65"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_1",
                "value": "73"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_2",
                "value": "82"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_3",
                "value": "87"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_4",
                "value": "98"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_5",
                "value": "110"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_6",
                "value": "123"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_7",
                "value": "131"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_8",
                "value": "147"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_9",
                "value": "165"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_10",
                "value": "175"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_11",
                "value": "196"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_12",
                "value": "220"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_13",
                "value": "247"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_14",
                "value": "262"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_15",
                "value": "294"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_16",
                "value": "330"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_17",
                "value": "349"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_18",
                "value": "392"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_19",
                "value": "440"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_20",
                "value": "494"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_21",
                "value": "523"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_22",
                "value": "587"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_23",
                "value": "659"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_24",
                "value": "698"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_25",
                "value": "784"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_26",
                "value": "880"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_27",
                "value": "988"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_28",
                "value": "1047"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_29",
                "value": "1175"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_30",
                "value": "1319"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_31",
                "value": "1397"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_32",
                "value": "1568"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_33",
                "value": "1760"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_34",
                "value": "1976"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_35",
                "value": "2093"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_36",
                "value": "2349"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_37",
                "value": "2637"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_38",
                "value": "2794"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_39",
                "value": "3136"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_40",
                "value": "3520"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_41",
                "value": "3951"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_42",
                "value": "4186"
            },
            {
                "text": "MCORE_SOUND_PLAY_NOTE_NOTE_43",
                "value": "4699"
            }
        ],
        "MCORE_SHOW_FACE_TIME_PORT": [{
                "text": "MCORE_SHOW_FACE_TIME_PORT_0",
                "value": "1"
            },
            {
                "text": "MCORE_SHOW_FACE_TIME_PORT_1",
                "value": "2"
            },
            {
                "text": "MCORE_SHOW_FACE_TIME_PORT_2",
                "value": "3"
            },
            {
                "text": "MCORE_SHOW_FACE_TIME_PORT_3",
                "value": "4"
            }
        ],
        "MCORE_SHOW_EXTERNAL_LED_TIME_LED_POSTION": [{
                "text": "MCORE_SHOW_EXTERNAL_LED_TIME_LED_POSTION_0",
                "value": "0"
            },
            {
                "text": "MCORE_SHOW_EXTERNAL_LED_TIME_LED_POSTION_1",
                "value": "1"
            },
            {
                "text": "MCORE_SHOW_EXTERNAL_LED_TIME_LED_POSTION_2",
                "value": "2"
            },
            {
                "text": "MCORE_SHOW_EXTERNAL_LED_TIME_LED_POSTION_3",
                "value": "3"
            },
            {
                "text": "MCORE_SHOW_EXTERNAL_LED_TIME_LED_POSTION_4",
                "value": "4"
            }
        ],
        "MCORE_SHOW_ALL_LEDSTRIP_COLOR_SLOT": [{
                "text": "MCORE_SHOW_ALL_LEDSTRIP_COLOR_SLOT_0",
                "value": "1"
            },
            {
                "text": "MCORE_SHOW_ALL_LEDSTRIP_COLOR_SLOT_1",
                "value": "2"
            }
        ],
        "MCORE_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST": [{
                "text": "MCORE_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_0",
                "value": "#FF0000"
            },
            {
                "text": "MCORE_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_1",
                "value": "#FF8000"
            },
            {
                "text": "MCORE_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_2",
                "value": "#FFFF00"
            },
            {
                "text": "MCORE_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_3",
                "value": "#00FF00"
            },
            {
                "text": "MCORE_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_4",
                "value": "#00FFFF"
            },
            {
                "text": "MCORE_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_5",
                "value": "#0000FF"
            },
            {
                "text": "MCORE_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_6",
                "value": "#8000FF"
            }
        ]
    }
});

export default CATEGORY_LIGHT;