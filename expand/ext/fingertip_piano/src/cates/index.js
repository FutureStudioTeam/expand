import cate_515586b6 from './cate_515586b6/index.js';
import cate_9ca82b40 from './cate_9ca82b40/index.js';
import cate_12fc6527 from './cate_12fc6527/index.js';
import events from './events/index.js';
import control from './control/index.js';
import operators from './operators/index.js';
import data from './data/index.js';
import myBlocks from './myBlocks/index.js';

const cates = (facepanels) => ([
    cate_515586b6(facepanels), cate_9ca82b40(facepanels), cate_12fc6527(facepanels), events(facepanels), control(facepanels), operators(facepanels), data(facepanels), myBlocks(facepanels)
]);

export default cates;