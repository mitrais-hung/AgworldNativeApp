import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';

import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 30
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF'
  },
  selected: {
    backgroundColor: 'green'
  }
});

var dataSource = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2, });

export default class Activities extends Component {
  constructor(props) {
    super(props);
  }

  _selectRow = (id) => {
    console.log('view activity');
    this.props.actions.select(id);
  };

  _viewActivityDetails = (activity) => {
    Actions.activity({activity: activity});
  };

  renderActivity = (activity, section, id) => {
    return (
      <TouchableHighlight onPress={() => this._selectRow(id)}>
        <View style={[styles.container, this.props.selection.indexOf(id) > -1 && styles.selected]}>
          <Text>{activity.id}</Text>
          <Text>{activity.attributes.title}</Text>
          <Button onPress={() => this._viewActivityDetails(activity)}>View</Button>
        </View>
      </TouchableHighlight>
    );
  };

  render() {
    data = dataSource.cloneWithRows(this.props.activities);

    return (
      <View>
        <TouchableHighlight onPress={() => this.props.actions.searchActivities()}>
          <View style={[styles.container]}>
            <Text>Search Activities</Text>
          </View>
        </TouchableHighlight>
        <ListView
          dataSource={data}
          renderRow={this.renderActivity}
          style={styles.listView}
        />
      </View>
    )
  }
}
