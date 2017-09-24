import React from 'react';
import { Link } from 'react-router-dom';
import { fetchPost } from '../actions';
import { connect } from 'react-redux';

class PostsDetail extends React.Component{

    componentDidMount(){
        const postId = this.props.match.params.id;
        this.props.fetchPost(postId);
    }
    render(){
        console.log("Props: ", this.props);
        const { post } = this.props;
            
        return (
            <div>
                <Link to="/posts/">&#60; Back to Posts</Link>

                <button className="btn btn-primary">Delete Posts</button>
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
export default connect(mapStateToProps,{fetchPost})(PostsDetail);