const blocks = (extFacePanels) => ([{
        "opcode": "event_whenflagclicked",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ]
    },
    {
        "opcode": "event_whenkeypressed",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ]
    },
    {
        "opcode": "megapi_main",
        "blockType": "hat",
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
        "codes": {
            "arduinoc": {
                "code": "/*{$BRANCH}*/",
                "sections": {
                    "include": [
                        "<Arduino.h>",
                        "<Wire.h>",
                        "<SoftwareSerial.h>",
                        "<MeMegaPi.h>"
                    ],
                    "lib": this.funcs.megapiMainCodesLib,
                    "declare": `void isr_process_encoder1(void){\r\n  if(digitalRead(Encoder_1.getPortB()) == 0){\r\n    Encoder_1.pulsePosMinus();\r\n  }else{\r\n    Encoder_1.pulsePosPlus();\r\n  }\r\n}\r\n\r\nvoid isr_process_encoder2(void){\r\n  if(digitalRead(Encoder_2.getPortB()) == 0){\r\n    Encoder_2.pulsePosMinus();\r\n  }else{\r\n    Encoder_2.pulsePosPlus();\r\n  }\r\n}\r\n\r\nvoid isr_process_encoder3(void){\r\n  if(digitalRead(Encoder_3.getPortB()) == 0){\r\n    Encoder_3.pulsePosMinus();\r\n  }else{\r\n    Encoder_3.pulsePosPlus();\r\n  }\r\n}\r\n\r\nvoid isr_process_encoder4(void){\r\n  if(digitalRead(Encoder_4.getPortB()) == 0){\r\n    Encoder_4.pulsePosMinus();\r\n  }else{\r\n    Encoder_4.pulsePosPlus();\r\n  }\r\n}`,
                    "setup": this.funcs.megapiMainCodesSetup
                }
            }
        },
        "handler": this.funcs.megapi_main
    },
    {
        "opcode": "event_whenbroadcastreceived",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "BROADCAST_OPTION": {
                "type": "inputVariable",
                "defaultValue": ""
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ]
    },
    {
        "opcode": "event_broadcast",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "BROADCAST_INPUT": {
                "type": "inputVariable",
                "defaultValue": ""
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ]
    },
    {
        "opcode": "event_broadcastandwait",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "BROADCAST_INPUT": {
                "type": "inputVariable",
                "defaultValue": ""
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ]
    }
]);

export default blocks;