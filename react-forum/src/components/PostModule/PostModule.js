import React from 'react';
import PostUserName from './PostUserName'
import PostMessage from './PostMessage'
import './PostModule.css'
class PostModule extends React.Component {
  render() {
    return (
      <div className="dvPostMessage">
      <form>
        <div>
          <PostUserName/>
          <PostMessage/>
        </div>
      </form>
      </div>
      );
  }
}
export default PostModule;
