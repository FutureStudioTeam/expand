const blocks = (extFacePanels) => ([{
        "opcode": "max_temperature_c",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "CITY": {
                "type": "widget",
                "defaultValue": [
                    "widget_e7b76771",
                    ""
                ],
                "widget": this.funcs.customWidgetE7B76771
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.max_temperature_c
    },
    {
        "opcode": "min_temperature_c",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "CITY": {
                "type": "widget",
                "defaultValue": [
                    "widget_e7b76771",
                    ""
                ],
                "widget": this.funcs.customWidgetE7B76771
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.min_temperature_c
    },
    {
        "opcode": "max_temperature_f",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "CITY": {
                "type": "widget",
                "defaultValue": [
                    "widget_e7b76771",
                    ""
                ],
                "widget": this.funcs.customWidgetE7B76771
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.max_temperature_f
    },
    {
        "opcode": "min_temperature_f",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "CITY": {
                "type": "widget",
                "defaultValue": [
                    "widget_e7b76771",
                    ""
                ],
                "widget": this.funcs.customWidgetE7B76771
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.min_temperature_f
    },
    {
        "opcode": "humidity",
        "blockType": "string",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "CITY": {
                "type": "widget",
                "defaultValue": [
                    "widget_e7b76771",
                    ""
                ],
                "widget": this.funcs.customWidgetE7B76771
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.humidity
    },
    {
        "opcode": "temperature",
        "blockType": "string",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "CITY": {
                "type": "widget",
                "defaultValue": [
                    "widget_e7b76771",
                    ""
                ],
                "widget": this.funcs.customWidgetE7B76771
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.temperature
    },
    {
        "opcode": "sunrise",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "CITY": {
                "type": "widget",
                "defaultValue": [
                    "widget_e7b76771",
                    ""
                ],
                "widget": this.funcs.customWidgetE7B76771
            },
            "TIME": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "SUNRISE_TIME"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.sunrise
    },
    {
        "opcode": "sunset",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "CITY": {
                "type": "widget",
                "defaultValue": [
                    "widget_e7b76771",
                    ""
                ],
                "widget": this.funcs.customWidgetE7B76771
            },
            "TIME": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "SUNRISE_TIME"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.sunset
    },
    {
        "opcode": "meteorological",
        "blockType": "number",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "METEOROLOGICAL": {
                "type": "widget",
                "defaultValue": [
                    "widget_b25ca5f4",
                    ""
                ],
                "widget": this.funcs.customWidgetB25Ca5F4
            },
            "AIRQUALITY": {
                "type": "fieldMenu",
                "defaultValue": "aqi",
                "menu": "METEOROLOGICAL_AIRQUALITY"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.meteorological
    }
]);

export default blocks;