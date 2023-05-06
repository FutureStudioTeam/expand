import blocks from './blocks.js';

const data = (facepanels) => ({
    "name": "data",
    "colors": [
        "#FF8C1A",
        "#FD7E00",
        "#E17000"
    ],
    "menuIconURI": "",
    "blockIcon": null,
    "blocks": blocks(facepanels),
    "menus": {
        "DATA_SETVARIABLETO_VARIABLE": [{
            "text": "DATA_SETVARIABLETO_VARIABLE_0",
            "value": ""
        }]
    }
});

export default data;