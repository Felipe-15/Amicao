import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import CustomSVG from "../../components/CustomSVG";
import CustomText from "../../components/CustomText";

const CustomButton = (props) => {
    switch (props.screen) {
        case "home":
            return (
                <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                >
                    <CustomSVG
                        type={"tabBar"}
                        source={props.onFocus ? "home" : "homeOutline"}
                        height={props.onFocus ? 26 : 28}
                        width={props.onFocus ? 26 : 28}
                    />
                    <View
                        style={!props.onFocus ? { position: "absolute" } : null}
                    >
                        <CustomText
                            style={{ color: "black", fontSize: 14 }}
                            font={"mohave-light"}
                            text={props.onFocus ? "Início" : ""}
                        />
                    </View>
                </View>
            );
        case "buy":
            return (
                <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                >
                    <CustomSVG
                        type={"tabBar"}
                        source={props.onFocus ? "shop" : "shopOutline"}
                        height={props.onFocus ? 26 : 28}
                        width={props.onFocus ? 26 : 28}
                    />
                    <View
                        style={!props.onFocus ? { position: "absolute" } : null}
                    >
                        <CustomText
                            style={{ color: "black", fontSize: 14 }}
                            font={"mohave-light"}
                            text={props.onFocus ? "Comprar" : ""}
                        />
                    </View>
                </View>
            );
        case "adopt":
            return (
                <LinearGradient
                    style={styles.containerAdopt}
                    colors={
                        !props.onFocus
                            ? ["#008FE8", "#00609C"]
                            : ["#00609C", "#00609C"]
                    }
                    start={[1, 0]}
                    end={[1, 1]}
                >
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "flex-start",
                            alignItems: "center",
                            paddingTop: 1,
                        }}
                    >
                        <CustomSVG
                            type={"icons"}
                            source={
                                props.onFocus ? "dog-filled" : "dog-outline"
                            }
                            width={42}
                            height={42}
                        />
                        {/*<CustomText style={{color: "white", fontSize: 15}} font={"simplifica"} text={"Adotar"} />*/}
                    </View>
                    <View style={{ position: "absolute", bottom: 3 }}>
                        <CustomText
                            style={{ color: "white", fontSize: 18 }}
                            font={"mohave-light"}
                            text={"Adotar"}
                        />
                    </View>
                </LinearGradient>
            );
        default:
            return <View />;
    }
};

const styles = StyleSheet.create({
    containerAdopt: {
        height: 65,
        width: 65,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "flex-start",
        //marginBottom: 20
        marginTop: 12,
        marginBottom: 25,
    },
});

export default CustomButton;
