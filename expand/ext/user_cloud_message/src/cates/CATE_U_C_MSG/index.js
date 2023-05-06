import blocks from './blocks.js';

const CATE_U_C_MSG = (facepanels) => ({
    "name": "CATE_U_C_MSG",
    "colors": [
        "#4EAA83",
        "#469976",
        "#3E8869"
    ],
    "menuIconURI": "",
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('user_cloud_message/imgs/b9e492b06e4f4c219d74cd924e06dd2b.svg', 'user_cloud_message')
    },
    "blocks": blocks(facepanels),
    "menus": {}
});

export default CATE_U_C_MSG;