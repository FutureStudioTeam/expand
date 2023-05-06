import blocks from './blocks.js';

const perception = (facepanels) => ({
    "name": "perception",
    "colors": [
        "#F79226",
        "#F6840B",
        "#DC7608"
    ],
    "menuIconURI": "",
    "blockIcon": {
        "type": "image",
        "width": 28,
        "height": 26,
        "src": window.MbApi.getExtResPath('mbuild/imgs/1a9d31e6a8934f7386db7637c8543f73.svg', 'mbuild')
    },
    "blocks": blocks(facepanels),
    "menus": {
        "BLOCK_1548926368295_THRESHOLD": [{
                "text": "BLOCK_1548926368295_THRESHOLD_0",
                "value": "2"
            },
            {
                "text": "BLOCK_1548926368295_THRESHOLD_1",
                "value": "10"
            },
            {
                "text": "BLOCK_1548926368295_THRESHOLD_2",
                "value": "40"
            }
        ],
        "BLOCK_1551515039493_ORIENTATION": [{
                "text": "BLOCK_1551515039493_ORIENTATION_0",
                "value": "0"
            },
            {
                "text": "BLOCK_1551515039493_ORIENTATION_1",
                "value": "1"
            },
            {
                "text": "BLOCK_1551515039493_ORIENTATION_2",
                "value": "2"
            },
            {
                "text": "BLOCK_1551515039493_ORIENTATION_3",
                "value": "3"
            }
        ],
        "BLOCK_1551515082749_ORIENTATION": [{
                "text": "BLOCK_1551515082749_ORIENTATION_0",
                "value": "0"
            },
            {
                "text": "BLOCK_1551515082749_ORIENTATION_1",
                "value": "1"
            },
            {
                "text": "BLOCK_1551515082749_ORIENTATION_2",
                "value": "2"
            }
        ],
        "BLOCK_1552819376095_AXIS": [{
                "text": "BLOCK_1552819376095_AXIS_0",
                "value": "pitch"
            },
            {
                "text": "BLOCK_1552819376095_AXIS_1",
                "value": "roll"
            }
        ],
        "BLOCK_1551085611073_AIX": [{
                "text": "BLOCK_1551085611073_AIX_0",
                "value": "x"
            },
            {
                "text": "BLOCK_1551085611073_AIX_1",
                "value": "y"
            },
            {
                "text": "BLOCK_1551085611073_AIX_2",
                "value": "z"
            }
        ],
        "BLOCK_1552111641761_UNIT": [{
                "text": "BLOCK_1552111641761_UNIT_0",
                "value": "0"
            },
            {
                "text": "BLOCK_1552111641761_UNIT_1",
                "value": "1"
            }
        ],
        "BLOCK_1552111937374_UNIT": [{
                "text": "BLOCK_1552111937374_UNIT_0",
                "value": "0"
            },
            {
                "text": "BLOCK_1552111937374_UNIT_1",
                "value": "1"
            }
        ],
        "BLOCK_1550543590966_SENSITIVITY": [{
                "text": "BLOCK_1550543590966_SENSITIVITY_0",
                "value": "1"
            },
            {
                "text": "BLOCK_1550543590966_SENSITIVITY_1",
                "value": "2"
            }
        ],
        "BLOCK_1552820345489_PROBE": [{
                "text": "BLOCK_1552820345489_PROBE_0",
                "value": "1"
            },
            {
                "text": "BLOCK_1552820345489_PROBE_1",
                "value": "2"
            }
        ],
        "BLOCK_1552820345489_COLOR": [{
                "text": "BLOCK_1552820345489_COLOR_0",
                "value": "0"
            },
            {
                "text": "BLOCK_1552820345489_COLOR_1",
                "value": "2"
            },
            {
                "text": "BLOCK_1552820345489_COLOR_2",
                "value": "4"
            },
            {
                "text": "BLOCK_1552820345489_COLOR_3",
                "value": "5"
            },
            {
                "text": "BLOCK_1552820345489_COLOR_4",
                "value": "6"
            },
            {
                "text": "BLOCK_1552820345489_COLOR_5",
                "value": "7"
            },
            {
                "text": "BLOCK_1552820345489_COLOR_6",
                "value": "1"
            },
            {
                "text": "BLOCK_1552820345489_COLOR_7",
                "value": "9"
            }
        ],
        "BLOCK_1552820374349_COLOR": [{
                "text": "BLOCK_1552820374349_COLOR_0",
                "value": "r"
            },
            {
                "text": "BLOCK_1552820374349_COLOR_1",
                "value": "g"
            },
            {
                "text": "BLOCK_1552820374349_COLOR_2",
                "value": "b"
            }
        ],
        "BLOCK_1552820434265_COLOR": [{
                "text": "BLOCK_1552820434265_COLOR_0",
                "value": "9"
            },
            {
                "text": "BLOCK_1552820434265_COLOR_1",
                "value": "2"
            },
            {
                "text": "BLOCK_1552820434265_COLOR_2",
                "value": "5"
            },
            {
                "text": "BLOCK_1552820434265_COLOR_3",
                "value": "7"
            },
            {
                "text": "BLOCK_1552820434265_COLOR_4",
                "value": "4"
            },
            {
                "text": "BLOCK_1552820434265_COLOR_5",
                "value": "6"
            },
            {
                "text": "BLOCK_1552820434265_COLOR_6",
                "value": "1"
            },
            {
                "text": "BLOCK_1552820434265_COLOR_7",
                "value": "0"
            }
        ]
    }
});

export default perception;