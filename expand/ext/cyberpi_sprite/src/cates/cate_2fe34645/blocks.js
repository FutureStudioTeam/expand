const blocks = (extFacePanels) => ([{
        "opcode": "cyberpi_sprite_variable_list",
        "blockType": "string",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "fieldVariable_1": {
                "type": "fieldVariable",
                "defaultValue": ""
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": this.funcs.cyberpiSpriteVariableListCodesCode
            }
        },
        "handler": this.funcs.cyberpi_sprite_variable_list
    },
    {
        "opcode": "cyberpi_sprite_background_fill_with_color",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "color_1": {
                "type": "color",
                "defaultValue": "#000000"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.cyberpiSpriteBackgroundFillWithColorCodesCode
            }
        },
        "handler": this.funcs.cyberpi_sprite_background_fill_with_color
    },
    {
        "opcode": "cyberpi_sprite_background_fill_with_rgb",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "number_1": {
                "type": "number",
                "defaultValue": 0
            },
            "number_2": {
                "type": "number",
                "defaultValue": 0
            },
            "number_3": {
                "type": "number",
                "defaultValue": 0
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.cyberpiSpriteBackgroundFillWithRgbCodesCode
            }
        },
        "handler": this.funcs.cyberpi_sprite_background_fill_with_rgb
    },
    {
        "opcode": "BLOCK_1592812638164",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1592812638164
    },
    {
        "opcode": "cyberpi_sprite_draw_pixel_with_matrix16",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "string_1": {
                "type": "inputVariable",
                "defaultValue": "string_2"
            },
            "facePanel_2": extFacePanels['5f0995c5']
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.cyberpiSpriteDrawPixelWithMatrix16CodesCode,
                "sections": {
                    "lib": this.funcs.cyberpiSpriteDrawPixelWithMatrix16CodesLib
                }
            }
        },
        "handler": this.funcs.cyberpi_sprite_draw_pixel_with_matrix16
    },
    {
        "opcode": "cyberpi_sprite_draw_pixel_with_icon",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "string_1": {
                "type": "inputVariable",
                "defaultValue": "ss"
            },
            "inputMenu_2": {
                "type": "inputMenu",
                "defaultValue": "Music",
                "menu": "CYBERPI_SPRITE_DRAW_PIXEL_WITH_ICON_INPUTMENU_2"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.cyberpiSpriteDrawPixelWithIconCodesCode,
                "sections": {
                    "lib": this.funcs.cyberpiSpriteDrawPixelWithIconCodesLib
                }
            }
        },
        "handler": this.funcs.cyberpi_sprite_draw_pixel_with_icon
    },
    {
        "opcode": "cyberpi_sprite_draw_text",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "string_1": {
                "type": "inputVariable",
                "defaultValue": ""
            },
            "string_2": {
                "type": "string",
                "defaultValue": "hello world"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.cyberpiSpriteDrawTextCodesCode,
                "sections": {
                    "lib": this.funcs.cyberpiSpriteDrawTextCodesLib
                }
            }
        },
        "handler": this.funcs.cyberpi_sprite_draw_text
    },
    {
        "opcode": "cyberpi_sprite_draw_QR",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "string_1": {
                "type": "inputVariable",
                "defaultValue": ""
            },
            "string_2": {
                "type": "string",
                "defaultValue": "www.makeblock.com"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.cyberpiSpriteDrawQrCodesCode,
                "sections": {
                    "lib": this.funcs.cyberpiSpriteDrawQrCodesLib
                }
            }
        },
        "handler": this.funcs.cyberpi_sprite_draw_QR
    },
    {
        "opcode": "cyberpi_mirror_with_axis",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "string_1": {
                "type": "inputVariable",
                "defaultValue": ""
            },
            "fieldMenu_3": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "CYBERPI_MIRROR_WITH_AXIS_FIELDMENU_3"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.cyberpiMirrorWithAxisCodesCode
            }
        },
        "handler": this.funcs.cyberpi_mirror_with_axis
    },
    {
        "opcode": "cyberpi_sprite_delete",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "string_1": {
                "type": "inputVariable",
                "defaultValue": ""
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.cyberpiSpriteDeleteCodesCode
            }
        },
        "handler": this.funcs.cyberpi_sprite_delete
    },
    {
        "opcode": "cyberpi_sprite_set_align",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "string_1": {
                "type": "inputVariable",
                "defaultValue": ""
            },
            "inputMenu_2": {
                "type": "inputMenu",
                "defaultValue": "top_left",
                "menu": "CYBERPI_SPRITE_SET_ALIGN_INPUTMENU_2"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.cyberpiSpriteSetAlignCodesCode
            }
        },
        "handler": this.funcs.cyberpi_sprite_set_align
    },
    {
        "opcode": "cyberpi_sprite_move_x_and_y",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "string_1": {
                "type": "inputVariable",
                "defaultValue": ""
            },
            "fieldMenu_2": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "CYBERPI_SPRITE_MOVE_X_AND_Y_FIELDMENU_2"
            },
            "number_3": {
                "type": "number",
                "defaultValue": 8
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.cyberpiSpriteMoveXAndYCodesCode
            }
        },
        "handler": this.funcs.cyberpi_sprite_move_x_and_y
    },
    {
        "opcode": "cyberpi_sprite_move_to",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "string_1": {
                "type": "inputVariable",
                "defaultValue": ""
            },
            "number_2": {
                "type": "number",
                "defaultValue": 64
            },
            "number_3": {
                "type": "number",
                "defaultValue": 64
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.cyberpiSpriteMoveToCodesCode
            }
        },
        "handler": this.funcs.cyberpi_sprite_move_to
    },
    {
        "opcode": "cyberpi_sprite_move_random",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "string_1": {
                "type": "inputVariable",
                "defaultValue": ""
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.cyberpiSpriteMoveRandomCodesCode
            }
        },
        "handler": this.funcs.cyberpi_sprite_move_random
    },
    {
        "opcode": "cyberpi_sprite_rotate",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "string_1": {
                "type": "inputVariable",
                "defaultValue": ""
            },
            "number_2": {
                "type": "number",
                "defaultValue": 10
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.cyberpiSpriteRotateCodesCode
            }
        },
        "handler": this.funcs.cyberpi_sprite_rotate
    },
    {
        "opcode": "cyberpi_sprite_rotate_to",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "string_1": {
                "type": "inputVariable",
                "defaultValue": ""
            },
            "number_2": {
                "type": "angle",
                "defaultValue": 90
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.cyberpiSpriteRotateToCodesCode
            }
        },
        "handler": this.funcs.cyberpi_sprite_rotate_to
    },
    {
        "opcode": "cyberpi_sprite_add_size",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "string_1": {
                "type": "string",
                "defaultValue": "sprite1"
            },
            "number_2": {
                "type": "number",
                "defaultValue": 100
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.cyberpi_sprite_add_size
    },
    {
        "opcode": "cyberpi_sprite_set_size",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "string_1": {
                "type": "inputVariable",
                "defaultValue": ""
            },
            "number_2": {
                "type": "number",
                "defaultValue": 100
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.cyberpiSpriteSetSizeCodesCode
            }
        },
        "handler": this.funcs.cyberpi_sprite_set_size
    },
    {
        "opcode": "cyberpi_sprite_set_color_with_color",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "string_1": {
                "type": "inputVariable",
                "defaultValue": ""
            },
            "number_2": {
                "type": "color",
                "defaultValue": "#05A6FF"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.cyberpiSpriteSetColorWithColorCodesCode
            }
        },
        "handler": this.funcs.cyberpi_sprite_set_color_with_color
    },
    {
        "opcode": "cyberpi_sprite_set_color_with_rgb",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "string_1": {
                "type": "inputVariable",
                "defaultValue": ""
            },
            "number_2": {
                "type": "number",
                "defaultValue": 255
            },
            "number_3": {
                "type": "number",
                "defaultValue": 255
            },
            "number_4": {
                "type": "number",
                "defaultValue": 255
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.cyberpiSpriteSetColorWithRgbCodesCode
            }
        },
        "handler": this.funcs.cyberpi_sprite_set_color_with_rgb
    },
    {
        "opcode": "cyberpi_sprite_close_color",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "string_1": {
                "type": "inputVariable",
                "defaultValue": ""
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.cyberpiSpriteCloseColorCodesCode
            }
        },
        "handler": this.funcs.cyberpi_sprite_close_color
    },
    {
        "opcode": "cyberpi_sprite_show_and_hide",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "string_1": {
                "type": "fieldMenu",
                "defaultValue": "show",
                "menu": "CYBERPI_SPRITE_SHOW_AND_HIDE_STRING_1"
            },
            "inputVariable_2": {
                "type": "inputVariable",
                "defaultValue": ""
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.cyberpiSpriteShowAndHideCodesCode
            }
        },
        "handler": this.funcs.cyberpi_sprite_show_and_hide
    },
    {
        "opcode": "cyberpi_sprite_z_max_and_min",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "string_1": {
                "type": "inputVariable",
                "defaultValue": ""
            },
            "fieldMenu_2": {
                "type": "fieldMenu",
                "defaultValue": "z_max",
                "menu": "CYBERPI_SPRITE_Z_MAX_AND_MIN_FIELDMENU_2"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.cyberpiSpriteZMaxAndMinCodesCode
            }
        },
        "handler": this.funcs.cyberpi_sprite_z_max_and_min
    },
    {
        "opcode": "cyberpi_sprite_z_up_and_down",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "string_1": {
                "type": "inputVariable",
                "defaultValue": ""
            },
            "fieldMenu_2": {
                "type": "fieldMenu",
                "defaultValue": "z_up",
                "menu": "CYBERPI_SPRITE_Z_UP_AND_DOWN_FIELDMENU_2"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.cyberpiSpriteZUpAndDownCodesCode
            }
        },
        "handler": this.funcs.cyberpi_sprite_z_up_and_down
    },
    {
        "opcode": "cyberpi_sprite_is_touch_other_sprite",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "string_1": {
                "type": "inputVariable",
                "defaultValue": ""
            },
            "string_2": {
                "type": "inputVariable",
                "defaultValue": ""
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.cyberpiSpriteIsTouchOtherSpriteCodesCode
            }
        },
        "handler": this.funcs.cyberpi_sprite_is_touch_other_sprite
    },
    {
        "opcode": "cyberpi_sprite_is_touch_edge",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "string_1": {
                "type": "inputVariable",
                "defaultValue": ""
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.cyberpiSpriteIsTouchEdgeCodesCode
            }
        },
        "handler": this.funcs.cyberpi_sprite_is_touch_edge
    },
    {
        "opcode": "cyberpi_sprite_get_x_y_rotation_size_align",
        "blockType": "string",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "string_1": {
                "type": "inputVariable",
                "defaultValue": ""
            },
            "fieldMenu_2": {
                "type": "fieldMenu",
                "defaultValue": "get_x",
                "menu": "CYBERPI_SPRITE_GET_X_Y_ROTATION_SIZE_ALIGN_FIELDMENU_2"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.cyberpiSpriteGetXYRotationSizeAlignCodesCode
            }
        },
        "handler": this.funcs.cyberpi_sprite_get_x_y_rotation_size_align
    },
    {
        "opcode": "cyberpi_screen_get_color_equal_with_color",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "number_2": {
                "type": "number",
                "defaultValue": 64
            },
            "number_3": {
                "type": "number",
                "defaultValue": 64
            },
            "color_4": {
                "type": "color",
                "defaultValue": "#000000"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `(screen.get_color({number_2}, {number_3}) == {color_4})`
            }
        },
        "handler": this.funcs.cyberpi_screen_get_color_equal_with_color
    },
    {
        "opcode": "cyberpi_screen_get_color_equal_with_rgb",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "number_2": {
                "type": "number",
                "defaultValue": 64
            },
            "number_3": {
                "type": "number",
                "defaultValue": 64
            },
            "number_4": {
                "type": "number",
                "defaultValue": 0
            },
            "number_5": {
                "type": "number",
                "defaultValue": 0
            },
            "number_6": {
                "type": "number",
                "defaultValue": 0
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": this.funcs.cyberpiScreenGetColorEqualWithRgbCodesCode
            }
        },
        "handler": this.funcs.cyberpi_screen_get_color_equal_with_rgb
    },
    {
        "opcode": "cyberpi_screen_inable_and_disable_auto_render",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "开启",
                "menu": "CYBERPI_SCREEN_INABLE_AND_DISABLE_AUTO_RENDER_FIELDMENU_1"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.cyberpi_screen_inable_and_disable_auto_render
    },
    {
        "opcode": "cyberpi_screen_render",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": `cyberpi.screen.render()`
            }
        },
        "handler": this.funcs.cyberpi_screen_render
    }
]);

export default blocks;