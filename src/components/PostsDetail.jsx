import React from 'react';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost, cleanActivePost } from '../actions';
import { connect } from 'react-redux';

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
        console.log("Go Back clicked");
        this.props.cleanActivePost();
    }
    render(){
        const { post } = this.props;
            
        return (
            <div>
                <Link to="/posts/" onClick={this.onGoBack}>&#60; Back to Posts</Link>

                <button className="btn btn-primary" onClick={this.onDeletePost}>Delete Post</button>
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
export default connect(mapStateToProps, {fetchPost, deletePost, cleanActivePost})(PostsDetail);