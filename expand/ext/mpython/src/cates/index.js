import cate_bac1886a from './cate_bac1886a/index.js';
import cate_9fbaa449 from './cate_9fbaa449/index.js';
import cate_8b8c9827 from './cate_8b8c9827/index.js';
import cate_01859494 from './cate_01859494/index.js';
import cate_591a5e73 from './cate_591a5e73/index.js';
import events from './events/index.js';
import control from './control/index.js';
import operators from './operators/index.js';
import data from './data/index.js';
import myBlocks from './myBlocks/index.js';

const cates = (facepanels) => ([
    cate_bac1886a(facepanels), cate_9fbaa449(facepanels), cate_8b8c9827(facepanels), cate_01859494(facepanels), cate_591a5e73(facepanels), events(facepanels), control(facepanels), operators(facepanels), data(facepanels), myBlocks(facepanels)
]);

export default cates;