import React, { Component } from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as appActions from '../actions/activitiesActions';
import Activity from '../components/activity';

class ActivityViewer extends Component {

  render() {
    return (
      <Activity
        {...this.props}
      />
    );
  }
}

export default connect(
  (state) => ({
    activities: state.activities.data,
    selection: state.selection
  }),
  (dispatch) => ({
    actions: bindActionCreators(appActions, dispatch)
  })
)(ActivityViewer);
