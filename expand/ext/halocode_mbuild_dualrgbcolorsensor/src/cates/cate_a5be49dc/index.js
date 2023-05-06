import blocks from './blocks.js';

const cate_a5be49dc = (facepanels) => ({
    "name": "cate_a5be49dc",
    "colors": [
        "#0AAD80",
        "#099C73",
        "#088A66"
    ],
    "menuIconURI": window.MbApi.getExtResPath('halocode_mbuild_dualrgbcolorsensor/imgs/4ddffc98793c47aaa98ea2c1685c7e59.svg', 'halocode_mbuild_dualrgbcolorsensor'),
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('halocode_mbuild_dualrgbcolorsensor/imgs/274186cfb05a4bb3a80946888831e17a.svg', 'halocode_mbuild_dualrgbcolorsensor')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "DUAL_RGB_IS_COLOR_INDEX": [{
                "text": "DUAL_RGB_IS_COLOR_INDEX_0",
                "value": "1"
            },
            {
                "text": "DUAL_RGB_IS_COLOR_INDEX_1",
                "value": "2"
            },
            {
                "text": "DUAL_RGB_IS_COLOR_INDEX_2",
                "value": "3"
            },
            {
                "text": "DUAL_RGB_IS_COLOR_INDEX_3",
                "value": "4"
            },
            {
                "text": "DUAL_RGB_IS_COLOR_INDEX_4",
                "value": "5"
            },
            {
                "text": "DUAL_RGB_IS_COLOR_INDEX_5",
                "value": "6"
            },
            {
                "text": "DUAL_RGB_IS_COLOR_INDEX_6",
                "value": "7"
            },
            {
                "text": "DUAL_RGB_IS_COLOR_INDEX_7",
                "value": "8"
            }
        ],
        "DUAL_RGB_IS_COLOR_PROB": [{
                "text": "DUAL_RGB_IS_COLOR_PROB_0",
                "value": "RGB1"
            },
            {
                "text": "DUAL_RGB_IS_COLOR_PROB_1",
                "value": "RGB2"
            }
        ],
        "DUAL_RGB_IS_COLOR_COLOR": [{
                "text": "DUAL_RGB_IS_COLOR_COLOR_0",
                "value": "white"
            },
            {
                "text": "DUAL_RGB_IS_COLOR_COLOR_1",
                "value": "red"
            },
            {
                "text": "DUAL_RGB_IS_COLOR_COLOR_2",
                "value": "yellow"
            },
            {
                "text": "DUAL_RGB_IS_COLOR_COLOR_3",
                "value": "green"
            },
            {
                "text": "DUAL_RGB_IS_COLOR_COLOR_4",
                "value": "cyan"
            },
            {
                "text": "DUAL_RGB_IS_COLOR_COLOR_5",
                "value": "blue"
            },
            {
                "text": "DUAL_RGB_IS_COLOR_COLOR_6",
                "value": "purple"
            },
            {
                "text": "DUAL_RGB_IS_COLOR_COLOR_7",
                "value": "black"
            }
        ],
        "DUAL_RGB_GET_RGB_VALUE_INDEX": [{
                "text": "DUAL_RGB_GET_RGB_VALUE_INDEX_0",
                "value": "1"
            },
            {
                "text": "DUAL_RGB_GET_RGB_VALUE_INDEX_1",
                "value": "2"
            },
            {
                "text": "DUAL_RGB_GET_RGB_VALUE_INDEX_2",
                "value": "3"
            }
        ],
        "DUAL_RGB_GET_RGB_VALUE_COLOR": [{
                "text": "DUAL_RGB_GET_RGB_VALUE_COLOR_0",
                "value": "红色"
            },
            {
                "text": "DUAL_RGB_GET_RGB_VALUE_COLOR_1",
                "value": "绿色"
            },
            {
                "text": "DUAL_RGB_GET_RGB_VALUE_COLOR_2",
                "value": "蓝色"
            }
        ],
        "DUAL_RGB_SET_SUPPLEMENT_LIGHT_WITH_RGB_INDEX": [{
            "text": "DUAL_RGB_SET_SUPPLEMENT_LIGHT_WITH_RGB_INDEX_0",
            "value": "1"
        }]
    }
});

export default cate_a5be49dc;