import { Component } from "react";
import { View, Text } from "react-native";

export class DashboardScreen extends Component {
    render() {
        const { route } = this.props;

        return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is {route.params.name}'s profile</Text>
        </View>)
    }
}