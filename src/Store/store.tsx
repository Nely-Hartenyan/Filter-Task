import {createStore} from "redux";
import {FilterReducer} from "./FilterReducer";
import {composeWithDevTools} from "redux-devtools-extension";

export const store=createStore(FilterReducer,composeWithDevTools())