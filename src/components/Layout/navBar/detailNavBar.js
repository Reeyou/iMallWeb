
import React, { Component } from 'react'
import {observer, inject} from 'mobx-react'
import '../index.less'
import logo from '@/assets/img/logo.png'

@inject('Global')
@observer
class DetailNavBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const leftText = [
                      {
                        label:'手机',
                      },
                      {
                        label:'笔记本、平板',
                      },
                      {
                        label:'智能穿戴'
                      },
                      {
                        label:'智能家居'
                      },
                      {
                        label:'热销配件',
                      },
                      {
                        label:'增值服务、其他',
                      }
                    ]
    
    return (
      <div className="nav navShadow">
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
export default DetailNavBar;