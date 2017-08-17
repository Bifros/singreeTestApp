import React from 'react';

export default class Layout extends React.Component {

  render() {
    return (
      <div id="appWrapper">
        <div id="contentWrapper">
          <div id="notifications-holder"></div>
          <nav className="navbar navbar-default blog-navbar">
            <div className="container">
              <span className="blog-name">
                <a href="/">BLOG</a>
              </span>
            </div>
          </nav>
          <div className="container main-container">
            <main>
              {this.props.children}
            </main>
            <aside className="sidebar">
              <div className="contact-us">
                Contact us today for more information. ►
              </div>
              {this.props.renderPopular()}
              {this.props.renderArchive()}
            </aside>
          </div>
        </div>
        <footer className="footer">
          <div className="container">
            <div className="pull-left">
              <span>© Bifros</span>
            </div>
            <div className="pull-right">
              <span>Contact us</span>
            </div>
            <div className="clearfix"></div>
          </div>
        </footer>
      </div>
    );
  }

};

