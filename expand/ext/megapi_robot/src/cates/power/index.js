import blocks from './blocks.js';

const power = (facepanels) => ({
    "name": "power",
    "colors": [
        "#4A90E2",
        "#3080DE",
        "#2171CF"
    ],
    "menuIconURI": "",
    "blockIcon": null,
    "blocks": blocks(facepanels),
    "menus": {
        "BLOCK_1616555750567_PORT": [{
                "text": "BLOCK_1616555750567_PORT_0",
                "value": "1"
            },
            {
                "text": "BLOCK_1616555750567_PORT_1",
                "value": "9"
            },
            {
                "text": "BLOCK_1616555750567_PORT_2",
                "value": "2"
            },
            {
                "text": "BLOCK_1616555750567_PORT_3",
                "value": "10"
            },
            {
                "text": "BLOCK_1616555750567_PORT_4",
                "value": "3"
            },
            {
                "text": "BLOCK_1616555750567_PORT_5",
                "value": "11"
            },
            {
                "text": "BLOCK_1616555750567_PORT_6",
                "value": "4"
            },
            {
                "text": "BLOCK_1616555750567_PORT_7",
                "value": "12"
            }
        ],
        "BLOCK_1616747767054_MOVE_DIRECTION": [{
                "text": "BLOCK_1616747767054_MOVE_DIRECTION_0",
                "value": "0"
            },
            {
                "text": "BLOCK_1616747767054_MOVE_DIRECTION_1",
                "value": "1"
            },
            {
                "text": "BLOCK_1616747767054_MOVE_DIRECTION_2",
                "value": "2"
            },
            {
                "text": "BLOCK_1616747767054_MOVE_DIRECTION_3",
                "value": "3"
            }
        ]
    }
});

export default power;