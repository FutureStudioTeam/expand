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
        "BLOCK_1600244821767_PORT": [{
                "text": "BLOCK_1600244821767_PORT_0",
                "value": "0"
            },
            {
                "text": "BLOCK_1600244821767_PORT_1",
                "value": "1"
            },
            {
                "text": "BLOCK_1600244821767_PORT_2",
                "value": "2"
            },
            {
                "text": "BLOCK_1600244821767_PORT_3",
                "value": "3"
            }
        ]
    }
});

export default events;