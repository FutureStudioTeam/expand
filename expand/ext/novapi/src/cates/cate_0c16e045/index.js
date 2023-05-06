import blocks from './blocks.js';

const cate_0c16e045 = (facepanels) => ({
    "name": "cate_0c16e045",
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
        "src": window.MbApi.getExtResPath('novapi/imgs/126e9abd401c4a98ae0cc4ff553dbeab.svg', 'novapi')
    },
    "blocks": blocks(facepanels),
    "menus": {
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
        ]
    }
});

export default cate_0c16e045;