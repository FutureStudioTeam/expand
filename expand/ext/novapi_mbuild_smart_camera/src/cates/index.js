import smart_camera_ccc_for_novapi from './smart_camera_ccc_for_novapi/index.js';
import smart_camera_line_for_novapi from './smart_camera_line_for_novapi/index.js';
import smart_camera_makex_for_novapi from './smart_camera_makex_for_novapi/index.js';

const cates = (facepanels) => ([
    smart_camera_ccc_for_novapi(facepanels), smart_camera_line_for_novapi(facepanels), smart_camera_makex_for_novapi(facepanels)
]);

export default cates;