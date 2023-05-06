import blocks from './blocks.js';

const cate_58ed155e = (facepanels) => ({
    "name": "cate_58ed155e",
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
        "src": window.MbApi.getExtResPath('raspberrypi_camera/imgs/fee94c1973924153841ef3fc3db26047.png', 'raspberrypi_camera')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "RECOGNIZE_SYMBOL_SIZE": [{
                "text": "RECOGNIZE_SYMBOL_SIZE_0",
                "value": "150.0"
            },
            {
                "text": "RECOGNIZE_SYMBOL_SIZE_1",
                "value": "130.0"
            },
            {
                "text": "RECOGNIZE_SYMBOL_SIZE_2",
                "value": "100.0"
            },
            {
                "text": "RECOGNIZE_SYMBOL_SIZE_3",
                "value": "80.0"
            },
            {
                "text": "RECOGNIZE_SYMBOL_SIZE_4",
                "value": "60.0"
            }
        ],
        "RECOGNIZE_SYMBOL_LETTER": [{
                "text": "RECOGNIZE_SYMBOL_LETTER_0",
                "value": "M"
            },
            {
                "text": "RECOGNIZE_SYMBOL_LETTER_1",
                "value": "A"
            },
            {
                "text": "RECOGNIZE_SYMBOL_LETTER_2",
                "value": "K"
            },
            {
                "text": "RECOGNIZE_SYMBOL_LETTER_3",
                "value": "E"
            },
            {
                "text": "RECOGNIZE_SYMBOL_LETTER_4",
                "value": "X"
            }
        ],
        "RECOGNIZE_SYMBOL_TYPE": [{
                "text": "RECOGNIZE_SYMBOL_TYPE_0",
                "value": "X"
            },
            {
                "text": "RECOGNIZE_SYMBOL_TYPE_1",
                "value": "Y"
            },
            {
                "text": "RECOGNIZE_SYMBOL_TYPE_2",
                "value": "W"
            },
            {
                "text": "RECOGNIZE_SYMBOL_TYPE_3",
                "value": "H"
            },
            {
                "text": "RECOGNIZE_SYMBOL_TYPE_4",
                "value": "AREA"
            },
            {
                "text": "RECOGNIZE_SYMBOL_TYPE_5",
                "value": "DIST"
            },
            {
                "text": "RECOGNIZE_SYMBOL_TYPE_6",
                "value": "YAW"
            }
        ]
    }
});

export default cate_58ed155e;