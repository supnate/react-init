import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Hello from '../components/Hello';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div>
        <Hello />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/feature1">Feature 1</Link></li>
          <li><Link to="/feature2">Feature 2</Link></li>
        </ul>

        <div className="page-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
