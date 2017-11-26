import React, {PropTypes} from 'react';
import Parallex from './shared/Parallex.js';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return(
      <div className='container-fluid'>
        <Parallex />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
    children: PropTypes.object.isRequired
}

export default App;