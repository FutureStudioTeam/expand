import blocks from './blocks.js';

const CATEGORY_ACTION = (facepanels) => ({
    "name": "CATEGORY_ACTION",
    "colors": [
        "#4C97FF",
        "#2B84FF",
        "#0A71FF"
    ],
    "menuIconURI": "",
    "blockIcon": null,
    "blocks": blocks(facepanels),
    "menus": {
        "AURIGA_MOVE_MOVE_DIRECTION": [{
                "text": "AURIGA_MOVE_MOVE_DIRECTION_0",
                "value": "1"
            },
            {
                "text": "AURIGA_MOVE_MOVE_DIRECTION_1",
                "value": "2"
            },
            {
                "text": "AURIGA_MOVE_MOVE_DIRECTION_2",
                "value": "3"
            },
            {
                "text": "AURIGA_MOVE_MOVE_DIRECTION_3",
                "value": "4"
            }
        ]
    }
});

export default CATEGORY_ACTION;