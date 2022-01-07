import React, { Component } from "react";
import { View, StyleSheet, ActivityIndicator, Alert } from "react-native";

import CustomText from "../../components/CustomText";
import FieldSelect from "../../components/animal_components/FieldSelect";

import { connect } from "react-redux";

class SelectCategorie extends Component {
    constructor() {
        super();
    }

    onSelect = (type) => {
        const filtredAnimals = this.props.sellingAnimals.filter(
            (animal) => animal.type == type
        );
        this.props.navigation.navigate("Buy", filtredAnimals.reverse());
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <CustomText
                            style={styles.title}
                            font={"anson"}
                            text={"Selecione uma categoria"}
                        />
                    </View>
                    <View style={styles.selectContainer}>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <View style={{ flex: 1 }}>
                                <FieldSelect
                                    type={"dog"}
                                    svg={"dog"}
                                    text={"Cachorros"}
                                    onSelect={this.onSelect}
                                />
                                <FieldSelect
                                    type={"rodent"}
                                    svg={"rodent"}
                                    text={"Roedores"}
                                    onSelect={this.onSelect}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <FieldSelect
                                    type={"cat"}
                                    svg={"cat"}
                                    text={"Gatos"}
                                    onSelect={this.onSelect}
                                />
                                <FieldSelect
                                    type={"bird"}
                                    svg={"bird"}
                                    text={"Pássaros"}
                                    onSelect={this.onSelect}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        backgroundColor: "#e9e9e9",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        flex: 1,
        backgroundColor: "#f4f4f4",
    },
    header: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 3,
        borderBottomWidth: 1,
        borderBottomColor: "#e3e3e3",
        backgroundColor: "#fafafa",
    },
    title: {
        fontSize: 28,
        color: "#24538C",
    },
    selectContainer: {
        flex: 12,
    },
});

const mapStateToProps = ({ animals }) => {
    return {
        sellingAnimals: animals.sellingAnimals,
    };
};

export default connect(mapStateToProps, null)(SelectCategorie);
