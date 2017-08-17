import React from 'react';

const Archive = (props) => (
  <div className="archive">
    <div className="archive-title">
      &nbsp;<span className="glyphicon glyphicon-briefcase" aria-hidden="true"></span>&nbsp; Archive
    </div>
    <div className="accordion vertical">
      <ul>
        {props.renderArchiveHeadings()}
      </ul>
    </div>
  </div>
)

export default Archive;