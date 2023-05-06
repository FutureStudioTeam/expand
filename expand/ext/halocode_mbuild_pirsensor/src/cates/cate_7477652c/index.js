import blocks from './blocks.js';

const cate_7477652c = (facepanels) => ({
    "name": "cate_7477652c",
    "colors": [
        "#0AAD80",
        "#099C73",
        "#088A66"
    ],
    "menuIconURI": window.MbApi.getExtResPath('halocode_mbuild_pirsensor/imgs/946a7a6766334b89b07ee18ae3443ead.svg', 'halocode_mbuild_pirsensor'),
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('halocode_mbuild_pirsensor/imgs/3578070ffab54b738ac6277346ece8c2.svg', 'halocode_mbuild_pirsensor')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "EVENT_PIR_INDEX": [{
                "text": "EVENT_PIR_INDEX_0",
                "value": "1"
            },
            {
                "text": "EVENT_PIR_INDEX_1",
                "value": "2"
            },
            {
                "text": "EVENT_PIR_INDEX_2",
                "value": "3"
            },
            {
                "text": "EVENT_PIR_INDEX_3",
                "value": "4"
            },
            {
                "text": "EVENT_PIR_INDEX_4",
                "value": "5"
            },
            {
                "text": "EVENT_PIR_INDEX_5",
                "value": "6"
            },
            {
                "text": "EVENT_PIR_INDEX_6",
                "value": "7"
            },
            {
                "text": "EVENT_PIR_INDEX_7",
                "value": "8"
            }
        ]
    }
});

export default cate_7477652c;