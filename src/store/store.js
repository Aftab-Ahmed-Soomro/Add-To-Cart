import {createStore} from "redux";
import { ProductReducer } from "./Reducers/ProductReducer";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
}
   
const persistedReducer = persistReducer(persistConfig, ProductReducer)

export const store = createStore(persistedReducer);
export let persistor = persistStore(store)