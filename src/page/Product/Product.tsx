import React from 'react'
import RenderProduct from './RenderProduct';
export default function Products() {
    return (
        <div className="product mt-4">
            <h3 className='mt-5' style={{ textAlign: "center", fontFamily: " Times, serif", fontWeight: 700 }}>PRODUCT</h3>
            <div className="container">
            <div className="row">
                <RenderProduct/>   
                <div className="line-bottom"></div>
            </div>
            
            </div>       
        </div>
    )
}
