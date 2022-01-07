import React, { Component } from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";

import CustomSVG from "../components/CustomSVG";
import CustomText from "../components/CustomText";
import CustomStatusBar from "../components/CustomStatusBar";

import { connect } from "react-redux";
import { setData } from "../store/actions/animalActions";

class LoadScreen extends Component {
    constructor() {
        super();
        this.state = {
            loaded: false,
        };
    }

    componentDidMount = () => {
        this.startLoad();
    };

    startLoad = async () => {
        await this.props.onLoad();
        this.setState({ loaded: true });
        this.props.navigation.navigate("Auth");
    };

    render() {
        return (
            <View style={styles.container}>
                <CustomStatusBar hidden={true} />
                <CustomSVG type={"loadScreen"} width={200} height={200} />
                <View style={styles.imageContainer}>
                    <Image
                        source={require("../../assets/images/appImgs/titleHome.png")}
                        style={{
                            resizeMode: "contain",
                            width: 250,
                            height: 150,
                        }}
                    />
                </View>
            </View>
        );
    }
}

/*<View style={styles.textContainer}>
                    <CustomText text={"Ami"} font={"anson"} style={{color: "#24538C", fontSize: 65}}/>
                    <View style={styles.effectText}>
                        <CustomText font={"anson"} text={"Cão"} style={{color: "#fff", fontSize: 65}} />
                    </View>
                </View>*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: Dimensions.get("window").height / 4,
    },
    textContainer: {
        flexDirection: "row",
        marginTop: 5,
    },
    effectText: {
        backgroundColor: "#24538C",
        marginLeft: 3,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 3,
        paddingRight: 3,
    },
    imageContainer: {
        position: "absolute",
        bottom: Dimensions.get("window").height / 4,
        left: Dimensions.get("window").width / 6,
    },
});

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => dispatch(setData()),
    };
};

export default connect(null, mapDispatchToProps)(LoadScreen);
