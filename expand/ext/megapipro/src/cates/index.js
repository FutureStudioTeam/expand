import MegaPi Pro from './MegaPi Pro/index.js';
import display from './display/index.js';
import soundandlight from './soundandlight/index.js';
import power from './power/index.js';
import sensing from './sensing/index.js';
import events from './events/index.js';
import control from './control/index.js';
import operators from './operators/index.js';
import data from './data/index.js';
import myBlocks from './myBlocks/index.js';

const cates = (facepanels) => ([
    MegaPi Pro(facepanels), display(facepanels), soundandlight(facepanels), power(facepanels), sensing(facepanels), events(facepanels), control(facepanels), operators(facepanels), data(facepanels), myBlocks(facepanels)
]);

export default cates;