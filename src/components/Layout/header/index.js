
import React, { Component } from 'react'
import {observer, inject} from 'mobx-react'
import '../index.less'

@inject('Global')
@observer
class Header extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const leftText = [
                      {
                        label:'首页'
                      },
                      {
                        label:'华为官网'
                      },
                      {
                        label:'荣耀官网'
                      },
                      {
                        label:'花粉俱乐部'
                      },
                      {
                        label:'更多精彩',
                        icon: '',
                        child: ['EMUI','华为终端云空间','应用市场']
                      }
                    ]
      
    const rightText = [
                        {
                          label:'请登录'
                        },
                        {
                          label:'注册'
                        },
                        {
                          label:'我的订单'
                        },
                        {
                          label:'客户服务'
                        },
                        {
                          label:'网站导航',
                          icon: '',
                          child: ['EMUI','华为终端云空间','应用市场']
                        },
                        {
                          label:'手机版',
                          icon: '',
                          child: ['EMUI','华为终端云空间','应用市场']
                        },
                        {
                          label:'购物车',
                          icon: '',
                          child: ['EMUI','华为终端云空间','应用市场']
                        }
                      ]
    return (
      <div className="header">
        <div className="container clearFix">
          <div className="left">
            <ul>
              {
                leftText.map((item, index) => (
                  <li key={index}>
                    <a href="">{item.label}</a>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="right">
            <ul>
              {
                rightText.map((item, index) => (
                  <li key={index}>
                    <a href="">{item.label}</a>
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
export default Header;