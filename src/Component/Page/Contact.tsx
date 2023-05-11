import React from 'react'

export default function Contact() {
  return (
    <div>
      <div className="container">
        <div className="line-bottom"></div>
        <div className="row mt-3">
          <div className="section_maps col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="title_head margin-bottom-20 page-header-cart">
              <h1 className="title-head-contact">
                Liên hệ
              </h1>
            </div>
            <div className="box-maps mt-3">
              <div className="iFrameMap">
                <div className="google-map">
                  <div id="contact_map" className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.904611732553!2d105.81388241542348!3d21.03650239288885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab1946cc7e23%3A0x87ab3917166a0cd5!2zQ8O0bmcgdHkgY-G7lSBwaOG6p24gY8O0bmcgbmdo4buHIFNBUE8!5e0!3m2!1svi!2s!4v1555900531747!5m2!1svi!2s" style={{ border: 0 }} allowFullScreen />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container contact contact-owf">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 margin-top-30">
            <div className="page-login page_cotact">
              <h2 className="title-head-contacts a-left"><span>Để lời nhắn</span></h2>
              <div id="pagelogin">
                <form method="post" action="/postcontact" id="contact" acceptCharset="UTF-8"><input name="FormType" type="hidden" defaultValue="contact" /><input name="utf8" type="hidden" defaultValue="true" /><input type="hidden" id="Token-073a02a52b4648538b4ee8cead0bf907" name="Token" defaultValue="03AL8dmw_Hsod9ajZYryqWwsqyDBuvixpEzzxDHl9jFGwJu25lEOk9e-fFWCZnyS5RCWO6JCVM_TtySnxf-10pL8Nsl8VkuVjHGfYkw-eMo3AZFDxeLK-lHxnjlp6ary3AalOF1ic54oLCbhj6Vkbg_XMf0oATtzQ8JHGdeY78iiEv4DxCdSALI91av8Omz4lbxldBhkklqvlyicEW-GhW7ETey8osEyKkxQHJRoLdc_WIewKdAiG0IP-ozErEdXT_zpCosKOhdlfuHqxqHvQI3YacXedPZPxTwH3YkBaI40Ngf546Av1ajNbwEp5CKrJs55FlUySMtMsDNPqpPg8P_EYXP8l-nHamSvY-eLxrPGhYaThpM4gtzIXqITalK-Tby2gjHFZPJbdrk66pKHZNbD81fVHtw7RPf5pHJGaWl995vWPulkLIGaKEVJxauxU-ovvgDx9C9vkprEeCdKuBuIRdsJn3KHcLiOR16fXa4UqagF7KqBFOWD4oGVkJqLG394sdzcbDeksJvajIjQwI7aElo-AUEFK9U4yi_5Oe68vc16J5-eux-I0" />
                  <div className="form-signup clearfix">
                    <div className="row group_contact">
                      <fieldset className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label>Họ và tên:</label>
                        <input type="text" name="contact[name]" id="name" className="form-control  form-control-lg" required />
                      </fieldset>
                      <fieldset className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label>Địa chỉ email:</label>
                        <input type="email" name="contact[email]" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$" data-validation="email" id="email" className="form-control form-control-lg" required />
                      </fieldset>
                      <fieldset className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label>Số điện thoại:</label>
                        <input type="text" pattern="\d+" className="form-control form-control-comment form-control-lg" name="Phone" required />
                      </fieldset>
                      <fieldset className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label>Lời nhắn:</label>
                        <textarea name="contact[body]" id="comment" className="form-control content-area form-control-lg" rows={5} required defaultValue={""} />
                      </fieldset>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 margin-top-10">
                        <button type="submit" className="btn btn-primary">Gửi tin nhắn</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 margin-bottom-30">
            <div className="page_cotact">
              <h2 className="title-head-contact a-left"><span>Hãy liên hệ với chúng tôi !</span></h2>
              <p />
              <p />
            </div>
            <div className="content">
              <div className="item_contact">
                <div className="body_contact">
                  <span className="icon_widget"><i className="fa fa-map-marker" /></span>
                  <span className="contact_info">
                    <span className="rc">Tầng 6 - Tòa nhà Ladeco - 266 Đội Cấn, Hà Nội, </span>
                  </span>
                </div>
                <div className="body_contact item_contact">
                  <span className="icon_widget"><i className="fa fa-phone" aria-hidden="true" /></span>
                  <span className="contact_info">
                    <a href="tel:19006750">1900 6750</a>
                  </span>
                </div>
                <div className="body_contact item_contact">
                  <span className="icon_widget"><i className="fa fa-envelope" /></span>
                  <span className="contact_info">
                    <a href="mailto:support@sapo.vn"> support@sapo.vn</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


  )
}
