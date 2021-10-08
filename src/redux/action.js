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
import instance from "../config/instance";

export function menuHandler(bool) {
  return (dispatch) => {
    dispatch({type: MENU_HANDLER, payload: bool})
  }
}
export function switchHandler(bool) {
  return (dispatch) => {
    dispatch({type: SWITCH_HANDLER, payload: bool})
  }
}
export function getTrailersData(type, limit) {
  return async (dispatch) => {
    dispatch({ type: GET_TRAILER })
    try {
      const result = await instance.get("/get", { params: {type: type, limit: limit || 2} })
      console.log(result)
      dispatch({ type: GET_TRAILER_SUCCESS, payload: result.data })
    } catch (error) {
      dispatch({ type: GET_TRAILER_ERROR })
    }
  }
}
export function getThumbsData(type, limit) {
  return async (dispatch) => {
    dispatch({ type: GET_THUMBS })
    try {
      const result = await instance.get("/get", { params: {type: type, limit: limit || 2} })
      console.log(result)
      dispatch({ type: GET_THUMBS_SUCCESS, payload: result.data })
    } catch (error) {
      dispatch({ type: GET_THUMBS_ERROR })
    }
  }
}
export function selectFocus(object) {
  return async (dispatch) => {
    dispatch({type: SELECT_FOCUS, payload: object})
  }
}

export function search(actualSearch) {
  return async(dispatch) => {
    dispatch({type: SEARCH_START, payload: actualSearch })
    try {
      const result = await instance.get('/search', { params: {name: actualSearch} })
      dispatch({ type: SEARCH_SUCCES, payload: result.data })
    } catch (e) {
      console.log(e)
      dispatch({type: SEARCH_ERROR})
    }
  }
}