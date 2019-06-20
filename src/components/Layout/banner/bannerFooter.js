
import React, { Component } from 'react'
import sprite from '../../../assets/img/sprite.png'

class BannerFooter extends Component {
  constructor(props) {
    super(props),
    this.state = {
      newPeople: '新人福利',
      member: '会员福利',
      middleInfo: ['企业会特购','会员领券','荣耀20系列','nova5 Pro','荣耀数码','华为数码','以旧换新'],
      rightInfo: ['优购码','实名认证','以旧换新']
    }
  }
  render() {
    return (
      <div className='bannerFooter'>
        <div className="container">
        <div className="left">
          <div className="left_con">
          <div className="avatar">
            <img src="" alt=""/>
          </div>
          <div className="info">
            <p className="user">您好！请 <a>登录</a> / <a>注册</a></p>
            <p className="btn">
              <a className='new'>{this.state.newPeople}</a>
              <a className='member'>{this.state.member}</a>
            </p>
          </div>
          </div>
        </div>
        <div className="right">
          <div className="right_top">
            <span>公告：</span>
            <a>华为手机晒单抽8000份礼包活动公告</a>
          </div>
          <div className="right_bottom">
          <ul>
            {
              this.state.rightInfo.map((item, index) => (
                <li key={index}>
                  <a href="">
                    <span className='p_img'>
                      <img src={sprite} className={`item_icon icon${index}`}></img>
                    </span>
                    {item}
                  </a>
                </li>
              ))
            }
          </ul>
          </div>
        </div>
        <div className="middle">
          <ul>
            {
              this.state.middleInfo.map((item, index) => (
                <li key={index}>
                  <p className='p_img'>
                    <img src={sprite} className={`item_icon icon${index}`}></img>
                  </p>
                  <p className='p_desc'>{item}</p>
                </li>
              ))
            }
          </ul>
        </div>        
        </div>
      </div>
    )
  }
}
export default BannerFooter;