import blocks from './blocks.js';

const CATEGORY_SENSOR = (facepanels) => ({
    "name": "CATEGORY_SENSOR",
    "colors": [
        "#4CBFE6",
        "#31B5E2",
        "#1EA8D7"
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
        "MEOS_EVENT_IS_ORIENTATE_TO_ORIENTATE": [{
                "text": "MEOS_EVENT_IS_ORIENTATE_TO_ORIENTATE_0",
                "value": "screen_up"
            },
            {
                "text": "MEOS_EVENT_IS_ORIENTATE_TO_ORIENTATE_1",
                "value": "screen_down"
            },
            {
                "text": "MEOS_EVENT_IS_ORIENTATE_TO_ORIENTATE_2",
                "value": "upright"
            }
        ],
        "MEOS_RESET_ANGLE_AXIS": [{
                "text": "MEOS_RESET_ANGLE_AXIS_0",
                "value": "x"
            },
            {
                "text": "MEOS_RESET_ANGLE_AXIS_1",
                "value": "y"
            },
            {
                "text": "MEOS_RESET_ANGLE_AXIS_2",
                "value": "z"
            },
            {
                "text": "MEOS_RESET_ANGLE_AXIS_3",
                "value": "all"
            }
        ],
        "MEOS_EVENT_IS_COLOR_COLOR": [{
                "text": "MEOS_EVENT_IS_COLOR_COLOR_0",
                "value": "'red'"
            },
            {
                "text": "MEOS_EVENT_IS_COLOR_COLOR_1",
                "value": "'green'"
            },
            {
                "text": "MEOS_EVENT_IS_COLOR_COLOR_2",
                "value": "'blue'"
            },
            {
                "text": "MEOS_EVENT_IS_COLOR_COLOR_3",
                "value": "'yellow'"
            },
            {
                "text": "MEOS_EVENT_IS_COLOR_COLOR_4",
                "value": "'cyan'"
            },
            {
                "text": "MEOS_EVENT_IS_COLOR_COLOR_5",
                "value": "'purple'"
            },
            {
                "text": "MEOS_EVENT_IS_COLOR_COLOR_6",
                "value": "'black'"
            },
            {
                "text": "MEOS_EVENT_IS_COLOR_COLOR_7",
                "value": "'white'"
            }
        ],
        "MEOS_SHOW_LED_RGB_RGB": [{
                "text": "MEOS_SHOW_LED_RGB_RGB_0",
                "value": "red"
            },
            {
                "text": "MEOS_SHOW_LED_RGB_RGB_1",
                "value": "green"
            },
            {
                "text": "MEOS_SHOW_LED_RGB_RGB_2",
                "value": "blue"
            }
        ],
        "MEOS_DETECT_ROTATE_ANGLE_AXIS": [{
                "text": "MEOS_DETECT_ROTATE_ANGLE_AXIS_0",
                "value": "x"
            },
            {
                "text": "MEOS_DETECT_ROTATE_ANGLE_AXIS_1",
                "value": "y"
            },
            {
                "text": "MEOS_DETECT_ROTATE_ANGLE_AXIS_2",
                "value": "z"
            }
        ],
        "MEOS_DETECT_GYRO_ANGLE_AXIS": [{
                "text": "MEOS_DETECT_GYRO_ANGLE_AXIS_0",
                "value": "roll"
            },
            {
                "text": "MEOS_DETECT_GYRO_ANGLE_AXIS_1",
                "value": "pitch"
            }
        ]
    }
});

export default CATEGORY_SENSOR;