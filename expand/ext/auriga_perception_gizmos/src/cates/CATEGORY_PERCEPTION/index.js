import blocks from './blocks.js';

const CATEGORY_PERCEPTION = (facepanels) => ({
    "name": "CATEGORY_PERCEPTION",
    "colors": [
        "#4EAA83",
        "#469976",
        "#3E8869"
    ],
    "menuIconURI": "",
    "blockIcon": null,
    "blocks": blocks(facepanels),
    "menus": {
        "AURIGA_RUN_FAN_PORT": [{
                "text": "AURIGA_RUN_FAN_PORT_0",
                "value": "6"
            },
            {
                "text": "AURIGA_RUN_FAN_PORT_1",
                "value": "7"
            },
            {
                "text": "AURIGA_RUN_FAN_PORT_2",
                "value": "8"
            },
            {
                "text": "AURIGA_RUN_FAN_PORT_3",
                "value": "9"
            },
            {
                "text": "AURIGA_RUN_FAN_PORT_4",
                "value": "10"
            }
        ],
        "AURIGA_RUN_FAN_FAN_ROTATE": [{
                "text": "AURIGA_RUN_FAN_FAN_ROTATE_0",
                "value": "1"
            },
            {
                "text": "AURIGA_RUN_FAN_FAN_ROTATE_1",
                "value": "-1"
            },
            {
                "text": "AURIGA_RUN_FAN_FAN_ROTATE_2",
                "value": "0"
            }
        ],
        "AURIGA_DETEC_TEMPERATURE_SLOT": [{
                "text": "AURIGA_DETEC_TEMPERATURE_SLOT_0",
                "value": "1"
            },
            {
                "text": "AURIGA_DETEC_TEMPERATURE_SLOT_1",
                "value": "2"
            }
        ]
    }
});

export default CATEGORY_PERCEPTION;