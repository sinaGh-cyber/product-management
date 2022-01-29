import DefaultLayout from 'layouts/Default'
import ProductsList from 'pages/products-list'

const indexRoutes = [{ path: '/', component: DefaultLayout }]

const AppRoutes = [
  {
    path: '/all-products',
    name: 'همه محصولات',
    icon: 'fa fa-list',
    component: ProductsList,
    showInNav: true,
  },
  { path: '/', pathTo: '/all-products', name: 'All Products', redirect: true },
]

export default AppRoutes

export { indexRoutes }
