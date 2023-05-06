const blocks = (extFacePanels) => ([{
        "opcode": "cyberpi_display_println",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "string_2": {
                "type": "string",
                "defaultValue": "makeblock"
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
                "code": `cyberpi.console.println({string_2})`
            }
        },
        "handler": this.funcs.cyberpi_display_println
    },
    {
        "opcode": "cyberpi_display_print",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "string_2": {
                "type": "string",
                "defaultValue": "makeblock"
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
                "code": `cyberpi.console.print({string_2})`
            }
        },
        "handler": this.funcs.cyberpi_display_print
    },
    {
        "opcode": "cyberpi_console_set_font",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "inputMenu_1": {
                "type": "inputMenu",
                "defaultValue": "16",
                "menu": "CYBERPI_CONSOLE_SET_FONT_INPUTMENU_1"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": `cyberpi.console.set_font({inputMenu_1})`
            }
        },
        "handler": this.funcs.cyberpi_console_set_font
    },
    {
        "opcode": "cyberpi_display_show_at_somewhere_with_size",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "string_2": {
                "type": "string",
                "defaultValue": "makeblock"
            },
            "fieldMenu_2": {
                "type": "fieldMenu",
                "defaultValue": "center",
                "menu": "CYBERPI_DISPLAY_SHOW_AT_SOMEWHERE_WITH_SIZE_FIELDMENU_2"
            },
            "inputMenu_4": {
                "type": "inputMenu",
                "defaultValue": "16",
                "menu": "CYBERPI_CONSOLE_SET_FONT_INPUTMENU_1"
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
                "code": `cyberpi.display.show_label({string_2}, {inputMenu_4}, \"{fieldMenu_2}\")`
            }
        },
        "handler": this.funcs.cyberpi_display_show_at_somewhere_with_size
    },
    {
        "opcode": "cyberpi_display_label_show_at_somewhere_with_size",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "CYBERPI_DISPLAY_LABEL_SHOW_AT_SOMEWHERE_WITH_SIZE_FIELDMENU_1"
            },
            "string_2": {
                "type": "string",
                "defaultValue": "makeblock"
            },
            "fieldMenu_2": {
                "type": "fieldMenu",
                "defaultValue": "center",
                "menu": "CYBERPI_DISPLAY_SHOW_AT_SOMEWHERE_WITH_SIZE_FIELDMENU_2"
            },
            "inputMenu_4": {
                "type": "inputMenu",
                "defaultValue": "16",
                "menu": "CYBERPI_CONSOLE_SET_FONT_INPUTMENU_1"
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
                "code": `cyberpi.display.show_label({string_2}, {inputMenu_4}, \"{fieldMenu_2}\", index= {fieldMenu_1})`
            }
        },
        "handler": this.funcs.cyberpi_display_label_show_at_somewhere_with_size
    },
    {
        "opcode": "cyberpi_display_show_label_xy_with_size",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "string_2": {
                "type": "string",
                "defaultValue": "makeblock"
            },
            "number_2": {
                "type": "number",
                "defaultValue": 0
            },
            "number_3": {
                "type": "number",
                "defaultValue": 0
            },
            "inputMenu_4": {
                "type": "inputMenu",
                "defaultValue": "16",
                "menu": "CYBERPI_CONSOLE_SET_FONT_INPUTMENU_1"
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
                "code": `cyberpi.display.show_label({string_2}, {inputMenu_4}, int({number_2}), int({number_3}))`
            }
        },
        "handler": this.funcs.cyberpi_display_show_label_xy_with_size
    },
    {
        "opcode": "cyberpi_display_label_show_label_xy_with_size",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "fieldMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "CYBERPI_DISPLAY_LABEL_SHOW_AT_SOMEWHERE_WITH_SIZE_FIELDMENU_1"
            },
            "string_2": {
                "type": "string",
                "defaultValue": "makeblock"
            },
            "number_2": {
                "type": "number",
                "defaultValue": 0
            },
            "number_3": {
                "type": "number",
                "defaultValue": 0
            },
            "inputMenu_4": {
                "type": "inputMenu",
                "defaultValue": "16",
                "menu": "CYBERPI_CONSOLE_SET_FONT_INPUTMENU_1"
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
                "code": `cyberpi.display.show_label({string_2}, {inputMenu_4}, int({number_2}), int({number_3}), index = {fieldMenu_1})`
            }
        },
        "handler": this.funcs.cyberpi_display_label_show_label_xy_with_size
    },
    {
        "opcode": "cyberpi_display_set_chart_name",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "string_1": {
                "type": "string",
                "defaultValue": "chart"
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
                "code": `cyberpi.chart.set_name({string_1})`
            }
        },
        "handler": this.funcs.cyberpi_display_set_chart_name
    },
    {
        "opcode": "cyberpi_display_line_chart_add_data",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "number_1": {
                "type": "number",
                "defaultValue": 50
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
                "code": `cyberpi.linechart.add({number_1})`
            }
        },
        "handler": this.funcs.cyberpi_display_line_chart_add_data
    },
    {
        "opcode": "cyberpi_display_bar_chart_set_interval",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "number_3": {
                "type": "number",
                "defaultValue": 5
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
                "code": `cyberpi.linechart.set_step({number_3})`
            }
        },
        "handler": this.funcs.cyberpi_display_bar_chart_set_interval
    },
    {
        "opcode": "cyberpi_display_bar_chart_add_data",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "number_1": {
                "type": "number",
                "defaultValue": 50
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
                "code": `cyberpi.barchart.add({number_1})`
            }
        },
        "handler": this.funcs.cyberpi_display_bar_chart_add_data
    },
    {
        "opcode": "cyberpi_display_table_add_data_at_row_column_2",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "CYBERPI_DISPLAY_TABLE_ADD_DATA_AT_ROW_COLUMN_2_FIELDMENU_1"
            },
            "fieldMenu_2": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "CYBERPI_DISPLAY_TABLE_ADD_DATA_AT_ROW_COLUMN_2_FIELDMENU_2"
            },
            "string_3": {
                "type": "string",
                "defaultValue": "excel_content"
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
                "code": `cyberpi.table.add({fieldMenu_1}, {fieldMenu_2}, {string_3})`
            }
        },
        "handler": this.funcs.cyberpi_display_table_add_data_at_row_column_2
    },
    {
        "opcode": "cyberpi_display_table_add_data_at_row_column",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "CYBERPI_DISPLAY_TABLE_ADD_DATA_AT_ROW_COLUMN_FIELDMENU_1"
            },
            "fieldMenu_2": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "CYBERPI_DISPLAY_TABLE_ADD_DATA_AT_ROW_COLUMN_2_FIELDMENU_2"
            },
            "string_3": {
                "type": "string",
                "defaultValue": "excel_content"
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
                "code": `cyberpi.table.add({fieldMenu_1}, {fieldMenu_2}, {string_3})`
            }
        },
        "handler": this.funcs.cyberpi_display_table_add_data_at_row_column
    },
    {
        "opcode": "cyberpi_display_clear_chart",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 36,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "python": {
                "code": `cyberpi.chart.clear() `
            }
        },
        "handler": this.funcs.cyberpi_display_clear_chart
    },
    {
        "opcode": "cyberpi_display_set_brush_with_color",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "color_1": {
                "type": "color",
                "defaultValue": "#ffffff"
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
                "code": this.funcs.cyberpiDisplaySetBrushWithColorCodesCode
            }
        },
        "handler": this.funcs.cyberpi_display_set_brush_with_color
    },
    {
        "opcode": "cyberpi_display_set_brush_with_r_g_b",
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
                "code": `cyberpi.display.set_brush({number_1}, {number_2}, {number_3})\r\n\r`
            }
        },
        "handler": this.funcs.cyberpi_display_set_brush_with_r_g_b
    },
    {
        "opcode": "cyberpi_display_rotate_to_2",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "-90",
                "menu": "CYBERPI_DISPLAY_ROTATE_TO_2_FIELDMENU_1"
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
                "code": `cyberpi.display.rotate_to({fieldMenu_1})`
            }
        },
        "handler": this.funcs.cyberpi_display_rotate_to_2
    },
    {
        "opcode": "cyberpi_display_rotate_to",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "90",
                "menu": "CYBERPI_DISPLAY_ROTATE_TO_FIELDMENU_1"
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
                "code": `cyberpi.display.rotate_to({fieldMenu_1})`
            }
        },
        "handler": this.funcs.cyberpi_display_rotate_to
    },
    {
        "opcode": "cyberpi_display_clear",
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
                "code": `cyberpi.console.clear()`
            }
        },
        "handler": this.funcs.cyberpi_display_clear
    }
]);

export default blocks;