
import React, { Component } from 'react'
import {observer, inject} from 'mobx-react'

@inject('Global')
@observer
class Footer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>首页</h1>
      </div>
    )
  }
}
export default Footer;