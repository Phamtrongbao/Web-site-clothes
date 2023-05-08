import React, { Fragment } from 'react'
import Loading from '../../Component/Loading/Loading';
import Products from '../Product/Product';

import { useGetBrand } from '../../Hook/BrandHook';
import RenderBrand from './RenderBrand';

export default function Brand() {
    const { data, isLoading, isError } = useGetBrand();
    return (
        <div>
            {isLoading? <Loading /> : <Fragment >
                <div className="mt-5">
                    <RenderBrand Brand={data}/> 
                </div>    
            </Fragment>}
        </div>
    )
}
