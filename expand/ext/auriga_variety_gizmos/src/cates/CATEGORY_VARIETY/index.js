import blocks from './blocks.js';

const CATEGORY_VARIETY = (facepanels) => ({
    "name": "CATEGORY_VARIETY",
    "colors": [
        "#4EAA83",
        "#469976",
        "#3E8869"
    ],
    "menuIconURI": "",
    "blockIcon": null,
    "blocks": blocks(facepanels),
    "menus": {
        "AURIGA_SHOW_EXTERNAL_LED_TIME_PORT": [{
                "text": "AURIGA_SHOW_EXTERNAL_LED_TIME_PORT_0",
                "value": "6"
            },
            {
                "text": "AURIGA_SHOW_EXTERNAL_LED_TIME_PORT_1",
                "value": "7"
            },
            {
                "text": "AURIGA_SHOW_EXTERNAL_LED_TIME_PORT_2",
                "value": "8"
            },
            {
                "text": "AURIGA_SHOW_EXTERNAL_LED_TIME_PORT_3",
                "value": "9"
            },
            {
                "text": "AURIGA_SHOW_EXTERNAL_LED_TIME_PORT_4",
                "value": "10"
            }
        ],
        "AURIGA_SHOW_EXTERNAL_LED_TIME_LED_POSTION": [{
                "text": "AURIGA_SHOW_EXTERNAL_LED_TIME_LED_POSTION_0",
                "value": "0"
            },
            {
                "text": "AURIGA_SHOW_EXTERNAL_LED_TIME_LED_POSTION_1",
                "value": "1"
            },
            {
                "text": "AURIGA_SHOW_EXTERNAL_LED_TIME_LED_POSTION_2",
                "value": "2"
            },
            {
                "text": "AURIGA_SHOW_EXTERNAL_LED_TIME_LED_POSTION_3",
                "value": "3"
            },
            {
                "text": "AURIGA_SHOW_EXTERNAL_LED_TIME_LED_POSTION_4",
                "value": "4"
            }
        ],
        "AURIGA_RUN_SERVO_SLOT": [{
                "text": "AURIGA_RUN_SERVO_SLOT_0",
                "value": "1"
            },
            {
                "text": "AURIGA_RUN_SERVO_SLOT_1",
                "value": "2"
            }
        ]
    }
});

export default CATEGORY_VARIETY;