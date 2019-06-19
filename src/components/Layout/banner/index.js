
import React, { Component } from 'react'
import {observer, inject} from 'mobx-react'
import SideNav from './sideNav'
import BannerFooter from './BannerFooter'

@inject('Global')
@observer
class Banner extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='banner'>
        <SideNav />
        <BannerFooter />
      </div>
    )
  }
}
export default Banner;