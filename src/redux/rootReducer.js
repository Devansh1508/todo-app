import { combineReducers } from 'redux';
import todoReducer from './slices/todoSlice';
import navReducer from './slices/navSlice';

const rootReducer = combineReducers({
    todos: todoReducer,
    nav: navReducer
});



export default rootReducer;