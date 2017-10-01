import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchPost, deletePost, cleanActivePost } from '../actions';

class PostsDetail extends React.Component{

    constructor(props){
        super(props);
        this.onDeletePost = this.onDeletePost.bind(this);
        this.onGoBack = this.onGoBack.bind(this);
    }

    componentDidMount(){
        const postId = this.props.match.params.id;
        this.props.fetchPost(postId);
    }
    onDeletePost(){
        this.props.deletePost(this.props.match.params.id, () => {
            this.props.history.push('/')
        });
    }
    onGoBack(){
        this.props.cleanActivePost();
    }
    render(){
        const { post } = this.props;

        //Not needed in the current implementation, since redux will
        //always initialize the activePost piece of state with an empty
        //object. Added for future-proofing.
        if (!post){
            return <div>Loading...</div>
        }
            
        return (
            <div>
                <Link to="/posts/" onClick={this.onGoBack}>&#60; Back to Posts</Link>

                <button className="btn btn-danger pull-xs-right" onClick={this.onDeletePost}>Delete Post</button>
                <div className="post-content">
                    <h2>{post.title}</h2>
                    <h5>Categories: {post.categories} </h5>
                    <p>{post.content}</p>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {post: state.activePost};
}
/* Alternative, if state.posts already includes the active post
function mapStateToProps({posts}, ownProps){
    return {post: posts[ownProps.match.params.id]};
}*/
export default connect(mapStateToProps, {fetchPost, deletePost, cleanActivePost})(PostsDetail);