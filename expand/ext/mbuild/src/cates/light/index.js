import blocks from './blocks.js';

const light = (facepanels) => ({
    "name": "light",
    "colors": [
        "#9300DB",
        "#8400C5",
        "#7600AF"
    ],
    "menuIconURI": "",
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('mbuild/imgs/dd033f1984b841afbc827ded81882dc0.svg', 'mbuild')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "BLOCK_1551512869956_COLOR": [{
                "text": "BLOCK_1551512869956_COLOR_0",
                "value": "r"
            },
            {
                "text": "BLOCK_1551512869956_COLOR_1",
                "value": "g"
            },
            {
                "text": "BLOCK_1551512869956_COLOR_2",
                "value": "b"
            }
        ],
        "BLOCK_1550541949702_MODE": [{
                "text": "BLOCK_1550541949702_MODE_0",
                "value": "0"
            },
            {
                "text": "BLOCK_1550541949702_MODE_1",
                "value": "1"
            },
            {
                "text": "BLOCK_1550541949702_MODE_2",
                "value": "2"
            }
        ]
    }
});

export default light;