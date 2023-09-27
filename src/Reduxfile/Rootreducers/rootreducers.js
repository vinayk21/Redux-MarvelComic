import {marvelcomicreducers,cartitemreducers,removereducers} from '../Reducers/reducer'
import {combineReducers} from 'redux'

export const marvelcomicdatarootreducers = combineReducers(
    {apidata:marvelcomicreducers,
     cartitemdatas:cartitemreducers,
     removedata:removereducers
    }
) 