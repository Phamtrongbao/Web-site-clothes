import React from 'react'
import "../RenderCart/Cart.css"
import { CheckOutlined } from '@ant-design/icons';

export default function Bill() {
  const storedUser = localStorage.getItem('user');
  const user = storedUser != null ? JSON.parse(storedUser) : null;
  console.log(user.Email)
  const CartStored = localStorage.getItem("cartItems")
  const CartItems = CartStored != null ? JSON.parse(CartStored) : null;
  console.log(CartItems)
  const CartPrice = localStorage.getItem("totalPrice")
  const CartTotalPrice = CartPrice != null ? JSON.parse(CartPrice) : null;
  const ship = 30000
  const bill = () => {
    return CartItems.map((item: any, index: any) => {
      return <tr style={{ fontFamily: "inherit", lineHeight: 5 }}>
        <td>
          <img src={item.Image} style={{ width: 80, height: 80 }} alt="" />
        </td>
        <td>x{item.Amount}</td>
        <td>{item.Color}</td>
        <td>{item.Size}</td>
        <td>{(item.Price).toLocaleString()} vnđ</td>

      </tr>
    })
  }

  return (
    <div>
      <div className="line-bottom container"></div>
      <div className="container ">
        <div className="line-all">
          <div className="accept"><CheckOutlined style={{ paddingTop: 0, fontSize: 60, color: 'green' }} /> <h3 style={{ paddingTop: 25, paddingLeft: 15 }}>Thank you for your order! </h3> </div>
          <div className="row mt-4" style={{ marginLeft: 100 }}>
            <div className="col-4">
              <div className="bills">
                <div className="Invoice">
                  <h5 style={{ fontWeight: 700, fontFamily: '-moz-initial' }}>PURCHASE INFORMATION</h5>
                </div >
                <div style={{ fontWeight: 700, fontFamily: '-moz-initial', marginTop: 20, fontSize: 18 }}>
                  <div className="person">
                    <p className='tit'>Name: </p> <p className='person-child'>{user.UserName}</p>
                  </div>

                  <div className="person">
                    <p className='tit'>Email: </p> <p className='person-child '>{user.Email}</p>
                  </div>
                  <div className="person">
                    <p className='tit'>Phone: </p> <p className='person-child mr-1'>{user.PhoneNumber}</p>
                  </div>
                  <div className="person">
                    <p className='tit'>Address: </p> <p className='person-child'>{user.Address}</p>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-6 ml-5 mb-5">
              <div className="bills">
                <div className="Invoice">
                  <h5 style={{ fontWeight: 700, fontFamily: '-moz-initial' }}>INVOICE INFORMATION</h5>
                </div>

                <table className="table">
                  <thead>

                  </thead>
                  <tbody>
                    {bill()}

                  </tbody>
                  <tr ><td style={{ fontWeight: 700, fontFamily: '-moz-initial' }}>
                    PROVISONAL:
                  </td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td style={{ fontWeight: 700, fontFamily: '-moz-initial' }}>
                      {CartTotalPrice.toLocaleString()} vnđ
                    </td>
                  </tr>
                  <tr ><td style={{ fontWeight: 700, fontFamily: '-moz-initial' }}>
                    FEESHIP:
                  </td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td style={{ fontWeight: 700, fontFamily: '-moz-initial' }}>
                      {ship.toLocaleString()} vnđ
                    </td>
                  </tr>
                  <tr ><td style={{ fontWeight: 700, fontFamily: '-moz-initial' }}>
                    TOTALPRICE:
                  </td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td style={{ fontWeight: 700, fontFamily: '-moz-initial' }}>
                      {(CartTotalPrice + ship).toLocaleString()} vnđ
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="bak">
            <button style={{ width: 250, height: 50, backgroundColor: 'black', color: '#FFF', fontFamily: '-moz-initial', marginLeft: 120, marginBottom: 50 }} onClick={() => {
              window.location.replace("/")
              localStorage.removeItem('cartItems')
              localStorage.removeItem('totalPrice')
            }}>
              CONTINUE SHOPPING
            </button>
            <button style={{ width: 250, height: 50, backgroundColor: 'black', color: '#FFF', fontFamily: '-moz-initial', marginLeft: 370, marginBottom: 50 }} onClick={() => {
              window.location.replace("/")
              localStorage.removeItem('cartItems')
              localStorage.removeItem('totalPrice')
            }}>
              FINISH
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}
