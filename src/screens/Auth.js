import React, { Component } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import CustomText from "../components/CustomText";
import CustomStatusBar from "../components/CustomStatusBar";
import { AuthInput } from "../components/auth_component/AuthInput";

import BackgroundImage from "../../assets/images/appImgs/loginBackground.png";

const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    stageNew: false,
};

export default class Auth extends Component {
    constructor() {
        super();
        this.state = {
            ...initialState,
        };
    }

    authPass = () => {
        this.state.email = "hello";
        this.props.navigation.navigate("TabPrincipal");
    };

    testAuth = () => {
        let validations = [this.state.email.trim(), this.state.password.trim()];
        const validate = validations.reduce((acum, next) => acum && next);
        return validate;
    };

    render() {
        return (
            <ImageBackground source={BackgroundImage} style={styles.background}>
                <CustomStatusBar hidden={false} default={true} />
                <View style={styles.container}>
                    <View style={styles.authContainer}>
                        <View style={styles.titleContainer}>
                            <CustomText
                                font={"anson"}
                                text={
                                    !this.state.stageNew ? "Login" : "Cadastro"
                                }
                                style={styles.title}
                            />
                        </View>
                        <AuthInput
                            icon="at"
                            placeholder={"Email"}
                            value={this.state.email}
                            onChangeText={(email) => this.setState({ email })}
                        />
                        <AuthInput
                            icon="lock"
                            placeholder={"Senha"}
                            isPassword={true}
                            value={this.state.password}
                            onChangeText={(password) =>
                                this.setState({ password })
                            }
                        />
                        <TouchableOpacity
                            disabled={
                                this.state.email.trim() &&
                                this.state.password.trim()
                                    ? false
                                    : true
                            }
                            onPress={this.authPass}
                            style={[styles.button, { width: "85%" }]}
                            activeOpacity={0.6}
                        >
                            <LinearGradient
                                style={{
                                    width: "100%",
                                    height: 50,
                                    borderRadius: 10,
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                                colors={
                                    this.state.email.trim() &&
                                    this.state.password.trim()
                                        ? ["#1A5BA1", "#1C62AD", "#2279D6"]
                                        : ["#d8d8d8", "#d8d8d8"]
                                }
                                start={[0.1, 0.4]}
                                end={[1, 0.8]}
                            >
                                <CustomText
                                    font={"anson"}
                                    style={styles.textButton}
                                    text={
                                        !this.state.stageNew
                                            ? "Entrar"
                                            : "Registrar"
                                    }
                                />
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.questionContainer}
                            activeOpacity={0.6}
                            onPress={() =>
                                this.setState({
                                    stageNew: !this.state.stageNew,
                                })
                            }
                        >
                            <CustomText
                                font={"anson"}
                                text={
                                    !this.state.stageNew
                                        ? "Ainda não tem uma conta?"
                                        : "Já tem uma conta? "
                                }
                                style={styles.questionText}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    authContainer: {
        backgroundColor: "#fff",
        width: "85%",
        alignItems: "center",
        justifyContent: "space-around",
        borderRadius: 10,
    },
    titleContainer: {
        marginBottom: 10,
    },
    title: {
        color: "#24538C",
        fontSize: 35,
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        borderRadius: 10,
        marginBottom: 10,
    },
    textButton: {
        color: "#fff",
        fontSize: 30,
    },
    questionContainer: {
        marginBottom: 10,
    },
    questionText: {
        color: "#24538C",
        fontSize: 20,
    },
});
