import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const UpdatePost = ({post}) => {

    return (
        <div className="post-form">
            <div className="bg-primary p">
                <h3>Update your post</h3>
            </div>
            <form className="form my-1" onSubmit={ (e)=> onFormSubmit(e)}>
                <div className="form-group">
                    <input type="text" name="title" value={post.title} onChange={(e) => onChangeHandler(e)} required/>
                </div>
                <div className="form-group">
                    <textarea name="body" cols="30" rows="5" placeholder="Create a post" value={formData.body} onChange={(e) => onChangeHandler(e)} required></textarea>
                </div>
                <input type="submit" className="btn btn-dark my-1" value="Submit" />
            </form>
        </div>
    );
};

UpdatePost.propTypes = {
    post: PropTypes.object.isRequired
};

export default UpdatePost;
