import React from 'react';
import {Link} from 'react-router';

import Archive from '../components/Archive';
import ArchiveYear from '../components/ArchiveYear';

class ArchiveContainer extends React.Component {

  render() {
    return (
      <Archive 
        renderArchiveHeadings={this.renderArchiveHeadings.bind(this)}
      />
    );
  }

  renderArchiveHeadings() {
    const years = [2017, 2016, 2015];
      return years.map(
        (year, index) => 
          <ArchiveYear 
            renderContent={this.renderYearContent.bind(this)}
            articles={this.props.articles} 
            year={year} 
            itemIndex={index} 
            key={index} 
          />
      );
  }

  renderYearContent(year) {
    const articles = this.props.articles ?
      this.props.articles : [];

    const monthArray = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August', 'September',
      'October', 'November', 'December'
    ];
    // Map through all the monthes to check if there articles with such month
    return monthArray.map((month, index) => {
      var articlesAmount = 0;
      // Look through each article and match by year and month name        
      articles.forEach((article) => {
        const articleYear = Number(article.created
          .split('/')[2]
          .split(' ')[0]
        );
        // Check year and see if article month matches month from iteratable array
        if (articleYear == year) {
          let monthName = monthArray[Number(article.created.split('/')[1]) - 1];
          if (month == monthName)
            articlesAmount++;
        } 
      }); // forEach
      
      return (
        <li className="archive-month" key={index}>
          <Link to="/">
            <div className="pull-left"> {month}</div>
            <div className="pull-right">({articlesAmount}) </div>
            <div className="clearfix"></div>
          </Link>
        </li>
      );
    });
  }

}

export default ArchiveContainer;