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
        "FINGERTIP_PIANO_DETECTED_OBSTACLE_DIRECTON_ATTITUDE": [{
                "text": "FINGERTIP_PIANO_DETECTED_OBSTACLE_DIRECTON_ATTITUDE_0",
                "value": "close"
            },
            {
                "text": "FINGERTIP_PIANO_DETECTED_OBSTACLE_DIRECTON_ATTITUDE_1",
                "value": "away"
            }
        ],
        "FINGERTIP_PIANO_IS_TOUCHPAD_TOUCHED_CHANNEL": [{
                "text": "FINGERTIP_PIANO_IS_TOUCHPAD_TOUCHED_CHANNEL_0",
                "value": "1"
            },
            {
                "text": "FINGERTIP_PIANO_IS_TOUCHPAD_TOUCHED_CHANNEL_1",
                "value": "2"
            },
            {
                "text": "FINGERTIP_PIANO_IS_TOUCHPAD_TOUCHED_CHANNEL_2",
                "value": "3"
            },
            {
                "text": "FINGERTIP_PIANO_IS_TOUCHPAD_TOUCHED_CHANNEL_3",
                "value": "4"
            }
        ],
        "FINGERTIP_PIANO_IS_BUTTON_PRESSED_BUTTON": [{
                "text": "FINGERTIP_PIANO_IS_BUTTON_PRESSED_BUTTON_0",
                "value": "A"
            },
            {
                "text": "FINGERTIP_PIANO_IS_BUTTON_PRESSED_BUTTON_1",
                "value": "B"
            }
        ],
        "FINGERTIP_PIANO_IS_JOYSTICK_MOVED_DIRECTION": [{
                "text": "FINGERTIP_PIANO_IS_JOYSTICK_MOVED_DIRECTION_0",
                "value": "up"
            },
            {
                "text": "FINGERTIP_PIANO_IS_JOYSTICK_MOVED_DIRECTION_1",
                "value": "down"
            },
            {
                "text": "FINGERTIP_PIANO_IS_JOYSTICK_MOVED_DIRECTION_2",
                "value": "left"
            },
            {
                "text": "FINGERTIP_PIANO_IS_JOYSTICK_MOVED_DIRECTION_3",
                "value": "right"
            }
        ],
        "FINGERTIP_PIANO_GET_GESTURE_ATTITUDE": [{
                "text": "FINGERTIP_PIANO_GET_GESTURE_ATTITUDE_0",
                "value": "up"
            },
            {
                "text": "FINGERTIP_PIANO_GET_GESTURE_ATTITUDE_1",
                "value": "down"
            },
            {
                "text": "FINGERTIP_PIANO_GET_GESTURE_ATTITUDE_2",
                "value": "wave"
            }
        ]
    }
});

export default events;