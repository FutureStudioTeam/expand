import blocks from './blocks.js';

const cate_f1304643 = (facepanels) => ({
    "name": "cate_f1304643",
    "colors": [
        "#42CCFF",
        "#22C3FF",
        "#02BBFF"
    ],
    "menuIconURI": window.MbApi.getExtResPath('mblock_mobile_ext/imgs/262b68c38a0d4f418827d75b27cccbf1.svg', 'mblock_mobile_ext'),
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('mblock_mobile_ext/imgs/33dc9f3ec8ca47839dffed309f122bd0.svg', 'mblock_mobile_ext')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "BLOCK_1567130118234_GESTURE": [{
                "text": "BLOCK_1567130118234_GESTURE_0",
                "value": "up"
            },
            {
                "text": "BLOCK_1567130118234_GESTURE_1",
                "value": "down"
            },
            {
                "text": "BLOCK_1567130118234_GESTURE_2",
                "value": "left"
            },
            {
                "text": "BLOCK_1567130118234_GESTURE_3",
                "value": "right"
            }
        ],
        "BLOCK_1567130298625_TOUCH": [{
                "text": "BLOCK_1567130298625_TOUCH_0",
                "value": "touchdown"
            },
            {
                "text": "BLOCK_1567130298625_TOUCH_1",
                "value": "touchend"
            }
        ],
        "BLOCK_1567130768076_LEAN": [{
                "text": "BLOCK_1567130768076_LEAN_0",
                "value": "up"
            },
            {
                "text": "BLOCK_1567130768076_LEAN_1",
                "value": "down"
            },
            {
                "text": "BLOCK_1567130768076_LEAN_2",
                "value": "left"
            },
            {
                "text": "BLOCK_1567130768076_LEAN_3",
                "value": "right"
            }
        ]
    }
});

export default cate_f1304643;