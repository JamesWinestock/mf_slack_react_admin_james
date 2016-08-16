import React, { PropTypes } from 'react'

UserList.propTypes = {
  user: PropTypes.object.isRequired,
}

export default function UserList ({user}) {
  return (
      <div>
        <ul>
          <li>{user.name} |  {user.email}</li>
        </ul>
      </div>
  )
}
