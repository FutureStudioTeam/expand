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
        "src": window.MbApi.getExtResPath('megapi_bluetoothcontroller/imgs/f6b77a6e87184a0da90d3e8c8eee4279.svg', 'megapi_bluetoothcontroller')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "GETBLUETOOTHJOYSTICKVALUE_AXIS": [{
                "text": "GETBLUETOOTHJOYSTICKVALUE_AXIS_0",
                "value": "RX"
            },
            {
                "text": "GETBLUETOOTHJOYSTICKVALUE_AXIS_1",
                "value": "RY"
            },
            {
                "text": "GETBLUETOOTHJOYSTICKVALUE_AXIS_2",
                "value": "LX"
            },
            {
                "text": "GETBLUETOOTHJOYSTICKVALUE_AXIS_3",
                "value": "LY"
            }
        ],
        "CHECKBLUETOOTHKEY_AXIS": [{
                "text": "CHECKBLUETOOTHKEY_AXIS_0",
                "value": "1"
            },
            {
                "text": "CHECKBLUETOOTHKEY_AXIS_1",
                "value": "2"
            },
            {
                "text": "CHECKBLUETOOTHKEY_AXIS_2",
                "value": "3"
            },
            {
                "text": "CHECKBLUETOOTHKEY_AXIS_3",
                "value": "4"
            },
            {
                "text": "CHECKBLUETOOTHKEY_AXIS_4",
                "value": "←"
            },
            {
                "text": "CHECKBLUETOOTHKEY_AXIS_5",
                "value": "↑"
            },
            {
                "text": "CHECKBLUETOOTHKEY_AXIS_6",
                "value": "→"
            },
            {
                "text": "CHECKBLUETOOTHKEY_AXIS_7",
                "value": "↓"
            },
            {
                "text": "CHECKBLUETOOTHKEY_AXIS_8",
                "value": "L1"
            },
            {
                "text": "CHECKBLUETOOTHKEY_AXIS_9",
                "value": "R1"
            },
            {
                "text": "CHECKBLUETOOTHKEY_AXIS_10",
                "value": "L2"
            },
            {
                "text": "CHECKBLUETOOTHKEY_AXIS_11",
                "value": "R2"
            },
            {
                "text": "CHECKBLUETOOTHKEY_AXIS_12",
                "value": "Left Thumb"
            },
            {
                "text": "CHECKBLUETOOTHKEY_AXIS_13",
                "value": "Right Thumb"
            },
            {
                "text": "CHECKBLUETOOTHKEY_AXIS_14",
                "value": "+"
            },
            {
                "text": "CHECKBLUETOOTHKEY_AXIS_15",
                "value": "≡"
            }
        ]
    }
});

export default controller;