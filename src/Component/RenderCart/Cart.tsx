import React, { Fragment, MutableRefObject, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, decreaseCartItemAmount, increaseCartItemAmount, setCartItems, removeCartItemAmount } from '../../Redux/UserToolkit';
import { DeleteOutlined } from '@ant-design/icons';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { brand } from '../../Service/BrandService';
import { notification } from 'antd';




export default function CartComponent() {
  const cartItems = useSelector(selectCartItems);
  const productTableRef = useRef<HTMLTableElement>(null);
  const storedUser = localStorage.getItem('user');
  const user = storedUser != null ? JSON.parse(storedUser) : null;
  const cartItemsFromStorage = JSON.parse(localStorage.getItem("cartItems") || "[]");
  const [totalPrice, setTotalPrice] = useState(Number(localStorage.getItem("totalPrice")));
  console.log(totalPrice)
  const dispatch = useDispatch();

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((acc: number, item: any) => {
      return acc + item.Price;
    }, 0);
    return totalPrice;
  }


  const order = useMemo(() => {
    console.log(totalPrice)
    return {
      Product: cartItems.map(item => item),
      totalPrice: Number(totalPrice)
    };
  }, [cartItems, totalPrice]);

  useEffect(() => {
    dispatch(setCartItems(cartItemsFromStorage));
    setTotalPrice(calculateTotalPrice());
  }, [dispatch, setTotalPrice, totalPrice, calculateTotalPrice()]);

  function handleIncreaseAmount(productID: any) {
    dispatch(increaseCartItemAmount(productID));
  }

  function handleDecreaseAmount(productId: any) {
    dispatch(decreaseCartItemAmount(productId));
  }

  const calculateTotalAmount = () => {
    const totalAmount = cartItems.reduce((acc: any, cur: any) => acc + cur.Amount, 0);
    return totalAmount;
  }

  const renderTotalPrice = () => {
    return <span style={{ display: "flex", marginBottom: 20, marginTop: 20 ,marginLeft:30,fontFamily:'-moz-initial'}}>
      <div style={{ width: 100, fontSize: 17, color: "red",paddingTop:1 }}> TOTALPRICE:</div> <div style={{ color: "red", fontSize: 18, paddingLeft: 20 }}>{calculateTotalPrice().toLocaleString()}vnđ</div>
    </span>
  }

  const handleBuyProduct = async () => {
    try {
      if (!user) {
       await notification.error({
          message: 'You are not logged in'
        })
       await setTimeout(() => {
          window.location.replace("/loginCustomer")
        },450)
      } else {
        const data = await brand.PostOrder(order);
        console.log(data.data);
        await notification.success({
          message: 'Order Success',
          style: {
            marginTop: 70
          }
        })
        await setTimeout(() => {
          window.location.replace("/bill")
        }, 250)
      }


    } catch (error) {
      console.log(error);
      alert('Đặt hàng thất bại!');
    }
  };
  const renderCart = () => {
    return cartItems.map((item: any, index) => {
      return <Fragment key={index}>
        <tr style={{  fontFamily:'-moz-initial',fontSize:16}} >
          <th scope="row">{index + 1}</th>
          <td>{item.Name}</td>
          <td><img style={{ width: 70, height: 70 ,paddingTop:10}} src={item.Image} alt="" /></td>
          <td style={{ textAlign: 'center', paddingTop: 25, display: "flex" }}>
            <button className="btn btn-danger mr-2" onClick={() => {
              handleDecreaseAmount(item._id)
            }}>
              -
            </button>
            <p > {item.Amount}</p>
            <button className="btn btn-success ml-2" onClick={() => {
              handleIncreaseAmount(item._id)
            }}>
              +
            </button>
          </td>
          <td style={{ textAlign: 'center', paddingTop: 25 }}>{item.Color}</td>
          <td style={{ textAlign: 'center', paddingTop: 25 }}>{item.Size}</td>
          {item.Discount === "Đang Khuyến mãi" ? <td style={{ textAlign: 'center', paddingTop: 25 }}>{(item.Price).toLocaleString()}vnđ</td> : <td style={{ textAlign: 'center', paddingTop: 25 }}>{(item.Price).toLocaleString()}vnđ</td>}
          <td><button className='btn btn-danger mt-3' onClick={() => {
            dispatch(removeCartItemAmount(item._id))
          }}>X</button></td>
        </tr>

      </Fragment>

    }
    )
  }

  
 
  return (
    <div className="div">
      <button style={{ border: 'none', background: '#FFFF', fontSize: 15, fontWeight: 800, }}
        onMouseOver={() => {
          if (productTableRef.current) {
            productTableRef.current.style.display = 'block';
            productTableRef.current.classList.add('show');
            productTableRef.current.style.opacity = '1';
          }
        }}

      >
        {calculateTotalAmount() ? <NavLink style={{ border: 'none', background: '#FFFF', fontSize: 15, fontWeight: 800, color: "red" }} to={"/shoppingCart"}>  Cart ({calculateTotalAmount()})  </NavLink> : <NavLink style={{ border: 'none', background: '#FFFF', fontSize: 15, fontWeight: 800, color: "black" }} to={"/shoppingCart"}> Cart(0)  </NavLink>}

      </button>
      <div className="roll">
        <table
          className="table"
          id="product-table"
          ref={productTableRef}
          onMouseLeave={() => {
            if (productTableRef.current) {
              productTableRef.current.style.display = 'none';
              productTableRef.current.classList.remove('show');
              productTableRef.current.style.opacity = '0';
            }
          }}
          style={{ overflowY: 'scroll', height: 500, display: "none", opacity: 0, zIndex: 1000, position: "fixed", top: 110, left: 623, backgroundColor: '#FFFF', width: 700 }}
        >
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Quanity</th>
              <th scope="col">Color</th>
              <th scope="col">Size</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {renderCart()}
          </tbody>
          <div className="line-bottom"></div>
          <div style={{ display: 'flex' }}>
            {renderTotalPrice()}
            <button onClick={handleBuyProduct} style={{ border: "solid 1px grey", height: 40, width: "30%", background: 'black', fontFamily: 'serif', color: '#FFFF', marginTop: 10 ,marginLeft:200}}>
              MAKE PAYMENT
            </button>
          </div>
        </table>
      </div>


    </div>

  )
}



