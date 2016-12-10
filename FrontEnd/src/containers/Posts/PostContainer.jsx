import React from 'react';
import PostActionBar from './PostActionBar';

export default class PostContainer extends React.Component {
    render() {
        const { title, content, id } = this.props.post;
        return(
            <div className="post-container row col-lg-12">
                <PostActionBar postId={id} onEdit={this.props.onEdit} onDelete={this.props.onDelete} />
                <div className="row">
                    <h1>{title}</h1>
                    <p>{content}</p>
                </div>
            </div>
        );
    }
}

PostContainer.propTypes = { 
    post: React.PropTypes.object.isRequired,
    onEdit: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired
}