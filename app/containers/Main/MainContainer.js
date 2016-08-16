import React from 'react'

const MainContainer = React.createClass({
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})

export default MainContainer
