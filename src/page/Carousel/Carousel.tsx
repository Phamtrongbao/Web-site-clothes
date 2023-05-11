import React from 'react'
import { Carousel } from 'antd';
export default function Carousels() {
    const contentStyle = {
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
   <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={{ height: '700px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        marginTop: 10,
        width: "1120px",
        objectFit: 'cover',}} src="https://bizweb.dktcdn.net/100/004/366/themes/900241/assets/slider_1.jpg?1678863742499" className="d-block" alt="..." />
    </div>
    <div className="carousel-item">
      <img style={{ height: '700px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        marginTop: 10,
        width: "1120px",
        objectFit: 'cover',}} src="https://bizweb.dktcdn.net/100/004/366/themes/900241/assets/twobanner_1.png?1678863742499" className="d-block " alt="..." />
    </div>
    <div className="carousel-item">
      <img style={{ height: '700px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        marginTop: 10,
        width: "1120px",
        objectFit: 'cover',}} src="https://bizweb.dktcdn.net/100/004/366/themes/900241/assets/twobanner_2.png?1678863742499" className="d-block " alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-target="#carouselExampleFade" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-target="#carouselExampleFade" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </button>
</div>

  //  <Carousel autoplay className='mt-3'>
  //   <div>
  //     <img style={contentStyle} src="https://bizweb.dktcdn.net/100/004/366/themes/900241/assets/slider_1.jpg?1678863742499" alt="" />
  //   </div>
  //   <div>
  //     <img style={contentStyle} src="https://bizweb.dktcdn.net/100/004/366/themes/900241/assets/twobanner_1.png?1678863742499" alt="" />
  //   </div>
  //   <div>
  //     <img style={contentStyle} src="https://bizweb.dktcdn.net/100/004/366/themes/900241/assets/twobanner_2.png?1678863742499" alt="" />
  //   </div>
  // </Carousel>

 
  )
}
