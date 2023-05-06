import cate_db5a5a24 from './cate_db5a5a24/index.js';
import cate_7cf881f1 from './cate_7cf881f1/index.js';
import cate_d65d5fe8 from './cate_d65d5fe8/index.js';
import events from './events/index.js';
import control from './control/index.js';
import operators from './operators/index.js';
import data from './data/index.js';
import myBlocks from './myBlocks/index.js';

const cates = (facepanels) => ([
    cate_db5a5a24(facepanels), cate_7cf881f1(facepanels), cate_d65d5fe8(facepanels), events(facepanels), control(facepanels), operators(facepanels), data(facepanels), myBlocks(facepanels)
]);

export default cates;