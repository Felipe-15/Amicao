import React from "react";
import { View, StatusBar, Platform } from "react-native";

const CustomStatusBar = (props) => {
    if (Platform.OS === "ios") {
        return (
            <View
                style={{ backgroundColor: "#24538C", width: "100%", height: 2 }}
            />
        );
    } else {
        return (
            <StatusBar
                {...props}
                backgroundColor={
                    props.default ? "#24538C" : props.backgroundColor
                }
            />
        );
    }
};

export default CustomStatusBar;
