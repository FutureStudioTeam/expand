import blocks from './blocks.js';

const E_1783_n = (facepanels) => ({
    "name": "E_1783_n",
    "colors": [
        "#9300D8",
        "#8400C2",
        "#7600AD"
    ],
    "menuIconURI": window.MbApi.getExtResPath('haloboard/imgs/f484cf84ab654154a76e27775654f348.svg', 'haloboard'),
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('haloboard/imgs/1112cd46466b4f98b4dcd7f24c12c54b.svg', 'haloboard')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "BLOCK_1570879365614_LED_ANIMATION": [{
                "text": "BLOCK_1570879365614_LED_ANIMATION_0",
                "value": "rainbow"
            },
            {
                "text": "BLOCK_1570879365614_LED_ANIMATION_1",
                "value": "spoondrift"
            },
            {
                "text": "BLOCK_1570879365614_LED_ANIMATION_2",
                "value": "meteor_blue"
            },
            {
                "text": "BLOCK_1570879365614_LED_ANIMATION_3",
                "value": "meteor_green"
            },
            {
                "text": "BLOCK_1570879365614_LED_ANIMATION_4",
                "value": "flash_red"
            },
            {
                "text": "BLOCK_1570879365614_LED_ANIMATION_5",
                "value": "flash_orange"
            },
            {
                "text": "BLOCK_1570879365614_LED_ANIMATION_6",
                "value": "firefly"
            }
        ],
        "HALOBOARD_SHOW_RING_EFFECT_LED_ANIMATION": [{
                "text": "HALOBOARD_SHOW_RING_EFFECT_LED_ANIMATION_0",
                "value": "rainbow"
            },
            {
                "text": "HALOBOARD_SHOW_RING_EFFECT_LED_ANIMATION_1",
                "value": "spoondrift"
            },
            {
                "text": "HALOBOARD_SHOW_RING_EFFECT_LED_ANIMATION_2",
                "value": "meteor"
            },
            {
                "text": "HALOBOARD_SHOW_RING_EFFECT_LED_ANIMATION_3",
                "value": "firefly"
            }
        ]
    }
});

export default E_1783_n;