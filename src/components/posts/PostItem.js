import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {deletePost} from '../../actions/post';

import PostFrom from './PostForm';

const PostItem  = ({post, showComments, deletePost, history}) => {

    const [updatePost, setUpdatePost] = useState(false);

    return (
        <div className="post bg-white p-1 my-1">
            {updatePost ? <PostFrom post={post} updateMode={true} submitted={setUpdatePost}/> : (
                <div>
                    <h4>{post.title}</h4>
                    <p className="my-1">
                        {post.body}
                    </p>
                    {showComments ? (
                        <Link to={`/posts/${post.id}`} className="btn btn-primary">
                            Read More
                        </Link>
                    ) : (
                        <div>
                            <button className="btn btn-primary" onClick={() => setUpdatePost(true)}>
                                Edit Post
                            </button>
                            <button className="btn btn-danger" onClick={()=> deletePost(post.id, history)}>
                                Delete Post
                            </button>
                        </div>
                    )}
                </div>
            )}

        </div>
    );
};

PostItem.defaultProps = {
    showComments: true
};

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    deletePost: PropTypes.func.isRequired
};

export default connect(null, {deletePost})(withRouter(PostItem));
