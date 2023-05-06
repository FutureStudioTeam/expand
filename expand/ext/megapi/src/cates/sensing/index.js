import blocks from './blocks.js';

const sensing = (facepanels) => ({
    "name": "sensing",
    "colors": [
        "#4CBFE6",
        "#31B5E2",
        "#1EA8D7"
    ],
    "menuIconURI": "",
    "blockIcon": null,
    "blocks": blocks(facepanels),
    "menus": {
        "MCORE_SHOW_FACE_TIME_PORT": [{
                "text": "MCORE_SHOW_FACE_TIME_PORT_0",
                "value": "6"
            },
            {
                "text": "MCORE_SHOW_FACE_TIME_PORT_1",
                "value": "7"
            },
            {
                "text": "MCORE_SHOW_FACE_TIME_PORT_2",
                "value": "8"
            }
        ],
        "LINEFOLLOWER_EXTERNAL_LINEFOLLOW_STATE": [{
                "text": "LINEFOLLOWER_EXTERNAL_LINEFOLLOW_STATE_0",
                "value": "2"
            },
            {
                "text": "LINEFOLLOWER_EXTERNAL_LINEFOLLOW_STATE_1",
                "value": "1"
            },
            {
                "text": "LINEFOLLOWER_EXTERNAL_LINEFOLLOW_STATE_2",
                "value": "3"
            },
            {
                "text": "LINEFOLLOWER_EXTERNAL_LINEFOLLOW_STATE_3",
                "value": "0"
            }
        ],
        "LINEFOLLOWER_EXTERNAL_BLACK_WHITE": [{
                "text": "LINEFOLLOWER_EXTERNAL_BLACK_WHITE_0",
                "value": "0"
            },
            {
                "text": "LINEFOLLOWER_EXTERNAL_BLACK_WHITE_1",
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
        ],
        "ENCODER_MOTOR_POWER_PORT": [{
                "text": "ENCODER_MOTOR_POWER_PORT_0",
                "value": "1"
            },
            {
                "text": "ENCODER_MOTOR_POWER_PORT_1",
                "value": "2"
            },
            {
                "text": "ENCODER_MOTOR_POWER_PORT_2",
                "value": "3"
            },
            {
                "text": "ENCODER_MOTOR_POWER_PORT_3",
                "value": "4"
            }
        ]
    }
});

export default sensing;