import { CREATE_USER } from 'actions/userActions'

export default function userReducer (state = [], action) {
  switch (action.type) {
    case CREATE_USER :
      return [
        ...state,
        Object.assign({}, action.user)
      ]
    default :
      return state
  }
}
