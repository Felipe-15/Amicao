import React, { Component } from "react";
import { View, Text } from "react-native";
import * as Font from "expo-font";

export default class CustomText extends Component {
    constructor() {
        super();
        this.state = {
            fontLoaded: false,
        };
    }
    componentDidMount = async () => {
        await Font.loadAsync({
            anson: require("../../assets/fonts/Anson-Regular.otf"),
            junge: require("../../assets/fonts/Junge-Regular.ttf"),
            bariol: require("../../assets/fonts/Bariol_Regular.otf"),
            simplifica: require("../../assets/fonts/Simplifica-Regular.ttf"),
            "mohave-light": require("../../assets/fonts/Mohave-Light.otf"),
            "mohave-regular": require("../../assets/fonts/Mohave-Regular.otf"),
            "mohave-medium": require("../../assets/fonts/Mohave-Medium.otf"),
        });
        this.setState({ fontLoaded: true });
    };

    render() {
        return (
            <View>
                {this.state.fontLoaded ? (
                    <Text
                        {...this.props}
                        style={[
                            this.props.style,
                            { fontFamily: this.props.font },
                        ]}
                    >
                        {this.props.text}
                    </Text>
                ) : null}
            </View>
        );
    }
}
