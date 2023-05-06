import play from './play/index.js';
import light from './light/index.js';
import According from './According/index.js';
import movement from './movement/index.js';
import mb_control from './mb_control/index.js';
import perception from './perception/index.js';
import communication from './communication/index.js';
import events from './events/index.js';
import control from './control/index.js';
import operators from './operators/index.js';
import data from './data/index.js';
import myBlocks from './myBlocks/index.js';

const cates = (facepanels) => ([
    play(facepanels), light(facepanels), According(facepanels), movement(facepanels), mb_control(facepanels), perception(facepanels), communication(facepanels), events(facepanels), control(facepanels), operators(facepanels), data(facepanels), myBlocks(facepanels)
]);

export default cates;