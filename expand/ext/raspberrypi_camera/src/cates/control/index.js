import blocks from './blocks.js';

const control = (facepanels) => ({
    "name": "control",
    "colors": [
        "#FFAB19",
        "#FCA000",
        "#E08E00"
    ],
    "menuIconURI": "",
    "blockIcon": null,
    "blocks": blocks(facepanels),
    "menus": {}
});

export default control;