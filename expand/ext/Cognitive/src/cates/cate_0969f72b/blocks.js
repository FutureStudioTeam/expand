const blocks = (extFacePanels) => ([{
        "opcode": "beginSpeechToText",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "LANGUAGE": {
                "type": "fieldMenu",
                "defaultValue": "zh-CN",
                "menu": "BEGINSPEECHTOTEXT_LANGUAGE"
            },
            "TIMER": {
                "type": "fieldMenu",
                "defaultValue": "2",
                "menu": "BEGINSPEECHTOTEXT_TIMER"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.beginSpeechToText
    },
    {
        "opcode": "BLOCK_1596095748995",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "isHideSignal": {
                "type": "fieldMenu",
                "defaultValue": "true",
                "menu": "BLOCK_1596095748995_ISHIDESIGNAL"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1596095748995
    },
    {
        "opcode": "speechToTextResult",
        "blockType": "string",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.speechToTextResult
    },
    {
        "opcode": "beginImageToText",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "TIMER": {
                "type": "fieldMenu",
                "defaultValue": "2",
                "menu": "BEGINSPEECHTOTEXT_TIMER"
            },
            "LANGUAGE": {
                "type": "fieldMenu",
                "defaultValue": "zh-Hans",
                "menu": "BEGINIMAGETOTEXT_LANGUAGE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.beginImageToText
    },
    {
        "opcode": "beginHandwrittenToText",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "TIMER": {
                "type": "fieldMenu",
                "defaultValue": "2",
                "menu": "BEGINSPEECHTOTEXT_TIMER"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.beginHandwrittenToText
    },
    {
        "opcode": "imageToTextResult",
        "blockType": "string",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.imageToTextResult
    },
    {
        "opcode": "BLOCK_1566749887154",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "TIMER": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1566749887154_TIMER"
            },
            "TYPE": {
                "type": "fieldMenu",
                "defaultValue": "图像类别",
                "menu": "BLOCK_1566749887154_TYPE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1566749887154
    },
    {
        "opcode": "BLOCK_1566750695965",
        "blockType": "string",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "TYPE": {
                "type": "fieldMenu",
                "defaultValue": "categories",
                "menu": "BLOCK_1566750695965_TYPE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1566750695965
    },
    {
        "opcode": "BLOCK_1590654305900",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "TIMER": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1566749887154_TIMER"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1590654305900
    },
    {
        "opcode": "BLOCK_1590654307561",
        "blockType": "string",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1590654307561
    },
    {
        "opcode": "beginFaceDetection",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "TIMER": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1566749887154_TIMER"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.beginFaceDetection
    },
    {
        "opcode": "faceDetectionResult",
        "blockType": "string",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.faceDetectionResult
    },
    {
        "opcode": "beginEmotionRecognition",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "TIMER": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1566749887154_TIMER"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.beginEmotionRecognition
    },
    {
        "opcode": "emotionValue",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "TYPE": {
                "type": "fieldMenu",
                "defaultValue": "happiness",
                "menu": "EMOTIONVALUE_TYPE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.emotionValue
    },
    {
        "opcode": "emotionType",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "TYPE": {
                "type": "fieldMenu",
                "defaultValue": "happiness",
                "menu": "EMOTIONVALUE_TYPE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.emotionType
    },
    {
        "opcode": "beginFaceToGender",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "TIMER": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1566749887154_TIMER"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.beginFaceToGender
    },
    {
        "opcode": "faceToGenderResult",
        "blockType": "string",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.faceToGenderResult
    },
    {
        "opcode": "beginFaceToGlassType",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "TIMER": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1566749887154_TIMER"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.beginFaceToGlassType
    },
    {
        "opcode": "faceToGlassTypeResult",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "TYPE": {
                "type": "fieldMenu",
                "defaultValue": "sunglasses",
                "menu": "FACETOGLASSTYPERESULT_TYPE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.faceToGlassTypeResult
    },
    {
        "opcode": "beginFaceToIsSmile",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "TIMER": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1566749887154_TIMER"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.beginFaceToIsSmile
    },
    {
        "opcode": "faceToIsSmileResult",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.faceToIsSmileResult
    },
    {
        "opcode": "beginFaceToHeadPose",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "TIMER": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1566749887154_TIMER"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.beginFaceToHeadPose
    },
    {
        "opcode": "faceToHeadPoseResult",
        "blockType": "number",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "TYPE": {
                "type": "fieldMenu",
                "defaultValue": "pitch",
                "menu": "FACETOHEADPOSERESULT_TYPE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.faceToHeadPoseResult
    },
    {
        "opcode": "BLOCK_1590547868949",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "TIMER": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1566749887154_TIMER"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1590547868949
    },
    {
        "opcode": "BLOCK_1590547872342",
        "blockType": "string",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1590547872342
    },
    {
        "opcode": "BLOCK_1590548187016",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "TIMER": {
                "type": "fieldMenu",
                "defaultValue": "1",
                "menu": "BLOCK_1566749887154_TIMER"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1590548187016
    },
    {
        "opcode": "BLOCK_1590548264613",
        "blockType": "boolean",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "TYPE": {
                "type": "fieldMenu",
                "defaultValue": "foreheadOccluded",
                "menu": "BLOCK_1590548264613_TYPE"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1590548264613
    },
    {
        "opcode": "BLOCK_1590548416527",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "lang": {
                "type": "fieldMenu",
                "defaultValue": "en",
                "menu": "BLOCK_1590548416527_LANG"
            },
            "text": {
                "type": "string",
                "defaultValue": "Help more people enjoy creating while having fun."
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1590548416527
    },
    {
        "opcode": "BLOCK_1590548515617",
        "blockType": "string",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1590548515617
    },
    {
        "opcode": "BLOCK_1590548564704",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "text": {
                "type": "string",
                "defaultValue": "cognitive"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1590548564704
    },
    {
        "opcode": "BLOCK_1590548610070",
        "blockType": "string",
        "checkboxInFlyout": true,
        "hidden": false,
        "gap": 36,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "handler": this.funcs.BLOCK_1590548610070
    }
]);

export default blocks;