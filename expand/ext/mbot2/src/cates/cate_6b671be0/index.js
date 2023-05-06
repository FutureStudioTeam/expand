import blocks from './blocks.js';

const cate_6b671be0 = (facepanels) => ({
    "name": "cate_6b671be0",
    "colors": [
        "#05A6FF",
        "#0097EA",
        "#0086D0"
    ],
    "menuIconURI": window.MbApi.getExtResPath('mbot2/imgs/f17be5add3934b79aab807c0611bd1e6.svg', 'mbot2'),
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('mbot2/imgs/0557108aa1024da5b0a82943c784c4cf.svg', 'mbot2')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "MBOT2_MOVE_DIRECTION_WITH_TIME_DIRECTION": [{
                "text": "MBOT2_MOVE_DIRECTION_WITH_TIME_DIRECTION_0",
                "value": "forward"
            },
            {
                "text": "MBOT2_MOVE_DIRECTION_WITH_TIME_DIRECTION_1",
                "value": "backward"
            },
            {
                "text": "MBOT2_MOVE_DIRECTION_WITH_TIME_DIRECTION_2",
                "value": "turn_left"
            },
            {
                "text": "MBOT2_MOVE_DIRECTION_WITH_TIME_DIRECTION_3",
                "value": "turn_right"
            }
        ],
        "MBOT2_MOVE_STRAIGHT_WITH_CM_AND_INCH_DIRECTION": [{
                "text": "MBOT2_MOVE_STRAIGHT_WITH_CM_AND_INCH_DIRECTION_0",
                "value": "forward"
            },
            {
                "text": "MBOT2_MOVE_STRAIGHT_WITH_CM_AND_INCH_DIRECTION_1",
                "value": "backward"
            }
        ],
        "MBOT2_MOVE_STRAIGHT_WITH_CM_AND_INCH_FIELDMENU_3": [{
                "text": "MBOT2_MOVE_STRAIGHT_WITH_CM_AND_INCH_FIELDMENU_3_0",
                "value": "cm"
            },
            {
                "text": "MBOT2_MOVE_STRAIGHT_WITH_CM_AND_INCH_FIELDMENU_3_1",
                "value": "inch"
            }
        ],
        "MBOT2_CW_AND_CCW_WITH_ANGLE_FIELDMENU_1": [{
                "text": "MBOT2_CW_AND_CCW_WITH_ANGLE_FIELDMENU_1_0",
                "value": "cw"
            },
            {
                "text": "MBOT2_CW_AND_CCW_WITH_ANGLE_FIELDMENU_1_1",
                "value": "ccw"
            }
        ],
        "MBOT2_ENCODER_MOTOR_SET_WITH_TIME_FIELDMENU_1": [{
                "text": "MBOT2_ENCODER_MOTOR_SET_WITH_TIME_FIELDMENU_1_0",
                "value": "EM1"
            },
            {
                "text": "MBOT2_ENCODER_MOTOR_SET_WITH_TIME_FIELDMENU_1_1",
                "value": "EM2"
            },
            {
                "text": "MBOT2_ENCODER_MOTOR_SET_WITH_TIME_FIELDMENU_1_2",
                "value": "ALL"
            }
        ],
        "MBOT2_ENCODER_MOTOR_SET_WITH_TIME_FIELDMENU_4": [{
                "text": "MBOT2_ENCODER_MOTOR_SET_WITH_TIME_FIELDMENU_4_0",
                "value": "speed"
            },
            {
                "text": "MBOT2_ENCODER_MOTOR_SET_WITH_TIME_FIELDMENU_4_1",
                "value": "power"
            }
        ],
        "MBOT2_ENCODER_MOTOR_STOP_FIELDMENU_1": [{
                "text": "MBOT2_ENCODER_MOTOR_STOP_FIELDMENU_1_0",
                "value": "EM1"
            },
            {
                "text": "MBOT2_ENCODER_MOTOR_STOP_FIELDMENU_1_1",
                "value": "EM2"
            },
            {
                "text": "MBOT2_ENCODER_MOTOR_STOP_FIELDMENU_1_2",
                "value": "ALL"
            }
        ],
        "MBOT2_ENCODER_MOTOR_GET_SPEED_INPUTMENU_2": [{
                "text": "MBOT2_ENCODER_MOTOR_GET_SPEED_INPUTMENU_2_0",
                "value": "EM1"
            },
            {
                "text": "MBOT2_ENCODER_MOTOR_GET_SPEED_INPUTMENU_2_1",
                "value": "EM2"
            }
        ],
        "MBOT2_ENCODER_MOTOR_GET_SPEED_FIELDMENU_3": [{
                "text": "MBOT2_ENCODER_MOTOR_GET_SPEED_FIELDMENU_3_0",
                "value": "speed"
            },
            {
                "text": "MBOT2_ENCODER_MOTOR_GET_SPEED_FIELDMENU_3_1",
                "value": "power"
            }
        ],
        "MBOT2_ENCODER_MOTOR_LOCK_AND_UNLOCK_FIELDMENU_2": [{
                "text": "MBOT2_ENCODER_MOTOR_LOCK_AND_UNLOCK_FIELDMENU_2_0",
                "value": "1"
            },
            {
                "text": "MBOT2_ENCODER_MOTOR_LOCK_AND_UNLOCK_FIELDMENU_2_1",
                "value": "0"
            }
        ]
    }
});

export default cate_6b671be0;