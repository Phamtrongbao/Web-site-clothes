import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCartItemAmount, increaseCartItemAmount, removeCartItemAmount, selectCartItems ,setCartItems} from '../../Redux/UserToolkit';
import { DeleteOutlined } from '@ant-design/icons';
import { brand } from '../../Service/BrandService';
import { notification } from 'antd';
import { NavLink } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
export default function ShoppingCart() {
    const cartItems = useSelector(selectCartItems);
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
    return <span style={{ display: "flex", marginBottom: 20, marginTop: 20 }}>
      <div style={{ width: 100, fontSize: 17, color: "red" }}> TotalPrice :</div> <div style={{ color: "red", fontSize: 17, paddingLeft: 10 }}>{calculateTotalPrice().toLocaleString()}vnđ</div>
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
         }, 450)
       }
    } catch (error) {
      console.log(error);
      alert('Đặt hàng thất bại!');
    }
  };
    const renderShopppingCart = () => {
        return cartItems.map((item, index) => {
            return <tr>
                <th style={{ width: "12%", textAlign: 'center' }} scope="row">{index++}</th>
                <td style={{ width: "12%" }}><img src={item.Image} style={{ width: 100, height: 100, alignItems: 'center' }} alt="" /></td>
                <td style={{ width: "20%" }}>{item.Name}</td>
                <td style={{ width: "20%", textAlign: 'center' }}>
                    <button className="btn btn-danger" onClick={() => {
                        handleDecreaseAmount(item._id)
                    }}>
                        -
                    </button>
                    {item.Amount}
                    <button className="btn btn-success" onClick={() => {
                        handleIncreaseAmount(item._id)
                    }}>
                        +
                    </button>
                </td>
                <td style={{ width: "20%" , textAlign: 'center'}}>{item.Size}</td>
                <td style={{ width: "20%" , textAlign: 'center'}}>{item.Color}</td>
                {item.Discount === "Đang Khuyến mãi" ? <td style={{ textAlign: 'center'}}>{((item.Price - item.PriceDiscount) * item.Amount).toLocaleString()}vnđ</td> : <td style={{ textAlign: 'center' }}>{(item.Price * item.Amount).toLocaleString()}vnđ</td>}
               
                <td style={{ width: "5%", textAlign: 'center' }}>
                    <button style={{ background: 'none', border: 'none' }} onClick={() => {
                        dispatch(removeCartItemAmount(item._id))
                    }}>
                        <DeleteOutlined style={{ fontSize: 20 }} />
                    </button>
                </td>
            </tr>


        })
    }
    return (
        <div className='container mt-5'>
            <h3 style={{ fontFamily: 'sans-serif', fontWeight: 700 }}>Cart</h3>
            <div className="line-bottom mt-2"></div>
            <table className="table table-bordered mt-5">
                <thead>
                    <tr style={{ textAlign: 'center' }}>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quanity</th>
                        <th scope="col">Size</th>
                        <th scope="col">Color</th>
                        <th scope="col">Price</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {renderShopppingCart()}
                    <tr >
                        <td colSpan={5} style={{ paddingLeft: 700, fontFamily: 'sans-serif', fontWeight: 800 }}>totalAmount:</td>
                        <td colSpan={3} style={{ paddingLeft: 100, fontFamily: 'sans-serif', fontWeight: 500, color: 'red' }}>{calculateTotalAmount()}</td>
                    </tr>
                    <tr >
                        <td colSpan={5} style={{ paddingLeft: 700, fontFamily: 'sans-serif', fontWeight: 800 }}>TotalPrice:</td>
                        <td colSpan={3} style={{ paddingLeft: 100, fontFamily: 'sans-serif', fontWeight: 500, color: 'red' }}>{calculateTotalPrice().toLocaleString()}vnđ</td>
                    </tr>
                    <tr >
                        <td colSpan={5}>
                            <button style={{ border: "solid 1px grey", height: 40, width: "30%", background: '#FFFF', fontFamily: 'serif' }} onClick={()=>{
                                window.location.replace("/")
                            }}>
                                KEEP BUYING
                            </button>
                        </td>
                        <td colSpan={3}>
                            <button onClick={handleBuyProduct} style={{ border: "solid 1px grey", height: 40, width: "100%", background: 'black', fontFamily: 'serif', color: '#FFFF' }}>
                                MAKE PAYMENT</button>

                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
