import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Ionics} from '@expo/vector-icons';
import { FlatList } from 'react-native';
import { ListItem } from "react-native-elements";


const _keyExtractor = item => item.id;


export default class ListScreen extends React.Component {

    static navigationOptions = {
        tabBarLabel: "Liste",
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-list" size={25} color={tintColor} />,
      };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.container}
                    data={this.props.screenProps.jobs}
                    keyExtractor={_keyExtractor}
                    renderItem={({item}) => 
                    <ListItem
                    key={item.id}
                    title={item.name}
                    hideChevron
                  />
                }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });