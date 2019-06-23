/**
  @Author: Reeyou  
  @Params: 用户中心
**/
import React, { Components } from 'react'
import './index.less'


class User extends Components {
  constructor(props) {
    super(props)
  }
  render() {
    const tabList = ['用户资料','重置密码','我的订单','收货地址','关于iMall']
    return (
      <div className="user">
        <div className="container">
          <div className="left">
            <div className="info">
              <div className="avatar">
                <img src="" alt=""/>
              </div>
              <p className='name'></p>
            </div>
            <div className="tab">
              <ul>
                tabList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              </ul>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    )
  }
}
export default User;