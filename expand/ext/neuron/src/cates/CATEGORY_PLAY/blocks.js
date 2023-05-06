const blocks = (extFacePanels) => ([{
        "opcode": "neuron_play_tone",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'neuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "TONE": {
                "type": "fieldMenu",
                "defaultValue": "262",
                "menu": "NEURON_PLAY_TONE_TONE"
            },
            "BEAT": {
                "type": "number",
                "defaultValue": 0.25
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb",
            "mblockapp"
        ],
        "handler": this.funcs.neuron_play_tone
    },
    {
        "opcode": "neuron_play_hz",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "ICON": {
                "type": "image",
                "width": 28,
                "height": 26,
                "src": window.MbApi.getExtResPath('neuron/imgs/158ef4113a5641a697d6559d4f9bc22e.svg', 'neuron')
            },
            "ID": {
                "type": "number",
                "defaultValue": 1
            },
            "HZ": {
                "type": "number",
                "defaultValue": 700
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
        "handler": this.funcs.neuron_play_hz
    }
]);

export default blocks;