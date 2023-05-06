const blocks = (extFacePanels) => ([{
        "opcode": "open_chart",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.open_chart
    },
    {
        "opcode": "set_chart_name",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "data": {
                "type": "string",
                "defaultValue": "untitled"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.set_chart_name
    },
    {
        "opcode": "set_chart_type",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "type": {
                "type": "fieldMenu",
                "defaultValue": "table",
                "menu": "SET_CHART_TYPE_TYPE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.set_chart_type
    },
    {
        "opcode": "BLOCK_1586773178961",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "rate": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "BLOCK_1586773178961_RATE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1586773178961
    },
    {
        "opcode": "set_axis_name",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "xName": {
                "type": "string",
                "defaultValue": "date"
            },
            "yName": {
                "type": "string",
                "defaultValue": "temperature/ ℃"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.set_axis_name
    },
    {
        "opcode": "BLOCK_1586773463661",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "rightYAxisTitle": {
                "type": "string",
                "defaultValue": "humidity/%"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1586773463661
    },
    {
        "opcode": "BLOCK_1586773584919",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "seriesName": {
                "type": "string",
                "defaultValue": "indoor"
            },
            "yAxisDirection": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "BLOCK_1586773584919_YAXISDIRECTION"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1586773584919
    },
    {
        "opcode": "set_data_handler",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "type": {
                "type": "string",
                "defaultValue": "indoor"
            },
            "xData": {
                "type": "string",
                "defaultValue": "monday"
            },
            "yData": {
                "type": "number",
                "defaultValue": 15
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.set_data_handler
    },
    {
        "opcode": "set_data_handler_1",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "type": {
                "type": "string",
                "defaultValue": "indoor"
            },
            "xData": {
                "type": "string",
                "defaultValue": "monday"
            },
            "yData": {
                "type": "number",
                "defaultValue": 15
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.set_data_handler_1
    },
    {
        "opcode": "clear_chart",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.clear_chart
    },
    {
        "opcode": "close_chart",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.close_chart
    }
]);

export default blocks;