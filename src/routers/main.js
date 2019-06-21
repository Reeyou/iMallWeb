import React, { Component } from 'react'
import MainRouters from './Routers'
import { Switch, Redirect, withRouter, Route } from 'react-router-dom'
import getRouters from '../utils/getRouters'
import Layout from '@/components/Layout'

const { Header, Footer, NavBar, Banner } = Layout
export default class mainView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      routers : []
    };
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentWillMount() {
    this.getResultRouter()
  }
  getResultRouter() {
    let resultRouters = getRouters(MainRouters)
    this.setState({
      routers: resultRouters
    })
  }
  

  render() {
    const { routers } = this.state
    return (
      <div>
        <Header />
        <NavBar />
        <Switch>
          {
            routers.map(route => {
              return (
                <Route
                  key={route.key}
                  exact={route.exact ? true : false}
                  path={route.path}
                  component={route.component}
                />
              )
            })
          }
        </Switch>
        <Footer />
      </div>
    )
  }
}