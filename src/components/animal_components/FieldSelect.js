import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import CustomText from "../CustomText";
import CustomSVG from "../CustomSVG";

export default class FieldSelect extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.container}
                activeOpacity={0.6}
                onPress={() => this.props.onSelect(this.props.type)}
            >
                <CustomSVG
                    type={"fieldSelect"}
                    source={this.props.svg}
                    width={150}
                    height={150}
                />
                <CustomText
                    style={styles.title}
                    font={"anson"}
                    text={this.props.text}
                />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "#e3e3e3",
        borderRightWidth: 1,
        borderBottomWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "#24538C",
        fontSize: 25,
    },
});
