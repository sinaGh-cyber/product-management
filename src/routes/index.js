import DefaultLayout from 'layouts/Default';
import ProductsList from 'pages/products-list';
import EditProduct from 'pages/edit-product';

const indexRoutes = [{ path: '/', component: DefaultLayout }];

const AppRoutes = [
  {
    path: '/all-products',
    name: 'همه محصولات',
    icon: 'fa fa-list',
    component: ProductsList,
    showInNav: true,
  },
  {
    path: '/products/:id/edit',
    component: EditProduct,
    name: 'Products',
    showInNav: true,
  },
  { path: '/', pathTo: '/all-products', name: 'All Products', redirect: true },
];

export default AppRoutes;

export { indexRoutes };
