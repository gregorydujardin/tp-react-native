import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MapView from 'react-native-maps';


export default class MapScreen extends React.Component {

    

    static navigationOptions = {
        tabBarLabel: "Carte",
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-map" size={25} color={tintColor} />,
      };

    render() {
        return (
            <MapView 
                style={{flex: 1}}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 100,
                    longitudeDelta: 100
                }}
            >
            {this.props.screenProps.jobs.map(job => (
                <MapView.Marker
                key={job.id}
                coordinate={{
                    latitude: parseInt(job.latitude),
                    longitude: parseInt(job.longitude),
                }}
                title={job.name}
                />
            )
            )}
            </MapView>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

