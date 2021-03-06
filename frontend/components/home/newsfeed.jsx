import React from 'react';
import PostItem from '../posts/post_item';



class Newsfeed extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreateOpenModal = this.handleCreateOpenModal.bind(this)
    this.handleEditOpenModal = this.handleEditOpenModal.bind(this)
  }

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchUsers();
    // this.props.fetchUser(this.props.match.params.userId)
  }

  handleCreateOpenModal(e){
    e.preventDefault();
    this.props.openCreateModal();
}

  handleEditOpenModal(modal, post) {
    
    // return function(e){
      // e.preventDefault();
      this.props.openEditModal(modal, post)
  }
  
  render() {
    // console.log(Object.values(this.props.users))
    return (
      <div className ="newfeed">
        <button id="postButtonModal" onClick = {this.handleCreateOpenModal}>What is on your mind?</button>
        <div className="wall">
          
        
          <ul className= "wall_posts">
            
            {
              this.props.posts
              .sort((a,b) => a.created_at > b.created_at ? -1 : 1)
              .map(post => (
                <PostItem
                key={`${post.id}`}
                post={post}
                user= {this.props.user}
                users= {Object.values(this.props.users)}
                page = {"home"}
                modal ={this.props.openModal}
                deletePost ={this.props.deletePost}
                currentUser= {this.props.currentUser}
                updatePost ={ this.handleEditOpenModal}
                
                />
                )
              )
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Newsfeed;