import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';
import ConcatWrapper from './ConcatWrapper';
import {
  getInitialData,
} from '../actions';

class App extends PureComponent {
  constructor(props) {
    super(props);
    props.getInitialData();
  }

  render () {
    return (
      <div id="container" className="container">
        <Header />
        <ConcatWrapper />
      </div>
    );
  }
}

App.propTypes = {
  getInitialData: PropTypes.func.isRequired,
};

App.defaultProps = {};

const mapStateToProps = state => ({
  userDataLoading: state.app.userDataLoading,
});

const mapActionsToProps = {
  getInitialData,
};

export default connect(mapStateToProps, mapActionsToProps)(App);
