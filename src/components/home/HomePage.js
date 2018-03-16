import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return(
      <div className="resume-container">
        <div className="resume-title-container">
          <h1 className="resume-title">Do you Know Pushkar Kathuria ??</h1>
        </div>

        <div className="resume-info">
          <div className="resume-about-me">
            <ol>
                <li><p>Software/Web developer with experience in various domains including customer support(Pheww)</p></li>
                <li><p><em>The United States of America</em> is a federal constitutional ...</p></li>
                <li><p><em>The Philippines</em> officially known as the Republic ...</p></li>
                <li><p><em>The United Kingdom</em> of Great Britain and ...</p></li>
            </ol>
          </div>
          <div className="resume-img">
              <img src={require("../../assets/images/pushkar-dj.jpg")} />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;