import blocks from './blocks.js';

const controller = (facepanels) => ({
    "name": "controller",
    "colors": [
        "#4EAA83",
        "#469976",
        "#3E8869"
    ],
    "menuIconURI": "",
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('megapipro_24gjoystickcontroller/imgs/f6b77a6e87184a0da90d3e8c8eee4279.svg', 'megapipro_24gjoystickcontroller')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "GET24JOYSTICKVALUE_AXIS": [{
                "text": "GET24JOYSTICKVALUE_AXIS_0",
                "value": "RX"
            },
            {
                "text": "GET24JOYSTICKVALUE_AXIS_1",
                "value": "RY"
            },
            {
                "text": "GET24JOYSTICKVALUE_AXIS_2",
                "value": "LX"
            },
            {
                "text": "GET24JOYSTICKVALUE_AXIS_3",
                "value": "LY"
            }
        ],
        "CHECK24JOYSTICKKEY_AXIS": [{
                "text": "CHECK24JOYSTICKKEY_AXIS_0",
                "value": "1"
            },
            {
                "text": "CHECK24JOYSTICKKEY_AXIS_1",
                "value": "2"
            },
            {
                "text": "CHECK24JOYSTICKKEY_AXIS_2",
                "value": "3"
            },
            {
                "text": "CHECK24JOYSTICKKEY_AXIS_3",
                "value": "4"
            },
            {
                "text": "CHECK24JOYSTICKKEY_AXIS_4",
                "value": "←"
            },
            {
                "text": "CHECK24JOYSTICKKEY_AXIS_5",
                "value": "↑"
            },
            {
                "text": "CHECK24JOYSTICKKEY_AXIS_6",
                "value": "→"
            },
            {
                "text": "CHECK24JOYSTICKKEY_AXIS_7",
                "value": "↓"
            },
            {
                "text": "CHECK24JOYSTICKKEY_AXIS_8",
                "value": "L1"
            },
            {
                "text": "CHECK24JOYSTICKKEY_AXIS_9",
                "value": "R1"
            },
            {
                "text": "CHECK24JOYSTICKKEY_AXIS_10",
                "value": "L2"
            },
            {
                "text": "CHECK24JOYSTICKKEY_AXIS_11",
                "value": "R2"
            },
            {
                "text": "CHECK24JOYSTICKKEY_AXIS_12",
                "value": "Left Thumb"
            },
            {
                "text": "CHECK24JOYSTICKKEY_AXIS_13",
                "value": "Right Thumb"
            },
            {
                "text": "CHECK24JOYSTICKKEY_AXIS_14",
                "value": "+"
            },
            {
                "text": "CHECK24JOYSTICKKEY_AXIS_15",
                "value": "≡"
            },
            {
                "text": "CHECK24JOYSTICKKEY_AXIS_16",
                "value": "×"
            },
            {
                "text": "CHECK24JOYSTICKKEY_AXIS_17",
                "value": "●"
            },
            {
                "text": "CHECK24JOYSTICKKEY_AXIS_18",
                "value": "▲"
            },
            {
                "text": "CHECK24JOYSTICKKEY_AXIS_19",
                "value": "■"
            }
        ]
    }
});

export default controller;