import React, { Component } from 'react'
import ChildrenProps from './ChildrenProps'
import ParentProps from './ParentProps'

export default class DemoProps extends Component {
  render() {
    return (
      <div>
        <ParentProps />
      </div>
    )
  }
}
