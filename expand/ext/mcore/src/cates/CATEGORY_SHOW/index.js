import blocks from './blocks.js';

const CATEGORY_SHOW = (facepanels) => ({
    "name": "CATEGORY_SHOW",
    "colors": [
        "#C846EB",
        "#C02AE8",
        "#B318DC"
    ],
    "menuIconURI": "",
    "blockIcon": null,
    "blocks": blocks(facepanels),
    "menus": {
        "MCORE_SHOW_FACE_TIME_PORT": [{
                "text": "MCORE_SHOW_FACE_TIME_PORT_0",
                "value": "1"
            },
            {
                "text": "MCORE_SHOW_FACE_TIME_PORT_1",
                "value": "2"
            },
            {
                "text": "MCORE_SHOW_FACE_TIME_PORT_2",
                "value": "3"
            },
            {
                "text": "MCORE_SHOW_FACE_TIME_PORT_3",
                "value": "4"
            }
        ]
    }
});

export default CATEGORY_SHOW;