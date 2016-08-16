import React, { Component, PropTypes } from 'react'
import { Dashboard } from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from 'actions/userActions'

class DashboardContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {
        name: ''
      }
    }
  }

  onNameChange = (event) => {
    const user = this.state.user
    user.name = event.target.value
    this.setState({user})
  }

  onClickSave = () => {
    this.props.createUser(this.state.user)
  }

  userRow = (user, index) => {
    return <div key={index}>{user.name}</div>
  }

  render () {
    return (
      <div>
        <Dashboard />
        {this.props.users.map(this.userRow)}
        <h2>Add User</h2>
        <input
          type="text"
          onChange={this.onNameChange}
          value={this.state.user.name} />

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
      </div>
    )
  }
}

DashboardContainer.propTypes = {
  users: PropTypes.array.isRequired,
  createUser: PropTypes.func.isRequired
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
