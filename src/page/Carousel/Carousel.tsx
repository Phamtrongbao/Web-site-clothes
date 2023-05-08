import React from 'react'
import { Carousel } from 'antd';
export default function Carousels() {
    const contentStyle: React.CSSProperties = {
        height: '700px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        marginTop: 10,
        width: "1120px",
        objectFit: 'cover',
        position: "relative",
      };
  return (
   <Carousel autoplay className='mt-3'>
    <div>
      <img style={contentStyle} src="https://bizweb.dktcdn.net/100/004/366/themes/900241/assets/slider_1.jpg?1678863742499" alt="" />
    </div>
    <div>
      <img style={contentStyle} src="https://bizweb.dktcdn.net/100/004/366/themes/900241/assets/twobanner_1.png?1678863742499" alt="" />
    </div>
    <div>
      <img style={contentStyle} src="https://bizweb.dktcdn.net/100/004/366/themes/900241/assets/twobanner_2.png?1678863742499" alt="" />
    </div>
  </Carousel>

 
  )
}
