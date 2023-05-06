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
        "BLOCK_1616555651965_PORT": [{
                "text": "BLOCK_1616555651965_PORT_0",
                "value": "67"
            },
            {
                "text": "BLOCK_1616555651965_PORT_1",
                "value": "68"
            }
        ]
    }
});

export default display;