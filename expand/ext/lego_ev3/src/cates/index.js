import cate_bc7fef78 from './cate_bc7fef78/index.js';
import cate_e1264ed5 from './cate_e1264ed5/index.js';
import cate_225ceb3c from './cate_225ceb3c/index.js';
import events from './events/index.js';
import control from './control/index.js';
import operators from './operators/index.js';
import data from './data/index.js';
import myBlocks from './myBlocks/index.js';

const cates = (facepanels) => ([
    cate_bc7fef78(facepanels), cate_e1264ed5(facepanels), cate_225ceb3c(facepanels), events(facepanels), control(facepanels), operators(facepanels), data(facepanels), myBlocks(facepanels)
]);

export default cates;