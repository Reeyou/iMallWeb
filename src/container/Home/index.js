/**
  @Author: Reeyou  
  @Params: 首页
**/
import React, { Component } from 'react'
import Layout from '@/components/Layout'

const { Header, Footer, NavBar, Banner } = Layout
class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <Banner />
      </div>
    )
  }
}
export default Home;