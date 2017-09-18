import React from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends React.Component{
    render(){
        return (
            <div>PostsNew Works</div>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);