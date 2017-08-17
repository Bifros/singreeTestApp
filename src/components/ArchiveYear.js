import React from 'react';

const ArchiveYear = (props) =>(
  <li className="archive-item">
    <input type="radio" id={"checkbox-" + props.itemIndex} name="checkbox-accordion" />
    <label htmlFor={"checkbox-" + props.itemIndex} className="archive-item-title">
      <div className="pull-left">
        &nbsp;<span className="glyphicon glyphicon-calendar" aria-hidden="true"></span> {props.year}
      </div>
      <div className="pull-right">
        <span className="glyphicon glyphicon-menu-up"></span>
      </div>
      <div className="clearfix"></div>
    </label>
    <div className="content">
      <ul>
        {props.renderContent(props.year)}
      </ul>
    </div>
  </li>
)

export default ArchiveYear;
                    