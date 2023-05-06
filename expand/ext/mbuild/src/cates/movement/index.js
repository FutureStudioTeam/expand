import blocks from './blocks.js';

const movement = (facepanels) => ({
    "name": "movement",
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
        "src": window.MbApi.getExtResPath('mbuild/imgs/a1cafdd1c34b42179a4b3ebf9de22ea1.svg', 'mbuild')
    },
    "blocks": blocks(facepanels),
    "menus": {}
});

export default movement;