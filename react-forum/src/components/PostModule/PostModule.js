import React from 'react';
import PostUserName from './PostUserName'
import PostMessage from './PostMessage'
import PostSubmit from './PostSubmit'
import './PostModule.css'
class PostModule extends React.Component {
  render() {
    return (
      <div className="dvPostMessage">
      <form>
        <div>
          <PostUserName/>
          <PostMessage/>
          <PostSubmit/>
        </div>
      </form>
      </div>
      );
  }
}
export default PostModule;
