import React, { Component } from "react";
import { View, TextInput } from "react-native";

import * as Font from "expo-font";

export default class CustomInput extends Component {
    constructor() {
        super();
        this.state = {
            fontLoaded: false,
        };
    }

    componentDidMount = async () => {
        await Font.loadAsync({
            bariol: require("../../assets/fonts/Bariol_Regular.otf"),
        });

        this.setState({ fontLoaded: true });
    };

    render() {
        return (
            <View>
                {this.state.fontLoaded ? (
                    <TextInput
                        {...this.props}
                        style={[this.props.style, { fontFamily: "bariol" }]}
                    />
                ) : null}
            </View>
        );
    }
}
