import rootReducer from './reducer';
import {createStore} from 'redux';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(rootReducer,devtools);
