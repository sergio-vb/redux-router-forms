import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { fetchPosts } from '../actions';

class PostsIndex extends React.Component{
    componentDidMount(){
        this.props.fetchPosts();
    }
    onSelectPost(id){
        this.props.history.push(`/posts/${id}`);
    }
    renderPosts(){
        return _.map(this.props.posts, post => (
            <li 
                className="list-group-item"
                key={post.id}
                onClick={ (event) => this.onSelectPost(post.id)}
            >
                {post.title}
            </li>
        ));
    }
    render(){
        return (
            <div className="PostsIndex">
                <div className="text-xs-right">
                    <Link 
                        className="btn btn-primary"
                        to="/posts/new"
                    >
                        Add a Post
                    </Link>    
                </div>
                <h3>Posts</h3>
                <ul className="list-group">{this.renderPosts()}</ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {posts: state.posts};
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);