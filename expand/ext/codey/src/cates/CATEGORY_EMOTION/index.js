import blocks from './blocks.js';

const CATEGORY_EMOTION = (facepanels) => ({
    "name": "CATEGORY_EMOTION",
    "colors": [
        "#42CCFF",
        "#22C3FF",
        "#02BBFF"
    ],
    "menuIconURI": "",
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('codey/imgs/5d1651757ef9434b848b1aabb498abd2.svg', 'codey')
    },
    "blocks": blocks(facepanels),
    "menus": {}
});

export default CATEGORY_EMOTION;