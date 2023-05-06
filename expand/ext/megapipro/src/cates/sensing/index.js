import blocks from './blocks.js';

const sensing = (facepanels) => ({
    "name": "sensing",
    "colors": [
        "#F79226",
        "#F6840B",
        "#DC7608"
    ],
    "menuIconURI": "",
    "blockIcon": null,
    "blocks": blocks(facepanels),
    "menus": {
        "SEG7_SHOW_NUMBER_PORT": [{
                "text": "SEG7_SHOW_NUMBER_PORT_0",
                "value": "6"
            },
            {
                "text": "SEG7_SHOW_NUMBER_PORT_1",
                "value": "7"
            },
            {
                "text": "SEG7_SHOW_NUMBER_PORT_2",
                "value": "8"
            },
            {
                "text": "SEG7_SHOW_NUMBER_PORT_3",
                "value": "9"
            },
            {
                "text": "SEG7_SHOW_NUMBER_PORT_4",
                "value": "10"
            },
            {
                "text": "SEG7_SHOW_NUMBER_PORT_5",
                "value": "11"
            },
            {
                "text": "SEG7_SHOW_NUMBER_PORT_6",
                "value": "12"
            }
        ],
        "COLOR_SENSOR_READ_COLOR": [{
                "text": "COLOR_SENSOR_READ_COLOR_0",
                "value": "0"
            },
            {
                "text": "COLOR_SENSOR_READ_COLOR_1",
                "value": "1"
            },
            {
                "text": "COLOR_SENSOR_READ_COLOR_2",
                "value": "2"
            }
        ],
        "COLOR_SENSOR_COLOR_DETECTED_COLOR": [{
                "text": "COLOR_SENSOR_COLOR_DETECTED_COLOR_0",
                "value": "0"
            },
            {
                "text": "COLOR_SENSOR_COLOR_DETECTED_COLOR_1",
                "value": "2"
            },
            {
                "text": "COLOR_SENSOR_COLOR_DETECTED_COLOR_2",
                "value": "4"
            },
            {
                "text": "COLOR_SENSOR_COLOR_DETECTED_COLOR_3",
                "value": "5"
            },
            {
                "text": "COLOR_SENSOR_COLOR_DETECTED_COLOR_4",
                "value": "7"
            },
            {
                "text": "COLOR_SENSOR_COLOR_DETECTED_COLOR_5",
                "value": "9"
            }
        ],
        "JOYSTICK_AXIS_X_Y": [{
                "text": "JOYSTICK_AXIS_X_Y_0",
                "value": "1"
            },
            {
                "text": "JOYSTICK_AXIS_X_Y_1",
                "value": "2"
            }
        ],
        "BUTTON_PRESSED_FOUR_KEY": [{
                "text": "BUTTON_PRESSED_FOUR_KEY_0",
                "value": "1"
            },
            {
                "text": "BUTTON_PRESSED_FOUR_KEY_1",
                "value": "2"
            },
            {
                "text": "BUTTON_PRESSED_FOUR_KEY_2",
                "value": "3"
            },
            {
                "text": "BUTTON_PRESSED_FOUR_KEY_3",
                "value": "4"
            }
        ],
        "LED_STRIP_SET_COLOR_SLOT": [{
                "text": "LED_STRIP_SET_COLOR_SLOT_0",
                "value": "1"
            },
            {
                "text": "LED_STRIP_SET_COLOR_SLOT_1",
                "value": "2"
            }
        ],
        "LIGHT_SENSOR_STATUS": [{
                "text": "LIGHT_SENSOR_STATUS_0",
                "value": "0"
            },
            {
                "text": "LIGHT_SENSOR_STATUS_1",
                "value": "1"
            }
        ],
        "IRSENSOR_READ_PORT": [{
                "text": "IRSENSOR_READ_PORT_0",
                "value": "7"
            },
            {
                "text": "IRSENSOR_READ_PORT_1",
                "value": "8"
            },
            {
                "text": "IRSENSOR_READ_PORT_2",
                "value": "9"
            },
            {
                "text": "IRSENSOR_READ_PORT_3",
                "value": "10"
            }
        ],
        "TEMP_MOISTURE_SENSOR_READ_TEMP_HUMITURE": [{
                "text": "TEMP_MOISTURE_SENSOR_READ_TEMP_HUMITURE_0",
                "value": "0"
            },
            {
                "text": "TEMP_MOISTURE_SENSOR_READ_TEMP_HUMITURE_1",
                "value": "1"
            }
        ],
        "GYRO_SESOR_READ_AXIS": [{
                "text": "GYRO_SESOR_READ_AXIS_0",
                "value": "1"
            },
            {
                "text": "GYRO_SESOR_READ_AXIS_1",
                "value": "2"
            },
            {
                "text": "GYRO_SESOR_READ_AXIS_2",
                "value": "3"
            }
        ],
        "SHUTTER_SET_FUN_SHUTTER_ACTION": [{
                "text": "SHUTTER_SET_FUN_SHUTTER_ACTION_0",
                "value": "1"
            },
            {
                "text": "SHUTTER_SET_FUN_SHUTTER_ACTION_1",
                "value": "0"
            },
            {
                "text": "SHUTTER_SET_FUN_SHUTTER_ACTION_2",
                "value": "3"
            },
            {
                "text": "SHUTTER_SET_FUN_SHUTTER_ACTION_3",
                "value": "2"
            }
        ]
    }
});

export default sensing;