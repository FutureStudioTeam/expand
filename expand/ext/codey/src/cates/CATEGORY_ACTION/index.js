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
        "MEOS_MOVE_DIRECTION": [{
                "text": "MEOS_MOVE_DIRECTION_0",
                "value": "forward"
            },
            {
                "text": "MEOS_MOVE_DIRECTION_1",
                "value": "backward"
            },
            {
                "text": "MEOS_MOVE_DIRECTION_2",
                "value": "turn_left"
            },
            {
                "text": "MEOS_MOVE_DIRECTION_3",
                "value": "turn_right"
            }
        ],
        "MEOS_ROCKY_KEEP_ABSOLUTE_RUN_DIRECTION": [{
                "text": "MEOS_ROCKY_KEEP_ABSOLUTE_RUN_DIRECTION_0",
                "value": "forward"
            },
            {
                "text": "MEOS_ROCKY_KEEP_ABSOLUTE_RUN_DIRECTION_1",
                "value": "backward"
            }
        ]
    }
});

export default CATEGORY_ACTION;