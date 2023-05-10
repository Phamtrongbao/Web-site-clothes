import React, { useEffect, useRef, useState } from 'react';
import "../../views/Header/header.css"
import { SearchOutlined, ShoppingOutlined, CaretRightOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import CartComponent from '../../../Component/RenderCart/Cart';
import { Product } from '../../../api/BrandType';
import { brand } from '../../../Service/BrandService';
import axios from 'axios';





export default function Header(props: any) {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const productListRef = useRef<HTMLUListElement>(null);
  const storedUser = localStorage.getItem('user');
  const user = storedUser != null ? JSON.parse(storedUser) : null;
  console.log(user)
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    window.location.replace("/home");
  };
 
  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value;
    setSearchKeyword(keyword);
    if (keyword === '') {
      setProducts([]);
    } else {
      try {
        const response = await brand.SearchProduct(keyword)
        setProducts(response.data);
        if (productListRef.current) {
          productListRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      } catch (error) {
        console.log(error);
      } 
    }
  };
 
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && products.length > 0) {
      window.location.href = `/${products[0]._id}/${products[0].Name}}`;
    }
  };
  return (
    <div>
      <div className='login-logout'>
        <div className="container">
          <div className="order">
            <p style={{ paddingTop: 15, marginLeft: 800, fontWeight: 400, fontSize: 15, color: 'grey' }}>HOTLINE:1800675</p>

            {user ? (
              <div className="dropdown">
                <button className="button-check dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                  <div className="ava-email">
                    <div className="img">
                      <img src={user.Avatar} alt="" />
                    </div>
                    <div className='mt-1'>
                      {user.UserName.substring(0, 20)}
                    </div>
                  </div>

                </button>
                <div className="dropdown-menu">
                  {user.Type === "Admin" ? <a className="dropdown-item" href="#">Admin</a>
                    : null}
                  <div className="line-bottom"></div>
                  <a className="dropdown-item" href="#">Profile</a>
                  <div className="line-bottom"></div>
                  <a style={{ cursor: 'pointer' }} className="dropdown-item" onClick={handleLogout}>Log Out</a>
                </div>
              </div>
            ) : (
              <button className='button-check mt-2 ml-5'>
                <NavLink style={{ color: 'grey' }} to={'/loginCustomer'}>LOGIN</NavLink> </button>
            )}

          </div>

        </div>
      </div>
      <div className="container">
      <div className='menu'> 
        <div className="search">
          <div className="inputseacrh">

            <input type="search" placeholder='Search product...'  onKeyPress={handleKeyPress} value={searchKeyword} onChange={handleSearch} />
            {products.length === 0 && searchKeyword !== '' && (
              <p style={{ color: 'red', paddingTop: 10, fontFamily: '-moz-initial', fontWeight: 500 }}>No products found</p>
            )}
            {products.length > 0 && (
              <ul style={{
                position: 'absolute', backgroundColor: '#FFF', top: 120, left: 165, zIndex: 1000, borderRadius: 5, width: 265
              }}>
                {products.map((product, index) => (
                  <li style={{ display: 'flex' }} key={index}>
                    <img style={{ width: 50, height: 50, marginLeft: 10,paddingTop:5 }} src={product.Image.toString()} alt={product.Name.toString().substring(0,15)} />
                    <NavLink onClick={()=>{
                      setProducts([])
                      setSearchKeyword('')
                    }} to={`/${product._id}/${product.Name}`} style={{ paddingLeft: 10, color: 'red', paddingTop: 10, fontFamily: '-moz-initial', fontWeight: 500,textDecoration:'none' }}>
                    {product.Name.length > 15
                  ? product.Name.substring(0, 15) + '...'
                  : product.Name}
                    </NavLink>
                  </li>
                ))}
              </ul>)}
          </div>
          <button  className="icon" type='button'><SearchOutlined /></button>
        </div>
        <div className="logo">
          <img src="https://bizweb.dktcdn.net/100/004/366/themes/900241/assets/logo.png?1678863742499" style={{ paddingTop: 5 }} alt="" />
        </div>
        <div className="cart">
          <div className="cart-icon mt-1">
            <ShoppingOutlined style={{ fontSize: 20 }} />
          </div>
          <div className="Cart-title">
            <CartComponent />
          </div>
        </div>
      </div>
     </div>
      <div className="NavStick">
        <div className="menubar container">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link " href="/home">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/page">INTRODUCE</a>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <div className="dropdown-content">
                  <a href="/product">PRODUCT</a>
                </div>

                <ul >
                  <li><div className="link">
                    <a href='/product ' style={{ paddingTop: 15 }}>PRODUCT

                    </a>
                    <CaretRightOutlined className='right-out' />
                  </div></li>
                  <div className="line"></div>
                  <li>   <div className="link">
                    <a href='/HotProduct' style={{ paddingTop: 15 }}>OUTSTAND

                    </a>
                    <CaretRightOutlined className='right-out' />
                  </div></li>
                  <div className="line"></div>
                  <li>   <div className="link">
                    <a href='/saleProduct' style={{ paddingTop: 15 }}>FLASHSALE

                    </a>
                    <CaretRightOutlined className='right-out' />
                  </div></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='/page'>NEWS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='/page'>CONTACT</a>
            </li>
          </ul>

        </div>
      </div>


    </div>
  )

}


window.addEventListener("scroll", function () {
  var header: HTMLElement | null = document.querySelector(".menu");
  if (header) {
    header.classList.toggle("sticky", window.scrollY > 0);
    header.classList.remove("container")
  }
});