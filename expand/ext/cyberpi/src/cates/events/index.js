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
        "CYBERPI_DIRECTION_KEY_COUNT_FIELDMENU_1": [{
                "text": "CYBERPI_DIRECTION_KEY_COUNT_FIELDMENU_1_0",
                "value": "up"
            },
            {
                "text": "CYBERPI_DIRECTION_KEY_COUNT_FIELDMENU_1_1",
                "value": "down"
            },
            {
                "text": "CYBERPI_DIRECTION_KEY_COUNT_FIELDMENU_1_2",
                "value": "left"
            },
            {
                "text": "CYBERPI_DIRECTION_KEY_COUNT_FIELDMENU_1_3",
                "value": "right"
            },
            {
                "text": "CYBERPI_DIRECTION_KEY_COUNT_FIELDMENU_1_4",
                "value": "middle"
            }
        ],
        "CYBERPI_BUTTON_COUNT_FIELDMENU_1": [{
                "text": "CYBERPI_BUTTON_COUNT_FIELDMENU_1_0",
                "value": "a"
            },
            {
                "text": "CYBERPI_BUTTON_COUNT_FIELDMENU_1_1",
                "value": "b"
            }
        ],
        "CYBERPI_WHEN_DETECT_ATTITUDE_TILT": [{
                "text": "CYBERPI_WHEN_DETECT_ATTITUDE_TILT_0",
                "value": "is_tiltleft"
            },
            {
                "text": "CYBERPI_WHEN_DETECT_ATTITUDE_TILT_1",
                "value": "is_tiltright"
            },
            {
                "text": "CYBERPI_WHEN_DETECT_ATTITUDE_TILT_2",
                "value": "is_tiltforward"
            },
            {
                "text": "CYBERPI_WHEN_DETECT_ATTITUDE_TILT_3",
                "value": "is_tiltback"
            },
            {
                "text": "CYBERPI_WHEN_DETECT_ATTITUDE_TILT_4",
                "value": "is_faceup"
            },
            {
                "text": "CYBERPI_WHEN_DETECT_ATTITUDE_TILT_5",
                "value": "is_facedown"
            }
        ],
        "CYBERPI_WHEN_DETECT_ACTION_TILT": [{
                "text": "CYBERPI_WHEN_DETECT_ACTION_TILT_0",
                "value": "is_waveleft"
            },
            {
                "text": "CYBERPI_WHEN_DETECT_ACTION_TILT_1",
                "value": "is_waveright"
            },
            {
                "text": "CYBERPI_WHEN_DETECT_ACTION_TILT_2",
                "value": "is_waveup"
            },
            {
                "text": "CYBERPI_WHEN_DETECT_ACTION_TILT_3",
                "value": "is_wavedown"
            },
            {
                "text": "CYBERPI_WHEN_DETECT_ACTION_TILT_4",
                "value": "is_clockwise"
            },
            {
                "text": "CYBERPI_WHEN_DETECT_ACTION_TILT_5",
                "value": "is_anticlockwise"
            },
            {
                "text": "CYBERPI_WHEN_DETECT_ACTION_TILT_6",
                "value": "is_freefall"
            },
            {
                "text": "CYBERPI_WHEN_DETECT_ACTION_TILT_7",
                "value": "is_shake"
            }
        ],
        "CYBERPI_WHEN_SENSOR_VALUE_BIGGER_OR_SMALLER_THAN_FIELDMENU_2": [{
                "text": "CYBERPI_WHEN_SENSOR_VALUE_BIGGER_OR_SMALLER_THAN_FIELDMENU_2_0",
                "value": "light_sensor"
            },
            {
                "text": "CYBERPI_WHEN_SENSOR_VALUE_BIGGER_OR_SMALLER_THAN_FIELDMENU_2_1",
                "value": "microphone"
            },
            {
                "text": "CYBERPI_WHEN_SENSOR_VALUE_BIGGER_OR_SMALLER_THAN_FIELDMENU_2_2",
                "value": "shake_val"
            },
            {
                "text": "CYBERPI_WHEN_SENSOR_VALUE_BIGGER_OR_SMALLER_THAN_FIELDMENU_2_3",
                "value": "timer"
            }
        ],
        "CYBERPI_WHEN_SENSOR_VALUE_BIGGER_OR_SMALLER_THAN_FIELDMENU_3": [{
                "text": "CYBERPI_WHEN_SENSOR_VALUE_BIGGER_OR_SMALLER_THAN_FIELDMENU_3_0",
                "value": "greater"
            },
            {
                "text": "CYBERPI_WHEN_SENSOR_VALUE_BIGGER_OR_SMALLER_THAN_FIELDMENU_3_1",
                "value": "smaller"
            }
        ]
    }
});

export default events;