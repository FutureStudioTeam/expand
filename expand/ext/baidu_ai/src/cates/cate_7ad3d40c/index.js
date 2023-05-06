import blocks from './blocks.js';

const cate_7ad3d40c = (facepanels) => ({
    "name": "cate_7ad3d40c",
    "colors": [
        "#0079FF",
        "#006DE6",
        "#0061CC"
    ],
    "menuIconURI": window.MbApi.getExtResPath('baidu_ai/imgs/aa87df93c1014f43bb651b5f2d021fdb.svg', 'baidu_ai'),
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('baidu_ai/imgs/1809924cf7d745f395c4936bb8f3ec51.svg', 'baidu_ai')
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
        "BLOCK_1561630499729_TYPE": [{
                "text": "BLOCK_1561630499729_TYPE_0",
                "value": "advancedGeneral"
            },
            {
                "text": "BLOCK_1561630499729_TYPE_1",
                "value": "carDetect"
            },
            {
                "text": "BLOCK_1561630499729_TYPE_2",
                "value": "logoSearch"
            },
            {
                "text": "BLOCK_1561630499729_TYPE_3",
                "value": "animalDetect"
            },
            {
                "text": "BLOCK_1561630499729_TYPE_4",
                "value": "plantDetect"
            },
            {
                "text": "BLOCK_1561630499729_TYPE_5",
                "value": "ingredient"
            },
            {
                "text": "BLOCK_1561630499729_TYPE_6",
                "value": "dishDetect"
            },
            {
                "text": "BLOCK_1561630499729_TYPE_7",
                "value": "objectDetect"
            },
            {
                "text": "BLOCK_1561630499729_TYPE_8",
                "value": "landmark"
            }
        ]
    }
});

export default cate_7ad3d40c;