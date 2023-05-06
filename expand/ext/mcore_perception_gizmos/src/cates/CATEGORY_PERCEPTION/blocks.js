const blocks = (extFacePanels) => ([{
        "opcode": "mcore_run_fan",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_perception_gizmos/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_perception_gizmos')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_FAN_PORT"
            },
            "FAN_ROTATE": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_RUN_FAN_FAN_ROTATE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": `dc130_run(dc130_/*{PORT}*/, /*{FAN_ROTATE}*/);`,
                "sections": {
                    "lib": this.funcs.mcoreRunFanCodesLib,
                    "declare": this.funcs.mcoreRunFanCodesDeclare
                }
            }
        },
        "handler": this.funcs.mcore_run_fan
    },
    {
        "opcode": "mcore_detect_external_loudness",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_perception_gizmos/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_perception_gizmos')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "3",
                "menu": "MCORE_DETECT_EXTERNAL_LOUDNESS_PORT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": `soundsensor_/*{PORT}*/.strength()`,
                "sections": {
                    "lib": this.funcs.mcoreDetectExternalLoudnessCodesLib
                }
            }
        },
        "handler": this.funcs.mcore_detect_external_loudness
    },
    {
        "opcode": "mcore_detec_temperature",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_perception_gizmos/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_perception_gizmos')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "3",
                "menu": "MCORE_RUN_FAN_PORT"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MCORE_DETEC_TEMPERATURE_SLOT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": `temperature_/*{PORT}*/_/*{SLOT}*/.temperature()`,
                "sections": {
                    "lib": this.funcs.mcoreDetecTemperatureCodesLib
                }
            }
        },
        "handler": this.funcs.mcore_detec_temperature
    },
    {
        "opcode": "mcore_detect_potentiometer",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mcore_perception_gizmos/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'mcore_perception_gizmos')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "3",
                "menu": "MCORE_DETECT_EXTERNAL_LOUDNESS_PORT"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "codes": {
            "arduinoc": {
                "code": `potentiometer_/*{PORT}*/.read()`,
                "sections": {
                    "lib": this.funcs.mcoreDetectPotentiometerCodesLib
                }
            }
        },
        "handler": this.funcs.mcore_detect_potentiometer
    }
]);

export default blocks;