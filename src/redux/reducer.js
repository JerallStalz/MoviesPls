import { 
  MENU_HANDLER,
  SWITCH_HANDLER,
  GET_TRAILER,
  GET_TRAILER_SUCCESS,
  GET_TRAILER_ERROR,
  GET_THUMBS,
  GET_THUMBS_ERROR,
  GET_THUMBS_SUCCESS,
  SEARCH_START,
  SEARCH_SUCCES,
  SEARCH_ERROR,
  SELECT_FOCUS,
  } from "./types";

const initialState = {
  trailerData: [],
  thumbsData: [],
  actualSelected: null,
  menuSider: false,
  homeType: true,
  loading: false,
  actualSearch: null,
  searchData: []
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case MENU_HANDLER: 
    return {
      ...state,
      menuSider: typeof action.payload !== 'undefined' ? action.payload : !state.menuSider
    }
    case SWITCH_HANDLER: 
    return {
      ...state,
      homeType: action.payload
    }
    case GET_TRAILER:
      return {
        ...state,
        loading: true
      }
    case GET_TRAILER_SUCCESS:
      return {
        ...state,
        loading: false,
        trailerData: action.payload
      }
    case GET_TRAILER_ERROR:
      return {
        ...state,
        loading: false
      }
      case GET_THUMBS:
        return {
          ...state,
          loading: true
        }
      case GET_THUMBS_SUCCESS:
        return {
          ...state,
          loading: false,
          thumbsData: action.payload
        }
      case GET_THUMBS_ERROR:
        return {
          ...state,
          loading: false
        }
      case SELECT_FOCUS: 
        return {
          ...state,
          actualSelected: action.payload
        }
      case SEARCH_START: 
        return {
          ...state,
          actualSearch: action.payload,
          loading: true
        }
      case SEARCH_SUCCES:
        return {
          ...state,
          searchData: action.payload,
          loading: false
        }
      case SEARCH_ERROR:
        return {
          ...state,
          searchData: action.payload,
          loading: false
        }
    default:
      return state
  }
}