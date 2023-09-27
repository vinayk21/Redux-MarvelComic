import {marvelcomicdatarootreducers} from './Reduxfile/Rootreducers/rootreducers'
import { applyMiddleware, legacy_createStore } from 'redux'
import thunk from "redux-thunk";
export const myStore= legacy_createStore(marvelcomicdatarootreducers,applyMiddleware(thunk));