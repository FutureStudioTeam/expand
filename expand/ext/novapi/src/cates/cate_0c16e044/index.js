import blocks from './blocks.js';

const cate_0c16e044 = (facepanels) => ({
    "name": "cate_0c16e044",
    "colors": [
        "#4C97FF",
        "#2B84FF",
        "#0A71FF"
    ],
    "menuIconURI": "",
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('novapi/imgs/09fb2d5922f746bea299a6c62d27effb.svg', 'novapi')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "POWER_EXPAND_DCMOTOR_POWER_CHANNEL": [{
                "text": "POWER_EXPAND_DCMOTOR_POWER_CHANNEL_0",
                "value": "DC1"
            },
            {
                "text": "POWER_EXPAND_DCMOTOR_POWER_CHANNEL_1",
                "value": "DC2"
            },
            {
                "text": "POWER_EXPAND_DCMOTOR_POWER_CHANNEL_2",
                "value": "DC3"
            },
            {
                "text": "POWER_EXPAND_DCMOTOR_POWER_CHANNEL_3",
                "value": "DC4"
            },
            {
                "text": "POWER_EXPAND_DCMOTOR_POWER_CHANNEL_4",
                "value": "DC5"
            },
            {
                "text": "POWER_EXPAND_DCMOTOR_POWER_CHANNEL_5",
                "value": "DC6"
            },
            {
                "text": "POWER_EXPAND_DCMOTOR_POWER_CHANNEL_6",
                "value": "DC7"
            },
            {
                "text": "POWER_EXPAND_DCMOTOR_POWER_CHANNEL_7",
                "value": "DC8"
            }
        ],
        "POWER_EXPAND_BLMOTOR_POWER_CHANNEL": [{
                "text": "POWER_EXPAND_BLMOTOR_POWER_CHANNEL_0",
                "value": "BL1"
            },
            {
                "text": "POWER_EXPAND_BLMOTOR_POWER_CHANNEL_1",
                "value": "BL2"
            }
        ],
        "POWER_EXPAND_SOLENOIDVALVE_STATUS": [{
                "text": "POWER_EXPAND_SOLENOIDVALVE_STATUS_0",
                "value": "0"
            },
            {
                "text": "POWER_EXPAND_SOLENOIDVALVE_STATUS_1",
                "value": "1"
            }
        ]
    }
});

export default cate_0c16e044;