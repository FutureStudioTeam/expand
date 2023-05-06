import blocks from './blocks.js';

const According = (facepanels) => ({
    "name": "According",
    "colors": [
        "#4A90E2",
        "#3080DE",
        "#2171CF"
    ],
    "menuIconURI": "",
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('mbuild/imgs/b26a31e67fb14e028c98047fee0160f2.svg', 'mbuild')
    },
    "blocks": blocks(facepanels),
    "menus": {}
});

export default According;