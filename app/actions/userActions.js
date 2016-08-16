export const CREATE_USER = 'CREATE_USER'
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS'
import axios from 'axios'

export function createUser (user) {
  return {
    type: CREATE_USER,
    user
  }
}

function loadUsersSuccess (users) {
  return {
    type: LOAD_USERS_SUCCESS,
    users,
  }
}
// https://jsonplaceholder.typicode.com/users
export function loadUsers () {
  return function (dispatch) {
    return axios.get('https://express-rethinkb-compose.herokuapp.com/users/').then(users => {
      // console.log(users.data)
      dispatch(loadUsersSuccess(users))
    }).catch(error => {
      throw(error)
    })
  }
}
