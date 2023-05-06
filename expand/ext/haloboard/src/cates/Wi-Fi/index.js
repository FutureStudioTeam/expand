import blocks from './blocks.js';

const Wi - Fi = (facepanels) => ({
    "name": "Wi-Fi",
    "colors": [
        "#4FD300",
        "#47BE00",
        "#3FA900"
    ],
    "menuIconURI": window.MbApi.getExtResPath('haloboard/imgs/55b4bed401ef4d539369305974034366.svg', 'haloboard'),
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('haloboard/imgs/cb5ebc74d43c4f9bbb85e9770832a18b.svg', 'haloboard')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "HALOBOARD_WIFI_SPEECH_RECOGNITION_LANGUAGE": [{
                "text": "HALOBOARD_WIFI_SPEECH_RECOGNITION_LANGUAGE_0",
                "value": "LAN_CHINESE"
            },
            {
                "text": "HALOBOARD_WIFI_SPEECH_RECOGNITION_LANGUAGE_1",
                "value": "LAN_ENGLISH"
            }
        ],
        "HALOBOARD_WIFI_SPEECH_RECOGNITION_V2_LANGUAGE": [{
                "text": "HALOBOARD_WIFI_SPEECH_RECOGNITION_V2_LANGUAGE_0",
                "value": "mandarin"
            },
            {
                "text": "HALOBOARD_WIFI_SPEECH_RECOGNITION_V2_LANGUAGE_1",
                "value": "cantonese"
            },
            {
                "text": "HALOBOARD_WIFI_SPEECH_RECOGNITION_V2_LANGUAGE_2",
                "value": "mandarin_taiwan"
            },
            {
                "text": "HALOBOARD_WIFI_SPEECH_RECOGNITION_V2_LANGUAGE_3",
                "value": "english"
            },
            {
                "text": "HALOBOARD_WIFI_SPEECH_RECOGNITION_V2_LANGUAGE_4",
                "value": "French"
            },
            {
                "text": "HALOBOARD_WIFI_SPEECH_RECOGNITION_V2_LANGUAGE_5",
                "value": "German"
            },
            {
                "text": "HALOBOARD_WIFI_SPEECH_RECOGNITION_V2_LANGUAGE_6",
                "value": "italian"
            },
            {
                "text": "HALOBOARD_WIFI_SPEECH_RECOGNITION_V2_LANGUAGE_7",
                "value": "spanish"
            },
            {
                "text": "HALOBOARD_WIFI_SPEECH_RECOGNITION_V2_LANGUAGE_8",
                "value": "japanese"
            },
            {
                "text": "HALOBOARD_WIFI_SPEECH_RECOGNITION_V2_LANGUAGE_9",
                "value": "portuguese"
            },
            {
                "text": "HALOBOARD_WIFI_SPEECH_RECOGNITION_V2_LANGUAGE_10",
                "value": "russian"
            },
            {
                "text": "HALOBOARD_WIFI_SPEECH_RECOGNITION_V2_LANGUAGE_11",
                "value": "korean"
            }
        ],
        "BLOCK_1560701681811_WEATHER_TYPE": [{
                "text": "BLOCK_1560701681811_WEATHER_TYPE_0",
                "value": "0"
            },
            {
                "text": "BLOCK_1560701681811_WEATHER_TYPE_1",
                "value": "1"
            },
            {
                "text": "BLOCK_1560701681811_WEATHER_TYPE_2",
                "value": "2"
            },
            {
                "text": "BLOCK_1560701681811_WEATHER_TYPE_3",
                "value": "3"
            },
            {
                "text": "BLOCK_1560701681811_WEATHER_TYPE_4",
                "value": "4"
            },
            {
                "text": "BLOCK_1560701681811_WEATHER_TYPE_5",
                "value": "5"
            }
        ],
        "BLOCK_1560702195139_AQ_TYPE": [{
                "text": "BLOCK_1560702195139_AQ_TYPE_0",
                "value": "aqi"
            },
            {
                "text": "BLOCK_1560702195139_AQ_TYPE_1",
                "value": "pm25"
            },
            {
                "text": "BLOCK_1560702195139_AQ_TYPE_2",
                "value": "pm10"
            },
            {
                "text": "BLOCK_1560702195139_AQ_TYPE_3",
                "value": "co"
            },
            {
                "text": "BLOCK_1560702195139_AQ_TYPE_4",
                "value": "so2"
            },
            {
                "text": "BLOCK_1560702195139_AQ_TYPE_5",
                "value": "no2"
            }
        ],
        "BLOCK_1560702421892_SUN_MOVE_TYPE": [{
                "text": "BLOCK_1560702421892_SUN_MOVE_TYPE_0",
                "value": "sunrise"
            },
            {
                "text": "BLOCK_1560702421892_SUN_MOVE_TYPE_1",
                "value": "sunset"
            }
        ],
        "BLOCK_1560702421892_TIME_TYPE": [{
                "text": "BLOCK_1560702421892_TIME_TYPE_0",
                "value": "time"
            },
            {
                "text": "BLOCK_1560702421892_TIME_TYPE_1",
                "value": "hour"
            },
            {
                "text": "BLOCK_1560702421892_TIME_TYPE_2",
                "value": "minute"
            }
        ],
        "BLOCK_1560702536759_FIELDMENU_3": [{
                "text": "BLOCK_1560702536759_FIELDMENU_3_0",
                "value": "时间"
            },
            {
                "text": "BLOCK_1560702536759_FIELDMENU_3_1",
                "value": "时"
            },
            {
                "text": "BLOCK_1560702536759_FIELDMENU_3_2",
                "value": "分"
            },
            {
                "text": "BLOCK_1560702536759_FIELDMENU_3_3",
                "value": "秒"
            }
        ]
    }
});

export default Wi - Fi;