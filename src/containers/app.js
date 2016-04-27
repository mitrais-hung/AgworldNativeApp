import React, { Component, Navigator } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {connect} from 'react-redux';
import {Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions} from 'react-native-router-flux'
import * as appActions from '../actions/activitiesActions';
import {bindActionCreators} from 'redux';

import reducer from '../reducers';
import DataViewerApp from './dataViewerApp';
import ActivityViewer from './activityViewer';

const RouterWithRedux = connect()(Router);
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root" hideNavBar={true}>
            <Scene key="activities" component={DataViewerApp} title="Activities" initial={true}/>
            <Scene key="activity" component={ActivityViewer} title="Activity"/>
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}
