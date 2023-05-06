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
        "MEGAPI_RUN_SERVO_PORT": [{
                "text": "MEGAPI_RUN_SERVO_PORT_0",
                "value": "6"
            },
            {
                "text": "MEGAPI_RUN_SERVO_PORT_1",
                "value": "7"
            },
            {
                "text": "MEGAPI_RUN_SERVO_PORT_2",
                "value": "8"
            }
        ],
        "MEGAPI_RUN_SERVO_SLOT": [{
                "text": "MEGAPI_RUN_SERVO_SLOT_0",
                "value": "1"
            },
            {
                "text": "MEGAPI_RUN_SERVO_SLOT_1",
                "value": "2"
            }
        ],
        "MEGAPI_RUN_FAN_FAN_ROTATE": [{
                "text": "MEGAPI_RUN_FAN_FAN_ROTATE_0",
                "value": "1"
            },
            {
                "text": "MEGAPI_RUN_FAN_FAN_ROTATE_1",
                "value": "-1"
            },
            {
                "text": "MEGAPI_RUN_FAN_FAN_ROTATE_2",
                "value": "0"
            }
        ],
        "MEGAPI_SHOW_EXTERNAL_LED_TIME_LED_POSTION": [{
                "text": "MEGAPI_SHOW_EXTERNAL_LED_TIME_LED_POSTION_0",
                "value": "0"
            },
            {
                "text": "MEGAPI_SHOW_EXTERNAL_LED_TIME_LED_POSTION_1",
                "value": "1"
            },
            {
                "text": "MEGAPI_SHOW_EXTERNAL_LED_TIME_LED_POSTION_2",
                "value": "2"
            },
            {
                "text": "MEGAPI_SHOW_EXTERNAL_LED_TIME_LED_POSTION_3",
                "value": "3"
            },
            {
                "text": "MEGAPI_SHOW_EXTERNAL_LED_TIME_LED_POSTION_4",
                "value": "4"
            }
        ],
        "MEGAPI_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST": [{
                "text": "MEGAPI_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_0",
                "value": "#FF0000"
            },
            {
                "text": "MEGAPI_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_1",
                "value": "#FF8000"
            },
            {
                "text": "MEGAPI_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_2",
                "value": "#FFFF00"
            },
            {
                "text": "MEGAPI_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_3",
                "value": "#00FF00"
            },
            {
                "text": "MEGAPI_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_4",
                "value": "#00FFFF"
            },
            {
                "text": "MEGAPI_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_5",
                "value": "#0000FF"
            },
            {
                "text": "MEGAPI_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_6",
                "value": "#8000FF"
            },
            {
                "text": "MEGAPI_SHOW_ALL_LEDSTRIP_COLOR_COLOR_LIST_7",
                "value": "#000000"
            }
        ],
        "MEGAPI_DETECT_HUMITURE_TEMP_HUMITURE": [{
                "text": "MEGAPI_DETECT_HUMITURE_TEMP_HUMITURE_0",
                "value": "0"
            },
            {
                "text": "MEGAPI_DETECT_HUMITURE_TEMP_HUMITURE_1",
                "value": "1"
            }
        ],
        "MEGAPI_EVENT_BUTTON_PRESS_FOUR_KEY": [{
                "text": "MEGAPI_EVENT_BUTTON_PRESS_FOUR_KEY_0",
                "value": "1"
            },
            {
                "text": "MEGAPI_EVENT_BUTTON_PRESS_FOUR_KEY_1",
                "value": "2"
            },
            {
                "text": "MEGAPI_EVENT_BUTTON_PRESS_FOUR_KEY_2",
                "value": "3"
            },
            {
                "text": "MEGAPI_EVENT_BUTTON_PRESS_FOUR_KEY_3",
                "value": "4"
            }
        ],
        "MEGAPI_DETECT_JOYSTICK_AXIS_X_Y": [{
                "text": "MEGAPI_DETECT_JOYSTICK_AXIS_X_Y_0",
                "value": "1"
            },
            {
                "text": "MEGAPI_DETECT_JOYSTICK_AXIS_X_Y_1",
                "value": "2"
            }
        ],
        "MEGAPI_DETECT_PM25_SENSOR_OPTION": [{
                "text": "MEGAPI_DETECT_PM25_SENSOR_OPTION_0",
                "value": "1"
            },
            {
                "text": "MEGAPI_DETECT_PM25_SENSOR_OPTION_1",
                "value": "2"
            },
            {
                "text": "MEGAPI_DETECT_PM25_SENSOR_OPTION_2",
                "value": "3"
            }
        ],
        "BLOCK_1575275074292_PORT": [{
                "text": "BLOCK_1575275074292_PORT_0",
                "value": "1"
            },
            {
                "text": "BLOCK_1575275074292_PORT_1",
                "value": "2"
            },
            {
                "text": "BLOCK_1575275074292_PORT_2",
                "value": "3"
            },
            {
                "text": "BLOCK_1575275074292_PORT_3",
                "value": "4"
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