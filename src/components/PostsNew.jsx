import React from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends React.Component{

    renderField(field){
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input 
                    className="form-control" 
                    type="text" 
                    {...field.input}
                />
                {field.meta.touched ? field.meta.error : null}
            </div>
        );
    }

    onSubmit(values){
        console.log(values);
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

export default reduxForm({
    validate,
    form: 'PostsNewForm' //Define the 'name' of the form, to identify it
})(PostsNew);