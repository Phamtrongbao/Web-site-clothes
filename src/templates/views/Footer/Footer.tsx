import React from 'react';
import "../Footer/Footer.css"
import { NavLink } from 'react-router-dom';
export default function Footer() {
  return (
    <div>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <h6 className='name'>THÔNG TIN</h6>
              <ul>
                <li><NavLink style={{ color: 'grey' }} to={'/'}>Trang Chủ</NavLink></li>
                <li><NavLink style={{ color: 'grey' }} to={'/'}>Giới Thiệu</NavLink></li>
                <li><NavLink style={{ color: 'grey' }} to={'/'}>Sản Phẩm</NavLink></li>
                <li><NavLink style={{ color: 'grey' }} to={'/'}>Tin Tức</NavLink></li>
                <li><NavLink style={{ color: 'grey' }} to={'/'}>Liên Hệ</NavLink></li>
              </ul>
            </div>
            <div className="col-2">
              <h6 className='name'>Hỗ Trợ</h6>
              <ul>
                <li><NavLink style={{ color: 'grey' }} to={'/'}>Trang Chủ</NavLink></li>
                <li><NavLink style={{ color: 'grey' }} to={'/'}>Giới Thiệu</NavLink></li>
                <li><NavLink style={{ color: 'grey' }} to={'/'}>Sản Phẩm</NavLink></li>
                <li><NavLink style={{ color: 'grey' }} to={'/'}>Tin Tức</NavLink></li>
                <li><NavLink style={{ color: 'grey' }} to={'/'}>Liên Hệ</NavLink></li>
              </ul>
            </div>
            <div className="col-2">
              <h6 className='name'>Hướng Dẫn</h6>
              <ul>
                <li><NavLink style={{ color: 'grey' }} to={'/'}>Trang Chủ</NavLink></li>
                <li><NavLink style={{ color: 'grey' }} to={'/'}>Giới Thiệu</NavLink></li>
                <li><NavLink style={{ color: 'grey' }} to={'/'}>Sản Phẩm</NavLink></li>
                <li><NavLink style={{ color: 'grey' }} to={'/'}>Tin Tức</NavLink></li>
                <li><NavLink style={{ color: 'grey' }} to={'/'}>Liên Hệ</NavLink></li>
              </ul>
            </div>
            <div className="col-2">
              <h6 className='name'>Chính Sách</h6>
              <ul>
                <li><NavLink style={{ color: 'grey' }} to={'/'}>Trang Chủ</NavLink></li>
                <li><NavLink style={{ color: 'grey' }} to={'/'}>Giới Thiệu</NavLink></li>
                <li><NavLink style={{ color: 'grey' }} to={'/'}>Sản Phẩm</NavLink></li>
                <li><NavLink style={{ color: 'grey' }} to={'/'}>Tin Tức</NavLink></li>
                <li><NavLink style={{ color: 'grey' }} to={'/'}>Liên Hệ</NavLink></li>
              </ul>
            </div>
            <div className="col-2">
              <h6 className='name'>Liên Hệ</h6>
              <ul>
                <li>Tầng 6 - Tòa nhà Ladeco</li>
                <li>1900 6750</li>
                <li>support@sapo.vn</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      <div className="bottom-footer">
        <div className="container">
          <p style={{ color: 'grey', paddingTop: 15, paddingLeft: 35 }}>Cung cấp bởi Sapo
          </p>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 pay_footer">
            <ul className="follow_option">
              <li>
                <a href="#"><img src="//bizweb.dktcdn.net/100/004/366/themes/900241/assets/pay_1.png?1678863742499" alt="Gentleman" /></a>
              </li>
              <li>
                <a href="#"><img src="//bizweb.dktcdn.net/100/004/366/themes/900241/assets/pay_2.png?1678863742499" alt="Gentleman" /></a>
              </li>
              <li>
                <a href="#"><img src="//bizweb.dktcdn.net/100/004/366/themes/900241/assets/pay_3.png?1678863742499" alt="Gentleman" /></a>
              </li>
              <li>
                <a href="#"><img src="//bizweb.dktcdn.net/100/004/366/themes/900241/assets/pay_4.png?1678863742499" alt="Gentleman" /></a>
              </li>
              <li>
                <a href="#"><img src="//bizweb.dktcdn.net/100/004/366/themes/900241/assets/pay_5.png?1678863742499" alt="Gentleman" /></a>
              </li>
              <li>
                <a href="#"><img src="//bizweb.dktcdn.net/100/004/366/themes/900241/assets/pay_6.png?1678863742499" alt="Gentleman" /></a>
              </li>
              <li>
                <a href="#"><img src="//bizweb.dktcdn.net/100/004/366/themes/900241/assets/pay_7.png?1678863742499" alt="Gentleman" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  )

}