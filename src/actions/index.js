/*
Redux actions: javascript objects. Every action needs a type property for describing how the
state should change. It can be specify a payload of tha action. The reducer will add the payload to the new
current state.

It is best to wrap everything into a function. That function is called an action creator.
*/

import { ADD_ARTICLE } from '../constants/action-types';

export const addArticle = article => (
    {
        type: ADD_ARTICLE,
        payload: article
    }
);