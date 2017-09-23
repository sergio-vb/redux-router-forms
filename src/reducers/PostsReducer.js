import { FETCH_POSTS, ADD_POST } from '../actions';

export default function(state = {}, action){
    switch(action.type){
        case FETCH_POSTS:
            const posts = action.payload.data.reduce((posts, post) => {
                posts[post.id] = post;
                return posts;
            },{});
            console.log(posts);
            return posts;
        case ADD_POST:
            
    }
    return state;
}