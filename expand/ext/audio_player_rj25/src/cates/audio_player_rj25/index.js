import blocks from './blocks.js';

const audio_player_rj25 = (facepanels) => ({
    "name": "audio_player_rj25",
    "colors": [
        "#9013FE",
        "#8301F5",
        "#7401D9"
    ],
    "menuIconURI": "",
    "blockIcon": null,
    "blocks": blocks(facepanels),
    "menus": {
        "AUDIOPLAYER_SET_PLAY_MODE_PLAY_MODE": [{
                "text": "AUDIOPLAYER_SET_PLAY_MODE_PLAY_MODE_0",
                "value": "0"
            },
            {
                "text": "AUDIOPLAYER_SET_PLAY_MODE_PLAY_MODE_1",
                "value": "1"
            },
            {
                "text": "AUDIOPLAYER_SET_PLAY_MODE_PLAY_MODE_2",
                "value": "2"
            },
            {
                "text": "AUDIOPLAYER_SET_PLAY_MODE_PLAY_MODE_3",
                "value": "3"
            }
        ]
    }
});

export default audio_player_rj25;