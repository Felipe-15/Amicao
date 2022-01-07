import React, { Component } from "react";
import {
    View,
    Modal,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from "react-native";

import CustomText from "../../components/CustomText";
import CustomSVG from "../../components/CustomSVG";

export default class DoneBuy extends Component {
    render() {
        return (
            <Modal
                transparent={true}
                visible={this.props.isVisible}
                onRequestClose={this.props.onCancel}
                animationType="fade"
            >
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.falseBackground} />
                </TouchableWithoutFeedback>
                <View style={styles.middleContainer}>
                    <TouchableWithoutFeedback onPress={this.props.onCancel}>
                        <View style={styles.middleFalseBackground} />
                    </TouchableWithoutFeedback>
                    <View style={styles.containerCont}>
                        <View style={styles.container}>
                            <CustomText
                                text={"Escolha oque deseja"}
                                font={"anson"}
                                style={styles.header}
                            />
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    activeOpacity={0.6}
                                    style={[
                                        styles.button,
                                        {
                                            backgroundColor: "#24538C",
                                            borderBottomLeftRadius: 3,
                                        },
                                    ]}
                                >
                                    <CustomText
                                        text={"Comprar"}
                                        font={"anson"}
                                        style={[
                                            styles.buttonText,
                                            { color: "#fff" },
                                        ]}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.6}
                                    style={[
                                        styles.button,
                                        {
                                            backgroundColor: "#fff",
                                            borderColor: "#24538C",
                                            borderWidth: 1,
                                            borderBottomRightRadius: 3,
                                        },
                                    ]}
                                >
                                    <View>
                                        <CustomText
                                            text={"Adicionar"}
                                            font={"anson"}
                                            style={[
                                                styles.buttonText,
                                                { color: "#24538C" },
                                            ]}
                                        />
                                    </View>
                                    <View style={{ marginLeft: 4 }}>
                                        <CustomSVG
                                            type={"icons"}
                                            source={"shopCar"}
                                            width={20}
                                            height={20}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <TouchableWithoutFeedback onPress={this.props.onCancel}>
                        <View style={styles.middleFalseBackground} />
                    </TouchableWithoutFeedback>
                </View>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.falseBackground} />
                </TouchableWithoutFeedback>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    falseBackground: {
        backgroundColor: "rgba(0,0,0,0.6)",
        flex: 8,
    },
    middleContainer: {
        flex: 4,
        flexDirection: "row",
        backgroundColor: "yellow",
    },
    middleFalseBackground: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
    },
    containerCont: {
        flex: 4,
        backgroundColor: "rgba(0,0,0,0.6)",
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-between",
    },
    buttonContainer: {
        flexDirection: "row",
    },
    header: {
        color: "#24538C",
        fontSize: 26,
        paddingTop: 3,
    },
    button: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 30,
        width: "50%",
    },
    buttonText: {
        fontSize: 20,
    },
});
