import blocks from './blocks.js';

const cate_191bb821 = (facepanels) => ({
    "name": "cate_191bb821",
    "colors": [
        "#42CCFF",
        "#22C3FF",
        "#02BBFF"
    ],
    "menuIconURI": "",
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('raspberrypi_novapi/imgs/8e9eb01329f449a59c365d8a11790200.png', 'raspberrypi_novapi')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "MOTION_SENSOR_ACC_AXIS": [{
                "text": "MOTION_SENSOR_ACC_AXIS_0",
                "value": "x"
            },
            {
                "text": "MOTION_SENSOR_ACC_AXIS_1",
                "value": "y"
            },
            {
                "text": "MOTION_SENSOR_ACC_AXIS_2",
                "value": "z"
            }
        ],
        "MOTION_SENSOR_RESET_ROTATION_AXIS": [{
            "text": "MOTION_SENSOR_RESET_ROTATION_AXIS_0",
            "value": "z"
        }]
    }
});

export default cate_191bb821;