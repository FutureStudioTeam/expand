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
        "NEURON_EVENT_LINEFOLLOW_AXIS": [{
                "text": "NEURON_EVENT_LINEFOLLOW_AXIS_0",
                "value": "2"
            },
            {
                "text": "NEURON_EVENT_LINEFOLLOW_AXIS_1",
                "value": "1"
            },
            {
                "text": "NEURON_EVENT_LINEFOLLOW_AXIS_2",
                "value": "0"
            },
            {
                "text": "NEURON_EVENT_LINEFOLLOW_AXIS_3",
                "value": "3"
            }
        ],
        "NEURON_EVENT_TOUCH_COLOR_COLOR": [{
                "text": "NEURON_EVENT_TOUCH_COLOR_COLOR_0",
                "value": "0"
            },
            {
                "text": "NEURON_EVENT_TOUCH_COLOR_COLOR_1",
                "value": "1"
            },
            {
                "text": "NEURON_EVENT_TOUCH_COLOR_COLOR_2",
                "value": "2"
            },
            {
                "text": "NEURON_EVENT_TOUCH_COLOR_COLOR_3",
                "value": "3"
            }
        ],
        "NEURON_EVENT_TILT_DIRECTION": [{
                "text": "NEURON_EVENT_TILT_DIRECTION_0",
                "value": "forward"
            },
            {
                "text": "NEURON_EVENT_TILT_DIRECTION_1",
                "value": "backward"
            },
            {
                "text": "NEURON_EVENT_TILT_DIRECTION_2",
                "value": "left"
            },
            {
                "text": "NEURON_EVENT_TILT_DIRECTION_3",
                "value": "right"
            }
        ],
        "NEURON_DETECT_GYRO_ANGLE_COORDINATE": [{
                "text": "NEURON_DETECT_GYRO_ANGLE_COORDINATE_0",
                "value": "x"
            },
            {
                "text": "NEURON_DETECT_GYRO_ANGLE_COORDINATE_1",
                "value": "y"
            }
        ],
        "NEURON_DETECT_GYRO_SPEED_COORDINATE": [{
                "text": "NEURON_DETECT_GYRO_SPEED_COORDINATE_0",
                "value": "x"
            },
            {
                "text": "NEURON_DETECT_GYRO_SPEED_COORDINATE_1",
                "value": "y"
            },
            {
                "text": "NEURON_DETECT_GYRO_SPEED_COORDINATE_2",
                "value": "z"
            }
        ],
        "NEURON_DETECT_COLOR_SENSOR_COLOR": [{
                "text": "NEURON_DETECT_COLOR_SENSOR_COLOR_0",
                "value": "0"
            },
            {
                "text": "NEURON_DETECT_COLOR_SENSOR_COLOR_1",
                "value": "1"
            },
            {
                "text": "NEURON_DETECT_COLOR_SENSOR_COLOR_2",
                "value": "2"
            }
        ],
        "NEURON_DETECT_JOYSTICK_AXIS": [{
                "text": "NEURON_DETECT_JOYSTICK_AXIS_0",
                "value": "X-Axis"
            },
            {
                "text": "NEURON_DETECT_JOYSTICK_AXIS_1",
                "value": "Y-Axis"
            }
        ]
    }
});

export default CATEGORY_SENSOR;