import React, { Component } from "react";
import {
    View,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    ActivityIndicator,
    Alert,
} from "react-native";
import { KeyboardAwareFlatList } from "react-native-keyboard-aware-scroll-view";

import { connect } from "react-redux";
import { setData } from "../../store/actions/animalActions";

import { getDate } from "../../funcs";

import CustomText from "../../components/CustomText";
import CustomInput from "../../components/CustomInput";
import CustomStatusBar from "../../components/CustomStatusBar";
import CustomSVG from "../../components/CustomSVG";
import ItemList from "../../components/animal_components/ItemList";

import CustomBadge from "../../components/badge_component/CustomBadge";

import { FontAwesome } from "@expo/vector-icons";

const initialState = {
    search: "",
    animals: [],
    showAnimals: [],
    currentPort: "",
    badgeCar: true,
};

class Buy extends Component {
    constructor() {
        super();
        this.state = {
            ...initialState,
        };
    }

    componentDidMount = () => {
        this.loadAnimals();
    };

    onSearch = () => {
        let possibleAnimals = [];
        let animals = this.state.animals;
        let test = true;

        if (this.state.currentPort) {
            animals = animals.filter(
                (animal) => animal.port == this.state.currentPort
            );
            //animals.forEach(animal => Alert.alert("Animais", `${animal.name}`))
        }

        for (let word = 0; word < animals.length; word++) {
            for (let letter = 0; letter < this.state.search.length; letter++) {
                if (
                    animals[word].name[letter].toLowerCase() !==
                    this.state.search[letter].toLowerCase()
                ) {
                    test = false;
                    break;
                }
            }
            if (test) {
                possibleAnimals.push(animals[word]);
            } else {
                test = true;
            }
        }
        this.setState({ showAnimals: possibleAnimals });
    };

    /*onSearch = () => {

        let dataSearched = this.state.animals.filter(element => element.name.toLowerCase().includes(this.state.search.toLowerCase()))

        if (this.state.currentPort){
            dataSearched = dataSearched.filter(element => element.port == this.state.currentPort)
        }

        this.setState({showAnimals: dataSearched})
    }*/

    loadAnimals = () => {
        this.setState({
            animals: this.props.route.params,
            showAnimals: this.props.route.params,
        });
    };

    openDetails = (animalId) => {
        const data = {
            ...this.state.animals.filter(
                (element) => element.id == animalId
            )[0],
        };
        this.props.navigation.navigate("Details", { ...data });
    };

    onFocus = (port) => {
        if (!port) {
            this.setState({ showAnimals: this.state.animals, currentPort: "" });
            return;
        }
        const data = this.state.animals.filter(
            (element) => element.port == port
        );
        this.setState({ showAnimals: data, currentPort: port });
    };

    backToCategorie = () => {
        this.props.navigation.navigate("TabPrincipal");
    };

    onRefresh = async () => {
        const currentType = this.state.animals[0].type;
        await this.props.onRefresh();
        this.setState({ animals: this.props.sellingAnimals });
        this.setState({
            showAnimals: this.state.animals
                .filter((animal) => animal.type == currentType)
                .reverse(),
        });
    };

    showSasBosta = () => {
        return null;
        // Alert.alert("Conteúdo", `${this.props.animalBadge[13
        // ].idShopCar} `)
    };

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#fefefe" }}>
                <CustomStatusBar hidden={false} default={true} />
                {/*Alert.alert("Debug", `${Object.keys(this.state.animals) } `)*/}
                <View style={styles.header}>
                    <View style={styles.halfHeader}>
                        <TouchableOpacity
                            style={
                                {
                                    /*position: "absolute", left: 5, top: 16*/
                                }
                            }
                            onPress={this.backToCategorie}
                        >
                            <View
                                style={{
                                    width: 30,
                                    height: 30,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <CustomSVG
                                    type={"menuIcon"}
                                    source={"menuCategorie"}
                                    width={25}
                                    height={25}
                                />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.inputContainer}>
                            <CustomInput
                                onEndEditing={this.onSearch}
                                clearTextOnFocus={true}
                                style={styles.input}
                                placeholderTextColor={"#a3a3a3"}
                                value={this.state.search}
                                placeholder={"O que você está procurando?"}
                                onChangeText={(text) =>
                                    this.setState({ search: text })
                                }
                            />
                            <TouchableOpacity onPress={this.onSearch}>
                                <View
                                    style={{
                                        height: 23,
                                        width: 23,
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <FontAwesome
                                        name="search"
                                        color={"#a3a3a3"}
                                        size={18}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={styles.refreshButton}
                            onPress={this.onRefresh}
                        >
                            <FontAwesome
                                name="refresh"
                                color={"#999999"}
                                size={25}
                            />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            width: "90%",
                            justifyContent: "space-around",
                            alignItems: "flex-end",
                        }}
                    >
                        <TouchableOpacity
                            style={
                                this.state.currentPort == ""
                                    ? styles.onFocusContainer
                                    : styles.withoutFocusContainer
                            }
                            onPress={() => this.onFocus("")}
                        >
                            <CustomText
                                font={"anson"}
                                text={"Todos"}
                                style={
                                    this.state.currentPort == ""
                                        ? styles.onFocusText
                                        : styles.withoutFocusText
                                }
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={
                                this.state.currentPort == "g"
                                    ? styles.onFocusContainer
                                    : styles.withoutFocusContainer
                            }
                            onPress={() => this.onFocus("g")}
                        >
                            <CustomText
                                font={"anson"}
                                text={"Grande"}
                                style={
                                    this.state.currentPort == "g"
                                        ? styles.onFocusText
                                        : styles.withoutFocusText
                                }
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={
                                this.state.currentPort == "m"
                                    ? styles.onFocusContainer
                                    : styles.withoutFocusContainer
                            }
                            onPress={() => this.onFocus("m")}
                        >
                            <CustomText
                                font={"anson"}
                                text={"Médio"}
                                style={
                                    this.state.currentPort == "m"
                                        ? styles.onFocusText
                                        : styles.withoutFocusText
                                }
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={
                                this.state.currentPort == "p"
                                    ? styles.onFocusContainer
                                    : styles.withoutFocusContainer
                            }
                            onPress={() => this.onFocus("p")}
                        >
                            <CustomText
                                font={"anson"}
                                text={"Pequeno"}
                                style={
                                    this.state.currentPort == "p"
                                        ? styles.onFocusText
                                        : styles.withoutFocusText
                                }
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 18 }}>
                    <KeyboardAwareFlatList
                        data={this.state.showAnimals}
                        keyExtractor={(item) => `${item.id}`}
                        renderItem={({ item }) => (
                            <ItemList
                                {...item}
                                newAnimal={getDate(item.date)}
                                cents={90}
                                openDetails={this.openDetails}
                            />
                        )}
                    />
                    {this.props.animalBadge.length ? (
                        <CustomBadge onPress={this.showSasBosta} />
                    ) : null}
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
    header: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
        borderBottomWidth: 1,
        borderBottomColor: "#a3a3a3",
    },
    halfHeader: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    inputContainer: {
        flexDirection: "row",
        backgroundColor: "#fff",
        width: "75%",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        top: 5,
    },
    input: {
        width: 230,
        fontSize: 16,
    },
    refreshButton: {
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    onFocusContainer: {
        borderBottomColor: "#24538C",
        borderBottomWidth: 1,
        marginLeft: 3,
        justifyContent: "flex-end",
    },
    withoutFocusContainer: {
        borderBottomColor: "#a3a3a3",
        borderBottomWidth: 1,
        marginLeft: 3,
        justifyContent: "flex-end",
    },
    onFocusText: {
        color: "#24538C",
        fontSize: 20,
    },
    withoutFocusText: {
        color: "#a3a3a3",
        fontSize: 15,
    },
});

const mapDispatchToProps = (dispatch) => {
    return {
        onRefresh: () => dispatch(setData()),
    };
};

const mapStateToProps = ({ animals }) => {
    return {
        sellingAnimals: animals.sellingAnimals,
        animalBadge: animals.animalBadge,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buy);
