import blocks from './blocks.js';

const smart_camera_ccc_for_novapi = (facepanels) => ({
    "name": "smart_camera_ccc_for_novapi",
    "colors": [
        "#0AAD80",
        "#099C73",
        "#088A66"
    ],
    "menuIconURI": window.MbApi.getExtResPath('novapi_mbuild_smart_camera/imgs/79b03b4283b342b3bba73eccca5d4e9b.svg', 'novapi_mbuild_smart_camera'),
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('novapi_mbuild_smart_camera/imgs/0c5ae82eb00844d295b88624f7da1895.svg', 'novapi_mbuild_smart_camera')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "SMART_CAMERA_INIT_1_NUM": [{
                "text": "SMART_CAMERA_INIT_1_NUM_0",
                "value": "1"
            },
            {
                "text": "SMART_CAMERA_INIT_1_NUM_1",
                "value": "2"
            },
            {
                "text": "SMART_CAMERA_INIT_1_NUM_2",
                "value": "3"
            },
            {
                "text": "SMART_CAMERA_INIT_1_NUM_3",
                "value": "4"
            },
            {
                "text": "SMART_CAMERA_INIT_1_NUM_4",
                "value": "5"
            },
            {
                "text": "SMART_CAMERA_INIT_1_NUM_5",
                "value": "6"
            },
            {
                "text": "SMART_CAMERA_INIT_1_NUM_6",
                "value": "7"
            },
            {
                "text": "SMART_CAMERA_INIT_1_NUM_7",
                "value": "8"
            }
        ],
        "SMART_CAMERA_INIT_1_PORT": [{
                "text": "SMART_CAMERA_INIT_1_PORT_0",
                "value": "PORT1"
            },
            {
                "text": "SMART_CAMERA_INIT_1_PORT_1",
                "value": "PORT2"
            },
            {
                "text": "SMART_CAMERA_INIT_1_PORT_2",
                "value": "PORT3"
            },
            {
                "text": "SMART_CAMERA_INIT_1_PORT_3",
                "value": "PORT4"
            },
            {
                "text": "SMART_CAMERA_INIT_1_PORT_4",
                "value": "PORT5"
            }
        ],
        "SMART_CAMERA_INIT_1_INDEX": [{
                "text": "SMART_CAMERA_INIT_1_INDEX_0",
                "value": "INDEX1"
            },
            {
                "text": "SMART_CAMERA_INIT_1_INDEX_1",
                "value": "INDEX2"
            },
            {
                "text": "SMART_CAMERA_INIT_1_INDEX_2",
                "value": "INDEX3"
            },
            {
                "text": "SMART_CAMERA_INIT_1_INDEX_3",
                "value": "INDEX4"
            },
            {
                "text": "SMART_CAMERA_INIT_1_INDEX_4",
                "value": "INDEX5"
            },
            {
                "text": "SMART_CAMERA_INIT_1_INDEX_5",
                "value": "INDEX6"
            }
        ],
        "SMART_CAMERA_CHANGE_CCC_NUM": [{
                "text": "SMART_CAMERA_CHANGE_CCC_NUM_0",
                "value": "1"
            },
            {
                "text": "SMART_CAMERA_CHANGE_CCC_NUM_1",
                "value": "2"
            },
            {
                "text": "SMART_CAMERA_CHANGE_CCC_NUM_2",
                "value": "3"
            },
            {
                "text": "SMART_CAMERA_CHANGE_CCC_NUM_3",
                "value": "4"
            }
        ],
        "SMART_CAMERA_START_LEARN_CCC_SIG": [{
                "text": "SMART_CAMERA_START_LEARN_CCC_SIG_0",
                "value": "1"
            },
            {
                "text": "SMART_CAMERA_START_LEARN_CCC_SIG_1",
                "value": "2"
            },
            {
                "text": "SMART_CAMERA_START_LEARN_CCC_SIG_2",
                "value": "3"
            },
            {
                "text": "SMART_CAMERA_START_LEARN_CCC_SIG_3",
                "value": "4"
            },
            {
                "text": "SMART_CAMERA_START_LEARN_CCC_SIG_4",
                "value": "5"
            },
            {
                "text": "SMART_CAMERA_START_LEARN_CCC_SIG_5",
                "value": "6"
            },
            {
                "text": "SMART_CAMERA_START_LEARN_CCC_SIG_6",
                "value": "7"
            }
        ],
        "SMART_CAMERA_LOCATION_LOCATION": [{
                "text": "SMART_CAMERA_LOCATION_LOCATION_0",
                "value": "middle"
            },
            {
                "text": "SMART_CAMERA_LOCATION_LOCATION_1",
                "value": "up"
            },
            {
                "text": "SMART_CAMERA_LOCATION_LOCATION_2",
                "value": "down"
            },
            {
                "text": "SMART_CAMERA_LOCATION_LOCATION_3",
                "value": "left"
            },
            {
                "text": "SMART_CAMERA_LOCATION_LOCATION_4",
                "value": "right"
            }
        ],
        "SMART_CAMERA_VALUE_TYPE": [{
                "text": "SMART_CAMERA_VALUE_TYPE_0",
                "value": "x"
            },
            {
                "text": "SMART_CAMERA_VALUE_TYPE_1",
                "value": "y"
            },
            {
                "text": "SMART_CAMERA_VALUE_TYPE_2",
                "value": "wide"
            },
            {
                "text": "SMART_CAMERA_VALUE_TYPE_3",
                "value": "hight"
            }
        ],
        "SMART_CAMERA_SET_LED_TYPE": [{
                "text": "SMART_CAMERA_SET_LED_TYPE_0",
                "value": "open_light"
            },
            {
                "text": "SMART_CAMERA_SET_LED_TYPE_1",
                "value": "close_light"
            }
        ]
    }
});

export default smart_camera_ccc_for_novapi;