import blocks from './blocks.js';

const cate_5ce6a4bb = (facepanels) => ({
    "name": "cate_5ce6a4bb",
    "colors": [
        "#0AAD80",
        "#099C73",
        "#088A66"
    ],
    "menuIconURI": window.MbApi.getExtResPath('halocode_mbuild_humituresensor/imgs/ce5e59621d5c4d94b8e9ddeba00a363c.svg', 'halocode_mbuild_humituresensor'),
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('halocode_mbuild_humituresensor/imgs/37cde6dfdfd04e5e91758155819f19d4.svg', 'halocode_mbuild_humituresensor')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "OP_TEMPERATURE_INDEX": [{
                "text": "OP_TEMPERATURE_INDEX_0",
                "value": "1"
            },
            {
                "text": "OP_TEMPERATURE_INDEX_1",
                "value": "2"
            },
            {
                "text": "OP_TEMPERATURE_INDEX_2",
                "value": "3"
            },
            {
                "text": "OP_TEMPERATURE_INDEX_3",
                "value": "4"
            },
            {
                "text": "OP_TEMPERATURE_INDEX_4",
                "value": "5"
            },
            {
                "text": "OP_TEMPERATURE_INDEX_5",
                "value": "6"
            },
            {
                "text": "OP_TEMPERATURE_INDEX_6",
                "value": "7"
            },
            {
                "text": "OP_TEMPERATURE_INDEX_7",
                "value": "8"
            }
        ]
    }
});

export default cate_5ce6a4bb;