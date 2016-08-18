export const CREATE_USER = 'CREATE_USER'
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS'
export const ADD_USER = 'ADD_USER'
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
    return axios.get('http://localhost:3000').then(users => {
      // console.log(getState().users)
      dispatch(loadUsersSuccess(users))
    }).catch(error => {
      throw(error)
    })
  }
}

function addUser (user) {
  return {
    type: ADD_USER,
    user,
  }
}

const DUMMY_USER = {
  name: 'Tommy',
  email: 'tommy@test.com'
}

export function addAndSaveUser (DUMMY_USER) {
  return function (dispatch) {
    axios.post("http://localhost:3000/users/newUser", DUMMY_USER).then((response)=> {
      console.log(response)
    })
  }
}
