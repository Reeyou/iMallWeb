/**
  @Author: Reeyou  
  @Params: 商品详情
**/
import React, { Component } from 'react'
import './index.less'
import Layout from '@/components/Layout'
import hot1 from '../../assets/img/hot1.png'
import hot2 from '../../assets/img/hot2.png'
import hot3 from '../../assets/img/hot3.png'
import hot4 from '../../assets/img/hot4.png'
import hot5 from '../../assets/img/hot5.png'
import Tab from '@/components/Tab'
import Detail from './detail'

const { DetailNavBar } = Layout
const imgNav = [hot1, hot2, hot3, hot4, hot5]
class Product extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='product'>
        <DetailNavBar />
        <div className="container">
          <div className="product_con clearFix">
            <div className="left">
              <div className="gallery">
                <div className="img">
                  <img src={hot1} alt=""/>
                </div>
                <div className="product_nav">
                  <ul>
                    {
                      imgNav.map((item, index) => (
                        <li key={index}>
                          <img src={item} alt=""/>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="detail">
                <div className="title">荣耀V20 麒麟980 魅眼全视屏 4800万AI超清摄影 全网通6GB+128GB 标配版 幻夜黑</div>
                <div className="desc"> 麒麟980处理器 | 4800万像素摄像头 | 400mAh大容量电池 | 超级快充</div>
                <div className="price">价 格：<strong>￥</strong><span>2399.00</span></div>
                <div className="stock">数 量：<span>1111</span></div>
                <div className="btn">
                  <span className='cart'>加入购物车</span>
                  <span className='buy'>立即购买</span>
                </div>
              </div>
            </div>
          </div>
          <div className="product_detail">
            <div className="hot">
              <Tab tab={['热销商品', '热门关注']}>
                    ewqeqe
                            
              </Tab>
            </div>
            <div className="detail">
              <Tab tab={['商品详情','规格与参数',  '商品评价']}>
                    ewqeqe
                            
              </Tab>
              <div className="param">
                <div className="param_brand">品牌：<span>华为</span></div>
                <div className="param_list">价格：<span>1200</span></div>
                <p className='more'>更多参数</p>
              </div>
              <div className="img">
                {
                  imgNav.map((item, index) => (
                    <img src={item} key={index} alt=""/>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Product;