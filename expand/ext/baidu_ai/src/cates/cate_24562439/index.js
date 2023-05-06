import blocks from './blocks.js';

const cate_24562439 = (facepanels) => ({
    "name": "cate_24562439",
    "colors": [
        "#3869F8",
        "#1B53F7",
        "#0842EB"
    ],
    "menuIconURI": window.MbApi.getExtResPath('baidu_ai/imgs/87343981260943e2838d7ace320259e1.svg', 'baidu_ai'),
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('baidu_ai/imgs/c051748cbc434e19b4ad022c53d98e68.svg', 'baidu_ai')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "BLOCK_1565074256065_TYPE": [{
                "text": "BLOCK_1565074256065_TYPE_0",
                "value": "lexer"
            },
            {
                "text": "BLOCK_1565074256065_TYPE_1",
                "value": "sentiment_classify"
            }
        ]
    }
});

export default cate_24562439;