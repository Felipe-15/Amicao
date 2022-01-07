import React from "react";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { View } from "react-native";

const TabBarIcon = (props) => {
    return (
        <View>
            {props.typeIcon == "materialComm" ? (
                <MaterialCommunityIcons
                    name={props.name}
                    size={props.size}
                    color={"#24538C"}
                />
            ) : (
                <FontAwesome5
                    name={props.name}
                    size={props.size}
                    color={"#24538C"}
                />
            )}
        </View>
    );
};

export default TabBarIcon;
