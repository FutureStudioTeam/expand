import blocks from './blocks.js';

const quad_color_sensor = (facepanels) => ({
    "name": "quad_color_sensor",
    "colors": [
        "#0AAD80",
        "#099C73",
        "#088A66"
    ],
    "menuIconURI": window.MbApi.getExtResPath('mbuild_quad_color_sensor/imgs/5690e20fc54047199e8b45e2b5c8cc2b.svg', 'mbuild_quad_color_sensor'),
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('mbuild_quad_color_sensor/imgs/f76310bd5c0346908cd7e9630fd0ddf4.svg', 'mbuild_quad_color_sensor')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "BLOCK_1618397452023_INDEX": [{
                "text": "BLOCK_1618397452023_INDEX_0",
                "value": "1"
            },
            {
                "text": "BLOCK_1618397452023_INDEX_1",
                "value": "2"
            },
            {
                "text": "BLOCK_1618397452023_INDEX_2",
                "value": "3"
            },
            {
                "text": "BLOCK_1618397452023_INDEX_3",
                "value": "4"
            },
            {
                "text": "BLOCK_1618397452023_INDEX_4",
                "value": "5"
            },
            {
                "text": "BLOCK_1618397452023_INDEX_5",
                "value": "6"
            },
            {
                "text": "BLOCK_1618397452023_INDEX_6",
                "value": "7"
            },
            {
                "text": "BLOCK_1618397452023_INDEX_7",
                "value": "8"
            }
        ],
        "BLOCK_1618397452023_INPUTMENU_1": [{
                "text": "BLOCK_1618397452023_INPUTMENU_1_0",
                "value": "line"
            },
            {
                "text": "BLOCK_1618397452023_INPUTMENU_1_1",
                "value": "background"
            },
            {
                "text": "BLOCK_1618397452023_INPUTMENU_1_2",
                "value": "white"
            },
            {
                "text": "BLOCK_1618397452023_INPUTMENU_1_3",
                "value": "red"
            },
            {
                "text": "BLOCK_1618397452023_INPUTMENU_1_4",
                "value": "yellow"
            },
            {
                "text": "BLOCK_1618397452023_INPUTMENU_1_5",
                "value": "green"
            },
            {
                "text": "BLOCK_1618397452023_INPUTMENU_1_6",
                "value": "cyan"
            },
            {
                "text": "BLOCK_1618397452023_INPUTMENU_1_7",
                "value": "blue"
            },
            {
                "text": "BLOCK_1618397452023_INPUTMENU_1_8",
                "value": "purple"
            },
            {
                "text": "BLOCK_1618397452023_INPUTMENU_1_9",
                "value": "black"
            }
        ],
        "BLOCK_1618397452023_INPUTMENU_2": [{
                "text": "BLOCK_1618397452023_INPUTMENU_2_0",
                "value": "0"
            },
            {
                "text": "BLOCK_1618397452023_INPUTMENU_2_1",
                "value": "1"
            },
            {
                "text": "BLOCK_1618397452023_INPUTMENU_2_2",
                "value": "2"
            },
            {
                "text": "BLOCK_1618397452023_INPUTMENU_2_3",
                "value": "3"
            }
        ],
        "BLOCK_1618364921511_INPUTMENU_2": [{
                "text": "BLOCK_1618364921511_INPUTMENU_2_0",
                "value": "0"
            },
            {
                "text": "BLOCK_1618364921511_INPUTMENU_2_1",
                "value": "1"
            },
            {
                "text": "BLOCK_1618364921511_INPUTMENU_2_2",
                "value": "2"
            },
            {
                "text": "BLOCK_1618364921511_INPUTMENU_2_3",
                "value": "3"
            },
            {
                "text": "BLOCK_1618364921511_INPUTMENU_2_4",
                "value": "4"
            },
            {
                "text": "BLOCK_1618364921511_INPUTMENU_2_5",
                "value": "5"
            },
            {
                "text": "BLOCK_1618364921511_INPUTMENU_2_6",
                "value": "6"
            },
            {
                "text": "BLOCK_1618364921511_INPUTMENU_2_7",
                "value": "7"
            },
            {
                "text": "BLOCK_1618364921511_INPUTMENU_2_8",
                "value": "8"
            },
            {
                "text": "BLOCK_1618364921511_INPUTMENU_2_9",
                "value": "9"
            },
            {
                "text": "BLOCK_1618364921511_INPUTMENU_2_10",
                "value": "10"
            },
            {
                "text": "BLOCK_1618364921511_INPUTMENU_2_11",
                "value": "11"
            },
            {
                "text": "BLOCK_1618364921511_INPUTMENU_2_12",
                "value": "12"
            },
            {
                "text": "BLOCK_1618364921511_INPUTMENU_2_13",
                "value": "13"
            },
            {
                "text": "BLOCK_1618364921511_INPUTMENU_2_14",
                "value": "14"
            },
            {
                "text": "BLOCK_1618364921511_INPUTMENU_2_15",
                "value": "15"
            }
        ],
        "MBUILD_QUAD_COLOR_SENSOR_IS_LINE_AND_BACKGROUND_INPUTMENU_2": [{
                "text": "MBUILD_QUAD_COLOR_SENSOR_IS_LINE_AND_BACKGROUND_INPUTMENU_2_0",
                "value": "R2"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_IS_LINE_AND_BACKGROUND_INPUTMENU_2_1",
                "value": "R1"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_IS_LINE_AND_BACKGROUND_INPUTMENU_2_2",
                "value": "L1"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_IS_LINE_AND_BACKGROUND_INPUTMENU_2_3",
                "value": "L2"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_IS_LINE_AND_BACKGROUND_INPUTMENU_2_4",
                "value": "any"
            }
        ],
        "MBUILD_QUAD_COLOR_SENSOR_IS_LINE_AND_BACKGROUND_INPUTMENU_3": [{
                "text": "MBUILD_QUAD_COLOR_SENSOR_IS_LINE_AND_BACKGROUND_INPUTMENU_3_0",
                "value": "line"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_IS_LINE_AND_BACKGROUND_INPUTMENU_3_1",
                "value": "background"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_IS_LINE_AND_BACKGROUND_INPUTMENU_3_2",
                "value": "white"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_IS_LINE_AND_BACKGROUND_INPUTMENU_3_3",
                "value": "red"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_IS_LINE_AND_BACKGROUND_INPUTMENU_3_4",
                "value": "green"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_IS_LINE_AND_BACKGROUND_INPUTMENU_3_5",
                "value": "blue"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_IS_LINE_AND_BACKGROUND_INPUTMENU_3_6",
                "value": "yellow"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_IS_LINE_AND_BACKGROUND_INPUTMENU_3_7",
                "value": "cyan"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_IS_LINE_AND_BACKGROUND_INPUTMENU_3_8",
                "value": "purple"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_IS_LINE_AND_BACKGROUND_INPUTMENU_3_9",
                "value": "black"
            }
        ],
        "MBUILD_QUAD_COLOR_SENSOR_GET_RGB_GRAY_LIGHT_INPUTMENU_2": [{
                "text": "MBUILD_QUAD_COLOR_SENSOR_GET_RGB_GRAY_LIGHT_INPUTMENU_2_0",
                "value": "R2"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_GET_RGB_GRAY_LIGHT_INPUTMENU_2_1",
                "value": "R1"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_GET_RGB_GRAY_LIGHT_INPUTMENU_2_2",
                "value": "L1"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_GET_RGB_GRAY_LIGHT_INPUTMENU_2_3",
                "value": "L2"
            }
        ],
        "MBUILD_QUAD_COLOR_SENSOR_GET_RGB_GRAY_LIGHT_INPUTMENU_3": [{
                "text": "MBUILD_QUAD_COLOR_SENSOR_GET_RGB_GRAY_LIGHT_INPUTMENU_3_0",
                "value": "red"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_GET_RGB_GRAY_LIGHT_INPUTMENU_3_1",
                "value": "green"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_GET_RGB_GRAY_LIGHT_INPUTMENU_3_2",
                "value": "blue"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_GET_RGB_GRAY_LIGHT_INPUTMENU_3_3",
                "value": "gray"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_GET_RGB_GRAY_LIGHT_INPUTMENU_3_4",
                "value": "light"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_GET_RGB_GRAY_LIGHT_INPUTMENU_3_5",
                "value": "color_sta"
            }
        ],
        "BLOCK_1618382823173_FIELDMENU_3": [{
                "text": "BLOCK_1618382823173_FIELDMENU_3_0",
                "value": "red"
            },
            {
                "text": "BLOCK_1618382823173_FIELDMENU_3_1",
                "value": "green"
            },
            {
                "text": "BLOCK_1618382823173_FIELDMENU_3_2",
                "value": "blue"
            }
        ],
        "MBUILD_QUAD_COLOR_SENSOR_SET_LED_FIELDMENU_3": [{
                "text": "MBUILD_QUAD_COLOR_SENSOR_SET_LED_FIELDMENU_3_0",
                "value": "white"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_SET_LED_FIELDMENU_3_1",
                "value": "red"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_SET_LED_FIELDMENU_3_2",
                "value": "green"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_SET_LED_FIELDMENU_3_3",
                "value": "blue"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_SET_LED_FIELDMENU_3_4",
                "value": "yellow"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_SET_LED_FIELDMENU_3_5",
                "value": "cyan"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_SET_LED_FIELDMENU_3_6",
                "value": "purple"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_SET_LED_FIELDMENU_3_7",
                "value": "black"
            }
        ],
        "BLOCK_1619088858273_CHANNEL": [{
                "text": "BLOCK_1619088858273_CHANNEL_0",
                "value": "R2"
            },
            {
                "text": "BLOCK_1619088858273_CHANNEL_1",
                "value": "R1"
            },
            {
                "text": "BLOCK_1619088858273_CHANNEL_2",
                "value": "L1"
            },
            {
                "text": "BLOCK_1619088858273_CHANNEL_3",
                "value": "L2"
            }
        ],
        "MBUILD_QUAD_COLOR_SENSOR_IS_COLOR_INPUTMENU_3": [{
                "text": "MBUILD_QUAD_COLOR_SENSOR_IS_COLOR_INPUTMENU_3_0",
                "value": "white"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_IS_COLOR_INPUTMENU_3_1",
                "value": "red"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_IS_COLOR_INPUTMENU_3_2",
                "value": "yellow"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_IS_COLOR_INPUTMENU_3_3",
                "value": "green"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_IS_COLOR_INPUTMENU_3_4",
                "value": "cyan"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_IS_COLOR_INPUTMENU_3_5",
                "value": "blue"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_IS_COLOR_INPUTMENU_3_6",
                "value": "purple"
            },
            {
                "text": "MBUILD_QUAD_COLOR_SENSOR_IS_COLOR_INPUTMENU_3_7",
                "value": "black"
            }
        ]
    }
});

export default quad_color_sensor;