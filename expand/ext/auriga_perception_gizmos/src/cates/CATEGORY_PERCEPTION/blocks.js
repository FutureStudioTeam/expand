const blocks = (extFacePanels) => ([{
        "opcode": "auriga_run_fan",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_perception_gizmos/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_perception_gizmos')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_FAN_PORT"
            },
            "FAN_ROTATE": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_RUN_FAN_FAN_ROTATE"
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
                    "lib": this.funcs.aurigaRunFanCodesLib,
                    "declare": this.funcs.aurigaRunFanCodesDeclare
                }
            }
        },
        "handler": this.funcs.auriga_run_fan
    },
    {
        "opcode": "auriga_detect_external_loudness",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_perception_gizmos/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_perception_gizmos')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_FAN_PORT"
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
                    "lib": this.funcs.aurigaDetectExternalLoudnessCodesLib
                }
            }
        },
        "handler": this.funcs.auriga_detect_external_loudness
    },
    {
        "opcode": "auriga_detec_temperature",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_perception_gizmos/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_perception_gizmos')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_FAN_PORT"
            },
            "SLOT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "AURIGA_DETEC_TEMPERATURE_SLOT"
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
                    "lib": this.funcs.aurigaDetecTemperatureCodesLib
                }
            }
        },
        "handler": this.funcs.auriga_detec_temperature
    },
    {
        "opcode": "auriga_detect_potentiometer",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('auriga_perception_gizmos/imgs/d928e028ee0341ed9c9a5d79f548cbff.svg', 'auriga_perception_gizmos')
            },
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "6",
                "menu": "AURIGA_RUN_FAN_PORT"
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
                    "lib": this.funcs.aurigaDetectPotentiometerCodesLib
                }
            }
        },
        "handler": this.funcs.auriga_detect_potentiometer
    }
]);

export default blocks;