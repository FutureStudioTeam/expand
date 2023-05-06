import blocks from './blocks.js';

const CATEGORY_ACTION = (facepanels) => ({
    "name": "CATEGORY_ACTION",
    "colors": [
        "#4A90E2",
        "#3080DE",
        "#2171CF"
    ],
    "menuIconURI": "",
    "blockIcon": null,
    "blocks": blocks(facepanels),
    "menus": {
        "MCORE_MOVE_MOVE_DIRECTION": [{
                "text": "MCORE_MOVE_MOVE_DIRECTION_0",
                "value": "1"
            },
            {
                "text": "MCORE_MOVE_MOVE_DIRECTION_1",
                "value": "2"
            },
            {
                "text": "MCORE_MOVE_MOVE_DIRECTION_2",
                "value": "3"
            },
            {
                "text": "MCORE_MOVE_MOVE_DIRECTION_3",
                "value": "4"
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
        "MCORE_SHOW_ALL_LEDSTRIP_COLOR_SLOT": [{
                "text": "MCORE_SHOW_ALL_LEDSTRIP_COLOR_SLOT_0",
                "value": "1"
            },
            {
                "text": "MCORE_SHOW_ALL_LEDSTRIP_COLOR_SLOT_1",
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
        ]
    }
});

export default CATEGORY_ACTION;