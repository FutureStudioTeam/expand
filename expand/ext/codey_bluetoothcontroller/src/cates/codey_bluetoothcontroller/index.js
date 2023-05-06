import blocks from './blocks.js';

const codey_bluetoothcontroller = (facepanels) => ({
    "name": "codey_bluetoothcontroller",
    "colors": [
        "#0AAD80",
        "#099C73",
        "#088A66"
    ],
    "menuIconURI": "",
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('codey_bluetoothcontroller/imgs/0e1ae7da9712483c89b1044cd217b697.svg', 'codey_bluetoothcontroller')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "GETBLUETOOTHJOYSTICKVALUE_AXIS": [{
                "text": "GETBLUETOOTHJOYSTICKVALUE_AXIS_0",
                "value": "Rx"
            },
            {
                "text": "GETBLUETOOTHJOYSTICKVALUE_AXIS_1",
                "value": "Ry"
            },
            {
                "text": "GETBLUETOOTHJOYSTICKVALUE_AXIS_2",
                "value": "Lx"
            },
            {
                "text": "GETBLUETOOTHJOYSTICKVALUE_AXIS_3",
                "value": "Ly"
            }
        ],
        "CHECKBLUETOOTHKEY_AXIS": [{
                "text": "CHECKBLUETOOTHKEY_AXIS_0",
                "value": "N1"
            },
            {
                "text": "CHECKBLUETOOTHKEY_AXIS_1",
                "value": "N2"
            },
            {
                "text": "CHECKBLUETOOTHKEY_AXIS_2",
                "value": "N3"
            },
            {
                "text": "CHECKBLUETOOTHKEY_AXIS_3",
                "value": "N4"
            },
            {
                "text": "CHECKBLUETOOTHKEY_AXIS_4",
                "value": "Left"
            },
            {
                "text": "CHECKBLUETOOTHKEY_AXIS_5",
                "value": "Up"
            },
            {
                "text": "CHECKBLUETOOTHKEY_AXIS_6",
                "value": "Right"
            },
            {
                "text": "CHECKBLUETOOTHKEY_AXIS_7",
                "value": "Down"
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
                "value": "L_Thumb"
            },
            {
                "text": "CHECKBLUETOOTHKEY_AXIS_13",
                "value": "R_Thumb"
            },
            {
                "text": "CHECKBLUETOOTHKEY_AXIS_14",
                "value": "Start"
            },
            {
                "text": "CHECKBLUETOOTHKEY_AXIS_15",
                "value": "Select"
            }
        ]
    }
});

export default codey_bluetoothcontroller;