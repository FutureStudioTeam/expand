const blocks = (extFacePanels) => ([{
        "opcode": "mbot2_move_direction_with_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "DIRECTION": {
                "type": "fieldMenu",
                "defaultValue": "forward",
                "menu": "MBOT2_MOVE_DIRECTION_WITH_TIME_DIRECTION"
            },
            "POWER": {
                "type": "number",
                "defaultValue": 50
            },
            "TIME": {
                "type": "number",
                "defaultValue": 1
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
                "code": `mbot2.{DIRECTION}({POWER}, {TIME})`,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_move_direction_with_time
    },
    {
        "opcode": "mbot2_move_direction_with_rpm",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "DIRECTION": {
                "type": "fieldMenu",
                "defaultValue": "forward",
                "menu": "MBOT2_MOVE_DIRECTION_WITH_TIME_DIRECTION"
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
            "python": {
                "code": `mbot2.{DIRECTION}({POWER})\r`,
                "sections": {
                    "import": ['mbot2'],
                    "lib": `import mbuild_modules.starter_shield as starter_shield\r\n\r\n__DEFAULT_SPEED  = 50\r\n__DEFAULT_RUN_TIMS  = \"null\"\r\n__SECOND_TO_MS_FACTOR = 1000\r\n\r\ndef forward(speed = __DEFAULT_SPEED, run_time = __DEFAULT_RUN_TIMS, accel_time = 1, decel_time = 1):\r\n    if speed == 0:\r\n        mbot2.EM_stop(\"all\")\r\n    else:\r\n        if run_time == 0:\r\n            run_time = 0.001 \r\n        if run_time == __DEFAULT_RUN_TIMS:\r\n            run_time = 0    \r\n        if not isinstance(run_time, (int, float)):\r\n            return     \r\n        run_time = int(run_time * __SECOND_TO_MS_FACTOR)\r\n        starter_shield.car_spd_mode_forward(speed, run_time, accel_time, decel_time)\r\n\r\ndef backward(speed = __DEFAULT_SPEED, run_time = __DEFAULT_RUN_TIMS, accel_time = 1, decel_time = 1):\r\n    if speed == 0:\r\n        mbot2.EM_stop(\"all\")\r\n    else:\r\n        if run_time == 0:\r\n            run_time = 0.001 \r\n        if run_time == __DEFAULT_RUN_TIMS:\r\n            run_time = 0  \r\n        if not isinstance(run_time, (int, float)):\r\n            return     \r\n        run_time = int(run_time * __SECOND_TO_MS_FACTOR)    \r\n        starter_shield.car_spd_mode_backward(speed, run_time, accel_time, decel_time)\r\n\r\ndef turn_left(speed = __DEFAULT_SPEED, run_time = __DEFAULT_RUN_TIMS, accel_time = 1, decel_time = 1):\r\n    if speed == 0:\r\n        mbot2.EM_stop(\"all\")\r\n    else:\r\n        if run_time == 0:\r\n            run_time = 0.001 \r\n        if run_time == __DEFAULT_RUN_TIMS:\r\n            run_time = 0  \r\n        if not isinstance(run_time, (int, float)):\r\n            return     \r\n        run_time = int(run_time * __SECOND_TO_MS_FACTOR)\r\n        starter_shield.car_spd_mode_turn_left(speed, run_time, accel_time, decel_time)\r\n\r\ndef turn_right(speed = __DEFAULT_SPEED, run_time = __DEFAULT_RUN_TIMS, accel_time = 1, decel_time = 1):\r\n    if speed == 0:\r\n        mbot2.EM_stop(\"all\")\r\n    else:\r\n        if run_time == 0:\r\n            run_time = 0.001 \r\n        if run_time == __DEFAULT_RUN_TIMS:\r\n            run_time = 0  \r\n        if not isinstance(run_time, (int, float)):\r\n            return     \r\n        run_time = int(run_time * __SECOND_TO_MS_FACTOR)\r\n        starter_shield.car_spd_mode_turn_right(speed, run_time, accel_time, decel_time)\r\n\r\ndef EM_set_speed(speed = __DEFAULT_SPEED, port = \"all\"):\r\n    if port not in [0, 1, 2, \"all\", \"ALL\", \"em1\", \"em2\", \"EM1\", \"EM2\"]:\r\n        return\r\n    if speed == 0:\r\n        mbot2.EM_stop(port)\r\n    else:\r\n        if port == \"all\" or port == \"ALL\":\r\n            port = 0\r\n        if port == \"em1\" or port == \"EM1\":\r\n            port = 1\r\n        if port == \"em2\" or port == \"EM2\":\r\n            port = 2\r\n        starter_shield.encoder_motor_set_speed(port, speed)\r\n\r\ndef drive_speed(EM1_speed = __DEFAULT_SPEED, EM2_speed = __DEFAULT_SPEED, run_time = __DEFAULT_RUN_TIMS, accel_time = 1, decel_time = 1):\r\n    if run_time == 0:\r\n        run_time = 0.001 \r\n    if run_time == __DEFAULT_RUN_TIMS:\r\n        run_time = 0\r\n    if not isinstance(run_time, (int, float)):\r\n        return     \r\n    run_time = int(run_time * __SECOND_TO_MS_FACTOR)\r\n    EM2_speed = -EM2_speed\r\n    if EM1_speed != 0 and EM2_speed != 0:\r\n        starter_shield.car_spd_mode_apiece(EM1_speed, EM2_speed, run_time, accel_time, decel_time)\r\n    else:\r\n        if EM1_speed == 0 and EM2_speed == 0:\r\n            mbot2.EM_stop(\"all\")\r\n        elif EM1_speed == 0 and EM2_speed != 0:\r\n            starter_shield.car_spd_mode_apiece(EM1_speed, EM2_speed, run_time, accel_time, decel_time)\r\n            mbot2.EM_stop(\"em1\")\r\n        elif EM1_speed != 0 and EM2_speed == 0:\r\n            starter_shield.car_spd_mode_apiece(EM1_speed, EM2_speed, run_time, accel_time, decel_time)\r\n            mbot2.EM_stop(\"em2\")\r\n\r\nmbot2.forward = forward\r\nmbot2.backward = backward\r\nmbot2.turn_left = turn_left\r\nmbot2.turn_right = turn_right\r\nmbot2.EM_set_speed = EM_set_speed\r\nmbot2.drive_speed = drive_speed\r`
                }
            }
        },
        "handler": this.funcs.mbot2_move_direction_with_rpm
    },
    {
        "opcode": "mbot2_move_straight_with_cm_and_inch",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "DIRECTION": {
                "type": "fieldMenu",
                "defaultValue": "forward",
                "menu": "MBOT2_MOVE_STRAIGHT_WITH_CM_AND_INCH_DIRECTION"
            },
            "POWER": {
                "type": "number",
                "defaultValue": 100
            },
            "fieldMenu_3": {
                "type": "fieldMenu",
                "defaultValue": "cm",
                "menu": "MBOT2_MOVE_STRAIGHT_WITH_CM_AND_INCH_FIELDMENU_3"
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
                "code": this.funcs.mbot2MoveStraightWithCmAndInchCodesCode,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_move_straight_with_cm_and_inch
    },
    {
        "opcode": "mbot2_cw_and_ccw_with_angle",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "cw",
                "menu": "MBOT2_CW_AND_CCW_WITH_ANGLE_FIELDMENU_1"
            },
            "ANGLE": {
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
            "python": {
                "code": this.funcs.mbot2CwAndCcwWithAngleCodesCode,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_cw_and_ccw_with_angle
    },
    {
        "opcode": "mbot2_encoder_motor_set_with_time",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "EM1",
                "menu": "MBOT2_ENCODER_MOTOR_SET_WITH_TIME_FIELDMENU_1"
            },
            "image_2": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mbot2/imgs/31c1a091d8a54fcd976729084ece026b.svg', 'mbot2')
            },
            "LEFT_POWER": {
                "type": "number",
                "defaultValue": 50
            },
            "fieldMenu_4": {
                "type": "fieldMenu",
                "defaultValue": "speed",
                "menu": "MBOT2_ENCODER_MOTOR_SET_WITH_TIME_FIELDMENU_4"
            },
            "number_3": {
                "type": "number",
                "defaultValue": 1
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
                "code": `mbot2.EM_set_{fieldMenu_4}({LEFT_POWER}, \"{fieldMenu_1}\")\r\ntime.sleep({number_3})\r\nmbot2.EM_stop(\"{fieldMenu_1}\")`,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_encoder_motor_set_with_time
    },
    {
        "opcode": "mbot2_encoder_motor_set",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "inputMenu_1": {
                "type": "inputMenu",
                "defaultValue": "EM1",
                "menu": "MBOT2_ENCODER_MOTOR_SET_WITH_TIME_FIELDMENU_1"
            },
            "image_2": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mbot2/imgs/8b39ea188bd34cf8b3c06d69c40bef24.svg', 'mbot2')
            },
            "LEFT_POWER": {
                "type": "number",
                "defaultValue": 50
            },
            "fieldMenu_4": {
                "type": "fieldMenu",
                "defaultValue": "speed",
                "menu": "MBOT2_ENCODER_MOTOR_SET_WITH_TIME_FIELDMENU_4"
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
                "code": `mbot2.EM_set_{fieldMenu_4}({LEFT_POWER},\"{inputMenu_1}\")\r`,
                "sections": {
                    "import": ['mbot2'],
                    "lib": `import mbuild_modules.starter_shield as starter_shield\r\n\r\n__DEFAULT_SPEED  = 50\r\n__DEFAULT_RUN_TIMS  = \"null\"\r\n__SECOND_TO_MS_FACTOR = 1000\r\n\r\ndef forward(speed = __DEFAULT_SPEED, run_time = __DEFAULT_RUN_TIMS, accel_time = 1, decel_time = 1):\r\n    if speed == 0:\r\n        mbot2.EM_stop(\"all\")\r\n    else:\r\n        if run_time == 0:\r\n            run_time = 0.001 \r\n        if run_time == __DEFAULT_RUN_TIMS:\r\n            run_time = 0    \r\n        if not isinstance(run_time, (int, float)):\r\n            return     \r\n        run_time = int(run_time * __SECOND_TO_MS_FACTOR)\r\n        starter_shield.car_spd_mode_forward(speed, run_time, accel_time, decel_time)\r\n\r\ndef backward(speed = __DEFAULT_SPEED, run_time = __DEFAULT_RUN_TIMS, accel_time = 1, decel_time = 1):\r\n    if speed == 0:\r\n        mbot2.EM_stop(\"all\")\r\n    else:\r\n        if run_time == 0:\r\n            run_time = 0.001 \r\n        if run_time == __DEFAULT_RUN_TIMS:\r\n            run_time = 0  \r\n        if not isinstance(run_time, (int, float)):\r\n            return     \r\n        run_time = int(run_time * __SECOND_TO_MS_FACTOR)    \r\n        starter_shield.car_spd_mode_backward(speed, run_time, accel_time, decel_time)\r\n\r\ndef turn_left(speed = __DEFAULT_SPEED, run_time = __DEFAULT_RUN_TIMS, accel_time = 1, decel_time = 1):\r\n    if speed == 0:\r\n        mbot2.EM_stop(\"all\")\r\n    else:\r\n        if run_time == 0:\r\n            run_time = 0.001 \r\n        if run_time == __DEFAULT_RUN_TIMS:\r\n            run_time = 0  \r\n        if not isinstance(run_time, (int, float)):\r\n            return     \r\n        run_time = int(run_time * __SECOND_TO_MS_FACTOR)\r\n        starter_shield.car_spd_mode_turn_left(speed, run_time, accel_time, decel_time)\r\n\r\ndef turn_right(speed = __DEFAULT_SPEED, run_time = __DEFAULT_RUN_TIMS, accel_time = 1, decel_time = 1):\r\n    if speed == 0:\r\n        mbot2.EM_stop(\"all\")\r\n    else:\r\n        if run_time == 0:\r\n            run_time = 0.001 \r\n        if run_time == __DEFAULT_RUN_TIMS:\r\n            run_time = 0  \r\n        if not isinstance(run_time, (int, float)):\r\n            return     \r\n        run_time = int(run_time * __SECOND_TO_MS_FACTOR)\r\n        starter_shield.car_spd_mode_turn_right(speed, run_time, accel_time, decel_time)\r\n\r\ndef EM_set_speed(speed = __DEFAULT_SPEED, port = \"all\"):\r\n    if port not in [0, 1, 2, \"all\", \"ALL\", \"em1\", \"em2\", \"EM1\", \"EM2\"]:\r\n        return\r\n    if speed == 0:\r\n        mbot2.EM_stop(port)\r\n    else:\r\n        if port == \"all\" or port == \"ALL\":\r\n            port = 0\r\n        if port == \"em1\" or port == \"EM1\":\r\n            port = 1\r\n        if port == \"em2\" or port == \"EM2\":\r\n            port = 2\r\n        starter_shield.encoder_motor_set_speed(port, speed)\r\n\r\ndef drive_speed(EM1_speed = __DEFAULT_SPEED, EM2_speed = __DEFAULT_SPEED, run_time = __DEFAULT_RUN_TIMS, accel_time = 1, decel_time = 1):\r\n    if run_time == 0:\r\n        run_time = 0.001 \r\n    if run_time == __DEFAULT_RUN_TIMS:\r\n        run_time = 0\r\n    if not isinstance(run_time, (int, float)):\r\n        return     \r\n    run_time = int(run_time * __SECOND_TO_MS_FACTOR)\r\n    EM2_speed = -EM2_speed\r\n    if EM1_speed != 0 and EM2_speed != 0:\r\n        starter_shield.car_spd_mode_apiece(EM1_speed, EM2_speed, run_time, accel_time, decel_time)\r\n    else:\r\n        if EM1_speed == 0 and EM2_speed == 0:\r\n            mbot2.EM_stop(\"all\")\r\n        elif EM1_speed == 0 and EM2_speed != 0:\r\n            starter_shield.car_spd_mode_apiece(EM1_speed, EM2_speed, run_time, accel_time, decel_time)\r\n            mbot2.EM_stop(\"em1\")\r\n        elif EM1_speed != 0 and EM2_speed == 0:\r\n            starter_shield.car_spd_mode_apiece(EM1_speed, EM2_speed, run_time, accel_time, decel_time)\r\n            mbot2.EM_stop(\"em2\")\r\n\r\nmbot2.forward = forward\r\nmbot2.backward = backward\r\nmbot2.turn_left = turn_left\r\nmbot2.turn_right = turn_right\r\nmbot2.EM_set_speed = EM_set_speed\r\nmbot2.drive_speed = drive_speed\r`
                }
            }
        },
        "handler": this.funcs.mbot2_encoder_motor_set
    },
    {
        "opcode": "mbot2_encoder_motor_set_with_time_angle_and_circle",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "fieldMenu_1": {
                "type": "inputMenu",
                "defaultValue": "ALL",
                "menu": "MBOT2_ENCODER_MOTOR_SET_WITH_TIME_FIELDMENU_1"
            },
            "image_1": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mbot2/imgs/31c1a091d8a54fcd976729084ece026b.svg', 'mbot2')
            },
            "LEFT_POWER": {
                "type": "number",
                "defaultValue": 180
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
                "code": `mbot2.EM_turn({LEFT_POWER}, 50, \"{fieldMenu_1}\")`,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_encoder_motor_set_with_time_angle_and_circle
    },
    {
        "opcode": "mbot2_encoder_motor_drive_speed",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "image_1": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mbot2/imgs/d2eba024c9084aefa505af46cd026a55.svg', 'mbot2')
            },
            "LEFT_POWER": {
                "type": "number",
                "defaultValue": 50
            },
            "image_3": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mbot2/imgs/a03f3a802ba8406aade6e927238752d1.svg', 'mbot2')
            },
            "RIGHT_POWER": {
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
                "code": `mbot2.drive_speed({LEFT_POWER}, {RIGHT_POWER})\r`,
                "sections": {
                    "import": ['mbot2'],
                    "lib": `import mbuild_modules.starter_shield as starter_shield\r\n\r\n__DEFAULT_SPEED  = 50\r\n__DEFAULT_RUN_TIMS  = \"null\"\r\n__SECOND_TO_MS_FACTOR = 1000\r\n\r\ndef forward(speed = __DEFAULT_SPEED, run_time = __DEFAULT_RUN_TIMS, accel_time = 1, decel_time = 1):\r\n    if speed == 0:\r\n        mbot2.EM_stop(\"all\")\r\n    else:\r\n        if run_time == 0:\r\n            run_time = 0.001 \r\n        if run_time == __DEFAULT_RUN_TIMS:\r\n            run_time = 0    \r\n        if not isinstance(run_time, (int, float)):\r\n            return     \r\n        run_time = int(run_time * __SECOND_TO_MS_FACTOR)\r\n        starter_shield.car_spd_mode_forward(speed, run_time, accel_time, decel_time)\r\n\r\ndef backward(speed = __DEFAULT_SPEED, run_time = __DEFAULT_RUN_TIMS, accel_time = 1, decel_time = 1):\r\n    if speed == 0:\r\n        mbot2.EM_stop(\"all\")\r\n    else:\r\n        if run_time == 0:\r\n            run_time = 0.001 \r\n        if run_time == __DEFAULT_RUN_TIMS:\r\n            run_time = 0  \r\n        if not isinstance(run_time, (int, float)):\r\n            return     \r\n        run_time = int(run_time * __SECOND_TO_MS_FACTOR)    \r\n        starter_shield.car_spd_mode_backward(speed, run_time, accel_time, decel_time)\r\n\r\ndef turn_left(speed = __DEFAULT_SPEED, run_time = __DEFAULT_RUN_TIMS, accel_time = 1, decel_time = 1):\r\n    if speed == 0:\r\n        mbot2.EM_stop(\"all\")\r\n    else:\r\n        if run_time == 0:\r\n            run_time = 0.001 \r\n        if run_time == __DEFAULT_RUN_TIMS:\r\n            run_time = 0  \r\n        if not isinstance(run_time, (int, float)):\r\n            return     \r\n        run_time = int(run_time * __SECOND_TO_MS_FACTOR)\r\n        starter_shield.car_spd_mode_turn_left(speed, run_time, accel_time, decel_time)\r\n\r\ndef turn_right(speed = __DEFAULT_SPEED, run_time = __DEFAULT_RUN_TIMS, accel_time = 1, decel_time = 1):\r\n    if speed == 0:\r\n        mbot2.EM_stop(\"all\")\r\n    else:\r\n        if run_time == 0:\r\n            run_time = 0.001 \r\n        if run_time == __DEFAULT_RUN_TIMS:\r\n            run_time = 0  \r\n        if not isinstance(run_time, (int, float)):\r\n            return     \r\n        run_time = int(run_time * __SECOND_TO_MS_FACTOR)\r\n        starter_shield.car_spd_mode_turn_right(speed, run_time, accel_time, decel_time)\r\n\r\ndef EM_set_speed(speed = __DEFAULT_SPEED, port = \"all\"):\r\n    if port not in [0, 1, 2, \"all\", \"ALL\", \"em1\", \"em2\", \"EM1\", \"EM2\"]:\r\n        return\r\n    if speed == 0:\r\n        mbot2.EM_stop(port)\r\n    else:\r\n        if port == \"all\" or port == \"ALL\":\r\n            port = 0\r\n        if port == \"em1\" or port == \"EM1\":\r\n            port = 1\r\n        if port == \"em2\" or port == \"EM2\":\r\n            port = 2\r\n        starter_shield.encoder_motor_set_speed(port, speed)\r\n\r\ndef drive_speed(EM1_speed = __DEFAULT_SPEED, EM2_speed = __DEFAULT_SPEED, run_time = __DEFAULT_RUN_TIMS, accel_time = 1, decel_time = 1):\r\n    if run_time == 0:\r\n        run_time = 0.001 \r\n    if run_time == __DEFAULT_RUN_TIMS:\r\n        run_time = 0\r\n    if not isinstance(run_time, (int, float)):\r\n        return     \r\n    run_time = int(run_time * __SECOND_TO_MS_FACTOR)\r\n    EM2_speed = -EM2_speed\r\n    if EM1_speed != 0 and EM2_speed != 0:\r\n        starter_shield.car_spd_mode_apiece(EM1_speed, EM2_speed, run_time, accel_time, decel_time)\r\n    else:\r\n        if EM1_speed == 0 and EM2_speed == 0:\r\n            mbot2.EM_stop(\"all\")\r\n        elif EM1_speed == 0 and EM2_speed != 0:\r\n            starter_shield.car_spd_mode_apiece(EM1_speed, EM2_speed, run_time, accel_time, decel_time)\r\n            mbot2.EM_stop(\"em1\")\r\n        elif EM1_speed != 0 and EM2_speed == 0:\r\n            starter_shield.car_spd_mode_apiece(EM1_speed, EM2_speed, run_time, accel_time, decel_time)\r\n            mbot2.EM_stop(\"em2\")\r\n\r\nmbot2.forward = forward\r\nmbot2.backward = backward\r\nmbot2.turn_left = turn_left\r\nmbot2.turn_right = turn_right\r\nmbot2.EM_set_speed = EM_set_speed\r\nmbot2.drive_speed = drive_speed\r`
                }
            }
        },
        "handler": this.funcs.mbot2_encoder_motor_drive_speed
    },
    {
        "opcode": "mbot2_encoder_motor_drive_speed2",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "image_1": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mbot2/imgs/d2eba024c9084aefa505af46cd026a55.svg', 'mbot2')
            },
            "LEFT_POWER": {
                "type": "number",
                "defaultValue": 50
            },
            "image_3": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mbot2/imgs/a03f3a802ba8406aade6e927238752d1.svg', 'mbot2')
            },
            "RIGHT_POWER": {
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
                "code": `mbot2.drive_speed({LEFT_POWER}, {RIGHT_POWER})\r`,
                "sections": {
                    "import": ['mbot2'],
                    "lib": `import mbuild_modules.starter_shield as starter_shield\r\n\r\n__DEFAULT_SPEED  = 50\r\n__DEFAULT_RUN_TIMS  = \"null\"\r\n__SECOND_TO_MS_FACTOR = 1000\r\n\r\ndef forward(speed = __DEFAULT_SPEED, run_time = __DEFAULT_RUN_TIMS, accel_time = 1, decel_time = 1):\r\n    if speed == 0:\r\n        mbot2.EM_stop(\"all\")\r\n    else:\r\n        if run_time == 0:\r\n            run_time = 0.001 \r\n        if run_time == __DEFAULT_RUN_TIMS:\r\n            run_time = 0    \r\n        if not isinstance(run_time, (int, float)):\r\n            return     \r\n        run_time = int(run_time * __SECOND_TO_MS_FACTOR)\r\n        starter_shield.car_spd_mode_forward(speed, run_time, accel_time, decel_time)\r\n\r\ndef backward(speed = __DEFAULT_SPEED, run_time = __DEFAULT_RUN_TIMS, accel_time = 1, decel_time = 1):\r\n    if speed == 0:\r\n        mbot2.EM_stop(\"all\")\r\n    else:\r\n        if run_time == 0:\r\n            run_time = 0.001 \r\n        if run_time == __DEFAULT_RUN_TIMS:\r\n            run_time = 0  \r\n        if not isinstance(run_time, (int, float)):\r\n            return     \r\n        run_time = int(run_time * __SECOND_TO_MS_FACTOR)    \r\n        starter_shield.car_spd_mode_backward(speed, run_time, accel_time, decel_time)\r\n\r\ndef turn_left(speed = __DEFAULT_SPEED, run_time = __DEFAULT_RUN_TIMS, accel_time = 1, decel_time = 1):\r\n    if speed == 0:\r\n        mbot2.EM_stop(\"all\")\r\n    else:\r\n        if run_time == 0:\r\n            run_time = 0.001 \r\n        if run_time == __DEFAULT_RUN_TIMS:\r\n            run_time = 0  \r\n        if not isinstance(run_time, (int, float)):\r\n            return     \r\n        run_time = int(run_time * __SECOND_TO_MS_FACTOR)\r\n        starter_shield.car_spd_mode_turn_left(speed, run_time, accel_time, decel_time)\r\n\r\ndef turn_right(speed = __DEFAULT_SPEED, run_time = __DEFAULT_RUN_TIMS, accel_time = 1, decel_time = 1):\r\n    if speed == 0:\r\n        mbot2.EM_stop(\"all\")\r\n    else:\r\n        if run_time == 0:\r\n            run_time = 0.001 \r\n        if run_time == __DEFAULT_RUN_TIMS:\r\n            run_time = 0  \r\n        if not isinstance(run_time, (int, float)):\r\n            return     \r\n        run_time = int(run_time * __SECOND_TO_MS_FACTOR)\r\n        starter_shield.car_spd_mode_turn_right(speed, run_time, accel_time, decel_time)\r\n\r\ndef EM_set_speed(speed = __DEFAULT_SPEED, port = \"all\"):\r\n    if port not in [0, 1, 2, \"all\", \"ALL\", \"em1\", \"em2\", \"EM1\", \"EM2\"]:\r\n        return\r\n    if speed == 0:\r\n        mbot2.EM_stop(port)\r\n    else:\r\n        if port == \"all\" or port == \"ALL\":\r\n            port = 0\r\n        if port == \"em1\" or port == \"EM1\":\r\n            port = 1\r\n        if port == \"em2\" or port == \"EM2\":\r\n            port = 2\r\n        starter_shield.encoder_motor_set_speed(port, speed)\r\n\r\ndef drive_speed(EM1_speed = __DEFAULT_SPEED, EM2_speed = __DEFAULT_SPEED, run_time = __DEFAULT_RUN_TIMS, accel_time = 1, decel_time = 1):\r\n    if run_time == 0:\r\n        run_time = 0.001 \r\n    if run_time == __DEFAULT_RUN_TIMS:\r\n        run_time = 0\r\n    if not isinstance(run_time, (int, float)):\r\n        return     \r\n    run_time = int(run_time * __SECOND_TO_MS_FACTOR)\r\n    EM2_speed = -EM2_speed\r\n    if EM1_speed != 0 and EM2_speed != 0:\r\n        starter_shield.car_spd_mode_apiece(EM1_speed, EM2_speed, run_time, accel_time, decel_time)\r\n    else:\r\n        if EM1_speed == 0 and EM2_speed == 0:\r\n            mbot2.EM_stop(\"all\")\r\n        elif EM1_speed == 0 and EM2_speed != 0:\r\n            starter_shield.car_spd_mode_apiece(EM1_speed, EM2_speed, run_time, accel_time, decel_time)\r\n            mbot2.EM_stop(\"em1\")\r\n        elif EM1_speed != 0 and EM2_speed == 0:\r\n            starter_shield.car_spd_mode_apiece(EM1_speed, EM2_speed, run_time, accel_time, decel_time)\r\n            mbot2.EM_stop(\"em2\")\r\n\r\nmbot2.forward = forward\r\nmbot2.backward = backward\r\nmbot2.turn_left = turn_left\r\nmbot2.turn_right = turn_right\r\nmbot2.EM_set_speed = EM_set_speed\r\nmbot2.drive_speed = drive_speed\r`
                }
            }
        },
        "handler": this.funcs.mbot2_encoder_motor_drive_speed2
    },
    {
        "opcode": "mbot2_encoder_motor_drive_power",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "image_1": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mbot2/imgs/d2eba024c9084aefa505af46cd026a55.svg', 'mbot2')
            },
            "LEFT_POWER": {
                "type": "number",
                "defaultValue": 50
            },
            "image_3": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mbot2/imgs/a03f3a802ba8406aade6e927238752d1.svg', 'mbot2')
            },
            "number_2": {
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
                "code": `mbot2.drive_power({LEFT_POWER}, {number_2})`,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_encoder_motor_drive_power
    },
    {
        "opcode": "mbot2_encoder_motor_stop",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "fieldMenu_1": {
                "type": "fieldMenu",
                "defaultValue": "ALL",
                "menu": "MBOT2_ENCODER_MOTOR_STOP_FIELDMENU_1"
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
                "code": `mbot2.EM_stop(\"{fieldMenu_1}\")`,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_encoder_motor_stop
    },
    {
        "opcode": "mbot2_encoder_motor_get_speed",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "inputMenu_2": {
                "type": "inputMenu",
                "defaultValue": "EM1",
                "menu": "MBOT2_ENCODER_MOTOR_GET_SPEED_INPUTMENU_2"
            },
            "image_2": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mbot2/imgs/fc803cc5f0fb4a57b30eff879d3bf573.svg', 'mbot2')
            },
            "fieldMenu_3": {
                "type": "fieldMenu",
                "defaultValue": "speed",
                "menu": "MBOT2_ENCODER_MOTOR_GET_SPEED_FIELDMENU_3"
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
                "code": `mbot2.EM_get_{fieldMenu_3}(\"{inputMenu_2}\")`,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_encoder_motor_get_speed
    },
    {
        "opcode": "mbot2_encoder_motor_get_angle",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "inputMenu_1": {
                "type": "inputMenu",
                "defaultValue": "EM1",
                "menu": "MBOT2_ENCODER_MOTOR_GET_SPEED_INPUTMENU_2"
            },
            "image_2": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mbot2/imgs/b9a7410cefc8414b910eac530efa6ff6.svg', 'mbot2')
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
                "code": `mbot2.EM_get_angle(\"{inputMenu_1}\")`,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_encoder_motor_get_angle
    },
    {
        "opcode": "mbot2_encoder_motor_reset_angle",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "inputMenu_1": {
                "type": "inputMenu",
                "defaultValue": "ALL",
                "menu": "MBOT2_ENCODER_MOTOR_STOP_FIELDMENU_1"
            },
            "image_2": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('mbot2/imgs/48427899044848c8bde1024e735c28a2.svg', 'mbot2')
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
                "code": `mbot2.EM_reset_angle(\"{inputMenu_1}\")`,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_encoder_motor_reset_angle
    },
    {
        "opcode": "mbot2_encoder_motor_lock_and_unlock",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "inputMenu_1": {
                "type": "inputMenu",
                "defaultValue": "ALL",
                "menu": "MBOT2_ENCODER_MOTOR_STOP_FIELDMENU_1"
            },
            "fieldMenu_2": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "MBOT2_ENCODER_MOTOR_LOCK_AND_UNLOCK_FIELDMENU_2"
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
                "code": `mbot2.EM_lock({fieldMenu_2}, \"{inputMenu_1}\")`,
                "sections": {
                    "import": ['mbot2']
                }
            }
        },
        "handler": this.funcs.mbot2_encoder_motor_lock_and_unlock
    },
    {
        "opcode": "BLOCK_1599105327388",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": true,
        "gap": 12,
        "arguments": {
            "number_1": {
                "type": "number",
                "defaultValue": 64
            },
            "number_2": {
                "type": "number",
                "defaultValue": 114
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1599105327388
    }
]);

export default blocks;