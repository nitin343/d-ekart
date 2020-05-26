import logger from "redux-logger";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./root-reducer";
import {persistStore} from 'redux-persist';

const middlewares = [logger];

const store = createStore(rootReducer , applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default store;