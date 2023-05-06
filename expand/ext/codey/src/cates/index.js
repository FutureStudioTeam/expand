import CATEGORY_EMOTION from './CATEGORY_EMOTION/index.js';
import CATEGORY_SHOW from './CATEGORY_SHOW/index.js';
import CATEGORY_LIGHT from './CATEGORY_LIGHT/index.js';
import CATEGORY_PLAY from './CATEGORY_PLAY/index.js';
import CATEGORY_ACTION from './CATEGORY_ACTION/index.js';
import CATEGORY_SENSOR from './CATEGORY_SENSOR/index.js';
import CATEGORY_COMM from './CATEGORY_COMM/index.js';
import events from './events/index.js';
import control from './control/index.js';
import operators from './operators/index.js';
import data from './data/index.js';
import myBlocks from './myBlocks/index.js';

const cates = (facepanels) => ([
    CATEGORY_EMOTION(facepanels), CATEGORY_SHOW(facepanels), CATEGORY_LIGHT(facepanels), CATEGORY_PLAY(facepanels), CATEGORY_ACTION(facepanels), CATEGORY_SENSOR(facepanels), CATEGORY_COMM(facepanels), events(facepanels), control(facepanels), operators(facepanels), data(facepanels), myBlocks(facepanels)
]);

export default cates;