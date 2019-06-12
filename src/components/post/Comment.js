import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({comment}) => {
    return (
        <div className="post bg-white p-1 my-1">
            <p className="my-1">
                {comment.body}
            </p>
        </div>
    );
};

Comment.propTypes = {
    comment: PropTypes.object.isRequired
};


export default Comment;
