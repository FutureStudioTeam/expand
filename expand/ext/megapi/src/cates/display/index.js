import blocks from './blocks.js';

const display = (facepanels) => ({
    "name": "display",
    "colors": [
        "#BD10E0",
        "#AA0ECA",
        "#970DB3"
    ],
    "menuIconURI": "",
    "blockIcon": null,
    "blocks": blocks(facepanels),
    "menus": {
        "MCORE_SHOW_FACE_TIME_PORT": [{
                "text": "MCORE_SHOW_FACE_TIME_PORT_0",
                "value": "6"
            },
            {
                "text": "MCORE_SHOW_FACE_TIME_PORT_1",
                "value": "7"
            },
            {
                "text": "MCORE_SHOW_FACE_TIME_PORT_2",
                "value": "8"
            }
        ]
    }
});

export default display;