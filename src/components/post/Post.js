import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getPost, createComment} from '../../actions/post';

import PostItem from '../posts/PostItem';
import Comment from '../post/Comment';
import Preloader from '../layout/Preloader';

const SinglePost = ({getPost, post:{post, loading}, match, createComment}) => {

    useEffect(() => {
        getPost(match.params.id)
    }, [getPost, match.params.id]);

    const [formData, setFormData] = useState({
        postId: match.params.id,
        body: ''
    });

    const onChangeHandler = e => {
        setFormData({...formData, body: e.target.value})
    };

    const onFormSubmit = e => {
        e.preventDefault();
        createComment(formData);
        setFormData({...formData, body: ''});
    };

    return (
        loading || post === null ? <Preloader/> : (
            <div>
                <Link className="btn btn-dark my-1" to='/'>Go Back</Link>

                <PostItem post={post} showComments={false} />

                <div className="comments">
                    <h4>Comment</h4>
                    {post.comments.map(comment => {
                        return (
                            <Comment comment={comment} key={comment.id}/>
                        );
                    })}

                    <div className="post-form post-title">
                        <div className="bg-primary p">
                            <h4>Leave your comment</h4>
                        </div>
                        <form className="form my-1" onSubmit={(e) => onFormSubmit(e)}>
                            <div className="form-group">
                                <textarea name="body" cols="30" rows="5" value={formData.body} onChange={(e) => onChangeHandler(e)} required></textarea>
                            </div>
                            <input type="submit" className="btn btn-dark my-1" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        )
    );
};

SinglePost.propTypes = {
    getPost: PropTypes.func.isRequired,
    createComment: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        post: state.post
    }
};

export default connect(mapStateToProps, {getPost, createComment})(SinglePost);
