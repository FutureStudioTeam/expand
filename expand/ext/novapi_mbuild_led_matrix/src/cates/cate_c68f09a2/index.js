import blocks from './blocks.js';

const cate_c68f09a2 = (facepanels) => ({
    "name": "cate_c68f09a2",
    "colors": [
        "#0AAD80",
        "#099C73",
        "#088A66"
    ],
    "menuIconURI": window.MbApi.getExtResPath('novapi_mbuild_led_matrix/imgs/0b975d3942054778825fbf00999e7610.svg', 'novapi_mbuild_led_matrix'),
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('novapi_mbuild_led_matrix/imgs/0dea256cef7d4683b443a0a3d5e582a5.svg', 'novapi_mbuild_led_matrix')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "LED_PANEL_INIT_1_NUM": [{
                "text": "LED_PANEL_INIT_1_NUM_0",
                "value": "1"
            },
            {
                "text": "LED_PANEL_INIT_1_NUM_1",
                "value": "2"
            },
            {
                "text": "LED_PANEL_INIT_1_NUM_2",
                "value": "3"
            },
            {
                "text": "LED_PANEL_INIT_1_NUM_3",
                "value": "4"
            },
            {
                "text": "LED_PANEL_INIT_1_NUM_4",
                "value": "5"
            },
            {
                "text": "LED_PANEL_INIT_1_NUM_5",
                "value": "6"
            },
            {
                "text": "LED_PANEL_INIT_1_NUM_6",
                "value": "7"
            },
            {
                "text": "LED_PANEL_INIT_1_NUM_7",
                "value": "8"
            }
        ],
        "LED_PANEL_INIT_1_PORT": [{
                "text": "LED_PANEL_INIT_1_PORT_0",
                "value": "PORT1"
            },
            {
                "text": "LED_PANEL_INIT_1_PORT_1",
                "value": "PORT2"
            },
            {
                "text": "LED_PANEL_INIT_1_PORT_2",
                "value": "PORT3"
            },
            {
                "text": "LED_PANEL_INIT_1_PORT_3",
                "value": "PORT4"
            },
            {
                "text": "LED_PANEL_INIT_1_PORT_4",
                "value": "PORT5"
            }
        ],
        "LED_PANEL_INIT_1_INDEX": [{
                "text": "LED_PANEL_INIT_1_INDEX_0",
                "value": "INDEX1"
            },
            {
                "text": "LED_PANEL_INIT_1_INDEX_1",
                "value": "INDEX2"
            },
            {
                "text": "LED_PANEL_INIT_1_INDEX_2",
                "value": "INDEX3"
            },
            {
                "text": "LED_PANEL_INIT_1_INDEX_3",
                "value": "INDEX4"
            },
            {
                "text": "LED_PANEL_INIT_1_INDEX_4",
                "value": "INDEX5"
            },
            {
                "text": "LED_PANEL_INIT_1_INDEX_5",
                "value": "INDEX6"
            }
        ]
    }
});

export default cate_c68f09a2;