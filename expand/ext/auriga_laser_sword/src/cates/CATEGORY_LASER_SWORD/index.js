import blocks from './blocks.js';

const CATEGORY_LASER_SWORD = (facepanels) => ({
    "name": "CATEGORY_LASER_SWORD",
    "colors": [
        "#4EAA83",
        "#469976",
        "#3E8869"
    ],
    "menuIconURI": "",
    "blockIcon": null,
    "blocks": blocks(facepanels),
    "menus": {
        "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_PORT": [{
                "text": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_PORT_0",
                "value": "6"
            },
            {
                "text": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_PORT_1",
                "value": "7"
            },
            {
                "text": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_PORT_2",
                "value": "8"
            },
            {
                "text": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_PORT_3",
                "value": "9"
            },
            {
                "text": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_PORT_4",
                "value": "10"
            }
        ],
        "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_SLOT": [{
                "text": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_SLOT_0",
                "value": "1"
            },
            {
                "text": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_SLOT_1",
                "value": "2"
            }
        ],
        "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST": [{
                "text": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_0",
                "value": "#FF0000"
            },
            {
                "text": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_1",
                "value": "#FF8000"
            },
            {
                "text": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_2",
                "value": "#FFFF00"
            },
            {
                "text": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_3",
                "value": "#00FF00"
            },
            {
                "text": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_4",
                "value": "#00FFFF"
            },
            {
                "text": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_5",
                "value": "#0000FF"
            },
            {
                "text": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_6",
                "value": "#8000FF"
            },
            {
                "text": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_7",
                "value": "#000000"
            }
        ]
    }
});

export default CATEGORY_LASER_SWORD;