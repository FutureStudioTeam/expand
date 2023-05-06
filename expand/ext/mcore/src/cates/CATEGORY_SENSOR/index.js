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
        "MCORE_DETECT_EXTERNAL_LIGHT_PORT": [{
                "text": "MCORE_DETECT_EXTERNAL_LIGHT_PORT_0",
                "value": "3"
            },
            {
                "text": "MCORE_DETECT_EXTERNAL_LIGHT_PORT_1",
                "value": "4"
            },
            {
                "text": "MCORE_DETECT_EXTERNAL_LIGHT_PORT_2",
                "value": "6"
            }
        ],
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
        ],
        "MCORE_EVENT_EXTERNAL_LINEFOLLOWER_LINEFOLLOW_STATE": [{
                "text": "MCORE_EVENT_EXTERNAL_LINEFOLLOWER_LINEFOLLOW_STATE_0",
                "value": "2"
            },
            {
                "text": "MCORE_EVENT_EXTERNAL_LINEFOLLOWER_LINEFOLLOW_STATE_1",
                "value": "1"
            },
            {
                "text": "MCORE_EVENT_EXTERNAL_LINEFOLLOWER_LINEFOLLOW_STATE_2",
                "value": "3"
            },
            {
                "text": "MCORE_EVENT_EXTERNAL_LINEFOLLOWER_LINEFOLLOW_STATE_3",
                "value": "0"
            }
        ],
        "MCORE_EVENT_EXTERNAL_LINEFOLLOWER_BLACK_WHITE": [{
                "text": "MCORE_EVENT_EXTERNAL_LINEFOLLOWER_BLACK_WHITE_0",
                "value": "0"
            },
            {
                "text": "MCORE_EVENT_EXTERNAL_LINEFOLLOWER_BLACK_WHITE_1",
                "value": "1"
            }
        ],
        "MCORE_EVENT_BOARD_BUTTON_PRESSED_OPTION": [{
                "text": "MCORE_EVENT_BOARD_BUTTON_PRESSED_OPTION_0",
                "value": "0"
            },
            {
                "text": "MCORE_EVENT_BOARD_BUTTON_PRESSED_OPTION_1",
                "value": "1"
            }
        ],
        "MCORE_EVENT_IR_REMOTE_REMOTE_KEY": [{
                "text": "MCORE_EVENT_IR_REMOTE_REMOTE_KEY_0",
                "value": "69"
            },
            {
                "text": "MCORE_EVENT_IR_REMOTE_REMOTE_KEY_1",
                "value": "70"
            },
            {
                "text": "MCORE_EVENT_IR_REMOTE_REMOTE_KEY_2",
                "value": "71"
            },
            {
                "text": "MCORE_EVENT_IR_REMOTE_REMOTE_KEY_3",
                "value": "68"
            },
            {
                "text": "MCORE_EVENT_IR_REMOTE_REMOTE_KEY_4",
                "value": "67"
            },
            {
                "text": "MCORE_EVENT_IR_REMOTE_REMOTE_KEY_5",
                "value": "13"
            },
            {
                "text": "MCORE_EVENT_IR_REMOTE_REMOTE_KEY_6",
                "value": "64"
            },
            {
                "text": "MCORE_EVENT_IR_REMOTE_REMOTE_KEY_7",
                "value": "25"
            },
            {
                "text": "MCORE_EVENT_IR_REMOTE_REMOTE_KEY_8",
                "value": "7"
            },
            {
                "text": "MCORE_EVENT_IR_REMOTE_REMOTE_KEY_9",
                "value": "9"
            },
            {
                "text": "MCORE_EVENT_IR_REMOTE_REMOTE_KEY_10",
                "value": "21"
            },
            {
                "text": "MCORE_EVENT_IR_REMOTE_REMOTE_KEY_11",
                "value": "22"
            },
            {
                "text": "MCORE_EVENT_IR_REMOTE_REMOTE_KEY_12",
                "value": "12"
            },
            {
                "text": "MCORE_EVENT_IR_REMOTE_REMOTE_KEY_13",
                "value": "24"
            },
            {
                "text": "MCORE_EVENT_IR_REMOTE_REMOTE_KEY_14",
                "value": "94"
            },
            {
                "text": "MCORE_EVENT_IR_REMOTE_REMOTE_KEY_15",
                "value": "8"
            },
            {
                "text": "MCORE_EVENT_IR_REMOTE_REMOTE_KEY_16",
                "value": "28"
            },
            {
                "text": "MCORE_EVENT_IR_REMOTE_REMOTE_KEY_17",
                "value": "90"
            },
            {
                "text": "MCORE_EVENT_IR_REMOTE_REMOTE_KEY_18",
                "value": "66"
            },
            {
                "text": "MCORE_EVENT_IR_REMOTE_REMOTE_KEY_19",
                "value": "82"
            },
            {
                "text": "MCORE_EVENT_IR_REMOTE_REMOTE_KEY_20",
                "value": "74"
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
        "MCORE_SHOW_ALL_LEDSTRIP_COLOR_SLOT": [{
                "text": "MCORE_SHOW_ALL_LEDSTRIP_COLOR_SLOT_0",
                "value": "1"
            },
            {
                "text": "MCORE_SHOW_ALL_LEDSTRIP_COLOR_SLOT_1",
                "value": "2"
            }
        ],
        "MCORE_DETECT_HUMITURE_TEMP_HUMITURE": [{
                "text": "MCORE_DETECT_HUMITURE_TEMP_HUMITURE_0",
                "value": "0"
            },
            {
                "text": "MCORE_DETECT_HUMITURE_TEMP_HUMITURE_1",
                "value": "1"
            }
        ],
        "MCORE_DETECT_GYRO_ANGLE_AXIS": [{
                "text": "MCORE_DETECT_GYRO_ANGLE_AXIS_0",
                "value": "1"
            },
            {
                "text": "MCORE_DETECT_GYRO_ANGLE_AXIS_1",
                "value": "2"
            },
            {
                "text": "MCORE_DETECT_GYRO_ANGLE_AXIS_2",
                "value": "3"
            }
        ],
        "MCORE_EVENT_BUTTON_PRESS_FOUR_KEY": [{
                "text": "MCORE_EVENT_BUTTON_PRESS_FOUR_KEY_0",
                "value": "1"
            },
            {
                "text": "MCORE_EVENT_BUTTON_PRESS_FOUR_KEY_1",
                "value": "2"
            },
            {
                "text": "MCORE_EVENT_BUTTON_PRESS_FOUR_KEY_2",
                "value": "3"
            },
            {
                "text": "MCORE_EVENT_BUTTON_PRESS_FOUR_KEY_3",
                "value": "4"
            }
        ],
        "MCORE_DETECT_JOYSTICK_AXIS_X_Y": [{
                "text": "MCORE_DETECT_JOYSTICK_AXIS_X_Y_0",
                "value": "1"
            },
            {
                "text": "MCORE_DETECT_JOYSTICK_AXIS_X_Y_1",
                "value": "2"
            }
        ]
    }
});

export default CATEGORY_SENSOR;