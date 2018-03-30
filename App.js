import React from 'react';
import { TabNavigator } from 'react-navigation';
import ListScreen from './ListScreen';
import MapScreen from './MapScreen' ;

const AppWithData = TabNavigator({
  List: { screen: ListScreen},
  Map: { screen: MapScreen}
});

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      jobs : []
    }
  }

  componentDidMount() {
    fetch('https://mobile-api-jobs.herokuapp.com/api/jobs')
      .then(data => data.json())
      .then(jobs => {
        this.setState({jobs})
      })
      .catch(console.error)
  }

  render() {
    return (
      <AppWithData screenProps={{jobs:this.state.jobs}} />
    )
  }
}