const blocks = (extFacePanels) => ([{
        "opcode": "cyberpi_sketch_clear",
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
                "code": `cyberpi.sketch.clear()`
            }
        },
        "handler": this.funcs.cyberpi_sketch_clear
    },
    {
        "opcode": "cyberpi_sketch_start",
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
                "code": `cyberpi.sketch.start()`
            }
        },
        "handler": this.funcs.cyberpi_sketch_start
    },
    {
        "opcode": "cyberpi_sketch_end",
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
                "code": `cyberpi.sketch.end()`
            }
        },
        "handler": this.funcs.cyberpi_sketch_end
    },
    {
        "opcode": "cyberpi_sketch_set_color_with_color",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "color_1": {
                "type": "color",
                "defaultValue": "#fc0307"
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
                "code": this.funcs.cyberpiSketchSetColorWithColorCodesCode
            }
        },
        "handler": this.funcs.cyberpi_sketch_set_color_with_color
    },
    {
        "opcode": "cyberpi_sketch_set_color_with_rgb",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "number_1": {
                "type": "number",
                "defaultValue": 255
            },
            "number_2": {
                "type": "number",
                "defaultValue": 255
            },
            "number_3": {
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
                "code": `cyberpi.sketch.set_color({number_1}, {number_2}, {number_3})`
            }
        },
        "handler": this.funcs.cyberpi_sketch_set_color_with_rgb
    },
    {
        "opcode": "cyberpi_sketch_set_size",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "number_1": {
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
                "code": `cyberpi.sketch.set_size({number_1})`
            }
        },
        "handler": this.funcs.cyberpi_sketch_set_size
    },
    {
        "opcode": "cyberpi_sketch_set_speed",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "number_1": {
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
                "code": `cyberpi.sketch.set_speed({number_1})`
            }
        },
        "handler": this.funcs.cyberpi_sketch_set_speed
    },
    {
        "opcode": "cyberpi_sketch_cw",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "number_1": {
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
                "code": `cyberpi.sketch.cw({number_1})`
            }
        },
        "handler": this.funcs.cyberpi_sketch_cw
    },
    {
        "opcode": "cyberpi_sketch_set_angle",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "number_1": {
                "type": "number",
                "defaultValue": 90
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `cyberpi.sketch.set_angle({number_1})`
            }
        },
        "handler": this.funcs.cyberpi_sketch_set_angle
    },
    {
        "opcode": "cyberpi_sketch_set_angle_2",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "angle_1": {
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
                "code": `cyberpi.sketch.set_angle({angle_1})`
            }
        },
        "handler": this.funcs.cyberpi_sketch_set_angle_2
    },
    {
        "opcode": "cyberpi_sketch_move",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "number_1": {
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
                "code": `cyberpi.sketch.move({number_1})`
            }
        },
        "handler": this.funcs.cyberpi_sketch_move
    },
    {
        "opcode": "cyberpi_sketch_move_to_center",
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
                "code": `cyberpi.sketch.move_to(64, 64)`
            }
        },
        "handler": this.funcs.cyberpi_sketch_move_to_center
    },
    {
        "opcode": "cyberpi_sketch_move_to",
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
                "code": `cyberpi.sketch.move_to({number_1}, {number_2})`
            }
        },
        "handler": this.funcs.cyberpi_sketch_move_to
    },
    {
        "opcode": "cyberpi_sketch_move_x_and_y",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "CYBERPI_SPRITE_MOVE_X_AND_Y_FIELDMENU_2"
            },
            "number_1": {
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
                "code": this.funcs.cyberpiSketchMoveXAndYCodesCode
            }
        },
        "handler": this.funcs.cyberpi_sketch_move_x_and_y
    },
    {
        "opcode": "cyberpi_sketch_circle",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "number_1": {
                "type": "number",
                "defaultValue": 10
            },
            "number_2": {
                "type": "number",
                "defaultValue": 360
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
                "code": `cyberpi.sketch.circle({number_1}, {number_2})`
            }
        },
        "handler": this.funcs.cyberpi_sketch_circle
    },
    {
        "opcode": "cyberpi_sketch_get_x_y_angle_and_size",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "CYBERPI_SKETCH_GET_X_Y_ANGLE_AND_SIZE_FIELDMENU_1"
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
                "code": this.funcs.cyberpiSketchGetXYAngleAndSizeCodesCode
            }
        },
        "handler": this.funcs.cyberpi_sketch_get_x_y_angle_and_size
    },
    {
        "opcode": "cyberpi_sketch_if_start",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 36,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `turtle.isdown()`,
                "sections": {
                    "lib": `import turtle\nwindow = cyberpi.display.get_user_window()\nwindow.set_size(128, 128)\nturtle = turtle.pen(window)`
                }
            }
        },
        "handler": this.funcs.cyberpi_sketch_if_start
    },
    {
        "opcode": "cyberpi_sprite_draw_sketch",
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
                "code": this.funcs.cyberpiSpriteDrawSketchCodesCode,
                "sections": {
                    "lib": this.funcs.cyberpiSpriteDrawSketchCodesLib
                }
            }
        },
        "handler": this.funcs.cyberpi_sprite_draw_sketch
    }
]);

export default blocks;