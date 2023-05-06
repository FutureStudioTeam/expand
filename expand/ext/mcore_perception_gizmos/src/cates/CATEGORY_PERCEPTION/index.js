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
        "MCORE_RUN_FAN_PORT": [{
                "text": "MCORE_RUN_FAN_PORT_0",
                "value": "1"
            },
            {
                "text": "MCORE_RUN_FAN_PORT_1",
                "value": "2"
            },
            {
                "text": "MCORE_RUN_FAN_PORT_2",
                "value": "3"
            },
            {
                "text": "MCORE_RUN_FAN_PORT_3",
                "value": "4"
            }
        ],
        "MCORE_RUN_FAN_FAN_ROTATE": [{
                "text": "MCORE_RUN_FAN_FAN_ROTATE_0",
                "value": "1"
            },
            {
                "text": "MCORE_RUN_FAN_FAN_ROTATE_1",
                "value": "-1"
            },
            {
                "text": "MCORE_RUN_FAN_FAN_ROTATE_2",
                "value": "0"
            }
        ],
        "MCORE_DETECT_EXTERNAL_LOUDNESS_PORT": [{
                "text": "MCORE_DETECT_EXTERNAL_LOUDNESS_PORT_0",
                "value": "3"
            },
            {
                "text": "MCORE_DETECT_EXTERNAL_LOUDNESS_PORT_1",
                "value": "4"
            }
        ],
        "MCORE_DETEC_TEMPERATURE_SLOT": [{
                "text": "MCORE_DETEC_TEMPERATURE_SLOT_0",
                "value": "1"
            },
            {
                "text": "MCORE_DETEC_TEMPERATURE_SLOT_1",
                "value": "2"
            }
        ]
    }
});

export default CATEGORY_PERCEPTION;