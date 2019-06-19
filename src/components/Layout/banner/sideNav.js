
import React, { Component } from 'react'

class sideNav extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const category = [
      {
        label: '手机',
        list: ['HUAWEI P系列','荣耀']
      },
      {
        label: '笔记本、平板',
        list: ['平板电脑','笔记本电脑']
      },
      {
        label: '智能穿戴',
        list: ['手环','手表','VR']
      },
      {
        label: '智能家居',
        list: ['路由器','电视盒子','照明']
      },
      {
        label: '热销配件',
        list: ['保护壳','移动电源','耳机']
      },
      {
        label: '增值服务、其他',
        list: ['服务器','AI 计算平台']
      }
    ];
    return (
      <div className='sideNav'>
        <div className="container">
          <ul>
            {
              category.map((item, index) => (
                <li key={index}>
                  <div className='info'>
                    <h2>{item.label}</h2>
                    <div className='list'>
                      {
                        item.list.map((item, index) => (
                          <a className='item' key={index}>{item}</a>
                        ))
                      }
                    </div>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}
export default sideNav;