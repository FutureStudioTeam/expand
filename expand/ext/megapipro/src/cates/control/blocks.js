const blocks = (extFacePanels) => ([{
        "opcode": "match_in_automode",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `getPlayStatus()`,
                "sections": {
                    "declare": `uint8_t value = 0;\r\nint getPlayStatus(void)\r\n{\r\n  char count=0;\r\n  uint8_t new_value;\r\n  uint8_t bit = _BV(3);\r\n  uint8_t port= 10;\r\n  volatile uint8_t *reg, *out;\r\n  reg = portModeRegister(port);\r\n  out = portOutputRegister(port);\r\n  uint8_t oldSREG = SREG;\r\n  cli();\r\n  *reg &= ~bit;\r\n  *out &= ~bit;\r\n  SREG = oldSREG;\r\n  new_value = (*portInputRegister(port) & bit);\r\n  while (value != new_value){\r\n    count++;\r\n    if (count >= 5){\r\n      value = new_value;\r\n      if (new_value){\r\n        return HIGH; //auto\r\n      }else{\r\n        return LOW; //hand\r\n      }\r\n    }\r\n    delay(2);\r\n    new_value = (*portInputRegister(port) & bit);\r\n  }\r\n  value = new_value;\r\n  if (new_value){\r\n    return HIGH; //auto\r\n  }else{\r\n    return LOW; //hand\r\n  }\r\n}\r`
                }
            }
        },
        "handler": this.funcs.match_in_automode
    },
    {
        "opcode": "control_stop",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "TYPE": {
                "type": "fieldMenu",
                "defaultValue": "all",
                "menu": "CONTROL_STOP_TYPE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ]
    },
    {
        "opcode": "control_forever",
        "blockType": "conditional",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 1,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "sections": {
                    "loop": "/*{$BRANCH1}*/"
                }
            }
        }
    },
    {
        "opcode": "control_repeat_until",
        "blockType": "conditional",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "CONDITION": {
                "type": "boolean",
                "defaultValue": false
            }
        },
        "branchCount": 1,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `while(!(/*{{this.CONDITION ? this.CONDITION : 0}}*/)) \r\n{\r\n  _loop();\r\n  /*{$BRANCH1}*/\r\n}`
            }
        }
    },
    {
        "opcode": "control_wait_until",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "CONDITION": {
                "type": "boolean",
                "defaultValue": false
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `while(!(/*{{this.CONDITION ? this.CONDITION : 0}}*/))\r\n{\r\n  _loop();\r\n}`
            }
        }
    }
]);

export default blocks;