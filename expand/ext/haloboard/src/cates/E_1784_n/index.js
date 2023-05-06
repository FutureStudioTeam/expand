import blocks from './blocks.js';

const E_1784_n = (facepanels) => ({
    "name": "E_1784_n",
    "colors": [
        "#F79226",
        "#F6840B",
        "#DC7608"
    ],
    "menuIconURI": window.MbApi.getExtResPath('haloboard/imgs/80ea70b40ac04645bdf2f19e9ba727df.svg', 'haloboard'),
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('haloboard/imgs/3a3be3d40b994012a89fdef40bedd8e1.svg', 'haloboard')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "HALOBOARD_DETECT_TOUCH_TOUCHPAD_NUMBER": [{
                "text": "HALOBOARD_DETECT_TOUCH_TOUCHPAD_NUMBER_0",
                "value": "0"
            },
            {
                "text": "HALOBOARD_DETECT_TOUCH_TOUCHPAD_NUMBER_1",
                "value": "1"
            },
            {
                "text": "HALOBOARD_DETECT_TOUCH_TOUCHPAD_NUMBER_2",
                "value": "2"
            },
            {
                "text": "HALOBOARD_DETECT_TOUCH_TOUCHPAD_NUMBER_3",
                "value": "3"
            }
        ],
        "BLOCK_1552905879755_SENSITIVITY": [{
                "text": "BLOCK_1552905879755_SENSITIVITY_0",
                "value": "high"
            },
            {
                "text": "BLOCK_1552905879755_SENSITIVITY_1",
                "value": "middle"
            },
            {
                "text": "BLOCK_1552905879755_SENSITIVITY_2",
                "value": "low"
            }
        ],
        "HALOBOARD_DETECT_TILT_1_TILT": [{
                "text": "HALOBOARD_DETECT_TILT_1_TILT_0",
                "value": "tilted_left"
            },
            {
                "text": "HALOBOARD_DETECT_TILT_1_TILT_1",
                "value": "tilted_right"
            },
            {
                "text": "HALOBOARD_DETECT_TILT_1_TILT_2",
                "value": "arrow_up"
            },
            {
                "text": "HALOBOARD_DETECT_TILT_1_TILT_3",
                "value": "arrow_down"
            },
            {
                "text": "HALOBOARD_DETECT_TILT_1_TILT_4",
                "value": "led_ring_up"
            },
            {
                "text": "HALOBOARD_DETECT_TILT_1_TILT_5",
                "value": "led_ring_down"
            },
            {
                "text": "HALOBOARD_DETECT_TILT_1_TILT_6",
                "value": "rotate_clockwise"
            },
            {
                "text": "HALOBOARD_DETECT_TILT_1_TILT_7",
                "value": "rotate_anticlockwise"
            },
            {
                "text": "HALOBOARD_DETECT_TILT_1_TILT_8",
                "value": "free_fall"
            },
            {
                "text": "HALOBOARD_DETECT_TILT_1_TILT_9",
                "value": "arrow_left_brandish"
            },
            {
                "text": "HALOBOARD_DETECT_TILT_1_TILT_10",
                "value": "arrow_right_brandish"
            },
            {
                "text": "HALOBOARD_DETECT_TILT_1_TILT_11",
                "value": "arrow_up_brandish"
            },
            {
                "text": "HALOBOARD_DETECT_TILT_1_TILT_12",
                "value": "arrow_down_brandish"
            }
        ],
        "HALOBOARD_DETECT_TILT_TILT": [{
                "text": "HALOBOARD_DETECT_TILT_TILT_0",
                "value": "tilted_left"
            },
            {
                "text": "HALOBOARD_DETECT_TILT_TILT_1",
                "value": "tilted_right"
            },
            {
                "text": "HALOBOARD_DETECT_TILT_TILT_2",
                "value": "arrow_up"
            },
            {
                "text": "HALOBOARD_DETECT_TILT_TILT_3",
                "value": "arrow_down"
            },
            {
                "text": "HALOBOARD_DETECT_TILT_TILT_4",
                "value": "led_ring_up"
            },
            {
                "text": "HALOBOARD_DETECT_TILT_TILT_5",
                "value": "led_ring_down"
            },
            {
                "text": "HALOBOARD_DETECT_TILT_TILT_6",
                "value": "rotate_clockwise"
            },
            {
                "text": "HALOBOARD_DETECT_TILT_TILT_7",
                "value": "rotate_anticlockwise"
            },
            {
                "text": "HALOBOARD_DETECT_TILT_TILT_8",
                "value": "free_fall"
            }
        ],
        "HALOBOARD_DETECT_INCLINE_INCLINE": [{
                "text": "HALOBOARD_DETECT_INCLINE_INCLINE_0",
                "value": "left_incline"
            },
            {
                "text": "HALOBOARD_DETECT_INCLINE_INCLINE_1",
                "value": "right_incline"
            },
            {
                "text": "HALOBOARD_DETECT_INCLINE_INCLINE_2",
                "value": "up_incline"
            },
            {
                "text": "HALOBOARD_DETECT_INCLINE_INCLINE_3",
                "value": "down_incline"
            }
        ],
        "HALOBOARD_DETECT_AXIS_ACCELERATION_AXIS": [{
                "text": "HALOBOARD_DETECT_AXIS_ACCELERATION_AXIS_0",
                "value": "x"
            },
            {
                "text": "HALOBOARD_DETECT_AXIS_ACCELERATION_AXIS_1",
                "value": "y"
            },
            {
                "text": "HALOBOARD_DETECT_AXIS_ACCELERATION_AXIS_2",
                "value": "z"
            }
        ],
        "HALOBOARD_DETECT_TILT_DEGREE_ROTATION": [{
                "text": "HALOBOARD_DETECT_TILT_DEGREE_ROTATION_0",
                "value": "pitch"
            },
            {
                "text": "HALOBOARD_DETECT_TILT_DEGREE_ROTATION_1",
                "value": "roll"
            }
        ],
        "HALOBOARD_RESET_ROTATION_DEGREE_AXIS": [{
                "text": "HALOBOARD_RESET_ROTATION_DEGREE_AXIS_0",
                "value": "all"
            },
            {
                "text": "HALOBOARD_RESET_ROTATION_DEGREE_AXIS_1",
                "value": "x"
            },
            {
                "text": "HALOBOARD_RESET_ROTATION_DEGREE_AXIS_2",
                "value": "y"
            },
            {
                "text": "HALOBOARD_RESET_ROTATION_DEGREE_AXIS_3",
                "value": "z"
            }
        ]
    }
});

export default E_1784_n;