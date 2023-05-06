import blocks from './blocks.js';

const codey_upload_mode_message = (facepanels) => ({
    "name": "codey_upload_mode_message",
    "colors": [
        "#0AAD80",
        "#099C73",
        "#088A66"
    ],
    "menuIconURI": window.MbApi.getExtResPath('codey_upload_mode_message/imgs/4d43f9d814f646e59738848d1c52bee1.svg', 'codey_upload_mode_message'),
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('codey_upload_mode_message/imgs/ab61447c8f9d4b659400cf71fc0154ce.svg', 'codey_upload_mode_message')
    },
    "blocks": blocks(facepanels),
    "menus": {}
});

export default codey_upload_mode_message;