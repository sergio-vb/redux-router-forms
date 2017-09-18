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
            </div>
        );
    }
    render(){
        return (
            <form action="">
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Tags"
                    name="tags"
                    component={this.renderField}
                />
                <Field
                    label="PostContent"
                    name="content"
                    component={this.renderField}
                />
            </form>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm' //Define the 'name' of the form, to identify it
})(PostsNew);