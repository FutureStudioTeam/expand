import blocks from './blocks.js';

const iot = (facepanels) => ({
    "name": "iot",
    "colors": [
        "#A6D200",
        "#95BD00",
        "#85A800"
    ],
    "menuIconURI": window.MbApi.getExtResPath('cyberpi/imgs/88f7b769adcd4d48a573d0e00c0707dc.svg', 'cyberpi'),
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('cyberpi/imgs/a3bc637d09c647178dd55779dde54554.svg', 'cyberpi')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "CYBERPI_GET_WEATHER_FROM_INTERNET_WEATHER_TYPE": [{
                "text": "CYBERPI_GET_WEATHER_FROM_INTERNET_WEATHER_TYPE_0",
                "value": "0"
            },
            {
                "text": "CYBERPI_GET_WEATHER_FROM_INTERNET_WEATHER_TYPE_1",
                "value": "1"
            },
            {
                "text": "CYBERPI_GET_WEATHER_FROM_INTERNET_WEATHER_TYPE_2",
                "value": "2"
            },
            {
                "text": "CYBERPI_GET_WEATHER_FROM_INTERNET_WEATHER_TYPE_3",
                "value": "3"
            },
            {
                "text": "CYBERPI_GET_WEATHER_FROM_INTERNET_WEATHER_TYPE_4",
                "value": "4"
            },
            {
                "text": "CYBERPI_GET_WEATHER_FROM_INTERNET_WEATHER_TYPE_5",
                "value": "5"
            }
        ],
        "CYBERPI_GET_AIR_QUALITY_FROM_INTERNET_AQ_TYPE": [{
                "text": "CYBERPI_GET_AIR_QUALITY_FROM_INTERNET_AQ_TYPE_0",
                "value": "aqi"
            },
            {
                "text": "CYBERPI_GET_AIR_QUALITY_FROM_INTERNET_AQ_TYPE_1",
                "value": "pm25"
            },
            {
                "text": "CYBERPI_GET_AIR_QUALITY_FROM_INTERNET_AQ_TYPE_2",
                "value": "pm10"
            },
            {
                "text": "CYBERPI_GET_AIR_QUALITY_FROM_INTERNET_AQ_TYPE_3",
                "value": "co"
            },
            {
                "text": "CYBERPI_GET_AIR_QUALITY_FROM_INTERNET_AQ_TYPE_4",
                "value": "so2"
            },
            {
                "text": "CYBERPI_GET_AIR_QUALITY_FROM_INTERNET_AQ_TYPE_5",
                "value": "no2"
            }
        ],
        "CYBERPI_GET_SUN_TIME_FROM_INTERNET_SUN_MOVE_TYPE": [{
                "text": "CYBERPI_GET_SUN_TIME_FROM_INTERNET_SUN_MOVE_TYPE_0",
                "value": "sunrise"
            },
            {
                "text": "CYBERPI_GET_SUN_TIME_FROM_INTERNET_SUN_MOVE_TYPE_1",
                "value": "sunset"
            }
        ],
        "CYBERPI_GET_SUN_TIME_FROM_INTERNET_TIME_TYPE": [{
                "text": "CYBERPI_GET_SUN_TIME_FROM_INTERNET_TIME_TYPE_0",
                "value": "time"
            },
            {
                "text": "CYBERPI_GET_SUN_TIME_FROM_INTERNET_TIME_TYPE_1",
                "value": "hour"
            },
            {
                "text": "CYBERPI_GET_SUN_TIME_FROM_INTERNET_TIME_TYPE_2",
                "value": "minute"
            }
        ],
        "CYBERPI_GET_LOCAL_TIME_FROM_INTERNET_FIELDMENU_3": [{
                "text": "CYBERPI_GET_LOCAL_TIME_FROM_INTERNET_FIELDMENU_3_0",
                "value": "时间"
            },
            {
                "text": "CYBERPI_GET_LOCAL_TIME_FROM_INTERNET_FIELDMENU_3_1",
                "value": "时"
            },
            {
                "text": "CYBERPI_GET_LOCAL_TIME_FROM_INTERNET_FIELDMENU_3_2",
                "value": "分"
            }
        ],
        "CYBERPI_GET_TIME_FROM_INTERNET_FIELDMENU_3": [{
                "text": "CYBERPI_GET_TIME_FROM_INTERNET_FIELDMENU_3_0",
                "value": "时间"
            },
            {
                "text": "CYBERPI_GET_TIME_FROM_INTERNET_FIELDMENU_3_1",
                "value": "时"
            },
            {
                "text": "CYBERPI_GET_TIME_FROM_INTERNET_FIELDMENU_3_2",
                "value": "分"
            },
            {
                "text": "CYBERPI_GET_TIME_FROM_INTERNET_FIELDMENU_3_3",
                "value": "日出时间"
            },
            {
                "text": "CYBERPI_GET_TIME_FROM_INTERNET_FIELDMENU_3_4",
                "value": "日出时"
            },
            {
                "text": "CYBERPI_GET_TIME_FROM_INTERNET_FIELDMENU_3_5",
                "value": "日出分"
            },
            {
                "text": "CYBERPI_GET_TIME_FROM_INTERNET_FIELDMENU_3_6",
                "value": "日落时间"
            },
            {
                "text": "CYBERPI_GET_TIME_FROM_INTERNET_FIELDMENU_3_7",
                "value": "日落时"
            },
            {
                "text": "CYBERPI_GET_TIME_FROM_INTERNET_FIELDMENU_3_8",
                "value": "日落分"
            }
        ],
        "BLOCK_1610527804319_FIELDMENU_1": [{
                "text": "BLOCK_1610527804319_FIELDMENU_1_0",
                "value": "UTC+0"
            },
            {
                "text": "BLOCK_1610527804319_FIELDMENU_1_1",
                "value": "UTC+1"
            },
            {
                "text": "BLOCK_1610527804319_FIELDMENU_1_2",
                "value": "UTC+2"
            },
            {
                "text": "BLOCK_1610527804319_FIELDMENU_1_3",
                "value": "UTC+3"
            },
            {
                "text": "BLOCK_1610527804319_FIELDMENU_1_4",
                "value": "UTC+4"
            },
            {
                "text": "BLOCK_1610527804319_FIELDMENU_1_5",
                "value": "UTC+5"
            },
            {
                "text": "BLOCK_1610527804319_FIELDMENU_1_6",
                "value": "UTC+6"
            },
            {
                "text": "BLOCK_1610527804319_FIELDMENU_1_7",
                "value": "UTC+7"
            },
            {
                "text": "BLOCK_1610527804319_FIELDMENU_1_8",
                "value": "UTC+8"
            },
            {
                "text": "BLOCK_1610527804319_FIELDMENU_1_9",
                "value": "UTC+9"
            },
            {
                "text": "BLOCK_1610527804319_FIELDMENU_1_10",
                "value": "UTC+10"
            },
            {
                "text": "BLOCK_1610527804319_FIELDMENU_1_11",
                "value": "UTC+11"
            },
            {
                "text": "BLOCK_1610527804319_FIELDMENU_1_12",
                "value": "UTC+12"
            },
            {
                "text": "BLOCK_1610527804319_FIELDMENU_1_13",
                "value": "UTC-11"
            },
            {
                "text": "BLOCK_1610527804319_FIELDMENU_1_14",
                "value": "UTC-10"
            },
            {
                "text": "BLOCK_1610527804319_FIELDMENU_1_15",
                "value": "UTC-9"
            },
            {
                "text": "BLOCK_1610527804319_FIELDMENU_1_16",
                "value": "UTC-8"
            },
            {
                "text": "BLOCK_1610527804319_FIELDMENU_1_17",
                "value": "UTC-7"
            },
            {
                "text": "BLOCK_1610527804319_FIELDMENU_1_18",
                "value": "UTC-6"
            },
            {
                "text": "BLOCK_1610527804319_FIELDMENU_1_19",
                "value": "UTC-5"
            },
            {
                "text": "BLOCK_1610527804319_FIELDMENU_1_20",
                "value": "UTC-4"
            },
            {
                "text": "BLOCK_1610527804319_FIELDMENU_1_21",
                "value": "UTC-3"
            },
            {
                "text": "BLOCK_1610527804319_FIELDMENU_1_22",
                "value": "UTC-2"
            },
            {
                "text": "BLOCK_1610527804319_FIELDMENU_1_23",
                "value": "UTC-1"
            }
        ],
        "BLOCK_1610527804319_FIELDMENU_2": [{
                "text": "BLOCK_1610527804319_FIELDMENU_2_0",
                "value": "year"
            },
            {
                "text": "BLOCK_1610527804319_FIELDMENU_2_1",
                "value": "month"
            },
            {
                "text": "BLOCK_1610527804319_FIELDMENU_2_2",
                "value": "date"
            },
            {
                "text": "BLOCK_1610527804319_FIELDMENU_2_3",
                "value": "day"
            },
            {
                "text": "BLOCK_1610527804319_FIELDMENU_2_4",
                "value": "hour"
            },
            {
                "text": "BLOCK_1610527804319_FIELDMENU_2_5",
                "value": "minute"
            },
            {
                "text": "BLOCK_1610527804319_FIELDMENU_2_6",
                "value": "second"
            }
        ]
    }
});

export default iot;