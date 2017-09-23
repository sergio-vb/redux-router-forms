import { FETCH_POSTS, ADD_POST } from '../actions';

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
        
        case ADD_POST:
            // console.log("Previous state: ", state);
            // const { data } = action.payload;
            
            // posts = Object.assign({}, state);
            // posts[data.id] = data;
            
            // console.log("New posts: ", posts);
            // action.callback();
            return posts;
    }
    return state;
}