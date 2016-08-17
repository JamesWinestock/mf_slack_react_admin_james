import { CREATE_USER, LOAD_USERS_SUCCESS, ADD_USER } from 'actions/userActions'

export default function userReducer (state = {}, action) {
  switch (action.type) {
    case LOAD_USERS_SUCCESS :
      return {
        ...state,
        ...action.users,
      }
    case ADD_USER :
      return {
        ...state,
        ...action.user,
      }
    case CREATE_USER :
      return {
        ...state,
        user: action.user,
      }
    default :
      return state
  }
}
