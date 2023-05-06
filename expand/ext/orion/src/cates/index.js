import cate_b072ec4f from './cate_b072ec4f/index.js';
import cate_2ced8c33 from './cate_2ced8c33/index.js';
import cate_79d47608 from './cate_79d47608/index.js';
import cate_53f02e41 from './cate_53f02e41/index.js';
import events from './events/index.js';
import control from './control/index.js';
import operators from './operators/index.js';
import data from './data/index.js';
import myBlocks from './myBlocks/index.js';

const cates = (facepanels) => ([
    cate_b072ec4f(facepanels), cate_2ced8c33(facepanels), cate_79d47608(facepanels), cate_53f02e41(facepanels), events(facepanels), control(facepanels), operators(facepanels), data(facepanels), myBlocks(facepanels)
]);

export default cates;