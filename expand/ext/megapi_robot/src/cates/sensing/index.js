import blocks from './blocks.js';

const sensing = (facepanels) => ({
    "name": "sensing",
    "colors": [
        "#4CBFE6",
        "#31B5E2",
        "#1EA8D7"
    ],
    "menuIconURI": "",
    "blockIcon": null,
    "blocks": blocks(facepanels),
    "menus": {
        "BLOCK_1616555666950_PORT": [{
                "text": "BLOCK_1616555666950_PORT_0",
                "value": "60"
            },
            {
                "text": "BLOCK_1616555666950_PORT_1",
                "value": "61"
            },
            {
                "text": "BLOCK_1616555666950_PORT_2",
                "value": "62"
            }
        ],
        "BLOCK_1616555667136_PORT": [{
                "text": "BLOCK_1616555667136_PORT_0",
                "value": "63"
            },
            {
                "text": "BLOCK_1616555667136_PORT_1",
                "value": "64"
            }
        ],
        "BLOCK_1616555667136_COLOR": [{
                "text": "BLOCK_1616555667136_COLOR_0",
                "value": "0"
            },
            {
                "text": "BLOCK_1616555667136_COLOR_1",
                "value": "1"
            }
        ],
        "BLOCK_1616555667069_PORT": [{
                "text": "BLOCK_1616555667069_PORT_0",
                "value": "65"
            },
            {
                "text": "BLOCK_1616555667069_PORT_1",
                "value": "66"
            }
        ]
    }
});

export default sensing;