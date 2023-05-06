import blocks from './blocks.js';

const 7 c2d3f67 - d983 - 4639 - 80 da - d58db2e1e06d = (facepanels) => ({
    "name": "7c2d3f67-d983-4639-80da-d58db2e1e06d",
    "colors": [
        "#7ED321",
        "#71BE1E",
        "#65A91A"
    ],
    "menuIconURI": "",
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('weather/imgs/ac6d8d5285e14ad1b3b781f43a1c3445.svg', 'weather')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "SUNRISE_TIME": [{
                "text": "SUNRISE_TIME_0",
                "value": "0"
            },
            {
                "text": "SUNRISE_TIME_1",
                "value": "1"
            }
        ],
        "METEOROLOGICAL_AIRQUALITY": [{
                "text": "METEOROLOGICAL_AIRQUALITY_0",
                "value": "aqi"
            },
            {
                "text": "METEOROLOGICAL_AIRQUALITY_1",
                "value": "pm25"
            },
            {
                "text": "METEOROLOGICAL_AIRQUALITY_2",
                "value": "pm10"
            },
            {
                "text": "METEOROLOGICAL_AIRQUALITY_3",
                "value": "co"
            },
            {
                "text": "METEOROLOGICAL_AIRQUALITY_4",
                "value": "so2"
            },
            {
                "text": "METEOROLOGICAL_AIRQUALITY_5",
                "value": "no2"
            }
        ]
    }
});

export default 7 c2d3f67 - d983 - 4639 - 80 da - d58db2e1e06d;