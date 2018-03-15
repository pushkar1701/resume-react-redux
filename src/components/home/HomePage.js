import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return(
      <div className="resume-container">
          <h1 className="resume-title">Pushkar Kathuria</h1>
      </div>
    );
  }
}

export default HomePage;