import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import animalReducer from "./reducers/animalReducers";

import thunk from "redux-thunk";

const reducers = combineReducers({
    animals: animalReducer,
});

const storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)));
};

export default storeConfig;
