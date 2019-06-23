/**
  @Author: Reeyou  
  @Params: 购物车
**/
import React, { Component } from 'react'
import './index.less'

class Cart extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const proTitleList = ['商品','数量','单价','小计','操作']
    return (
      <div className='cart'>
        <div className="cart_container">
          <div className="noData">
            <div className='icon'></div>
            <div className='tips'>您的购物车里什么也没有哦~</div>
            <div className="btn">去逛逛</div>
          </div>
          <div className="pro">
            <div className="pro_title">
              <ul>
                {
                  proTitleList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))
                }
              </ul>
            </div>
            <div className="pro_info">
                <div className="img"></div>
                <div>
                  <ul>
                    {
                      proTitleList.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))
                    }
                  </ul>
                </div>
            </div>
            <div className="tool">
              <div className="left"></div>
              <div className="right">
                  <div className="price">
                    <p>总计：<span>￥</span><span>2999</span></p>
                    <p>已选择<span>1</span>件商品</p>
                  </div>
                  <div className="btn">立即结算</div>
              </div>        
            </div>
          </div>
          <div className="intoduce">
            <div className="title">热销推荐</div>
            <ul>
              {
                proTitleList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              }
            </ul>
          </div>         
        </div>
      </div>
    )
  }
}
export default Cart;