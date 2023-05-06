const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1596436351300",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "number_1": {
                "type": "number",
                "defaultValue": 9
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
                "code": `digitalRead(/*{number_1}*/)`,
                "sections": {
                    "setup": `pinMode(/*{number_1}*/,INPUT);`
                }
            }
        },
        "handler": this.funcs.BLOCK_1596436351300
    },
    {
        "opcode": "BLOCK_1596436396122",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "number_1": {
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
            "arduinoc": {
                "code": `analogRead(A0 + /*{number_1}*/)`,
                "sections": {
                    "setup": `pinMode(A0 + /*{number_1}*/,INPUT);`
                }
            }
        },
        "handler": this.funcs.BLOCK_1596436396122
    },
    {
        "opcode": "BLOCK_1596436433921",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "number_1": {
                "type": "number",
                "defaultValue": 13
            },
            "number_2": {
                "type": "number",
                "defaultValue": 20000
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
                "code": this.funcs.block1596436433921CodesCode,
                "sections": {
                    "setup": `pinMode(/*{number_1}*/,INPUT);`
                }
            }
        },
        "handler": this.funcs.BLOCK_1596436433921
    },
    {
        "opcode": "BLOCK_1596436491466",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "number_1": {
                "type": "number",
                "defaultValue": 9
            },
            "fieldMenu_2": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1596436491466_FIELDMENU_2"
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
                "code": `digitalWrite(/*{number_1}*/,/*{fieldMenu_2}*/);`,
                "sections": {
                    "setup": `pinMode(/*{number_1}*/,OUTPUT);`
                }
            }
        },
        "handler": this.funcs.BLOCK_1596436491466
    },
    {
        "opcode": "BLOCK_1596437190274",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "number_1": {
                "type": "number",
                "defaultValue": 5
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
            "arduinoc": {
                "code": this.funcs.block1596437190274CodesCode,
                "sections": {
                    "setup": `pinMode(/*{number_1}*/,OUTPUT);`
                }
            }
        },
        "handler": this.funcs.BLOCK_1596437190274
    },
    {
        "opcode": "BLOCK_1596442885175",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "number_1": {
                "type": "number",
                "defaultValue": 9
            },
            "fieldMenu_2": {
                "type": "fieldMenu",
                "defaultValue": "262",
                "menu": "BLOCK_1596442885175_FIELDMENU_2"
            },
            "inputMenu_3": {
                "type": "fieldMenu",
                "defaultValue": "500",
                "menu": "BLOCK_1596442885175_INPUTMENU_3"
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
                "code": `tone(/*{number_1}*/,/*{fieldMenu_2}*/,/*{inputMenu_3}*/);\r\ndelay(/*{inputMenu_3}*/);`,
                "sections": {
                    "setup": `pinMode(/*{number_1}*/,OUTPUT);`
                }
            }
        },
        "handler": this.funcs.BLOCK_1596442885175
    },
    {
        "opcode": "BLOCK_1596443222386",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "number_1": {
                "type": "number",
                "defaultValue": 9
            },
            "number_2": {
                "type": "number",
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
            "arduinoc": {
                "code": this.funcs.block1596443222386CodesCode,
                "sections": {
                    "include": [
                        "<Servo.h>"
                    ],
                    "lib": this.funcs.block1596443222386CodesLib,
                    "setup": `servo_/*{number_1}*/.attach(/*{number_1}*/);`
                }
            }
        },
        "handler": this.funcs.BLOCK_1596443222386
    },
    {
        "opcode": "BLOCK_1596451673116",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "string_1": {
                "type": "string",
                "defaultValue": "你好"
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
                "code": `Serial.println(/*{string_1}*/);`,
                "sections": {
                    "setup": `Serial.begin(115200);`
                }
            }
        },
        "handler": this.funcs.BLOCK_1596451673116
    },
    {
        "opcode": "BLOCK_1596451712930",
        "blockType": "number",
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
            "arduinoc": {
                "code": `Serial.available()`,
                "sections": {
                    "setup": `Serial.begin(115200);`
                }
            }
        },
        "handler": this.funcs.BLOCK_1596451712930
    },
    {
        "opcode": "BLOCK_1596451771370",
        "blockType": "string",
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
            "arduinoc": {
                "code": `Serial.read()`,
                "sections": {
                    "setup": `Serial.begin(115200);`
                }
            }
        },
        "handler": this.funcs.BLOCK_1596451771370
    },
    {
        "opcode": "BLOCK_1596451799277",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "number_1": {
                "type": "number",
                "defaultValue": 13
            },
            "number_2": {
                "type": "number",
                "defaultValue": 12
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
                "code": `getDistance(/*{number_1}*/,/*{number_2}*/)`,
                "sections": {
                    "declare": `float getDistance(int trig,int echo){\r\n    pinMode(trig,OUTPUT);\r\n    digitalWrite(trig,LOW);\r\n    delayMicroseconds(2);\r\n    digitalWrite(trig,HIGH);\r\n    delayMicroseconds(10);\r\n    digitalWrite(trig,LOW);\r\n    pinMode(echo, INPUT);\r\n    return pulseIn(echo,HIGH,30000)/58.0;\r\n}`
                }
            }
        },
        "handler": this.funcs.BLOCK_1596451799277
    }
]);

export default blocks;