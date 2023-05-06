import blocks from './blocks.js';

const Character Recognition = (facepanels) => ({
    "name": "Character Recognition",
    "colors": [
        "#05A6FF",
        "#0097EA",
        "#0086D0"
    ],
    "menuIconURI": window.MbApi.getExtResPath('baidu_ai/imgs/dacac40a3f6443e5ab09544f9e56e2c8.svg', 'baidu_ai'),
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('baidu_ai/imgs/971e804296a34fa6ad6add5604d3ee96.svg', 'baidu_ai')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "BLOCK_1561624758631_TIME": [{
                "text": "BLOCK_1561624758631_TIME_0",
                "value": "2"
            },
            {
                "text": "BLOCK_1561624758631_TIME_1",
                "value": "5"
            },
            {
                "text": "BLOCK_1561624758631_TIME_2",
                "value": "10"
            }
        ],
        "BLOCK_1561624758631_LANGTYPE": [{
                "text": "BLOCK_1561624758631_LANGTYPE_0",
                "value": "CHN_ENG"
            },
            {
                "text": "BLOCK_1561624758631_LANGTYPE_1",
                "value": "ENG"
            },
            {
                "text": "BLOCK_1561624758631_LANGTYPE_2",
                "value": "POR"
            },
            {
                "text": "BLOCK_1561624758631_LANGTYPE_3",
                "value": "FRE"
            },
            {
                "text": "BLOCK_1561624758631_LANGTYPE_4",
                "value": "GRE"
            },
            {
                "text": "BLOCK_1561624758631_LANGTYPE_5",
                "value": "ITA"
            },
            {
                "text": "BLOCK_1561624758631_LANGTYPE_6",
                "value": "SPA"
            },
            {
                "text": "BLOCK_1561624758631_LANGTYPE_7",
                "value": "RUS"
            },
            {
                "text": "BLOCK_1561624758631_LANGTYPE_8",
                "value": "JAP"
            },
            {
                "text": "BLOCK_1561624758631_LANGTYPE_9",
                "value": "KOR"
            }
        ],
        "BLOCK_1575255036017_TYPE": [{
                "text": "BLOCK_1575255036017_TYPE_0",
                "value": "number"
            },
            {
                "text": "BLOCK_1575255036017_TYPE_1",
                "value": "color"
            }
        ]
    }
});

export default Character Recognition;