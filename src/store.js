import {createStore} from 'redux'
import {devToolsEnhancer} from 'redux-devtools-extension'

let initialState = {
  name: '',
  address: '',
  city: '',
  state: '',
  zip: 0,
  img: '',
  mortgage: 0,
  rent: 0
}

export const NAME = 'NAME'
export const ADDRESS = 'ADDRESS'
export const CITY = 'CITY'
export const STATE = 'STATE'
export const ZIP = 'ZIP'
export const IMG = 'IMG'
export const MORTGAGE = 'MORTGAGE'
export const RENT = 'RENT'
export const CLEAR = 'CLEAR'

function reducer (state=initialState, action) {
  switch(action.type){
    case NAME:
      return {...state, name: action.payload}
    case ADDRESS:
      return {...state, address: action.payload}
    case CITY:
      return {...state, city: action.payload}
    case STATE:
      return {...state, state: action.payload}
    case ZIP:
      return {...state, zip: action.payload}
    case IMG:
      return {...state, img: action.payload}
    case MORTGAGE:
      return {...state, img: action.payload}
    case RENT:
      return {...state, img: action.payload}
    case CLEAR:
      return {...state, name: '', address: '', city: '', state: '', zip: 0, img: '', mortgage: '', rent: ''}
    default:
      return state
  }
}

export default createStore(reducer, devToolsEnhancer())