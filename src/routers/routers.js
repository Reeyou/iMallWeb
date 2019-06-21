import PageLoading from '../components/PageLoading'
import Loadable from 'react-loadable'

const Home = Loadable({loader: () => import('../container/Home'), loading: PageLoading, delay: 400})

//商品信息
const ProductDetail = Loadable({loader: () => import('../container/Product'), loading: PageLoading, delay: 400})


const routers = [
  {
    path: '/',
    name: '首页',
    key: '',
    component: Home,
    exact: true
  },
  {
    path: '/productDetail',
    name: '商品详情',
    key: 'ProductDetail',
    component: ProductDetail,
    exact: true
  }, 
]

export default routers