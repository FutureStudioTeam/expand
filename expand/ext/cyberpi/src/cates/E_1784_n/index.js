import blocks from './blocks.js';

const E_1784_n = (facepanels) => ({
    "name": "E_1784_n",
    "colors": [
        "#FF6F00",
        "#E66400",
        "#CC5900"
    ],
    "menuIconURI": window.MbApi.getExtResPath('cyberpi/imgs/2723c7731e8b4cf4b1995b783b119aa9.svg', 'cyberpi'),
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('cyberpi/imgs/c9b8a5c67ccb4f85b8313a1e49135261.svg', 'cyberpi')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "CYBERPI_DIRECTION_KEY_PRESS_FIELDMENU_1": [{
                "text": "CYBERPI_DIRECTION_KEY_PRESS_FIELDMENU_1_0",
                "value": "up"
            },
            {
                "text": "CYBERPI_DIRECTION_KEY_PRESS_FIELDMENU_1_1",
                "value": "down"
            },
            {
                "text": "CYBERPI_DIRECTION_KEY_PRESS_FIELDMENU_1_2",
                "value": "left"
            },
            {
                "text": "CYBERPI_DIRECTION_KEY_PRESS_FIELDMENU_1_3",
                "value": "right"
            },
            {
                "text": "CYBERPI_DIRECTION_KEY_PRESS_FIELDMENU_1_4",
                "value": "middle"
            },
            {
                "text": "CYBERPI_DIRECTION_KEY_PRESS_FIELDMENU_1_5",
                "value": "any_direction"
            }
        ],
        "CYBERPI_DIRECTION_KEY_COUNT_FIELDMENU_1": [{
                "text": "CYBERPI_DIRECTION_KEY_COUNT_FIELDMENU_1_0",
                "value": "up"
            },
            {
                "text": "CYBERPI_DIRECTION_KEY_COUNT_FIELDMENU_1_1",
                "value": "down"
            },
            {
                "text": "CYBERPI_DIRECTION_KEY_COUNT_FIELDMENU_1_2",
                "value": "left"
            },
            {
                "text": "CYBERPI_DIRECTION_KEY_COUNT_FIELDMENU_1_3",
                "value": "right"
            },
            {
                "text": "CYBERPI_DIRECTION_KEY_COUNT_FIELDMENU_1_4",
                "value": "middle"
            }
        ],
        "CYBERPI_BUTTON_PRESS_FIELDMENU_1": [{
                "text": "CYBERPI_BUTTON_PRESS_FIELDMENU_1_0",
                "value": "a"
            },
            {
                "text": "CYBERPI_BUTTON_PRESS_FIELDMENU_1_1",
                "value": "b"
            },
            {
                "text": "CYBERPI_BUTTON_PRESS_FIELDMENU_1_2",
                "value": "any_button"
            }
        ],
        "CYBERPI_BUTTON_COUNT_FIELDMENU_1": [{
                "text": "CYBERPI_BUTTON_COUNT_FIELDMENU_1_0",
                "value": "a"
            },
            {
                "text": "CYBERPI_BUTTON_COUNT_FIELDMENU_1_1",
                "value": "b"
            }
        ],
        "CYBERPI_BATTERY_MACADDRESS_BLENAME_AND_SO_ON_FIELDMENU_1": [{
                "text": "CYBERPI_BATTERY_MACADDRESS_BLENAME_AND_SO_ON_FIELDMENU_1_0",
                "value": "battery"
            },
            {
                "text": "CYBERPI_BATTERY_MACADDRESS_BLENAME_AND_SO_ON_FIELDMENU_1_1",
                "value": "mac"
            },
            {
                "text": "CYBERPI_BATTERY_MACADDRESS_BLENAME_AND_SO_ON_FIELDMENU_1_2",
                "value": "ble"
            },
            {
                "text": "CYBERPI_BATTERY_MACADDRESS_BLENAME_AND_SO_ON_FIELDMENU_1_3",
                "value": "get_language"
            },
            {
                "text": "CYBERPI_BATTERY_MACADDRESS_BLENAME_AND_SO_ON_FIELDMENU_1_4",
                "value": "get_shield"
            }
        ]
    }
});

export default E_1784_n;