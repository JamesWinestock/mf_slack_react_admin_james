import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from 'actions/userActions'
import { Dashboard, UserList } from 'components'


class DashboardContainer extends Component {

  componentWillMount() {
    this.props.loadUsers()
  }

  onNameChange = (event) => {
    const user = this.state.user
    user.name = event.target.value
    this.setState({user})
  }

  render () {
    var renderUsers = this.props.users.data.map((user, i) => {
      return <UserList key={`user-${i+1}`} user={user} />
    })
    // console.log(renderUsers)
    return (
      <div>
        <Dashboard />
        <h2>Users</h2>
        {renderUsers}
      </div>
    )
  }
}

DashboardContainer.propTypes = {
  users: PropTypes.object.isRequired,
  createUser: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired,
}

function mapStateToProps (state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(userActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
