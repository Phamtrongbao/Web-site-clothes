import React from 'react'
import { Watermark } from 'antd';
export default function Page() {
  return (
    <div className='container'>
        <div className="line-bottom"></div>
        <Watermark content="page 404">
    <div style={{ height: 500,textAlign:'center',fontFamily:'initial',fontWeight:900,color:'grey',alignItems:'center',paddingTop:200 }} >
        <h1>Is in the process of development......</h1>
    </div>
  </Watermark>

    </div>
  )
}
