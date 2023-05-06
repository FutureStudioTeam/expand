import blocks from './blocks.js';

const soundandlight = (facepanels) => ({
    "name": "soundandlight",
    "colors": [
        "#9300DB",
        "#8400C5",
        "#7600AF"
    ],
    "menuIconURI": "",
    "blockIcon": null,
    "blocks": blocks(facepanels),
    "menus": {
        "SEG7_SHOW_NUMBER_PORT": [{
                "text": "SEG7_SHOW_NUMBER_PORT_0",
                "value": "6"
            },
            {
                "text": "SEG7_SHOW_NUMBER_PORT_1",
                "value": "7"
            },
            {
                "text": "SEG7_SHOW_NUMBER_PORT_2",
                "value": "8"
            },
            {
                "text": "SEG7_SHOW_NUMBER_PORT_3",
                "value": "9"
            },
            {
                "text": "SEG7_SHOW_NUMBER_PORT_4",
                "value": "10"
            },
            {
                "text": "SEG7_SHOW_NUMBER_PORT_5",
                "value": "11"
            },
            {
                "text": "SEG7_SHOW_NUMBER_PORT_6",
                "value": "12"
            }
        ],
        "LED_MODULE_SET_COLOR_LED_POSTION": [{
                "text": "LED_MODULE_SET_COLOR_LED_POSTION_0",
                "value": "0"
            },
            {
                "text": "LED_MODULE_SET_COLOR_LED_POSTION_1",
                "value": "1"
            },
            {
                "text": "LED_MODULE_SET_COLOR_LED_POSTION_2",
                "value": "2"
            },
            {
                "text": "LED_MODULE_SET_COLOR_LED_POSTION_3",
                "value": "3"
            },
            {
                "text": "LED_MODULE_SET_COLOR_LED_POSTION_4",
                "value": "4"
            }
        ],
        "LED_STRIP_SET_COLOR_SLOT": [{
                "text": "LED_STRIP_SET_COLOR_SLOT_0",
                "value": "1"
            },
            {
                "text": "LED_STRIP_SET_COLOR_SLOT_1",
                "value": "2"
            }
        ]
    }
});

export default soundandlight;