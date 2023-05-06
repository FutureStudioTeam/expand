import blocks from './blocks.js';

const E_1783_n = (facepanels) => ({
    "name": "E_1783_n",
    "colors": [
        "#9300D8",
        "#8400C2",
        "#7600AD"
    ],
    "menuIconURI": window.MbApi.getExtResPath('cyberpi/imgs/9f52384accbe4b84832fcd1dfc162b8e.svg', 'cyberpi'),
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('cyberpi/imgs/2b89b19e59314ee6a5678e891086adf9.svg', 'cyberpi')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "CYBERPI_PLAY_LED_ANIMATION_UNTIL_LED_ANIMATION": [{
                "text": "CYBERPI_PLAY_LED_ANIMATION_UNTIL_LED_ANIMATION_0",
                "value": "rainbow"
            },
            {
                "text": "CYBERPI_PLAY_LED_ANIMATION_UNTIL_LED_ANIMATION_1",
                "value": "spoondrift"
            },
            {
                "text": "CYBERPI_PLAY_LED_ANIMATION_UNTIL_LED_ANIMATION_2",
                "value": "meteor_blue"
            },
            {
                "text": "CYBERPI_PLAY_LED_ANIMATION_UNTIL_LED_ANIMATION_3",
                "value": "meteor_green"
            },
            {
                "text": "CYBERPI_PLAY_LED_ANIMATION_UNTIL_LED_ANIMATION_4",
                "value": "flash_red"
            },
            {
                "text": "CYBERPI_PLAY_LED_ANIMATION_UNTIL_LED_ANIMATION_5",
                "value": "flash_orange"
            },
            {
                "text": "CYBERPI_PLAY_LED_ANIMATION_UNTIL_LED_ANIMATION_6",
                "value": "firefly"
            }
        ],
        "CYBERPI_LED_SHOW_SINGLE_WITH_COLOR_AND_TIME_2_FIELDMENU_1": [{
                "text": "CYBERPI_LED_SHOW_SINGLE_WITH_COLOR_AND_TIME_2_FIELDMENU_1_0",
                "value": "\"all\""
            },
            {
                "text": "CYBERPI_LED_SHOW_SINGLE_WITH_COLOR_AND_TIME_2_FIELDMENU_1_1",
                "value": "1"
            },
            {
                "text": "CYBERPI_LED_SHOW_SINGLE_WITH_COLOR_AND_TIME_2_FIELDMENU_1_2",
                "value": "2"
            },
            {
                "text": "CYBERPI_LED_SHOW_SINGLE_WITH_COLOR_AND_TIME_2_FIELDMENU_1_3",
                "value": "3"
            },
            {
                "text": "CYBERPI_LED_SHOW_SINGLE_WITH_COLOR_AND_TIME_2_FIELDMENU_1_4",
                "value": "4"
            },
            {
                "text": "CYBERPI_LED_SHOW_SINGLE_WITH_COLOR_AND_TIME_2_FIELDMENU_1_5",
                "value": "5"
            }
        ],
        "CYBERPI_LED_SHOW_SINGLE_WITH_COLOR_AND_TIME_FIELDMENU_1": [{
                "text": "CYBERPI_LED_SHOW_SINGLE_WITH_COLOR_AND_TIME_FIELDMENU_1_0",
                "value": "0"
            },
            {
                "text": "CYBERPI_LED_SHOW_SINGLE_WITH_COLOR_AND_TIME_FIELDMENU_1_1",
                "value": "1"
            },
            {
                "text": "CYBERPI_LED_SHOW_SINGLE_WITH_COLOR_AND_TIME_FIELDMENU_1_2",
                "value": "2"
            },
            {
                "text": "CYBERPI_LED_SHOW_SINGLE_WITH_COLOR_AND_TIME_FIELDMENU_1_3",
                "value": "3"
            },
            {
                "text": "CYBERPI_LED_SHOW_SINGLE_WITH_COLOR_AND_TIME_FIELDMENU_1_4",
                "value": "4"
            },
            {
                "text": "CYBERPI_LED_SHOW_SINGLE_WITH_COLOR_AND_TIME_FIELDMENU_1_5",
                "value": "5"
            }
        ]
    }
});

export default E_1783_n;