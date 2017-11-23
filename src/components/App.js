import React, {PropTypes} from 'react';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return(
      <div className='container-fluid'>
        <h1>Pushkar Kathuria- Resume to die for</h1>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
    children: PropTypes.object.isRequired
}

export default App;