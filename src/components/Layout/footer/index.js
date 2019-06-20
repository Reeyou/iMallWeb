
import React, { Component } from 'react'
import {observer, inject} from 'mobx-react'
import '../index.less'
@inject('Global')
@observer
class Footer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const data = [
      {
        label: '购物相关',
        data: ['购物指南', '支付方式', '常见问题']
      },
      {
        label: '服务支持',
        data: ['项目链接', '支付方式', '常见问题']
      },
      {
        label: '关于我们',
        data: ['购物指南', '支付方式', '常见问题']
      },
      {
        label: '其他项目',
        data: ['购物指南', '支付方式', '常见问题']
      },
      {
        label: '友情链接',
        data: ['购物指南', '支付方式', '常见问题']
      },{
        label: '自助服务',
        data: ['购物指南', '支付方式', '常见问题']
      }
    ]
    return (
      <div className='footer'>
        <div className="container">
          <div className="left">
            <div className="con">
            {
              data.map((item, index) => (
                <div className="label">
                  <h3>{item.label}</h3>
                  <ul>
                    {
                      item.data.map((item, index) => (
                        <li>
                          <a href="">{item}</a>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }
            </div>
          </div>
          <div className="right">
            <p className='phoneNumber'>400-088-6888</p>
            <p className='msg'>7x24小时客服热线（仅收市话费） </p>
            <div className='btn'>
              <p></p>
              在线客服
            </div>
            <p className='follow'>
              关注imall:
            </p>
          </div>
        </div>
        <div className="foot">
            <p>Copyright ©2017, exrick.cn Co., Ltd. All Rights Reserved.本网站设计内容大部分属锤子科技
法律声明隐私条款开发者中心</p>
        </div>
      </div>
    )
  }
}
export default Footer;