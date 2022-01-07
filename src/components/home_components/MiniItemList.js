import React from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

import CustomText from "../CustomText";
import ImageAnimal from "../animal_components/ImageAnimal";

const MiniItemList = (props) => {
    return (
        <TouchableOpacity
            onPress={() => props.openDetails(props.id, props.price)}
            style={styles.container}
            activeOpacity={0.6}
        >
            {props.discount && !props.newAnimal ? (
                <View style={styles.discountContainer}>
                    <View style={styles.discountCircle}>
                        <CustomText
                            font={"anson"}
                            text={`${props.discount}%`}
                            style={styles.discount}
                        />
                    </View>
                </View>
            ) : null}
            {props.newAnimal ? (
                <View style={styles.newsContainer}>
                    <CustomText
                        font={"anson"}
                        style={styles.newsText}
                        text={"Novo"}
                    />
                </View>
            ) : null}
            <ImageAnimal
                style={{ resizeMode: "contain", height: 175, width: 175 }}
                directory={props.nameimg}
            />
            <CustomText font={"anson"} text={props.name} style={styles.name} />
        </TouchableOpacity>
    );
};

export default MiniItemList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRightWidth: 1,
        borderColor: "#a3a3a3",
        justifyContent: "flex-start",
        alignItems: "center",
        width: Dimensions.get("screen").width / 2,
    },

    price: {
        fontSize: 25,
        color: "#24538C",
    },
    oldPrice: {
        fontSize: 15,
        color: "#777",
        textDecorationLine: "line-through",
    },
    cents: {
        fontSize: 11,
        color: "#24538C",
    },
    oldCents: {
        fontSize: 8,
        color: "#777",
        textDecorationLine: "line-through",
    },
    name: {
        fontSize: 35,
    },
    discountContainer: {
        position: "absolute",
        right: 8,
        top: 10,
        height: 60,
        alignItems: "center",
    },
    discountCircle: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: "#24538C",
        justifyContent: "center",
        alignItems: "center",
    },
    discount: {
        fontSize: 20,
        color: "#fff",
        transform: [{ rotate: "30deg" }],
    },
    newsContainer: {
        position: "absolute",
        top: 8,
        right: 8,
        backgroundColor: "#24538C",
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        borderRadius: 5,
    },
    newsText: {
        fontSize: 20,
        color: "#fff",
    },
});
