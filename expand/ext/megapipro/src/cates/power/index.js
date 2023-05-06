import blocks from './blocks.js';

const power = (facepanels) => ({
    "name": "power",
    "colors": [
        "#05A6FF",
        "#0097EA",
        "#0086D0"
    ],
    "menuIconURI": "",
    "blockIcon": null,
    "blocks": blocks(facepanels),
    "menus": {
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
        ],
        "HP_ENCODER_MOTOR_POWER_SWITCH": [{
                "text": "HP_ENCODER_MOTOR_POWER_SWITCH_0",
                "value": "0"
            },
            {
                "text": "HP_ENCODER_MOTOR_POWER_SWITCH_1",
                "value": "1"
            },
            {
                "text": "HP_ENCODER_MOTOR_POWER_SWITCH_2",
                "value": "2"
            },
            {
                "text": "HP_ENCODER_MOTOR_POWER_SWITCH_3",
                "value": "3"
            },
            {
                "text": "HP_ENCODER_MOTOR_POWER_SWITCH_4",
                "value": "4"
            },
            {
                "text": "HP_ENCODER_MOTOR_POWER_SWITCH_5",
                "value": "5"
            },
            {
                "text": "HP_ENCODER_MOTOR_POWER_SWITCH_6",
                "value": "6"
            },
            {
                "text": "HP_ENCODER_MOTOR_POWER_SWITCH_7",
                "value": "7"
            }
        ],
        "HP_ENCODER_MOTOR_POWER_SLOT": [{
                "text": "HP_ENCODER_MOTOR_POWER_SLOT_0",
                "value": "1"
            },
            {
                "text": "HP_ENCODER_MOTOR_POWER_SLOT_1",
                "value": "2"
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
        "DCMOTOR_POWER_2_PORT": [{
                "text": "DCMOTOR_POWER_2_PORT_0",
                "value": "1"
            },
            {
                "text": "DCMOTOR_POWER_2_PORT_1",
                "value": "2"
            },
            {
                "text": "DCMOTOR_POWER_2_PORT_2",
                "value": "3"
            },
            {
                "text": "DCMOTOR_POWER_2_PORT_3",
                "value": "4"
            }
        ],
        "BLOCK_1577092133273_INDEX": [{
                "text": "BLOCK_1577092133273_INDEX_0",
                "value": "1"
            },
            {
                "text": "BLOCK_1577092133273_INDEX_1",
                "value": "2"
            },
            {
                "text": "BLOCK_1577092133273_INDEX_2",
                "value": "3"
            },
            {
                "text": "BLOCK_1577092133273_INDEX_3",
                "value": "4"
            },
            {
                "text": "BLOCK_1577092133273_INDEX_4",
                "value": "5"
            },
            {
                "text": "BLOCK_1577092133273_INDEX_5",
                "value": "6"
            }
        ],
        "BLOCK_1577094267367_OPTION": [{
                "text": "BLOCK_1577094267367_OPTION_0",
                "value": "2"
            },
            {
                "text": "BLOCK_1577094267367_OPTION_1",
                "value": "3"
            },
            {
                "text": "BLOCK_1577094267367_OPTION_2",
                "value": "0"
            },
            {
                "text": "BLOCK_1577094267367_OPTION_3",
                "value": "4"
            },
            {
                "text": "BLOCK_1577094267367_OPTION_4",
                "value": "1"
            }
        ],
        "VALVE_STATUS_A_STATUS": [{
                "text": "VALVE_STATUS_A_STATUS_0",
                "value": "255"
            },
            {
                "text": "VALVE_STATUS_A_STATUS_1",
                "value": "0"
            }
        ],
        "SEG7_SHOW_NUMBER_PORT": [{
                "text": "SEG7_SHOW_NUMBER_PORT_0",
                "value": "6"
            },
            {
                "text": "SEG7_SHOW_NUMBER_PORT_1",
                "value": "7"
            },
            {
                "text": "SEG7_SHOW_NUMBER_PORT_2",
                "value": "8"
            },
            {
                "text": "SEG7_SHOW_NUMBER_PORT_3",
                "value": "9"
            },
            {
                "text": "SEG7_SHOW_NUMBER_PORT_4",
                "value": "10"
            },
            {
                "text": "SEG7_SHOW_NUMBER_PORT_5",
                "value": "11"
            },
            {
                "text": "SEG7_SHOW_NUMBER_PORT_6",
                "value": "12"
            }
        ],
        "SMALL_FUN_FAN_ROTATE": [{
                "text": "SMALL_FUN_FAN_ROTATE_0",
                "value": "1"
            },
            {
                "text": "SMALL_FUN_FAN_ROTATE_1",
                "value": "-1"
            },
            {
                "text": "SMALL_FUN_FAN_ROTATE_2",
                "value": "0"
            }
        ]
    }
});

export default power;