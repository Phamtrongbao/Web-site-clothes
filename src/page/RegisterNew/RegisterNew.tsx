import React from 'react'
import { FacebookFilled, YoutubeFilled, InstagramFilled, TwitterCircleFilled } from '@ant-design/icons';
export default function RegisterNew() {
  return (
    <div className="register-new">
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h4>Đăng Ký Nhận Tin</h4>
          <div className="Emaail">
            <input type="email" placeholder='Nhập Địa Chỉ Email Của Bạn' />
            <button>Đăng Ký</button>
          </div>
        </div>

        <div className="col-6">
          <h4>Mạng Xã Hội</h4>
          <div className="group-local">
            <button className="but-local">
              <FacebookFilled />
            </button>
            <button className="but-local">
              <YoutubeFilled />
            </button>
            <button className="but-local">
              <InstagramFilled />
            </button>
            <button className="but-local">
              <TwitterCircleFilled />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
