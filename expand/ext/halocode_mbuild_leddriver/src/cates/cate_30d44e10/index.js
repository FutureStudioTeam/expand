import blocks from './blocks.js';

const cate_30d44e10 = (facepanels) => ({
    "name": "cate_30d44e10",
    "colors": [
        "#0AAD80",
        "#099C73",
        "#088A66"
    ],
    "menuIconURI": window.MbApi.getExtResPath('halocode_mbuild_leddriver/imgs/b04c6f227ca94dcdbac4bd88897421b2.svg', 'halocode_mbuild_leddriver'),
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('halocode_mbuild_leddriver/imgs/cf83308c93974ba68247b980189559c8.svg', 'halocode_mbuild_leddriver')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "BLOCK_1550541402675_INDEX": [{
                "text": "BLOCK_1550541402675_INDEX_0",
                "value": "1"
            },
            {
                "text": "BLOCK_1550541402675_INDEX_1",
                "value": "2"
            },
            {
                "text": "BLOCK_1550541402675_INDEX_2",
                "value": "3"
            },
            {
                "text": "BLOCK_1550541402675_INDEX_3",
                "value": "4"
            },
            {
                "text": "BLOCK_1550541402675_INDEX_4",
                "value": "5"
            },
            {
                "text": "BLOCK_1550541402675_INDEX_5",
                "value": "6"
            },
            {
                "text": "BLOCK_1550541402675_INDEX_6",
                "value": "7"
            },
            {
                "text": "BLOCK_1550541402675_INDEX_7",
                "value": "8"
            }
        ],
        "BLOCK_1550541922579_COLOR": [{
                "text": "BLOCK_1550541922579_COLOR_0",
                "value": "red"
            },
            {
                "text": "BLOCK_1550541922579_COLOR_1",
                "value": "green"
            },
            {
                "text": "BLOCK_1550541922579_COLOR_2",
                "value": "blue"
            }
        ],
        "BLOCK_1550541949702_MODE": [{
                "text": "BLOCK_1550541949702_MODE_0",
                "value": "static"
            },
            {
                "text": "BLOCK_1550541949702_MODE_1",
                "value": "breathe"
            },
            {
                "text": "BLOCK_1550541949702_MODE_2",
                "value": "marquee"
            }
        ]
    }
});

export default cate_30d44e10;