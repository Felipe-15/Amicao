import {
    ADD_ANIMAL_BADGE,
    DEL_ANIMAL_BADGE,
    CANCEL_ADDED_ANIMAL,
    SET_DATA,
} from "./actionTypes";

import axios from "axios";
import { server } from "../../common";

import { getDate } from "../../funcs";

export const addAnimalBadge = (dataAnimal) => {
    return {
        type: ADD_ANIMAL_BADGE,
        payload: dataAnimal,
    };
};

export const delAnimalBadge = (dataAnimal) => {
    return {
        type: DEL_ANIMAL_BADGE,
        payload: {
            id: dataAnimal.id,
            price: dataAnimal.price,
        },
    };
};

export const cancelAddedAnimal = () => {
    return {
        type: CANCEL_ADDED_ANIMAL,
    };
};

export const setData = () => {
    return async (dispatch) => {
        res = await axios.get(`${server}/animals`);
        dispatch({
            type: SET_DATA,
            payload: {
                sellingAnimals: res.data.filter((animal) => animal.price),
                adoptingAnimals: res.data.filter((animal) => !animal.price),
                promotions: res.data.filter((animal) => animal.discount),
                news: res.data.filter((animal) => getDate(animal.date)),
            },
        });
    };

    // return {
    //     type: SET_DATA,
    //     payload: data
    // }
};
