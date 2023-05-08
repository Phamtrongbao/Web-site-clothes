import React, { Fragment, useEffect } from 'react'
import { Carousel } from 'antd';
import "./Home.css"
import { useGetBrand } from '../../Hook/BrandHook';
import Products from '../Product/Product';
import Category from '../category/Category';

import Loading from '../../Component/Loading/Loading';
import RegisterNew from '../RegisterNew/RegisterNew';
import Transport from '../Transport/Transport';
import Brand from '../Brand/Brand';
import Carousels from '../Carousel/Carousel';




export default function Home(props: any) {

  return (
    <div>
      <div className='container'>
          <Transport/>
          <Carousels/>
        
        <div className="brand">
        <Brand/>
        <div className='line-bottom mt-4'></div>
         <Products />
        </div>
        <div className="row mt-5">
          <Category />
        </div>

      </div>
      <RegisterNew/>
    </div>

  )
}
