const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1616555750567",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1616555750567_PORT"
            },
            "POWER": {
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
            "arduinoc": {
                "code": this.funcs.block1616555750567CodesCode,
                "sections": {
                    "lib": this.funcs.block1616555750567CodesLib
                }
            }
        },
        "handler": this.funcs.BLOCK_1616555750567
    },
    {
        "opcode": "BLOCK_1616555750670",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "PORT1": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1616555750567_PORT"
            },
            "PORT2": {
                "type": "fieldMenu",
                "defaultValue": "9",
                "menu": "BLOCK_1616555750567_PORT"
            },
            "POWER": {
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
            "arduinoc": {
                "code": this.funcs.block1616555750670CodesCode,
                "sections": {
                    "lib": this.funcs.block1616555750670CodesLib
                }
            }
        },
        "handler": this.funcs.BLOCK_1616555750670
    },
    {
        "opcode": "BLOCK_1616555750741",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "POWER": {
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
            "arduinoc": {
                "code": this.funcs.block1616555750741CodesCode,
                "sections": {
                    "lib": this.funcs.block1616555750741CodesLib
                }
            }
        },
        "handler": this.funcs.BLOCK_1616555750741
    },
    {
        "opcode": "BLOCK_1617082946013",
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
            "arduinoc": {
                "code": this.funcs.block1617082946013CodesCode,
                "sections": {
                    "lib": this.funcs.block1617082946013CodesLib
                }
            }
        },
        "handler": this.funcs.BLOCK_1617082946013
    },
    {
        "opcode": "BLOCK_1616747767054",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "MOVE_DIRECTION": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "BLOCK_1616747767054_MOVE_DIRECTION"
            },
            "POWER": {
                "type": "number",
                "defaultValue": 50
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.block1616747767054CodesCode,
                "sections": {
                    "lib": this.funcs.block1616747767054CodesLib,
                    "declare": `void motor_foward_left_run(int16_t speed)\r\n{\r\n   motor_10.run(-speed);\r\n}\r\n\r\nvoid motor_foward_right_run(int16_t speed)\r\n{\r\n  motor_1.run(speed);\r\n}\r\n\r\nvoid motor_back_left_run(int16_t speed)\r\n{\r\n  motor_2.run(-speed);\r\n}\r\n\r\nvoid motor_back_right_run(int16_t speed)\r\n{\r\n  motor_9.run(speed);\r\n}\r\n\r\nvoid move_control(int16_t vx, int16_t vy, int16_t vw)\r\n{\r\n  int16_t foward_left_speed;\r\n  int16_t foward_right_speed;\r\n  int16_t back_left_speed;\r\n  int16_t back_right_speed;\r\n\r\n  foward_left_speed = vy + vx + vw;\r\n  foward_right_speed = vy - vx - vw;\r\n  back_left_speed = vy - vx + vw;\r\n  back_right_speed = vy + vx - vw;\r\n\r\n  motor_foward_left_run(foward_left_speed);    \r\n  motor_foward_right_run(foward_right_speed);   \r\n  motor_back_left_run(back_left_speed);   \r\n  motor_back_right_run(back_right_speed);   \r\n}`
                }
            }
        },
        "handler": this.funcs.BLOCK_1616747767054
    },
    {
        "opcode": "BLOCK_1616748288206",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "vx": {
                "type": "number",
                "defaultValue": 0
            },
            "vy": {
                "type": "number",
                "defaultValue": 0
            },
            "vw": {
                "type": "number",
                "defaultValue": 0
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": this.funcs.block1616748288206CodesCode,
                "sections": {
                    "lib": this.funcs.block1616748288206CodesLib,
                    "declare": `void motor_foward_left_run(int16_t speed)\r\n{\r\n   motor_10.run(-speed);\r\n}\r\n\r\nvoid motor_foward_right_run(int16_t speed)\r\n{\r\n  motor_1.run(speed);\r\n}\r\n\r\nvoid motor_back_left_run(int16_t speed)\r\n{\r\n  motor_2.run(-speed);\r\n}\r\n\r\nvoid motor_back_right_run(int16_t speed)\r\n{\r\n  motor_9.run(speed);\r\n}\r\n\r\nvoid move_control(int16_t vx, int16_t vy, int16_t vw)\r\n{\r\n  int16_t foward_left_speed;\r\n  int16_t foward_right_speed;\r\n  int16_t back_left_speed;\r\n  int16_t back_right_speed;\r\n\r\n  foward_left_speed = vy + vx + vw;\r\n  foward_right_speed = vy - vx - vw;\r\n  back_left_speed = vy - vx + vw;\r\n  back_right_speed = vy + vx - vw;\r\n\r\n  motor_foward_left_run(foward_left_speed);    \r\n  motor_foward_right_run(foward_right_speed);   \r\n  motor_back_left_run(back_left_speed);   \r\n  motor_back_right_run(back_right_speed);   \r\n}`
                }
            }
        },
        "handler": this.funcs.BLOCK_1616748288206
    }
]);

export default blocks;