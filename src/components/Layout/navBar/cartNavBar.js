
import React, { Component } from 'react'
import {observer, inject} from 'mobx-react'
import '../index.less'
import logo from '@/assets/img/logo.png'

@inject('Global')
@observer
class CartNavBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="nav">
        <div className="container clearFix">
          <div className="left">
            <div className='logo'>
              <img src={logo} alt=""/>
            </div>
            <span className="title">我的购物车</span>
          </div>
          <div className="right">
            <div className="progress">
              <div className='progress_icon'></div>
              <p>我的购物车</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CartNavBar;