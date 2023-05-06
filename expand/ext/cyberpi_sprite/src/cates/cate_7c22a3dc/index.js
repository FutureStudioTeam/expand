import blocks from './blocks.js';

const cate_7c22a3dc = (facepanels) => ({
    "name": "cate_7c22a3dc",
    "colors": [
        "#9300DB",
        "#8400C5",
        "#7600AF"
    ],
    "menuIconURI": window.MbApi.getExtResPath('cyberpi_sprite/imgs/4b49eb40a5f04d159617581e4c02c7fd.svg', 'cyberpi_sprite'),
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('cyberpi_sprite/imgs/554e93fc7fbc41b5b8f3455d5625f02f.svg', 'cyberpi_sprite')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "CYBERPI_SPRITE_MOVE_X_AND_Y_FIELDMENU_2": [{
                "text": "CYBERPI_SPRITE_MOVE_X_AND_Y_FIELDMENU_2_0",
                "value": "up"
            },
            {
                "text": "CYBERPI_SPRITE_MOVE_X_AND_Y_FIELDMENU_2_1",
                "value": "y"
            },
            {
                "text": "CYBERPI_SPRITE_MOVE_X_AND_Y_FIELDMENU_2_2",
                "value": "left"
            },
            {
                "text": "CYBERPI_SPRITE_MOVE_X_AND_Y_FIELDMENU_2_3",
                "value": "x"
            }
        ],
        "CYBERPI_SKETCH_GET_X_Y_ANGLE_AND_SIZE_FIELDMENU_1": [{
                "text": "CYBERPI_SKETCH_GET_X_Y_ANGLE_AND_SIZE_FIELDMENU_1_0",
                "value": "x"
            },
            {
                "text": "CYBERPI_SKETCH_GET_X_Y_ANGLE_AND_SIZE_FIELDMENU_1_1",
                "value": "y"
            },
            {
                "text": "CYBERPI_SKETCH_GET_X_Y_ANGLE_AND_SIZE_FIELDMENU_1_2",
                "value": "angle"
            },
            {
                "text": "CYBERPI_SKETCH_GET_X_Y_ANGLE_AND_SIZE_FIELDMENU_1_3",
                "value": "size"
            }
        ]
    }
});

export default cate_7c22a3dc;