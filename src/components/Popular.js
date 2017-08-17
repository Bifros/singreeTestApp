import React from 'react';
import {Link} from 'react-router';


const Popular = (props) => (
  <div className="popular-item">
    <Link to={{pathname: '/article/' + props._id}}> 
      <div className="popular-item-title">{props.title}</div>
      <div className="content">
        {stripTags(props.body)}
      </div>
    </Link>   
  </div>
)

export default Popular;
                    