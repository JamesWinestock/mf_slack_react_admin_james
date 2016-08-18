import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from 'actions/userActions'
import { Dashboard, UserList } from 'components'
import { Field, Form, actions } from 'react-redux-form'

class DashboardContainer extends Component {


  componentWillMount() {
    this.props.loadUsers()
  }

  // onNameChange = (event) => {
  //   const user = this.state.user
  //   user.name = event.target.value
  //   this.setState({user})
  // }

  handleSubmit(test){
    test = {
      name: 'Fred'
    }
    this.props.addAndSaveUser(test)
  }

  render () {
    // var renderUsers = this.props.users.data.map((user, i) => {
    //   return <UserList key={`user-${i+1}`} user={user} />
    // })
    // console.log(renderUsers)
    let { test } = this.props
    return (
      <div>
        <Dashboard />
        <Form model="test"
        onSubmit={(user) => this.handleSubmit(test)}>
            <Field model="test.name">
              <label>Name: </label>
              <input type="text"
                value={this.inputValue}
                onChange={this.onChange}/>
            </Field>

          <Field model="test.email">
            <label>Email:</label>
            <input type="text"/>
          </Field>

          <button type="submit">
            Submit
          </button>
        </Form>
      </div>
    )
  }
}

DashboardContainer.propTypes = {
  // user: PropTypes.object.isRequired,
  addAndSaveUser: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired,
}


function mapStateToProps (state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(userActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
