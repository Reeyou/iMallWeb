/**
  @Author: Reeyou  
  @Params: 首页
**/
import React, { Component } from 'react'
import Layout from '@/components/Layout'
import promo1 from '../../assets/img/promo1.png'
import promo2 from '../../assets/img/promo2.jpg'
import promo3 from '../../assets/img/promo3.jpg'
import promo4 from '../../assets/img/promo4.png'
import hot_main from '../../assets/img/hot_main.png'
import hot1 from '../../assets/img/hot1.png'
import hot2 from '../../assets/img/hot2.png'
import hot3 from '../../assets/img/hot3.png'
import hot4 from '../../assets/img/hot4.png'
import hot5 from '../../assets/img/hot5.png'
import hot6 from '../../assets/img/hot6.png'
import hot7 from '../../assets/img/hot7.png'
import hot8 from '../../assets/img/hot8.png'
import recom1 from '../../assets/img/recom1.png'
import recom2 from '../../assets/img/recom2.png'
import recom3 from '../../assets/img/recom3.png'
import recom4 from '../../assets/img/recom4.png'
import recom5 from '../../assets/img/recom5.png'
import turn1 from '../../assets/img/turn1.jpg'
import './index.less'

const { Header, Footer, NavBar, Banner } = Layout
const promoImg = [promo1, promo2, promo3, promo4]
const hotImg = [hot1, hot2, hot3, hot4, hot5, hot6, hot7, hot8]
const recomImg = [recom1, recom2, recom3, recom4, recom5]
const phoneImg = [hot1, hot1, hot1, hot2, hot3, hot4, hot5, hot6, hot7, hot8]
class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='home'>
        <Header />
        <NavBar />
        <Banner />
        <div className="channel">
          {/* 宣传 */}
          <section className='product promo'>
            <div className="con">
              {
                promoImg.map((item, index) => (
                  <a href="" key={index}>
                    <img src={item} alt=""/>
                  </a>
                ))
              }
            </div>
          </section>

          {/* 热销 */}
          <section className='product hot'>
            <div className="title">
              <h2>热销单品</h2>
            </div>
            <div className="con">
              <div className="mainImg">
                <a href="">
                  <img src={hot_main} alt=""/>
                </a>
              </div>
              {
                hotImg.map((item, index) => (
                  <div className="detail" key={index}>
                    <a href=''>
                      <img src={item} alt=""/>
                      <div className='desc'>
                        <p className='name'>华为P30 Pro</p>
                        <p className='msg'>最高优惠999元</p>
                        <p className='price'>￥5699</p>
                      </div>
                    </a>
                  </div>
                ))
              }
            </div>
          </section>
          {/* 推荐 */}
          <section className='product recommend'>
            <div className="title">
              <h2>精品推荐</h2>
            </div>
            <div className="info">
              {
                recomImg.map((item, index) => (
                  <div className="detail" key={index}>
                    <div className="img">
                      <a href=''>
                        <img src={item} alt=""/>
                        <p className='msg'>最高优惠999元</p>
                      </a>
                    </div>
                    <p className='name'>华为P30 Pro</p>
                    <p className='price'>￥5699</p>
                  </div> 
                ))
              }
            </div>
          </section>
          {/* 介绍轮播图 */}
          <section className='product slideShow'>
              <img src={turn1} alt=""/>
          </section>

          {/* phone */}
          <section className='product phone'>
            <div className="title">
              <h2>手机</h2>
            </div>
            <div className="con">
              {
                phoneImg.map((item, index) => (
                  <div className="detail" key={index}>
                    <a href=''>
                      <img src={item} alt=""/>
                      <div className='desc'>
                        <p className='name'>华为P30 Pro</p>
                        <p className='msg'>最高优惠999元</p>
                        <p className='price'>￥5699</p>
                      </div>
                    </a>
                  </div>
                ))
              }
            </div>
          </section>

          {/* 笔记本电脑 */}
          <section className='product computer'>
            <div className="title">
              <h2>笔记本电脑</h2>
            </div>
            <div className="con">
              {
                phoneImg.map((item, index) => (
                  <div className="detail" key={index}>
                    <a href=''>
                      <img src={item} alt=""/>
                      <div className='desc'>
                        <p className='name'>华为P30 Pro</p>
                        <p className='msg'>最高优惠999元</p>
                        <p className='price'>￥5699</p>
                      </div>
                    </a>
                  </div>
                ))
              }
            </div>
          </section>

          {/* 平板电脑 */}
          <section className='product miniPad'>
            <div className="title">
              <h2>精品平板</h2>
            </div>
            <div className="con">
              {
                phoneImg.map((item, index) => (
                  <div className="detail" key={index}>
                    <a href=''>
                      <img src={item} alt=""/>
                      <div className='desc'>
                        <p className='name'>华为P30 Pro</p>
                        <p className='msg'>最高优惠999元</p>
                        <p className='price'>￥5699</p>
                      </div>
                    </a>
                  </div>
                ))
              }
            </div>
          </section>

          {/* 智能穿戴 */}
          <section className='product watch'>
            <div className="title">
              <h2>智能穿戴</h2>
            </div>
            <div className="con">
              {
                phoneImg.map((item, index) => (
                  <div className="detail" key={index}>
                    <a href=''>
                      <img src={item} alt=""/>
                      <div className='desc'>
                        <p className='name'>华为P30 Pro</p>
                        <p className='msg'>最高优惠999元</p>
                        <p className='price'>￥5699</p>
                      </div>
                    </a>
                  </div>
                ))
              }
            </div>
          </section>

          {/* 智能家居 */}
          <section className='product floor'>
            <div className="title">
              <h2>智能家居</h2>
            </div>
            <div className="con">
              {
                phoneImg.map((item, index) => (
                  <div className="detail" key={index}>
                    <a href=''>
                      <img src={item} alt=""/>
                      <div className='desc'>
                        <p className='name'>华为P30 Pro</p>
                        <p className='msg'>最高优惠999元</p>
                        <p className='price'>￥5699</p>
                      </div>
                    </a>
                  </div>
                ))
              }
            </div>
          </section>

          {/* 热销配件 */}
          <section className='product part'>
            <div className="title">
              <h2>热销配件</h2>
            </div>
            <div className="con">
              {
                phoneImg.map((item, index) => (
                  <div className="detail" key={index}>
                    <a href=''>
                      <img src={item} alt=""/>
                      <div className='desc'>
                        <p className='name'>华为P30 Pro</p>
                        <p className='msg'>最高优惠999元</p>
                        <p className='price'>￥5699</p>
                      </div>
                    </a>
                  </div>
                ))
              }
            </div>
          </section>

          {/* 底部展示图 */}
          <section className='product footerImg'>
              <img src={turn1} alt=""/>
          </section>

          {/* 底部 */}
          <Footer />
        </div>
      </div>
    )
  }
}
export default Home;