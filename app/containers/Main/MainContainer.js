import React from 'react'
import { Navigation } from 'components'

const MainContainer = React.createClass({
  render () {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    )
  }
})

export default MainContainer
