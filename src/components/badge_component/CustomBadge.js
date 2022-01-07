import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { connect } from "react-redux";

import CustomSVG from "../CustomSVG";

const CustomBadge = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <View style={styles.badge}>
                <Text style={{ color: "#fff", fontSize: 10 }}>
                    {props.animalBadge.length}
                </Text>
            </View>
            <CustomSVG type={"badgeCar"} width={35} height={35} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 4,
        right: 5,
        width: 45,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#24538C",
        borderRadius: 10,
    },
    badge: {
        position: "absolute",
        top: -5,
        right: -2,
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: "#D61900",
        justifyContent: "center",
        alignItems: "center",
    },
});

const mapStateToProps = ({ animals }) => {
    return {
        animalBadge: animals.animalBadge,
    };
};

export default connect(mapStateToProps, null)(CustomBadge);
