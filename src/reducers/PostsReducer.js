import _ from 'lodash';

import { FETCH_POSTS, ADD_POST, DELETE_POST } from '../actions';

export default function(state = {}, action){
    let posts;

    switch(action.type){
        
        case FETCH_POSTS:
            posts = action.payload.data.reduce((posts, post) => {
                posts[post.id] = post;
                return posts;
            },{});
            console.log(posts);
            return posts;
        case DELETE_POST:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}

/*Alternative way to add a single post to the state:
    case FETCH_POST:
        const post = action.payload.data;
        return { ...state, [post.id]: post};

*/