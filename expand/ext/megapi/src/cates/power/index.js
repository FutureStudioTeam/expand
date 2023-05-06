import blocks from './blocks.js';

const power = (facepanels) => ({
    "name": "power",
    "colors": [
        "#4A90E2",
        "#3080DE",
        "#2171CF"
    ],
    "menuIconURI": "",
    "blockIcon": null,
    "blocks": blocks(facepanels),
    "menus": {
        "ULTIMATE_MOVE_MOVE_DIRECTION": [{
                "text": "ULTIMATE_MOVE_MOVE_DIRECTION_0",
                "value": "1"
            },
            {
                "text": "ULTIMATE_MOVE_MOVE_DIRECTION_1",
                "value": "2"
            },
            {
                "text": "ULTIMATE_MOVE_MOVE_DIRECTION_2",
                "value": "3"
            },
            {
                "text": "ULTIMATE_MOVE_MOVE_DIRECTION_3",
                "value": "4"
            }
        ],
        "DCMOTOR_POWER_1_PORT": [{
                "text": "DCMOTOR_POWER_1_PORT_0",
                "value": "1"
            },
            {
                "text": "DCMOTOR_POWER_1_PORT_1",
                "value": "9"
            },
            {
                "text": "DCMOTOR_POWER_1_PORT_2",
                "value": "2"
            },
            {
                "text": "DCMOTOR_POWER_1_PORT_3",
                "value": "10"
            },
            {
                "text": "DCMOTOR_POWER_1_PORT_4",
                "value": "3"
            },
            {
                "text": "DCMOTOR_POWER_1_PORT_5",
                "value": "11"
            },
            {
                "text": "DCMOTOR_POWER_1_PORT_6",
                "value": "4"
            },
            {
                "text": "DCMOTOR_POWER_1_PORT_7",
                "value": "12"
            }
        ],
        "ENCODER_MOTOR_POWER_PORT": [{
                "text": "ENCODER_MOTOR_POWER_PORT_0",
                "value": "1"
            },
            {
                "text": "ENCODER_MOTOR_POWER_PORT_1",
                "value": "2"
            },
            {
                "text": "ENCODER_MOTOR_POWER_PORT_2",
                "value": "3"
            },
            {
                "text": "ENCODER_MOTOR_POWER_PORT_3",
                "value": "4"
            }
        ]
    }
});

export default power;