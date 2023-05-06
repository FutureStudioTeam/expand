import blocks from './blocks.js';

const CATEGORY_LIGHT = (facepanels) => ({
    "name": "CATEGORY_LIGHT",
    "colors": [
        "#B080D5",
        "#A066CD",
        "#904DC4"
    ],
    "menuIconURI": "",
    "blockIcon": null,
    "blocks": blocks(facepanels),
    "menus": {
        "MEOS_SHOW_LED_RGB_RGB": [{
                "text": "MEOS_SHOW_LED_RGB_RGB_0",
                "value": "red"
            },
            {
                "text": "MEOS_SHOW_LED_RGB_RGB_1",
                "value": "green"
            },
            {
                "text": "MEOS_SHOW_LED_RGB_RGB_2",
                "value": "blue"
            }
        ],
        "MEOS_ROCKY_SHOW_LED_COLOR_COLORLIST": [{
                "text": "MEOS_ROCKY_SHOW_LED_COLOR_COLORLIST_0",
                "value": "'red'"
            },
            {
                "text": "MEOS_ROCKY_SHOW_LED_COLOR_COLORLIST_1",
                "value": "'green'"
            },
            {
                "text": "MEOS_ROCKY_SHOW_LED_COLOR_COLORLIST_2",
                "value": "'blue'"
            },
            {
                "text": "MEOS_ROCKY_SHOW_LED_COLOR_COLORLIST_3",
                "value": "'yellow'"
            },
            {
                "text": "MEOS_ROCKY_SHOW_LED_COLOR_COLORLIST_4",
                "value": "'cyan'"
            },
            {
                "text": "MEOS_ROCKY_SHOW_LED_COLOR_COLORLIST_5",
                "value": "'purple'"
            },
            {
                "text": "MEOS_ROCKY_SHOW_LED_COLOR_COLORLIST_6",
                "value": "'white'"
            }
        ]
    }
});

export default CATEGORY_LIGHT;