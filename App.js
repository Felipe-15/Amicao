import React, { Component } from "react";

import MainNavigator from "./src/navigation/MainNavigator";

import { Provider } from "react-redux";
import storeConfig from "./src/store/storeConfig";

const store = storeConfig();

const Redux = () => (
    <Provider store={store}>
        <MainNavigator />
    </Provider>
);

export default class App extends Component {
    render() {
        return <Redux />;
    }
}
