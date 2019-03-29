import { createStore } from 'redux';

import reducer from './reducer/reducer';

//tao ra store
const store = createStore(reducer);

export default store;
//tich hop vao trong react. -Provider -> 1 component - 1 props -> store