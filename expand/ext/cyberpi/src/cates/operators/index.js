import blocks from './blocks.js';

const operators = (facepanels) => ({
    "name": "operators",
    "colors": [
        "#59C059",
        "#46B746",
        "#3EA33E"
    ],
    "menuIconURI": "",
    "blockIcon": null,
    "blocks": blocks(facepanels),
    "menus": {
        "OPERATOR_MATHOP_OPERATOR": [{
            "text": "OPERATOR_MATHOP_OPERATOR_0",
            "value": " fabs"
        }],
        "CYBERPI_OPERATOR_CASTS_FIELDMENU_1": [{
                "text": "CYBERPI_OPERATOR_CASTS_FIELDMENU_1_0",
                "value": "int"
            },
            {
                "text": "CYBERPI_OPERATOR_CASTS_FIELDMENU_1_1",
                "value": "float"
            },
            {
                "text": "CYBERPI_OPERATOR_CASTS_FIELDMENU_1_2",
                "value": "str"
            }
        ]
    }
});

export default operators;