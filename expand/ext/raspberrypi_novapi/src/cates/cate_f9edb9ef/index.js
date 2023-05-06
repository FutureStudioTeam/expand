import blocks from './blocks.js';

const cate_f9edb9ef = (facepanels) => ({
    "name": "cate_f9edb9ef",
    "colors": [
        "#42CCFF",
        "#22C3FF",
        "#02BBFF"
    ],
    "menuIconURI": "",
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('raspberrypi_novapi/imgs/0bf6064028cf4dfd9d677c4a795a8f2a.png', 'raspberrypi_novapi')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "SMARTSERVO_INIT_NUM": [{
                "text": "SMARTSERVO_INIT_NUM_0",
                "value": "1"
            },
            {
                "text": "SMARTSERVO_INIT_NUM_1",
                "value": "2"
            },
            {
                "text": "SMARTSERVO_INIT_NUM_2",
                "value": "3"
            },
            {
                "text": "SMARTSERVO_INIT_NUM_3",
                "value": "4"
            },
            {
                "text": "SMARTSERVO_INIT_NUM_4",
                "value": "5"
            },
            {
                "text": "SMARTSERVO_INIT_NUM_5",
                "value": "6"
            },
            {
                "text": "SMARTSERVO_INIT_NUM_6",
                "value": "7"
            },
            {
                "text": "SMARTSERVO_INIT_NUM_7",
                "value": "8"
            },
            {
                "text": "SMARTSERVO_INIT_NUM_8",
                "value": "9"
            },
            {
                "text": "SMARTSERVO_INIT_NUM_9",
                "value": "10"
            },
            {
                "text": "SMARTSERVO_INIT_NUM_10",
                "value": "11"
            },
            {
                "text": "SMARTSERVO_INIT_NUM_11",
                "value": "12"
            }
        ],
        "DRGB_INIT_PORT": [{
                "text": "DRGB_INIT_PORT_0",
                "value": "PORT1"
            },
            {
                "text": "DRGB_INIT_PORT_1",
                "value": "PORT2"
            },
            {
                "text": "DRGB_INIT_PORT_2",
                "value": "PORT3"
            },
            {
                "text": "DRGB_INIT_PORT_3",
                "value": "PORT4"
            },
            {
                "text": "DRGB_INIT_PORT_4",
                "value": "PORT5"
            }
        ],
        "SMARTSERVO_INIT_INDEX": [{
                "text": "SMARTSERVO_INIT_INDEX_0",
                "value": "INDEX1"
            },
            {
                "text": "SMARTSERVO_INIT_INDEX_1",
                "value": "INDEX2"
            },
            {
                "text": "SMARTSERVO_INIT_INDEX_2",
                "value": "INDEX3"
            },
            {
                "text": "SMARTSERVO_INIT_INDEX_3",
                "value": "INDEX4"
            },
            {
                "text": "SMARTSERVO_INIT_INDEX_4",
                "value": "INDEX5"
            },
            {
                "text": "SMARTSERVO_INIT_INDEX_5",
                "value": "INDEX6"
            }
        ]
    }
});

export default cate_f9edb9ef;