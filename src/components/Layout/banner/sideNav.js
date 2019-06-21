
import React, { Component } from 'react'
import hot1 from '../../../assets/img/hot1.png'
import hot2 from '../../../assets/img/hot2.png'
import hot3 from '../../../assets/img/hot3.png'
import hot4 from '../../../assets/img/hot4.png'
import hot5 from '../../../assets/img/hot5.png'

class sideNav extends Component {
  constructor(props) {
    super(props)
  }
  onMouseEnter() {

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

    const plantList1 = [
      {
        label: '荣耀20 Pro',
        url: hot1
      },
      {
        label: '华为nova5 Pro',
        url: hot3
      },
      {
        label: '华为P30 Pro',
        url: hot4
      },
      {
        label: '荣耀play',
        url: hot5
      },
    ]
    const plantList2 = [
      {
        label: '荣耀20 Pro',
        url: hot1
      },
      {
        label: '华为 P30',
        url: hot2
      },
      {
        label: '华为nova5 Pro',
        url: hot3
      },
      {
        label: '华为P30 Pro',
        url: hot4
      },
    ]
    return (
      <div className='sideNav'>
        <div className="container">
          <ul>
            {
              category.map((item, index) => (
                <li key={index} onMouseEnter={this.onMouseEnter}>
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
        <div className="plant">
          <ul>
            {
              plantList1.map((item, index) => (
                <li key={index} onMouseEnter={this.onMouseEnter}>
                  <div className='info'>
                    <img src={item.url} alt=""/>
                    <span>{item.label}</span>
                  </div>
                </li>
              ))
            }
          </ul>
          <ul>
            {
              plantList2.map((item, index) => (
                <li className='clearFix' key={index} onMouseEnter={this.onMouseEnter}>
                  <div className='info'>
                    <img src={item.url} alt=""/>
                    <span>{item.label}</span>
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