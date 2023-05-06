import blocks from './blocks.js';

const cate_444d2032 = (facepanels) => ({
    "name": "cate_444d2032",
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
        "src": window.MbApi.getExtResPath('raspberrypi_novapi/imgs/c896bcff91ee45dd87a1e658eeaac024.png', 'raspberrypi_novapi')
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

export default cate_444d2032;