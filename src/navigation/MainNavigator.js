import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import LoadScreen from "../screens/LoadScreen";
import Auth from "../screens/Auth";
import Home from "../screens/Home";
import Buy from "../screens/shop/Buy";
import Adopt from "../screens/shop/Adopt";
import SelectCategorie from "../screens/shop/SelectCategorie";
import Details from "../screens/shop/Details";

import CustomButton from "./components/CustomBarIcons";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const settingsTabNav = {
    activeTintColor: "black",
    inactiveTintColor: "#a3a3a3",
    style: {
        borderLeftColor: "#f9f9f9",
        borderLeftWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    tabStyle: {
        borderLeftColor: "#f9f9f9",
        borderLeftWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    labelStyle: { fontSize: 13, textAlign: "center", paddingBottom: 5 },
    keyboardHidesTabBar: true,
    labelPosition: "below-icon",
    showLabel: false,
};

const TabPrincipal = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={settingsTabNav}
            lazy={
                false
            } /*Faz com que todas as "screens" sejam carregadas assim que o aplicativo é aberto */
        >
            <Tab.Screen
                name="Início"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <CustomButton screen={"home"} onFocus={focused} />
                    ),
                }}
            />
            <Tab.Screen
                name="Adotar"
                component={Adopt}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <CustomButton screen={"adopt"} onFocus={focused} />
                    ),
                    showLabel: false,
                }}
            />
            <Tab.Screen
                name="Comprar"
                component={SelectCategorie}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <CustomButton screen={"buy"} onFocus={focused} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const StackPrincipal = () => {
    return (
        <Stack.Navigator headerMode={"none"}>
            <Stack.Screen name="LoadScreen" component={LoadScreen} />
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="TabPrincipal" component={TabPrincipal} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Buy" component={Buy} />
        </Stack.Navigator>
    );
};

export default class MainNavigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <StackPrincipal />
            </NavigationContainer>
        );
    }
}
