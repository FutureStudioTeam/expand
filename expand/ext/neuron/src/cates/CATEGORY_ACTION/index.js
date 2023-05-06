import blocks from './blocks.js';

const CATEGORY_ACTION = (facepanels) => ({
    "name": "CATEGORY_ACTION",
    "colors": [
        "#0079FF",
        "#006DE6",
        "#0061CC"
    ],
    "menuIconURI": "",
    "blockIcon": null,
    "blocks": blocks(facepanels),
    "menus": {
        "NEURON_RUN_DCMOTOR_WITH_TIME_SLOT": [{
                "text": "NEURON_RUN_DCMOTOR_WITH_TIME_SLOT_0",
                "value": "0"
            },
            {
                "text": "NEURON_RUN_DCMOTOR_WITH_TIME_SLOT_1",
                "value": "1"
            },
            {
                "text": "NEURON_RUN_DCMOTOR_WITH_TIME_SLOT_2",
                "value": "2"
            }
        ]
    }
});

export default CATEGORY_ACTION;