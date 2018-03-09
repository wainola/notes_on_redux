/*
Reducer: javascript function that takes to parameters. State and an action.
Reducer is a pure function. It's always return the same state
*/

import { ADD_ARTICLE } from '../constants/action-types';

const initialState = {
    articles: []
};

/*
the reducer must at least return the initial state of the app.
If not, it must calculate the next state for the given action.type
*/
const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_ARTICLE:
            return { ...state, articles: [...state.articles, action.payload] };
        default:
            return state;
    }
};

export default rootReducer;