import Index from "./views/Index";
import LoginPage from "./views/Login/LoginPage";
import AboutUs from './views/AboutUs/AboutUs';
import Products from './views/Products/Products';
import ContactUs from './views/ContactUs/ContactUs';

const routes = [
    {
      title: 'Home',
      path: '/',
      exact: true,
      component: Index
    },
    {
      title: 'Home',
      path: '/index',
      exact: true,
      component: Index
    },
    {
      title: 'Login',
      path: '/Login',
      component: LoginPage
    },
    {
      title: 'About',
      path: '/AboutUs',
      component: AboutUs
    },
    {
        title: 'Products',
        path: '/Products',
        component: Products
     },
     {
        title: 'Contact Us',
        path: '/ContactUs',
        component: ContactUs
      }
  ]
  
  export default routes;