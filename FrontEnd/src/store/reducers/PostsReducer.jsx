let initialState = {
  fetchingPosts: false,
  posts: [],
  currentPost: {},
  addingNewPostInProgress: false
};

export const PostsReducer = (state = initialState, action) => {
    if (action && action.type) {
        switch(action.type) {
            case 'FETCH_POSTS':
                return {
                    ...state,
                    fetchingPosts: true
                };
            case 'FETCH_POSTS_SUCCEDED':
                return {
                    ...state,
                    posts: [...action.posts],
                    fetchingPosts: false
                };
            case 'FETCH_POSTS_FAILED':
                return {
                    ...state,
                    fetchingPosts: false,
                    exception: 'exception!'
                };
            case 'ADD_NEW_POST_SUCCEDED':
                return {
                    currentPost: {},
                    addingNewPostInProgress: false,
                    ...state
                };
            case 'ADD_NEW_POST_FAILED':
                return {
                    ...state,
                    addingNewPostInProgress: false
                }
            case 'FETCH_POST_SUCCEDED':
            case 'SELECT_POST_TO_EDIT_SUCCEDED':
                return {
                    ...state,
                    currentPost: Object.assign({}, action.post)
                }
            case 'SELECT_POST_TO_EDIT':
            case 'SELECT_POST_TO_EDIT_FAILED':
                return state;
        }
    }

    return state;
};
