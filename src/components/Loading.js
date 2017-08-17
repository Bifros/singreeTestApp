import React from 'react';

const Loading = (props) => (
  <div className="loading-container">
    <div className="cssload-container">
      <div className="cssload-loading"><i></i><i></i></div>
    </div>
    <div className="cssload-message">
      {props.message}
    </div>
  </div>
);

export default Loading;