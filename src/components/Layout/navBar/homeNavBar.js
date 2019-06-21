
import React, { Component } from 'react'
import {observer, inject} from 'mobx-react'
import '../index.less'
import logo from '@/assets/img/logo.png'

@inject('Global')
@observer
class HomeNavBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const leftText = [
                      {
                        label:'华为专区',
                        borderColor: 1
                      },
                      {
                        label:'荣耀专区',
                        borderColor: 2
                      },
                      {
                        label:'华为P30'
                      },
                      {
                        label:'荣耀20'
                      },
                      {
                        label:'Mate20系列',
                      },
                      {
                        label:'荣耀V20',
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
      <div className="nav">
        <div className="container clearFix">
          <div className="left">
            <div className='logo'>
              <img src={logo} alt=""/>
            </div>
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
            <div className="input">
              <input type="text"/>
              <i className='iconfont icon-search'></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default HomeNavBar;