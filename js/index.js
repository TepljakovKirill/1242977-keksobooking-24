import './variable.js';
import './testData.js';
import './utilits.js';
import './popup.js';
import './forma.js';
import './filter.js';
import './leaflet.js';
import './load.js';

import {createLoader} from './load.js';

const loadAnimals = createLoader(console.log, console.error);

loadAnimals();
