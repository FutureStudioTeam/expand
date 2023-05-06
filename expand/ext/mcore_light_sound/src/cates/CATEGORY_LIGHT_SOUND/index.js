import blocks from './blocks.js';

const CATEGORY_LIGHT_SOUND = (facepanels) => ({
    "name": "CATEGORY_LIGHT_SOUND",
    "colors": [
        "#4EAA83",
        "#469976",
        "#3E8869"
    ],
    "menuIconURI": "",
    "blockIcon": null,
    "blocks": blocks(facepanels),
    "menus": {
        "MCORE_SHOW_EXTERNAL_LED_TIME_PORT": [{
                "text": "MCORE_SHOW_EXTERNAL_LED_TIME_PORT_0",
                "value": "1"
            },
            {
                "text": "MCORE_SHOW_EXTERNAL_LED_TIME_PORT_1",
                "value": "2"
            },
            {
                "text": "MCORE_SHOW_EXTERNAL_LED_TIME_PORT_2",
                "value": "3"
            },
            {
                "text": "MCORE_SHOW_EXTERNAL_LED_TIME_PORT_3",
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
        "MCORE_DETECT_EXTERNAL_LIGHT_PORT": [{
                "text": "MCORE_DETECT_EXTERNAL_LIGHT_PORT_0",
                "value": "3"
            },
            {
                "text": "MCORE_DETECT_EXTERNAL_LIGHT_PORT_1",
                "value": "4"
            },
            {
                "text": "MCORE_DETECT_EXTERNAL_LIGHT_PORT_2",
                "value": "6"
            }
        ],
        "MCORE_DETECT_EXTERNAL_LOUDNESS_PORT": [{
                "text": "MCORE_DETECT_EXTERNAL_LOUDNESS_PORT_0",
                "value": "3"
            },
            {
                "text": "MCORE_DETECT_EXTERNAL_LOUDNESS_PORT_1",
                "value": "4"
            }
        ]
    }
});

export default CATEGORY_LIGHT_SOUND;