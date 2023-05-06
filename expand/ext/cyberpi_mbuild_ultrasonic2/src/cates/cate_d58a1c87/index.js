import blocks from './blocks.js';

const cate_d58a1c87 = (facepanels) => ({
    "name": "cate_d58a1c87",
    "colors": [
        "#0AAD80",
        "#099C73",
        "#088A66"
    ],
    "menuIconURI": window.MbApi.getExtResPath('cyberpi_mbuild_ultrasonic2/imgs/04cdb408e4d9484680180a3dffc7ebd8.svg', 'cyberpi_mbuild_ultrasonic2'),
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('cyberpi_mbuild_ultrasonic2/imgs/14fc41b4c9fa493287ec050eeb1587f4.svg', 'cyberpi_mbuild_ultrasonic2')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "MBUILD_ULTRASONIC2_GET_DISTANCE_INDEX": [{
                "text": "MBUILD_ULTRASONIC2_GET_DISTANCE_INDEX_0",
                "value": "1"
            },
            {
                "text": "MBUILD_ULTRASONIC2_GET_DISTANCE_INDEX_1",
                "value": "2"
            },
            {
                "text": "MBUILD_ULTRASONIC2_GET_DISTANCE_INDEX_2",
                "value": "3"
            },
            {
                "text": "MBUILD_ULTRASONIC2_GET_DISTANCE_INDEX_3",
                "value": "4"
            },
            {
                "text": "MBUILD_ULTRASONIC2_GET_DISTANCE_INDEX_4",
                "value": "5"
            },
            {
                "text": "MBUILD_ULTRASONIC2_GET_DISTANCE_INDEX_5",
                "value": "6"
            },
            {
                "text": "MBUILD_ULTRASONIC2_GET_DISTANCE_INDEX_6",
                "value": "7"
            },
            {
                "text": "MBUILD_ULTRASONIC2_GET_DISTANCE_INDEX_7",
                "value": "8"
            }
        ],
        "MBUILD_ULTRASONIC2_SET_BRI_ORDER": [{
                "text": "MBUILD_ULTRASONIC2_SET_BRI_ORDER_0",
                "value": "\"all\""
            },
            {
                "text": "MBUILD_ULTRASONIC2_SET_BRI_ORDER_1",
                "value": "1"
            },
            {
                "text": "MBUILD_ULTRASONIC2_SET_BRI_ORDER_2",
                "value": "2"
            },
            {
                "text": "MBUILD_ULTRASONIC2_SET_BRI_ORDER_3",
                "value": "3"
            },
            {
                "text": "MBUILD_ULTRASONIC2_SET_BRI_ORDER_4",
                "value": "4"
            },
            {
                "text": "MBUILD_ULTRASONIC2_SET_BRI_ORDER_5",
                "value": "5"
            },
            {
                "text": "MBUILD_ULTRASONIC2_SET_BRI_ORDER_6",
                "value": "6"
            },
            {
                "text": "MBUILD_ULTRASONIC2_SET_BRI_ORDER_7",
                "value": "7"
            },
            {
                "text": "MBUILD_ULTRASONIC2_SET_BRI_ORDER_8",
                "value": "8"
            }
        ],
        "MBUILD_ULTRASONIC2_SHOW_EMOTION_EMOTION": [{
                "text": "MBUILD_ULTRASONIC2_SHOW_EMOTION_EMOTION_0",
                "value": "sleepy"
            },
            {
                "text": "MBUILD_ULTRASONIC2_SHOW_EMOTION_EMOTION_1",
                "value": "happy"
            },
            {
                "text": "MBUILD_ULTRASONIC2_SHOW_EMOTION_EMOTION_2",
                "value": "dizzy"
            },
            {
                "text": "MBUILD_ULTRASONIC2_SHOW_EMOTION_EMOTION_3",
                "value": "wink"
            },
            {
                "text": "MBUILD_ULTRASONIC2_SHOW_EMOTION_EMOTION_4",
                "value": "thinking"
            }
        ]
    }
});

export default cate_d58a1c87;