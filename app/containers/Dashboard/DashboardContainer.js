import React, { Component, PropTypes } from 'react'
import { Dashboard } from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from 'actions/userActions'

class DashboardContainer extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount() {
    this.props.loadUsers()
  }

  onNameChange = (event) => {
    const user = this.state.user
    user.name = event.target.value
    this.setState({user})
  }

  render () {
    return (
      <div>
        <Dashboard />

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
