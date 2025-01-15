import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; 

const store = configureStore({
    reducer: rootReducer,
});

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('todos', JSON.stringify(state.todos));
});

export default store;