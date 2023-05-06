const blocks = (extFacePanels) => ([{
        "opcode": "mbuild_multiple_sensor_get_pir_sta",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "MBUILD_MULTIPLE_SENSOR_GET_PIR_STA_INDEX"
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
                "code": `mbuild.science.pir_is_active({index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_multiple_sensor_get_pir_sta
    },
    {
        "opcode": "mbuild_multiple_sensor_set_heartrate_switch",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "MBUILD_MULTIPLE_SENSOR_GET_PIR_STA_INDEX"
            },
            "conduction": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MBUILD_MULTIPLE_SENSOR_SET_HEARTRATE_SWITCH_CONDUCTION"
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
                "code": this.funcs.mbuildMultipleSensorSetHeartrateSwitchCodesCode,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_multiple_sensor_set_heartrate_switch
    },
    {
        "opcode": "mbuild_multiple_sensor_get_check_result",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "MBUILD_MULTIPLE_SENSOR_GET_PIR_STA_INDEX"
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
                "code": `mbuild.science.heart_is_finish({index})`
            }
        },
        "handler": this.funcs.mbuild_multiple_sensor_get_check_result
    },
    {
        "opcode": "mbuild_multiple_sensor_get_heartrate",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": true,
        "gap": 36,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "MBUILD_MULTIPLE_SENSOR_GET_PIR_STA_INDEX"
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
                "code": `mbuild.science.heart_get({index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_multiple_sensor_get_heartrate
    },
    {
        "opcode": "mbuild_multiple_sensor_get_soil_humidity",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "MBUILD_MULTIPLE_SENSOR_GET_PIR_STA_INDEX"
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
                "code": `mbuild.science.soil_get({index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_multiple_sensor_get_soil_humidity
    },
    {
        "opcode": "mbuild_multiple_sensor_get_soil_resistance_value",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "MBUILD_MULTIPLE_SENSOR_GET_PIR_STA_INDEX"
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
                "code": `mbuild.science.soil_get_resistance({index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_multiple_sensor_get_soil_resistance_value
    },
    {
        "opcode": "mbuild_multiple_sensor_get_soil_conduction",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "MBUILD_MULTIPLE_SENSOR_GET_PIR_STA_INDEX"
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
                "code": `mbuild.science.soil_is_active({index})`,
                "sections": {
                    "import": ['mbuild'],
                    "lib": `def is_soil(index):\r\n    value = mbuild.science.soil_get_adc_value(index)\r\n    if value >=0 and value <= 950:\r\n        return True\r\n    else:\r\n        return False\r\nmbuild.science.soil_is_active = is_soil`
                }
            }
        },
        "handler": this.funcs.mbuild_multiple_sensor_get_soil_conduction
    },
    {
        "opcode": "mbuild_multiple_sensor_get_touch_conduction",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "MBUILD_MULTIPLE_SENSOR_GET_PIR_STA_INDEX"
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
                "code": `mbuild.science.touch_is_active({index})`,
                "sections": {
                    "import": ['mbuild'],
                    "lib": `def is_touch(index):\r\n    value = mbuild.science.touch_get_adc_value(index)\r\n    if value >=0 and value <= 700:\r\n        return True\r\n    else:\r\n        return False\r\nmbuild.science.touch_is_active = is_touch\r`
                }
            }
        },
        "handler": this.funcs.mbuild_multiple_sensor_get_touch_conduction
    },
    {
        "opcode": "mbuild_multiple_sensor_get_touch_resistance_value",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "MBUILD_MULTIPLE_SENSOR_GET_PIR_STA_INDEX"
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
                "code": `mbuild.science.touch_get_resistance({index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_multiple_sensor_get_touch_resistance_value
    },
    {
        "opcode": "mbuild_multiple_sensor_get_temperature",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "MBUILD_MULTIPLE_SENSOR_GET_PIR_STA_INDEX"
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
                "code": `mbuild.science.humiture_get_temp({index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_multiple_sensor_get_temperature
    },
    {
        "opcode": "mbuild_multiple_sensor_get_humidity",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "MBUILD_MULTIPLE_SENSOR_GET_PIR_STA_INDEX"
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
                "code": `mbuild.science.humiture_get_humidity({index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_multiple_sensor_get_humidity
    },
    {
        "opcode": "mbuild_multiple_sensor_get_atmospheric_pressure",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "MBUILD_MULTIPLE_SENSOR_GET_PIR_STA_INDEX"
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
                "code": `mbuild.science.atmos_get({index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_multiple_sensor_get_atmospheric_pressure
    },
    {
        "opcode": "mbuild_multiple_sensor_get_atmospheric_altitude",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "MBUILD_MULTIPLE_SENSOR_GET_PIR_STA_INDEX"
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
                "code": `mbuild.science.atmos_get_altitude({index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_multiple_sensor_get_atmospheric_altitude
    },
    {
        "opcode": "mbuild_multiple_sensor_set_mq2_threshold_and_switch",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "MBUILD_MULTIPLE_SENSOR_GET_PIR_STA_INDEX"
            },
            "sensitivity": {
                "type": "inputMenu",
                "defaultValue": "0.1",
                "menu": "MBUILD_MULTIPLE_SENSOR_SET_MQ2_THRESHOLD_AND_SWITCH_SENSITIVITY"
            },
            "conduction": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MBUILD_MULTIPLE_SENSOR_SET_MQ2_THRESHOLD_AND_SWITCH_CONDUCTION"
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
                "code": this.funcs.mbuildMultipleSensorSetMq2ThresholdAndSwitchCodesCode,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_multiple_sensor_set_mq2_threshold_and_switch
    },
    {
        "opcode": "mbuild_multiple_sensor_get_mq2_value",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "MBUILD_MULTIPLE_SENSOR_GET_PIR_STA_INDEX"
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
                "code": `mbuild.science.mq2_get({index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_multiple_sensor_get_mq2_value
    },
    {
        "opcode": "mbuild_multiple_sensor_get_mq2_sta",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "MBUILD_MULTIPLE_SENSOR_GET_PIR_STA_INDEX"
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
                "code": `mbuild.science.mq2_is_active({index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_multiple_sensor_get_mq2_sta
    },
    {
        "opcode": "mbuild_multiple_sensor_get_flame_value",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "MBUILD_MULTIPLE_SENSOR_GET_PIR_STA_INDEX"
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
                "code": `mbuild.science.flame_get({index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_multiple_sensor_get_flame_value
    },
    {
        "opcode": "mbuild_multiple_sensor_get_flame_sta",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "MBUILD_MULTIPLE_SENSOR_GET_PIR_STA_INDEX"
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
                "code": `mbuild.science.flame_is_active({index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_multiple_sensor_get_flame_sta
    },
    {
        "opcode": "mbuild_multiple_sensor_compass_sum_value",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "MBUILD_MULTIPLE_SENSOR_GET_PIR_STA_INDEX"
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
                "code": `mbuild.science.compass_is_active({index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_multiple_sensor_compass_sum_value
    },
    {
        "opcode": "mbuild_multiple_sensor_get_compass_angle",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "MBUILD_MULTIPLE_SENSOR_GET_PIR_STA_INDEX"
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
                "code": `mbuild.science.compass_get_angle({index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_multiple_sensor_get_compass_angle
    },
    {
        "opcode": "mbuild_multiple_sensor_get_compass",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "MBUILD_MULTIPLE_SENSOR_GET_PIR_STA_INDEX"
            },
            "axis": {
                "type": "fieldMenu",
                "defaultValue": "x",
                "menu": "MBUILD_MULTIPLE_SENSOR_GET_COMPASS_AXIS"
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
                "code": `mbuild.science.compass_get('{axis}',{index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_multiple_sensor_get_compass
    },
    {
        "opcode": "mbuild_multiple_sensor_set_compass_switch",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "index": {
                "type": "inputMenu",
                "defaultValue": "1",
                "menu": "MBUILD_MULTIPLE_SENSOR_GET_PIR_STA_INDEX"
            },
            "conduction": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MBUILD_MULTIPLE_SENSOR_SET_HEARTRATE_SWITCH_CONDUCTION"
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
                "code": `mbuild.science.compass_reset({conduction},{index})`,
                "sections": {
                    "import": ['mbuild']
                }
            }
        },
        "handler": this.funcs.mbuild_multiple_sensor_set_compass_switch
    }
]);

export default blocks;