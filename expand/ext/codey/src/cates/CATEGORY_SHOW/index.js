import blocks from './blocks.js';

const CATEGORY_SHOW = (facepanels) => ({
    "name": "CATEGORY_SHOW",
    "colors": [
        "#9966FF",
        "#8142FF",
        "#691FFF"
    ],
    "menuIconURI": "",
    "blockIcon": null,
    "blocks": blocks(facepanels),
    "menus": {
        "OPERATOR_MATHOP_OPERATOR": [{
            "text": "OPERATOR_MATHOP_OPERATOR_0",
            "value": " fabs"
        }]
    }
});

export default CATEGORY_SHOW;