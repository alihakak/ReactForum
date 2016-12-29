import React from 'react';

class PostMessage extends React.Component {
  render() {
    return (

        <div className='dvField'>
          <label>Message:</label>
          <textarea  type="text" name="message" placeholder="Your Message" />
        </div>
    );
  }
}
export default PostMessage;
