import blocks from './blocks.js';

const cate_sprite_broadcast = (facepanels) => ({
    "name": "cate_sprite_broadcast",
    "colors": [
        "#6886C4",
        "#5275BC",
        "#4366AD"
    ],
    "menuIconURI": "",
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('sprite_broadcast/imgs/d0336c81646843428059e5804437c43a.svg', 'sprite_broadcast')
    },
    "blocks": blocks(facepanels),
    "menus": {}
});

export default cate_sprite_broadcast;