import blocks from './blocks.js';

const cate_c589c493 = (facepanels) => ({
    "name": "cate_c589c493",
    "colors": [
        "#FF6F00",
        "#E66400",
        "#CC5900"
    ],
    "menuIconURI": window.MbApi.getExtResPath('cyberpi/imgs/16240c5f093a465fbf60b70ee669b4bd.svg', 'cyberpi'),
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('cyberpi/imgs/a37d5442e0d44e9a9e2dacaf8bac6d74.svg', 'cyberpi')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "CYBERPI_FOLLOW_MBLOCK_SPRITE_GRADE": [{
                "text": "CYBERPI_FOLLOW_MBLOCK_SPRITE_GRADE_0",
                "value": "0.2"
            },
            {
                "text": "CYBERPI_FOLLOW_MBLOCK_SPRITE_GRADE_1",
                "value": "0.4"
            },
            {
                "text": "CYBERPI_FOLLOW_MBLOCK_SPRITE_GRADE_2",
                "value": "0.6"
            }
        ],
        "CYBERPI_DETECT_ATTITUDE_TILT": [{
                "text": "CYBERPI_DETECT_ATTITUDE_TILT_0",
                "value": "tiltforward"
            },
            {
                "text": "CYBERPI_DETECT_ATTITUDE_TILT_1",
                "value": "tiltback"
            },
            {
                "text": "CYBERPI_DETECT_ATTITUDE_TILT_2",
                "value": "tiltleft"
            },
            {
                "text": "CYBERPI_DETECT_ATTITUDE_TILT_3",
                "value": "tiltright"
            },
            {
                "text": "CYBERPI_DETECT_ATTITUDE_TILT_4",
                "value": "faceup"
            },
            {
                "text": "CYBERPI_DETECT_ATTITUDE_TILT_5",
                "value": "facedown"
            }
        ],
        "CYBERPI_DETECT_ACTION_TILT": [{
                "text": "CYBERPI_DETECT_ACTION_TILT_0",
                "value": "waveup"
            },
            {
                "text": "CYBERPI_DETECT_ACTION_TILT_1",
                "value": "wavedown"
            },
            {
                "text": "CYBERPI_DETECT_ACTION_TILT_2",
                "value": "waveleft"
            },
            {
                "text": "CYBERPI_DETECT_ACTION_TILT_3",
                "value": "waveright"
            },
            {
                "text": "CYBERPI_DETECT_ACTION_TILT_4",
                "value": "clockwise"
            },
            {
                "text": "CYBERPI_DETECT_ACTION_TILT_5",
                "value": "anticlockwise"
            },
            {
                "text": "CYBERPI_DETECT_ACTION_TILT_6",
                "value": "freefall"
            },
            {
                "text": "CYBERPI_DETECT_ACTION_TILT_7",
                "value": "shake"
            }
        ],
        "CYBERPI_TILT_DEGREE_ROTATION": [{
                "text": "CYBERPI_TILT_DEGREE_ROTATION_0",
                "value": "up"
            },
            {
                "text": "CYBERPI_TILT_DEGREE_ROTATION_1",
                "value": "down"
            },
            {
                "text": "CYBERPI_TILT_DEGREE_ROTATION_2",
                "value": "left"
            },
            {
                "text": "CYBERPI_TILT_DEGREE_ROTATION_3",
                "value": "right"
            },
            {
                "text": "CYBERPI_TILT_DEGREE_ROTATION_4",
                "value": "clockwise"
            },
            {
                "text": "CYBERPI_TILT_DEGREE_ROTATION_5",
                "value": "counterclockwise"
            }
        ],
        "CYBERPI_AXIS_ACCELERATION_AXIS": [{
                "text": "CYBERPI_AXIS_ACCELERATION_AXIS_0",
                "value": "x"
            },
            {
                "text": "CYBERPI_AXIS_ACCELERATION_AXIS_1",
                "value": "y"
            },
            {
                "text": "CYBERPI_AXIS_ACCELERATION_AXIS_2",
                "value": "z"
            }
        ],
        "CYBERPI_RESET_AXIS_ROTATION_ANGLE_AXIS": [{
                "text": "CYBERPI_RESET_AXIS_ROTATION_ANGLE_AXIS_0",
                "value": "all"
            },
            {
                "text": "CYBERPI_RESET_AXIS_ROTATION_ANGLE_AXIS_1",
                "value": "x"
            },
            {
                "text": "CYBERPI_RESET_AXIS_ROTATION_ANGLE_AXIS_2",
                "value": "y"
            },
            {
                "text": "CYBERPI_RESET_AXIS_ROTATION_ANGLE_AXIS_3",
                "value": "z"
            }
        ]
    }
});

export default cate_c589c493;