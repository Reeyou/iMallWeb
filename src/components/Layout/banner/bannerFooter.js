
import React, { Component } from 'react'

class BannerFooter extends Component {
  constructor(props) {
    super(props),
    this.state = {
      newPeople: '新人福利',
      member: '会员福利',
      middleInfo: ['企业会特购','会员领券','荣耀20系列','nova5 Pro','荣耀数码','华为数码','以旧换新']
    }
  }
  render() {
    return (
      <div className='bannerFooter'>
        <div className="left">
          <div className="avatar"></div>
          <div className="left_info">
            <p className="">您好！请<span>登录</span>/<span>注册</span></p>
            <p className="">
              <span>{this.state.newPeople}</span>
              <span>{this.state.member}</span>
            </p>
          </div>
        </div>
        <div className="right"></div>
        <div className="middle"></div>
      </div>
    )
  }
}
export default BannerFooter;