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
    "menus": {
        "CONTROL_STOP_STOP_OPTION": [{
                "text": "CONTROL_STOP_STOP_OPTION_0",
                "value": "all"
            },
            {
                "text": "CONTROL_STOP_STOP_OPTION_1",
                "value": "this script"
            },
            {
                "text": "CONTROL_STOP_STOP_OPTION_2",
                "value": "other scripts in sprite"
            }
        ]
    }
});

export default control;