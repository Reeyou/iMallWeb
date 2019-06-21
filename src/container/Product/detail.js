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

const { DetailNavBar } = Layout
const imgNav = [hot1, hot2, hot3, hot4, hot5]
class ProductDetail extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="product_detail">
        <div className="title">商品详情</div>
        <div className="detailImg">
          {
            imgNav.map((item, index) => (
              <img src={item} alt=""/>
            ))
          }
        </div>
      </div>
    )
  }
}
export default ProductDetail;