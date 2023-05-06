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
        "AURIGA_DETECT_LIGHT_LED_PORT": [{
                "text": "AURIGA_DETECT_LIGHT_LED_PORT_0",
                "value": "6"
            },
            {
                "text": "AURIGA_DETECT_LIGHT_LED_PORT_1",
                "value": "7"
            },
            {
                "text": "AURIGA_DETECT_LIGHT_LED_PORT_2",
                "value": "8"
            },
            {
                "text": "AURIGA_DETECT_LIGHT_LED_PORT_3",
                "value": "9"
            },
            {
                "text": "AURIGA_DETECT_LIGHT_LED_PORT_4",
                "value": "10"
            }
        ],
        "AURIGA_DETECT_LIGHT_LED_STATUS": [{
                "text": "AURIGA_DETECT_LIGHT_LED_STATUS_0",
                "value": "1"
            },
            {
                "text": "AURIGA_DETECT_LIGHT_LED_STATUS_1",
                "value": "0"
            }
        ],
        "AURIGA_DETECT_LIGHT_PORT": [{
                "text": "AURIGA_DETECT_LIGHT_PORT_0",
                "value": "12"
            },
            {
                "text": "AURIGA_DETECT_LIGHT_PORT_1",
                "value": "11"
            },
            {
                "text": "AURIGA_DETECT_LIGHT_PORT_2",
                "value": "6"
            },
            {
                "text": "AURIGA_DETECT_LIGHT_PORT_3",
                "value": "7"
            },
            {
                "text": "AURIGA_DETECT_LIGHT_PORT_4",
                "value": "8"
            },
            {
                "text": "AURIGA_DETECT_LIGHT_PORT_5",
                "value": "9"
            },
            {
                "text": "AURIGA_DETECT_LIGHT_PORT_6",
                "value": "10"
            }
        ],
        "AURIGA_DETECT_LOUDNESS_PORT": [{
                "text": "AURIGA_DETECT_LOUDNESS_PORT_0",
                "value": "14"
            },
            {
                "text": "AURIGA_DETECT_LOUDNESS_PORT_1",
                "value": "6"
            },
            {
                "text": "AURIGA_DETECT_LOUDNESS_PORT_2",
                "value": "7"
            },
            {
                "text": "AURIGA_DETECT_LOUDNESS_PORT_3",
                "value": "8"
            },
            {
                "text": "AURIGA_DETECT_LOUDNESS_PORT_4",
                "value": "9"
            },
            {
                "text": "AURIGA_DETECT_LOUDNESS_PORT_5",
                "value": "10"
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
        ]
    }
});

export default CATEGORY_SENSOR;