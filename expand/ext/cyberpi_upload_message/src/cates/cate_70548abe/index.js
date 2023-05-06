import blocks from './blocks.js';

const cate_70548abe = (facepanels) => ({
    "name": "cate_70548abe",
    "colors": [
        "#0AAD80",
        "#099C73",
        "#088A66"
    ],
    "menuIconURI": window.MbApi.getExtResPath('cyberpi_upload_message/imgs/999a26847edf4fc4be649b0500b2fbbb.svg', 'cyberpi_upload_message'),
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('cyberpi_upload_message/imgs/7de87a48aa54406e8a54413f5cdeb454.svg', 'cyberpi_upload_message')
    },
    "blocks": blocks(facepanels),
    "menus": {}
});

export default cate_70548abe;