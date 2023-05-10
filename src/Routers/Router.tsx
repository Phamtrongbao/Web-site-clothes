import React from 'react'

import HomeTemplate from '../templates/views/HomeTemplates/HomeTemplate';
import Home from '../page/Home/Home';
import ProDuctComponent from '../Component/ProductComponent/ProDuctComponent';
import ProductHot from '../page/ProductHot/ProductHot';
import BrandProduct from '../Component/nhap';
import SaleProduct from '../page/SaleProduct/SaleProduct';
import Login from '../Component/Login/Login';
import AccountTemplate from '../templates/views/AccountTemplate/AccountTemplate';
import { useRoutes,Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Register from '../Component/Register/Register';
import ShoppingCart from '../Component/RenderCart/ShoppingCart';
import Bill from '../Component/RenderCart/Bill';
import Page from '../Component/Page/Page';
import ProductDetails from '../Component/ProductDetails/ProductDetails';



const Routers = () => {

    const routing = useRoutes([
        {
            path: '/',
            element: <HomeTemplate/>,
            children: [
                {
                    path: '/',
                    element: <Home/>,
                },
                {
                    path: '/home',
                    element: <Home />
                },
                {
                    path: '/product',
                    element: <ProDuctComponent/>
                },
                {
                    path: '/HotProduct',
                    element: <ProductHot/>
                },
                {
                    path: '/home/:slug',
                    element: <BrandProduct/>
                },
                {
                    path: '/saleProduct',
                    element: <SaleProduct/>
                    
                },
                {
                    path:'/shoppingCart',
                    element:<ShoppingCart/>

                },
                {
                    path:'/bill',
                    element:<Bill/>

                },
                {
                    path:'/page',
                    element:<Page/>
                },
                {
                    path:'/:id/:slug',
                    element:<ProductDetails/>
                }
            ],
        },
        {
            path: '/',
            element: <AccountTemplate/>,
            children: [{
                    path:"/loginCustomer",
                    element:<Login/>
            },
            {
                path:"/Register",
                element:<Register/>
        },
        ] 
        }
    ])
    return  routing
}

export default Routers