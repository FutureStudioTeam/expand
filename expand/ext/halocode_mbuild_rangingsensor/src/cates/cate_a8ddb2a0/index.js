import blocks from './blocks.js';

const cate_a8ddb2a0 = (facepanels) => ({
    "name": "cate_a8ddb2a0",
    "colors": [
        "#0AAD80",
        "#099C73",
        "#088A66"
    ],
    "menuIconURI": window.MbApi.getExtResPath('halocode_mbuild_rangingsensor/imgs/2ac4f830b0e94d27954f79830ef23f05.svg', 'halocode_mbuild_rangingsensor'),
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('halocode_mbuild_rangingsensor/imgs/95945356f3b647baa79f47662f49fa21.svg', 'halocode_mbuild_rangingsensor')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "OP_RANGING_INDEX": [{
                "text": "OP_RANGING_INDEX_0",
                "value": "1"
            },
            {
                "text": "OP_RANGING_INDEX_1",
                "value": "2"
            },
            {
                "text": "OP_RANGING_INDEX_2",
                "value": "3"
            },
            {
                "text": "OP_RANGING_INDEX_3",
                "value": "4"
            },
            {
                "text": "OP_RANGING_INDEX_4",
                "value": "5"
            },
            {
                "text": "OP_RANGING_INDEX_5",
                "value": "6"
            },
            {
                "text": "OP_RANGING_INDEX_6",
                "value": "7"
            },
            {
                "text": "OP_RANGING_INDEX_7",
                "value": "8"
            }
        ]
    }
});

export default cate_a8ddb2a0;