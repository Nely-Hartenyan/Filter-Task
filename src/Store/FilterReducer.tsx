import React from "react";
import lion from '../Images/lion.jpg';
import porcupine from '../Images/porcupine.jpg';
import panda from '../Images/panda.png';
import fish1 from '../Images/fish1.jpg';
import fish2 from '../Images/fish2.jpg';
import fish3 from '../Images/fish3.png';
import bird1 from '../Images/bird1.jpg';
import bird2 from '../Images/bird2.jpg';

import {action, defaultStateType} from "../Type/Type";

const FILTER = "FILTER";

const defaultState:defaultStateType = {

    images: [
        {id: 1, url: lion, filter: 'mammals'},
        {id: 2, url: fish1, filter: 'fishes'},
        {id: 3, url: bird1, filter: 'birds'},
        {id: 4, url: fish2, filter: 'fishes'},
        {id: 5, url: porcupine, filter: 'mammals'},
        {id: 6, url: bird2, filter: 'birds'},
        {id: 7, url: fish3, filter: 'fishes'},
        {id: 8, url: panda, filter: 'mammals'},

    ],

    filtered: ''
}

export const FilterReducer = (state:defaultStateType = defaultState, action:action): defaultStateType => {
    switch (action.type) {

        case FILTER: {
            return {...state, filtered: action.payload}
        }

        default:
            return state
    }
}

export const filterAction = (payload:string) => ({type: FILTER, payload});
