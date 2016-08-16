export const CREATE_USER = 'CREATE_USER'

export function createUser (user) {
  return {
    type: CREATE_USER,
    user
  }
}
