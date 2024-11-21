import {createStore} from "redux";
import { ProductReducer } from "./Reducers/ProductReducer";

export const store = createStore(ProductReducer);