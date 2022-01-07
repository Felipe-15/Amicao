import {
    ADD_ANIMAL_BADGE,
    DEL_ANIMAL_BADGE,
    CANCEL_ADDED_ANIMAL,
    SET_DATA,
} from "../actions/actionTypes";

const initialState = {
    animalBadge: [],
    sellingAnimals: [],
    adoptingAnimals: [],
    news: [],
    promotions: [],
    loadeds: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ANIMAL_BADGE:
            return {
                ...state,
                animalBadge: state.animalBadge.concat(action.payload),
            };
        case SET_DATA:
            test = true;
            for (option of Object.keys(action.payload)) {
                if (
                    JSON.stringify(state[option]) !=
                    JSON.stringify(action.payload[option])
                ) {
                    test = false;
                    break;
                }
            }
            if (test) {
                return {
                    ...state,
                };
            } else {
                return {
                    ...state,
                    ...action.payload,
                };
            }
        case DEL_ANIMAL_BADGE:
            return {
                ...state,
                animalBadge: state.animalBadge.filter(
                    (animal) =>
                        !(
                            animal.id == action.payload.id &&
                            animal.price == action.payload.price
                        )
                ),
            };
        case CANCEL_ADDED_ANIMAL:
            return {
                ...state,
                animalBadge: state.animalBadge.slice(
                    0,
                    state.animalBadge.length - 1
                ),
            };
        default:
            return state;
    }
};

export default reducer;
