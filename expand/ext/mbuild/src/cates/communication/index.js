import blocks from './blocks.js';

const communication = (facepanels) => ({
    "name": "communication",
    "colors": [
        "#00D7B0",
        "#00C29E",
        "#00AC8D"
    ],
    "menuIconURI": "",
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('mbuild/imgs/0fd8059d4e294a58b02a90d1366984f8.svg', 'mbuild')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "BLOCK_1555587622976_NUMBER": [{
                "text": "BLOCK_1555587622976_NUMBER_0",
                "value": "0"
            },
            {
                "text": "BLOCK_1555587622976_NUMBER_1",
                "value": "1"
            }
        ],
        "BLOCK_1550734851249_CHARACTER": [{
                "text": "BLOCK_1550734851249_CHARACTER_0",
                "value": "A"
            },
            {
                "text": "BLOCK_1550734851249_CHARACTER_1",
                "value": "B"
            },
            {
                "text": "BLOCK_1550734851249_CHARACTER_2",
                "value": "C"
            },
            {
                "text": "BLOCK_1550734851249_CHARACTER_3",
                "value": "D"
            },
            {
                "text": "BLOCK_1550734851249_CHARACTER_4",
                "value": "E"
            },
            {
                "text": "BLOCK_1550734851249_CHARACTER_5",
                "value": "F"
            }
        ],
        "BLOCK_1550734282470_ARROW": [{
                "text": "BLOCK_1550734282470_ARROW_0",
                "value": "UP"
            },
            {
                "text": "BLOCK_1550734282470_ARROW_1",
                "value": "DOWN"
            },
            {
                "text": "BLOCK_1550734282470_ARROW_2",
                "value": "LEFT"
            },
            {
                "text": "BLOCK_1550734282470_ARROW_3",
                "value": "RIGHT"
            },
            {
                "text": "BLOCK_1550734282470_ARROW_4",
                "value": "SETUP"
            }
        ],
        "BLOCK_1550734041865_NUM": [{
                "text": "BLOCK_1550734041865_NUM_0",
                "value": "0"
            },
            {
                "text": "BLOCK_1550734041865_NUM_1",
                "value": "1"
            },
            {
                "text": "BLOCK_1550734041865_NUM_2",
                "value": "2"
            },
            {
                "text": "BLOCK_1550734041865_NUM_3",
                "value": "3"
            },
            {
                "text": "BLOCK_1550734041865_NUM_4",
                "value": "4"
            },
            {
                "text": "BLOCK_1550734041865_NUM_5",
                "value": "5"
            },
            {
                "text": "BLOCK_1550734041865_NUM_6",
                "value": "6"
            },
            {
                "text": "BLOCK_1550734041865_NUM_7",
                "value": "7"
            },
            {
                "text": "BLOCK_1550734041865_NUM_8",
                "value": "8"
            },
            {
                "text": "BLOCK_1550734041865_NUM_9",
                "value": "9"
            }
        ]
    }
});

export default communication;