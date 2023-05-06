import blocks from './blocks.js';

const cate_e3df46fb = (facepanels) => ({
    "name": "cate_e3df46fb",
    "colors": [
        "#0079FF",
        "#006DE6",
        "#0061CC"
    ],
    "menuIconURI": "",
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('raspberrypi_novapi/imgs/5406baad7a814c9c8c6acd25c4f380bc.png', 'raspberrypi_novapi')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "SMARTSERVO_INIT_NUM": [{
                "text": "SMARTSERVO_INIT_NUM_0",
                "value": "1"
            },
            {
                "text": "SMARTSERVO_INIT_NUM_1",
                "value": "2"
            },
            {
                "text": "SMARTSERVO_INIT_NUM_2",
                "value": "3"
            },
            {
                "text": "SMARTSERVO_INIT_NUM_3",
                "value": "4"
            },
            {
                "text": "SMARTSERVO_INIT_NUM_4",
                "value": "5"
            },
            {
                "text": "SMARTSERVO_INIT_NUM_5",
                "value": "6"
            },
            {
                "text": "SMARTSERVO_INIT_NUM_6",
                "value": "7"
            },
            {
                "text": "SMARTSERVO_INIT_NUM_7",
                "value": "8"
            },
            {
                "text": "SMARTSERVO_INIT_NUM_8",
                "value": "9"
            },
            {
                "text": "SMARTSERVO_INIT_NUM_9",
                "value": "10"
            },
            {
                "text": "SMARTSERVO_INIT_NUM_10",
                "value": "11"
            },
            {
                "text": "SMARTSERVO_INIT_NUM_11",
                "value": "12"
            }
        ],
        "ENCODER_MOTOR_POWER_PORT": [{
                "text": "ENCODER_MOTOR_POWER_PORT_0",
                "value": "M1"
            },
            {
                "text": "ENCODER_MOTOR_POWER_PORT_1",
                "value": "M2"
            },
            {
                "text": "ENCODER_MOTOR_POWER_PORT_2",
                "value": "M3"
            },
            {
                "text": "ENCODER_MOTOR_POWER_PORT_3",
                "value": "M4"
            },
            {
                "text": "ENCODER_MOTOR_POWER_PORT_4",
                "value": "M5"
            },
            {
                "text": "ENCODER_MOTOR_POWER_PORT_5",
                "value": "M6"
            }
        ],
        "SMARTSERVO_INIT_INDEX": [{
                "text": "SMARTSERVO_INIT_INDEX_0",
                "value": "INDEX1"
            },
            {
                "text": "SMARTSERVO_INIT_INDEX_1",
                "value": "INDEX2"
            },
            {
                "text": "SMARTSERVO_INIT_INDEX_2",
                "value": "INDEX3"
            },
            {
                "text": "SMARTSERVO_INIT_INDEX_3",
                "value": "INDEX4"
            },
            {
                "text": "SMARTSERVO_INIT_INDEX_4",
                "value": "INDEX5"
            },
            {
                "text": "SMARTSERVO_INIT_INDEX_5",
                "value": "INDEX6"
            }
        ],
        "SMARTSERVO_POWER_TYPE": [{
                "text": "SMARTSERVO_POWER_TYPE_0",
                "value": "current"
            },
            {
                "text": "SMARTSERVO_POWER_TYPE_1",
                "value": "voltage"
            },
            {
                "text": "SMARTSERVO_POWER_TYPE_2",
                "value": "speed"
            },
            {
                "text": "SMARTSERVO_POWER_TYPE_3",
                "value": "angle"
            },
            {
                "text": "SMARTSERVO_POWER_TYPE_4",
                "value": "temperature"
            }
        ]
    }
});

export default cate_e3df46fb;