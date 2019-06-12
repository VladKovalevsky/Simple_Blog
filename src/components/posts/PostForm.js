import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createPost, updatePost} from '../../actions/post';

const PostForm = ({createPost, updatePost, post, updateMode, submitted}) => {

    const [formData, setFormData] = useState({
        title: post.title,
        body: post.body
    });

    const onChangeHandler = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const onFormSubmit = e => {
        e.preventDefault();
        if (updateMode) {
            updatePost(formData, post.id);
            submitted(false);
        } else {
            createPost(formData);
            setFormData({
                title: '',
                body: ''
            });
        }
    };

    return (
        <div className="post-form">
            <div className="bg-primary post-title p">
                <h3>Write something</h3>
            </div>
            <form className="form my-1" onSubmit={ (e)=> onFormSubmit(e)}>
                <div className="form-group">
                    <input type="text" name="title" value={formData.title} placeholder="Post title" onChange={(e) => onChangeHandler(e)} required/>
                </div>
                <div className="form-group">
                    <textarea name="body" cols="30" placeholder="Create a post" rows="5" value={formData.body} onChange={(e) => onChangeHandler(e)} required></textarea>
                </div>
                <input type="submit" className="btn btn-dark my-1" value="Submit" />
            </form>
        </div>
    );
};

PostForm.defaultProps = {
    post: {
        title: '',
        body: ''
    },
    updateMode: false
};

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired,
    post: PropTypes.object
};

export default connect(null, {createPost, updatePost})(PostForm);
