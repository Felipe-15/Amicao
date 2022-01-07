import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import CustomText from "../CustomText";
import CustomInput from "../CustomInput";

const AuthInput = (props) => {
    return (
        <View style={styles.container}>
            <FontAwesome name={props.icon} size={20} style={styles.icon} />
            <CustomInput
                secureTextEntry={props.isPassword}
                style={styles.input}
                selectionColor={"#24538C"}
                placeholder={props.placeholder}
                placeholderTextColor={"#24538C"}
                value={props.value}
                onChangeText={props.onChangeText}
            />
        </View>
    );
};

export { AuthInput };

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "90%",
        height: 40,
        backgroundColor: "#f3f3f3",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    },
    icon: {
        color: "#24538C",
        marginLeft: 10,
    },
    input: {
        width: 210,
        marginLeft: 10,
        fontSize: 16,
        color: "#24538C",
    },
});
