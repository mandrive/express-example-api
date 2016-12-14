import { compose, createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware  } from 'redux-observable';
import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk'
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

import { fetchAllPostsEpic, addNewPostEpic, selectPostToEditEpic, updatePostEpic, deletePostEpic } from './../api/Posts.epic';
import { RootReducer } from './Root.reducer';

const logger = createLogger();
const routerMid = routerMiddleware(browserHistory);

export const rootEpic = combineEpics(
  fetchAllPostsEpic,
  addNewPostEpic,
  selectPostToEditEpic,
  updatePostEpic,
  deletePostEpic
);
const epicMiddleware = createEpicMiddleware(rootEpic);

function configureStore(initialState = {}) {
    const store = createStore(
                    RootReducer,
                    initialState,
                    compose(
		                    applyMiddleware(epicMiddleware, ReduxThunk, routerMid, logger),
                        window.devToolsExtension ? window.devToolsExtension() : f => f
	                ));

    return store;
}

export const store = configureStore();
