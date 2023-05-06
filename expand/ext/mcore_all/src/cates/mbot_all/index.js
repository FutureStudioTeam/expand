import blocks from './blocks.js';

const mbot_all = (facepanels) => ({
    "name": "mbot_all",
    "colors": [
        "#4EAA83",
        "#469976",
        "#3E8869"
    ],
    "menuIconURI": "",
    "blockIcon": null,
    "blocks": blocks(facepanels),
    "menus": {
        "MCORE_RUN_SHUTTER_PORT": [{
                "text": "MCORE_RUN_SHUTTER_PORT_0",
                "value": "1"
            },
            {
                "text": "MCORE_RUN_SHUTTER_PORT_1",
                "value": "2"
            },
            {
                "text": "MCORE_RUN_SHUTTER_PORT_2",
                "value": "3"
            },
            {
                "text": "MCORE_RUN_SHUTTER_PORT_3",
                "value": "4"
            }
        ],
        "MCORE_RUN_SHUTTER_SHUTTER_ACTION": [{
                "text": "MCORE_RUN_SHUTTER_SHUTTER_ACTION_0",
                "value": "1"
            },
            {
                "text": "MCORE_RUN_SHUTTER_SHUTTER_ACTION_1",
                "value": "0"
            },
            {
                "text": "MCORE_RUN_SHUTTER_SHUTTER_ACTION_2",
                "value": "3"
            },
            {
                "text": "MCORE_RUN_SHUTTER_SHUTTER_ACTION_3",
                "value": "2"
            }
        ],
        "MCORE_RUN_MOTOR_PORT": [{
                "text": "MCORE_RUN_MOTOR_PORT_0",
                "value": "9"
            },
            {
                "text": "MCORE_RUN_MOTOR_PORT_1",
                "value": "10"
            }
        ],
        "MCORE_RUN_MOTOR_ROTATE": [{
                "text": "MCORE_RUN_MOTOR_ROTATE_0",
                "value": "1"
            },
            {
                "text": "MCORE_RUN_MOTOR_ROTATE_1",
                "value": "-1"
            }
        ],
        "MCORE_RUN_SERVO_SLOT": [{
                "text": "MCORE_RUN_SERVO_SLOT_0",
                "value": "1"
            },
            {
                "text": "MCORE_RUN_SERVO_SLOT_1",
                "value": "2"
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
        "MCORE_SHOW_EXTERNAL_LED_TIME_LED_POSTION": [{
                "text": "MCORE_SHOW_EXTERNAL_LED_TIME_LED_POSTION_0",
                "value": "0"
            },
            {
                "text": "MCORE_SHOW_EXTERNAL_LED_TIME_LED_POSTION_1",
                "value": "1"
            },
            {
                "text": "MCORE_SHOW_EXTERNAL_LED_TIME_LED_POSTION_2",
                "value": "2"
            },
            {
                "text": "MCORE_SHOW_EXTERNAL_LED_TIME_LED_POSTION_3",
                "value": "3"
            },
            {
                "text": "MCORE_SHOW_EXTERNAL_LED_TIME_LED_POSTION_4",
                "value": "4"
            }
        ],
        "MCORE_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST": [{
                "text": "MCORE_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_0",
                "value": "#FF0000"
            },
            {
                "text": "MCORE_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_1",
                "value": "#FF8000"
            },
            {
                "text": "MCORE_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_2",
                "value": "#FFFF00"
            },
            {
                "text": "MCORE_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_3",
                "value": "#00FF00"
            },
            {
                "text": "MCORE_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_4",
                "value": "#00FFFF"
            },
            {
                "text": "MCORE_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_5",
                "value": "#0000FF"
            },
            {
                "text": "MCORE_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_6",
                "value": "#8000FF"
            },
            {
                "text": "MCORE_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_7",
                "value": "#000000"
            }
        ],
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
        "MCORE_DETECT_EXTERNAL_LOUDNESS_PORT": [{
                "text": "MCORE_DETECT_EXTERNAL_LOUDNESS_PORT_0",
                "value": "3"
            },
            {
                "text": "MCORE_DETECT_EXTERNAL_LOUDNESS_PORT_1",
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
        ],
        "AURIGA_DETECT_PM25_SENSOR_OPTION": [{
                "text": "AURIGA_DETECT_PM25_SENSOR_OPTION_0",
                "value": "1"
            },
            {
                "text": "AURIGA_DETECT_PM25_SENSOR_OPTION_1",
                "value": "2"
            },
            {
                "text": "AURIGA_DETECT_PM25_SENSOR_OPTION_2",
                "value": "3"
            }
        ]
    }
});

export default mbot_all;