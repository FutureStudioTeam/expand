import blocks from './blocks.js';

const events = (facepanels) => ({
    "name": "events",
    "colors": [
        "#FFBF00",
        "#E6AC00",
        "#CC9900"
    ],
    "menuIconURI": "",
    "blockIcon": null,
    "blocks": blocks(facepanels),
    "menus": {
        "MCORE_EVENT_BOARD_BUTTON_PRESSED_OPTION": [{
                "text": "MCORE_EVENT_BOARD_BUTTON_PRESSED_OPTION_0",
                "value": "0"
            },
            {
                "text": "MCORE_EVENT_BOARD_BUTTON_PRESSED_OPTION_1",
                "value": "1"
            }
        ]
    }
});

export default events;