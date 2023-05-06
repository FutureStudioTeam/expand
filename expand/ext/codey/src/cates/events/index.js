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
        "MEOS_EVENT_BUTTON_PRESSED_BUTTONS": [{
                "text": "MEOS_EVENT_BUTTON_PRESSED_BUTTONS_0",
                "value": "a"
            },
            {
                "text": "MEOS_EVENT_BUTTON_PRESSED_BUTTONS_1",
                "value": "b"
            },
            {
                "text": "MEOS_EVENT_BUTTON_PRESSED_BUTTONS_2",
                "value": "c"
            }
        ],
        "MEOS_EVENT_IS_TILT_DIRECTION": [{
                "text": "MEOS_EVENT_IS_TILT_DIRECTION_0",
                "value": "left"
            },
            {
                "text": "MEOS_EVENT_IS_TILT_DIRECTION_1",
                "value": "right"
            },
            {
                "text": "MEOS_EVENT_IS_TILT_DIRECTION_2",
                "value": "backward"
            },
            {
                "text": "MEOS_EVENT_IS_TILT_DIRECTION_3",
                "value": "forward"
            }
        ],
        "MEOS_WHEN_VOLUME_OVER_MENU_LIST": [{
                "text": "MEOS_WHEN_VOLUME_OVER_MENU_LIST_0",
                "value": "on_sound_over"
            },
            {
                "text": "MEOS_WHEN_VOLUME_OVER_MENU_LIST_1",
                "value": "on_time_out"
            }
        ]
    }
});

export default events;