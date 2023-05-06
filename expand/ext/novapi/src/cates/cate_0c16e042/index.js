import blocks from './blocks.js';

const cate_0c16e042 = (facepanels) => ({
    "name": "cate_0c16e042",
    "colors": [
        "#4CBFE6",
        "#31B5E2",
        "#1EA8D7"
    ],
    "menuIconURI": "",
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('novapi/imgs/2faf498674334d9a88889e859bbd0160.svg', 'novapi')
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

export default cate_0c16e042;