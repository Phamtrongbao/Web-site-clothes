import React from 'react'

export default function Category() {
    return (
        <div className="container">
  <div className='row'>
            <div className="col-6">
                <div className="handme">
                    <div className="content-hadme">
                        <h4>HANDMADE</h4>
                        <hr />
                        <p>sản phẩm thủ công bởi những người thợ tài ba</p>
                        <button className='collect'>Xem Thêm</button>
                    </div>
                    <div className="hadme-img">
                        <img style={{  height: 400 }} src="https://bizweb.dktcdn.net/100/004/366/themes/900241/assets/twobanner_1.png?1678863742499" alt="" />
                    </div>
                </div>
            </div>

            <div className="col-6">
                <div className="content-hadme">
                    <h4>Bộ Sưu Tập</h4>
                    <hr />
                    <p>Những mẫu mới nhất được cập nhật tại cửa hàng</p>
                    <button className='collect'>Xem Thêm</button>
                </div>
                <div className="hadme-img">
                    <img style={{ height: 400 }} src="https://bizweb.dktcdn.net/100/004/366/themes/900241/assets/twobanner_2.png?1678863742499" alt="" />
                </div>
            </div>

           
        </div>
        <div className="titleban mt-5">
                <h5 style={{ textAlign: 'center',fontFamily: " Times, serif",fontSize:18,fontWeight:800 }}>VỀ CHÚNG TÔI</h5>
                <p className='mt-3' style={{fontFamily: " Times, serif",fontSize:15}}>
                    Gentleman sẽ mang lại cho khách hàng những trải nghiệm mua sắm thời trang hàng hiệu trực tuyến thú vị từ các thương hiệu thời trang quốc tế và trong nước, cam kết chất lượng phục vụ hàng đầu cùng với những bộ sưu tập quần áo nam nữ khổng lồ từ giày dép, trang phục, phụ kiện đến mỹ phẩm cho cả phụ nữ và nam giới với những xu hướng thời trang mới nhất. Bạn có thể tìm thấy những bộ trang phục mình muốn từ những bộ đồ ở nhà thật thoải mái hay tự tin trong những bộ trang phục công sở phù hợp. Những trải nghiệm mới chỉ có ở trang mua sắm hàng hiệu trực tuyến Gentleman.
                </p>
            </div>
        </div>
      
    )
}
