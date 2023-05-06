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
        "HALOBOARD_WHEN_TILT_TILT": [{
                "text": "HALOBOARD_WHEN_TILT_TILT_0",
                "value": "arrow_up"
            },
            {
                "text": "HALOBOARD_WHEN_TILT_TILT_1",
                "value": "arrow_down"
            },
            {
                "text": "HALOBOARD_WHEN_TILT_TILT_2",
                "value": "tilted_left"
            },
            {
                "text": "HALOBOARD_WHEN_TILT_TILT_3",
                "value": "tilted_right"
            },
            {
                "text": "HALOBOARD_WHEN_TILT_TILT_4",
                "value": "rotate_clockwise"
            },
            {
                "text": "HALOBOARD_WHEN_TILT_TILT_5",
                "value": "rotate_anticlockwise"
            },
            {
                "text": "HALOBOARD_WHEN_TILT_TILT_6",
                "value": "free_fall"
            }
        ],
        "HALOBOARD_WHEN_TILT_1_TILT": [{
                "text": "HALOBOARD_WHEN_TILT_1_TILT_0",
                "value": "arrow_up"
            },
            {
                "text": "HALOBOARD_WHEN_TILT_1_TILT_1",
                "value": "arrow_down"
            },
            {
                "text": "HALOBOARD_WHEN_TILT_1_TILT_2",
                "value": "tilted_left"
            },
            {
                "text": "HALOBOARD_WHEN_TILT_1_TILT_3",
                "value": "tilted_right"
            },
            {
                "text": "HALOBOARD_WHEN_TILT_1_TILT_4",
                "value": "rotate_clockwise"
            },
            {
                "text": "HALOBOARD_WHEN_TILT_1_TILT_5",
                "value": "rotate_anticlockwise"
            },
            {
                "text": "HALOBOARD_WHEN_TILT_1_TILT_6",
                "value": "free_fall"
            },
            {
                "text": "HALOBOARD_WHEN_TILT_1_TILT_7",
                "value": "received(\"__inter_left\")"
            },
            {
                "text": "HALOBOARD_WHEN_TILT_1_TILT_8",
                "value": "received(\"__inter_right\")"
            },
            {
                "text": "HALOBOARD_WHEN_TILT_1_TILT_9",
                "value": "received(\"__inter_brandish_up\")"
            },
            {
                "text": "HALOBOARD_WHEN_TILT_1_TILT_10",
                "value": "received(\"__inter_brandish_down\")"
            }
        ],
        "HALOBOARD_WHEN_TILT_2_TILT": [{
                "text": "HALOBOARD_WHEN_TILT_2_TILT_0",
                "value": "arrow_up"
            },
            {
                "text": "HALOBOARD_WHEN_TILT_2_TILT_1",
                "value": "arrow_down"
            },
            {
                "text": "HALOBOARD_WHEN_TILT_2_TILT_2",
                "value": "tilted_left"
            },
            {
                "text": "HALOBOARD_WHEN_TILT_2_TILT_3",
                "value": "tilted_right"
            },
            {
                "text": "HALOBOARD_WHEN_TILT_2_TILT_4",
                "value": "rotate_clockwise"
            },
            {
                "text": "HALOBOARD_WHEN_TILT_2_TILT_5",
                "value": "rotate_anticlockwise"
            },
            {
                "text": "HALOBOARD_WHEN_TILT_2_TILT_6",
                "value": "free_fall"
            },
            {
                "text": "HALOBOARD_WHEN_TILT_2_TILT_7",
                "value": "is_waveleft"
            },
            {
                "text": "HALOBOARD_WHEN_TILT_2_TILT_8",
                "value": "is_waveright"
            },
            {
                "text": "HALOBOARD_WHEN_TILT_2_TILT_9",
                "value": "is_waveup"
            },
            {
                "text": "HALOBOARD_WHEN_TILT_2_TILT_10",
                "value": "is_wavedown"
            }
        ],
        "HALOBOARD_DETECT_TOUCH_TOUCHPAD_NUMBER": [{
                "text": "HALOBOARD_DETECT_TOUCH_TOUCHPAD_NUMBER_0",
                "value": "0"
            },
            {
                "text": "HALOBOARD_DETECT_TOUCH_TOUCHPAD_NUMBER_1",
                "value": "1"
            },
            {
                "text": "HALOBOARD_DETECT_TOUCH_TOUCHPAD_NUMBER_2",
                "value": "2"
            },
            {
                "text": "HALOBOARD_DETECT_TOUCH_TOUCHPAD_NUMBER_3",
                "value": "3"
            }
        ],
        "HALOBOARD_WHEN_GREATER_THAN_CATEGORY": [{
                "text": "HALOBOARD_WHEN_GREATER_THAN_CATEGORY_0",
                "value": "timer"
            },
            {
                "text": "HALOBOARD_WHEN_GREATER_THAN_CATEGORY_1",
                "value": "microphone"
            }
        ],
        "HALOBOARD_WHEN_GREATER_THAN_1_CATEGORY": [{
                "text": "HALOBOARD_WHEN_GREATER_THAN_1_CATEGORY_0",
                "value": "timer"
            },
            {
                "text": "HALOBOARD_WHEN_GREATER_THAN_1_CATEGORY_1",
                "value": "microphone"
            },
            {
                "text": "HALOBOARD_WHEN_GREATER_THAN_1_CATEGORY_2",
                "value": "shaken"
            }
        ]
    }
});

export default events;