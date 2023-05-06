import blocks from './blocks.js';

const mesh = (facepanels) => ({
    "name": "mesh",
    "colors": [
        "#00D7B0",
        "#00C29E",
        "#00AC8D"
    ],
    "menuIconURI": window.MbApi.getExtResPath('haloboard/imgs/9c481386219c4fbeac6df424b5455663.svg', 'haloboard'),
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('haloboard/imgs/d075d2c0690d4f09a9c88651181e2e4f.svg', 'haloboard')
    },
    "blocks": blocks(facepanels),
    "menus": {}
});

export default mesh;