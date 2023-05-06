import blocks from './blocks.js';

const events = (facepanels) => ({
    "name": "events",
    "colors": [
        "#FFBF00",
        "#E6AC00",
        "#CC9900"
    ],
    "menuIconURI": "",
    "blockIcon": null,
    "blocks": blocks(facepanels),
    "menus": {
        "BLOCK_1598608620452_OP": [{
                "text": "BLOCK_1598608620452_OP_0",
                "value": "less-than"
            },
            {
                "text": "BLOCK_1598608620452_OP_1",
                "value": "more-than"
            }
        ],
        "BLOCK_1599103209359_TILT_DIRECTION_ANY": [{
                "text": "BLOCK_1599103209359_TILT_DIRECTION_ANY_0",
                "value": "up"
            },
            {
                "text": "BLOCK_1599103209359_TILT_DIRECTION_ANY_1",
                "value": "down"
            },
            {
                "text": "BLOCK_1599103209359_TILT_DIRECTION_ANY_2",
                "value": "left"
            },
            {
                "text": "BLOCK_1599103209359_TILT_DIRECTION_ANY_3",
                "value": "right"
            },
            {
                "text": "BLOCK_1599103209359_TILT_DIRECTION_ANY_4",
                "value": "any"
            }
        ]
    }
});

export default events;