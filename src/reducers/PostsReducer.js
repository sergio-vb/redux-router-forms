import { FETCH_POSTS } from '../actions';

export default function(state = {}, action){
    switch(action.type){
        case FETCH_POSTS:
            const posts = action.payload.data.reduce((posts, post) => {
                posts[post.id] = post;
                return posts;
            },{});
            return posts;
            
    }
    return state;
}