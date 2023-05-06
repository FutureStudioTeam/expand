const blocks = (extFacePanels) => ([{
        "opcode": "control_stop",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "image_1": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('cyberpi/imgs/fa14aa5a4ad448ecb1f9372fbe64ae85.svg', 'cyberpi')
            },
            "STOP_OPTION": {
                "type": "fieldMenu",
                "defaultValue": "all",
                "menu": "CONTROL_STOP_STOP_OPTION"
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
                "code": `{{\r\n  if(this.STOP_OPTION == 'all'){'cyberpi.stop_all()'}\r\n  else if(this.STOP_OPTION == 'this script'){'cyberpi.stop_this()'}\r\n  else{'cyberpi.stop_other()'}   \r\n}}`
            }
        }
    },
    {
        "opcode": "cyberpi_restart",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "image_1": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('cyberpi/imgs/7878a013b8524a1e92a7433a588a6dde.svg', 'cyberpi')
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
                "code": `cyberpi.restart()`
            }
        },
        "handler": this.funcs.cyberpi_restart
    },
    {
        "opcode": "cyberpi_python_insert",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "string_1": {
                "type": "string",
                "defaultValue": "cyberpi.console.print(\"hello world\")"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "python": {
                "code": this.funcs.cyberpiPythonInsertCodesCode
            }
        },
        "handler": this.funcs.cyberpi_python_insert
    }
]);

export default blocks;