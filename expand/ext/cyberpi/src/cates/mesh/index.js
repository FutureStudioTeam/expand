import blocks from './blocks.js';

const mesh = (facepanels) => ({
    "name": "mesh",
    "colors": [
        "#00D7B0",
        "#00C29E",
        "#00AC8D"
    ],
    "menuIconURI": window.MbApi.getExtResPath('cyberpi/imgs/7deedeb48d70427ea52e074d1abb39ad.svg', 'cyberpi'),
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('cyberpi/imgs/7a3ae07da9014a65b217cc8deeb82119.svg', 'cyberpi')
    },
    "blocks": blocks(facepanels),
    "menus": {}
});

export default mesh;