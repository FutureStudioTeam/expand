import cate_0c16e042 from './cate_0c16e042/index.js';
import cate_0c16e043 from './cate_0c16e043/index.js';
import cate_0c16e044 from './cate_0c16e044/index.js';
import cate_0c16e045 from './cate_0c16e045/index.js';
import cate_0c16e046 from './cate_0c16e046/index.js';
import cate_0c16e047 from './cate_0c16e047/index.js';
import cate_0c16e048 from './cate_0c16e048/index.js';
import events from './events/index.js';
import control from './control/index.js';
import operators from './operators/index.js';
import data from './data/index.js';
import myBlocks from './myBlocks/index.js';

const cates = (facepanels) => ([
    cate_0c16e042(facepanels), cate_0c16e043(facepanels), cate_0c16e044(facepanels), cate_0c16e045(facepanels), cate_0c16e046(facepanels), cate_0c16e047(facepanels), cate_0c16e048(facepanels), events(facepanels), control(facepanels), operators(facepanels), data(facepanels), myBlocks(facepanels)
]);

export default cates;