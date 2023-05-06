import blocks from './blocks.js';

const auriga_all = (facepanels) => ({
    "name": "auriga_all",
    "colors": [
        "#4EAA83",
        "#469976",
        "#3E8869"
    ],
    "menuIconURI": "",
    "blockIcon": null,
    "blocks": blocks(facepanels),
    "menus": {
        "AURIGA_RUN_BOARD_ENCODER_MOTOR_PORT": [{
                "text": "AURIGA_RUN_BOARD_ENCODER_MOTOR_PORT_0",
                "value": "1"
            },
            {
                "text": "AURIGA_RUN_BOARD_ENCODER_MOTOR_PORT_1",
                "value": "2"
            }
        ],
        "AURIGA_RUN_BOARD_ENCODER_MOTOR_ROTATE": [{
                "text": "AURIGA_RUN_BOARD_ENCODER_MOTOR_ROTATE_0",
                "value": "-1"
            },
            {
                "text": "AURIGA_RUN_BOARD_ENCODER_MOTOR_ROTATE_1",
                "value": "1"
            }
        ],
        "AURIGA_RUN_ENCODER_MOTOR_PORT": [{
                "text": "AURIGA_RUN_ENCODER_MOTOR_PORT_0",
                "value": "1"
            },
            {
                "text": "AURIGA_RUN_ENCODER_MOTOR_PORT_1",
                "value": "2"
            },
            {
                "text": "AURIGA_RUN_ENCODER_MOTOR_PORT_2",
                "value": "3"
            },
            {
                "text": "AURIGA_RUN_ENCODER_MOTOR_PORT_3",
                "value": "4"
            }
        ],
        "AURIGA_RUN_ENCODER_MOTOR_SLOT": [{
                "text": "AURIGA_RUN_ENCODER_MOTOR_SLOT_0",
                "value": "1"
            },
            {
                "text": "AURIGA_RUN_ENCODER_MOTOR_SLOT_1",
                "value": "2"
            }
        ],
        "AURIGA_RUN_ENCODER_MOTOR_ROTATE": [{
                "text": "AURIGA_RUN_ENCODER_MOTOR_ROTATE_0",
                "value": "1"
            },
            {
                "text": "AURIGA_RUN_ENCODER_MOTOR_ROTATE_1",
                "value": "-1"
            }
        ],
        "AURIGA_RUN_SERVO_PORT": [{
                "text": "AURIGA_RUN_SERVO_PORT_0",
                "value": "6"
            },
            {
                "text": "AURIGA_RUN_SERVO_PORT_1",
                "value": "7"
            },
            {
                "text": "AURIGA_RUN_SERVO_PORT_2",
                "value": "8"
            },
            {
                "text": "AURIGA_RUN_SERVO_PORT_3",
                "value": "9"
            },
            {
                "text": "AURIGA_RUN_SERVO_PORT_4",
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
        "AURIGA_RUN_SHUTTER_SHUTTER_ACTION": [{
                "text": "AURIGA_RUN_SHUTTER_SHUTTER_ACTION_0",
                "value": "1"
            },
            {
                "text": "AURIGA_RUN_SHUTTER_SHUTTER_ACTION_1",
                "value": "0"
            },
            {
                "text": "AURIGA_RUN_SHUTTER_SHUTTER_ACTION_2",
                "value": "3"
            },
            {
                "text": "AURIGA_RUN_SHUTTER_SHUTTER_ACTION_3",
                "value": "2"
            }
        ],
        "AURIGA_RUN_SMART_SERVO_RGB_R": [{
                "text": "AURIGA_RUN_SMART_SERVO_RGB_R_0",
                "value": "0"
            },
            {
                "text": "AURIGA_RUN_SMART_SERVO_RGB_R_1",
                "value": "20"
            },
            {
                "text": "AURIGA_RUN_SMART_SERVO_RGB_R_2",
                "value": "60"
            },
            {
                "text": "AURIGA_RUN_SMART_SERVO_RGB_R_3",
                "value": "150"
            },
            {
                "text": "AURIGA_RUN_SMART_SERVO_RGB_R_4",
                "value": "255"
            }
        ],
        "AURIGA_RUN_SMART_SERVO_DETECT_OPTION": [{
                "text": "AURIGA_RUN_SMART_SERVO_DETECT_OPTION_0",
                "value": "2"
            },
            {
                "text": "AURIGA_RUN_SMART_SERVO_DETECT_OPTION_1",
                "value": "3"
            },
            {
                "text": "AURIGA_RUN_SMART_SERVO_DETECT_OPTION_2",
                "value": "0"
            },
            {
                "text": "AURIGA_RUN_SMART_SERVO_DETECT_OPTION_3",
                "value": "4"
            },
            {
                "text": "AURIGA_RUN_SMART_SERVO_DETECT_OPTION_4",
                "value": "1"
            }
        ],
        "AURIGA_SHOW_EXTERNAL_LED_TIME_LED_POSTION": [{
                "text": "AURIGA_SHOW_EXTERNAL_LED_TIME_LED_POSTION_0",
                "value": "0"
            },
            {
                "text": "AURIGA_SHOW_EXTERNAL_LED_TIME_LED_POSTION_1",
                "value": "1"
            },
            {
                "text": "AURIGA_SHOW_EXTERNAL_LED_TIME_LED_POSTION_2",
                "value": "2"
            },
            {
                "text": "AURIGA_SHOW_EXTERNAL_LED_TIME_LED_POSTION_3",
                "value": "3"
            },
            {
                "text": "AURIGA_SHOW_EXTERNAL_LED_TIME_LED_POSTION_4",
                "value": "4"
            }
        ],
        "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST": [{
                "text": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_0",
                "value": "#FF0000"
            },
            {
                "text": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_1",
                "value": "#FF8000"
            },
            {
                "text": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_2",
                "value": "#FFFF00"
            },
            {
                "text": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_3",
                "value": "#00FF00"
            },
            {
                "text": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_4",
                "value": "#00FFFF"
            },
            {
                "text": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_5",
                "value": "#0000FF"
            },
            {
                "text": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_6",
                "value": "#8000FF"
            },
            {
                "text": "AURIGA_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_7",
                "value": "#000000"
            }
        ],
        "AURIGA_DETECT_EXTERNAL_LIGHT_PORT": [{
                "text": "AURIGA_DETECT_EXTERNAL_LIGHT_PORT_0",
                "value": "6"
            },
            {
                "text": "AURIGA_DETECT_EXTERNAL_LIGHT_PORT_1",
                "value": "7"
            },
            {
                "text": "AURIGA_DETECT_EXTERNAL_LIGHT_PORT_2",
                "value": "8"
            },
            {
                "text": "AURIGA_DETECT_EXTERNAL_LIGHT_PORT_3",
                "value": "9"
            },
            {
                "text": "AURIGA_DETECT_EXTERNAL_LIGHT_PORT_4",
                "value": "10"
            },
            {
                "text": "AURIGA_DETECT_EXTERNAL_LIGHT_PORT_5",
                "value": "12"
            },
            {
                "text": "AURIGA_DETECT_EXTERNAL_LIGHT_PORT_6",
                "value": "11"
            }
        ],
        "AURIGA_EVENT_EXTERNAL_LINEFOLLOWER_LINEFOLLOW_STATE": [{
                "text": "AURIGA_EVENT_EXTERNAL_LINEFOLLOWER_LINEFOLLOW_STATE_0",
                "value": "2"
            },
            {
                "text": "AURIGA_EVENT_EXTERNAL_LINEFOLLOWER_LINEFOLLOW_STATE_1",
                "value": "1"
            },
            {
                "text": "AURIGA_EVENT_EXTERNAL_LINEFOLLOWER_LINEFOLLOW_STATE_2",
                "value": "3"
            },
            {
                "text": "AURIGA_EVENT_EXTERNAL_LINEFOLLOWER_LINEFOLLOW_STATE_3",
                "value": "0"
            }
        ],
        "AURIGA_EVENT_EXTERNAL_LINEFOLLOWER_BLACK_WHITE": [{
                "text": "AURIGA_EVENT_EXTERNAL_LINEFOLLOWER_BLACK_WHITE_0",
                "value": "0"
            },
            {
                "text": "AURIGA_EVENT_EXTERNAL_LINEFOLLOWER_BLACK_WHITE_1",
                "value": "1"
            }
        ],
        "AURIGA_DETECT_HUMITURE_TEMP_HUMITURE": [{
                "text": "AURIGA_DETECT_HUMITURE_TEMP_HUMITURE_0",
                "value": "0"
            },
            {
                "text": "AURIGA_DETECT_HUMITURE_TEMP_HUMITURE_1",
                "value": "1"
            }
        ],
        "AURIGA_DETECT_BOARD_GYRO_ANGLE_AXIS": [{
                "text": "AURIGA_DETECT_BOARD_GYRO_ANGLE_AXIS_0",
                "value": "1"
            },
            {
                "text": "AURIGA_DETECT_BOARD_GYRO_ANGLE_AXIS_1",
                "value": "2"
            },
            {
                "text": "AURIGA_DETECT_BOARD_GYRO_ANGLE_AXIS_2",
                "value": "3"
            }
        ],
        "AURIGA_EVENT_BUTTON_PRESS_FOUR_KEY": [{
                "text": "AURIGA_EVENT_BUTTON_PRESS_FOUR_KEY_0",
                "value": "1"
            },
            {
                "text": "AURIGA_EVENT_BUTTON_PRESS_FOUR_KEY_1",
                "value": "2"
            },
            {
                "text": "AURIGA_EVENT_BUTTON_PRESS_FOUR_KEY_2",
                "value": "3"
            },
            {
                "text": "AURIGA_EVENT_BUTTON_PRESS_FOUR_KEY_3",
                "value": "4"
            }
        ],
        "AURIGA_DETECT_JOYSTICK_AXIS_X_Y": [{
                "text": "AURIGA_DETECT_JOYSTICK_AXIS_X_Y_0",
                "value": "1"
            },
            {
                "text": "AURIGA_DETECT_JOYSTICK_AXIS_X_Y_1",
                "value": "2"
            }
        ],
        "AURIGA_ENCODER_MOTOR_V2_MOTOR_SWITCH": [{
                "text": "AURIGA_ENCODER_MOTOR_V2_MOTOR_SWITCH_0",
                "value": "0"
            },
            {
                "text": "AURIGA_ENCODER_MOTOR_V2_MOTOR_SWITCH_1",
                "value": "1"
            },
            {
                "text": "AURIGA_ENCODER_MOTOR_V2_MOTOR_SWITCH_2",
                "value": "2"
            },
            {
                "text": "AURIGA_ENCODER_MOTOR_V2_MOTOR_SWITCH_3",
                "value": "3"
            },
            {
                "text": "AURIGA_ENCODER_MOTOR_V2_MOTOR_SWITCH_4",
                "value": "4"
            },
            {
                "text": "AURIGA_ENCODER_MOTOR_V2_MOTOR_SWITCH_5",
                "value": "5"
            },
            {
                "text": "AURIGA_ENCODER_MOTOR_V2_MOTOR_SWITCH_6",
                "value": "6"
            },
            {
                "text": "AURIGA_ENCODER_MOTOR_V2_MOTOR_SWITCH_7",
                "value": "7"
            }
        ],
        "AURIGA_ENCODER_MOTOR_V2_MOTOR_SLOT": [{
                "text": "AURIGA_ENCODER_MOTOR_V2_MOTOR_SLOT_0",
                "value": "1"
            },
            {
                "text": "AURIGA_ENCODER_MOTOR_V2_MOTOR_SLOT_1",
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
        ],
        "BLOCK_1575275074292_DIRECT": [{
                "text": "BLOCK_1575275074292_DIRECT_0",
                "value": "1"
            },
            {
                "text": "BLOCK_1575275074292_DIRECT_1",
                "value": "2"
            }
        ]
    }
});

export default auriga_all;