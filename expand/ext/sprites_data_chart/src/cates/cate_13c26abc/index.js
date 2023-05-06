import blocks from './blocks.js';

const cate_13c26abc = (facepanels) => ({
    "name": "cate_13c26abc",
    "colors": [
        "#7ED321",
        "#71BE1E",
        "#65A91A"
    ],
    "menuIconURI": "",
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('sprites_data_chart/imgs/bc97d6d2922949e8aebecf844e5ca02e.svg', 'sprites_data_chart')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "SET_CHART_TYPE_TYPE": [{
                "text": "SET_CHART_TYPE_TYPE_0",
                "value": "table"
            },
            {
                "text": "SET_CHART_TYPE_TYPE_1",
                "value": "line"
            },
            {
                "text": "SET_CHART_TYPE_TYPE_2",
                "value": "bar"
            },
            {
                "text": "SET_CHART_TYPE_TYPE_3",
                "value": "biax"
            },
            {
                "text": "SET_CHART_TYPE_TYPE_4",
                "value": "pie"
            }
        ],
        "BLOCK_1586773178961_RATE": [{
                "text": "BLOCK_1586773178961_RATE_0",
                "value": "0"
            },
            {
                "text": "BLOCK_1586773178961_RATE_1",
                "value": "200"
            },
            {
                "text": "BLOCK_1586773178961_RATE_2",
                "value": "500"
            }
        ],
        "BLOCK_1586773584919_YAXISDIRECTION": [{
                "text": "BLOCK_1586773584919_YAXISDIRECTION_0",
                "value": "0"
            },
            {
                "text": "BLOCK_1586773584919_YAXISDIRECTION_1",
                "value": "1"
            }
        ]
    }
});

export default cate_13c26abc;