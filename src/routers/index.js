
import React, { Component } from 'react'
import Loadable from 'react-loadable' // 动态导入加载组件
import PageLoading from '../components/PageLoading'
import { Switch, Route, Redirect, HashRouter, HashHistory } from 'react-router-dom'
import MainView from './main'
import MainRouters from './routers'
import getRouters from '../utils/getRouters'

const Home = Loadable({loader: () => import('../container/Home'), loading: PageLoading, delay: 400})

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      routers : []
    }
  }
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
      <HashRouter history={HashHistory}>
        <Switch>
          {
            routers.map(route => {
              return (
                <Route 
                  key={route.key}
                  path={route.path}
                  component={MainView}
                  exact={route.exact}
                />
              )
            })
          }
        </Switch>
      </HashRouter>
    )
  }
} 