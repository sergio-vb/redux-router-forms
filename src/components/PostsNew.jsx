import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addPost } from '../actions';

class PostsNew extends React.Component{

    renderField(field){

        const {meta: {touched, error}} = field;
        const dangerClass = (touched && error ? "has-danger" : "");

        return (
            <div className={`form-group ${dangerClass}`}>
                <label>{field.label}</label>
                <input 
                    className="form-control" 
                    type="text" 
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : null}
                </div>
            </div>
        );
    }

    onSubmit(values){
        this.props.addPost(values);
    }

    render(){
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="PostContent"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                
                <Link className="btn btn-danger" to="/posts/">Back To Posts</Link> 
            </form>
        );
    }
}

function validate(values) { //Called automatically at various moments, like when submitting
    const errors = {};

    //Validate the inputs from 'values';
    if(!values.title){
        errors.title = "Please enter a title.";
    }
    if(!values.categories){
        errors.categories = "Please enter the categories.";
    }
    if(!values.content){
        errors.content = "Please enter the content.";
    }

    return errors;
}

const PostsNewWithForm = reduxForm({
    validate,
    form: 'PostsNewForm' //Define the 'name' of the form, to identify it
})(PostsNew);

export default connect(null, {addPost})(PostsNewWithForm);