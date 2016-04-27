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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
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

export default class Activity extends Component {
  constructor(props) {
    super(props);
  }

  _testRedux = (id) => {
    console.log(this.props.selection);
    this.props.actions.select(id);
  }

  render() {
    activity = this.props.activity;
    console.log('activity opened')
    return (
      <View style={[styles.container]}>
        <Button onPress={Actions.pop}>Back</Button>
        <Text>Activity ID: {activity.id}</Text>
        <Text>Activity Name: {activity.attributes.title}</Text>
        <Text>Activity Name: {activity.attributes.company_name}</Text>
      </View>
    )
  }
}
