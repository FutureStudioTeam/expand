import blocks from './blocks.js';

const mb_control = (facepanels) => ({
    "name": "mb_control",
    "colors": [
        "#F79226",
        "#F6840B",
        "#DC7608"
    ],
    "menuIconURI": "",
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('mbuild/imgs/6a1d9874da5a4753a8f7c5f3ebd35139.svg', 'mbuild')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "BLOCK_1553844092397_CHANNEL": [{
                "text": "BLOCK_1553844092397_CHANNEL_0",
                "value": "0"
            },
            {
                "text": "BLOCK_1553844092397_CHANNEL_1",
                "value": "1"
            },
            {
                "text": "BLOCK_1553844092397_CHANNEL_2",
                "value": "2"
            },
            {
                "text": "BLOCK_1553844092397_CHANNEL_3",
                "value": "3"
            },
            {
                "text": "BLOCK_1553844092397_CHANNEL_4",
                "value": "4"
            },
            {
                "text": "BLOCK_1553844092397_CHANNEL_5",
                "value": "5"
            },
            {
                "text": "BLOCK_1553844092397_CHANNEL_6",
                "value": "6"
            },
            {
                "text": "BLOCK_1553844092397_CHANNEL_7",
                "value": "7"
            }
        ],
        "BLOCK_1556449634844_SENSITIVITY": [{
                "text": "BLOCK_1556449634844_SENSITIVITY_0",
                "value": "high"
            },
            {
                "text": "BLOCK_1556449634844_SENSITIVITY_1",
                "value": "middle"
            },
            {
                "text": "BLOCK_1556449634844_SENSITIVITY_2",
                "value": "low"
            }
        ],
        "BLOCK_1555645328383_DIRECTION": [{
                "text": "BLOCK_1555645328383_DIRECTION_0",
                "value": "1"
            },
            {
                "text": "BLOCK_1555645328383_DIRECTION_1",
                "value": "2"
            },
            {
                "text": "BLOCK_1555645328383_DIRECTION_2",
                "value": "3"
            },
            {
                "text": "BLOCK_1555645328383_DIRECTION_3",
                "value": "4"
            }
        ],
        "BLOCK_1555645335674_AXIS": [{
                "text": "BLOCK_1555645335674_AXIS_0",
                "value": "1"
            },
            {
                "text": "BLOCK_1555645335674_AXIS_1",
                "value": "2"
            }
        ]
    }
});

export default mb_control;