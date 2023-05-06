import blocks from './blocks.js';

const display = (facepanels) => ({
    "name": "display",
    "colors": [
        "#6739B6",
        "#5D33A4",
        "#522E92"
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
        ]
    }
});

export default display;