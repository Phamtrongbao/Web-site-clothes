import React, { useState, Fragment,createElement } from 'react'
import { getProductDetailData } from '../../Hook/BrandHook';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import { Rate, notification } from 'antd';
import { useDispatch } from 'react-redux';
import { addToCarts } from '../../Redux/UserToolkit';
import { ShoppingCartOutlined ,RightOutlined} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();
  console.log(id)
  const { data, isLoading, error } = useQuery(['productDetail', id], () => getProductDetailData(id));
  console.log(data)
  const [selectedColor, setSelectedColor] = useState<String>();
  const [selectedSize, setSelectedSize] = useState<String>();
  const dispatch = useDispatch();

  const handleColorSelect = (color: String) => {
    setSelectedColor(color);
    console.log(color);
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
    console.log(size)
  };
  const addToCart = () => {
    if (selectedColor && selectedSize) {
      const newProduct = { ...data, Color: selectedColor, Size: selectedSize };
      dispatch(addToCarts(newProduct))
    } else {
      if (!selectedColor) {
        notification.error({
          message: "color not selected yet",
          style: {
            marginTop: 60,
          },
        })
      } else if (!selectedSize) {
        notification.error({
          message: "Haven't chosen the size yet",
          style: {
            marginTop: 60,
          },
        })
      }
    }
  };
  return (
    <div className='container mb-5 mt-3'>
      <div style={{width:'100%',height:40,backgroundColor:'black',color:'#fff',fontFamily:'-moz-initial',display:'flex',paddingTop:5}}>
        <NavLink style={{paddingLeft:20,color:"#FFF",paddingTop:2}} to={"/"}>Home</NavLink>
        <p><RightOutlined style={{paddingLeft:10,color:"#FFF"}} /></p>
          <p style={{paddingLeft:20,color:"#FFF",paddingTop:2}}>{data?.Name}</p>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <img style={{ width: '100%', height: 500, objectFit: 'fill' }} src={data?.Image} alt="" />
        </div>
        <div className="col-6">
          <h3 style={
            {
              fontFamily: "-moz-initial",
              fontWeight: 700,
            }
          }>{data?.Name}</h3>
          <p className='mt-3' style={{
            fontFamily: "-moz-initial",
            fontWeight: 700, fontSize: 16, color: 'black'
          }}>{data?.Description}</p>
          {data?.Discount === "Đang Khuyến mãi" ? <div style={
            { display: 'flex' }
          }>
            <div className='mt-2' style={{
              fontFamily: "-moz-initial",
              fontWeight: 700, fontSize: 18, color: 'Black'
            }}>Price: <del>{Number(data?.Price).toLocaleString("en-US", {
              style: "currency",
              currency: "VND",
            })}</del></div>
            <div className='mt-2'
              style={{
                color: "red",
                fontFamily: "-moz-initial",
                fontWeight: 700,
                fontSize: 18,
                marginLeft: 100
              }}
            >
              {(Number(data?.Price) - Number(data?.PriceDiscount)).toLocaleString("en-US", {
                style: "currency",
                currency: "VND",
              })}
            </div>
          </div> : <div className='mt-2' style={{
            fontFamily: "-moz-initial",
            fontWeight: 700, fontSize: 18, color: 'Black'
          }}>Price:{Number(data?.Price).toLocaleString("en-US", {
            style: "currency",
            currency: "VND",
          })}</div>}
          <div className='mt-3'>
            <div style={{
              fontFamily: "initial",
              fontWeight: 700,
              fontSize: 18,
              marginLeft: 14,
              marginTop: 10
            }}>Size:
              {data?.Size.map((size: any, index: any) => (
                <button
                  className={`Size ${selectedSize === size ? 'selected' : ''}`}
                  key={index}
                  onClick={() => handleSizeSelect(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className='mt-3'>
            <div style={{
              fontFamily: "initial",
              fontWeight: 700,
              fontSize: 18,
              display: "flex",


            }}>Color:
              {data?.Color.map((color: any, index: any) => (
                <Fragment key={index}>
                  <button
                    className={`Size ${selectedColor === color || (selectedColor === undefined && index === 0) ? 'selected' : ''}`}
                    style={{ backgroundColor: `${color}` }}
                    onClick={() => handleColorSelect(color)}
                  ></button>
                </Fragment>
              ))}
            </div>
          </div>
          <div className='mt-3'
            style={{
              fontFamily: "initial",
              fontWeight: 700,
              fontSize: 18,
            }}>
            Rate: <Rate style={{ marginLeft: 15 }} disabled defaultValue={data?.Rating} />
          </div>
          <button style={{
            width: "50%",
            height: 50,
            display: 'flex',
            fontWeight: 800,
            justifyContent: 'center',
            background: 'black',
            color: '#FFFF',
            border: 'none',
            marginTop: 20,
            fontFamily: '-moz-initial',
            fontSize: 20,
            transition: 'all 0.8 ease-in-out'
          }} className='add' onClick={(event) => addToCart()}>  <ShoppingCartOutlined style={{ paddingTop: 11 }} /> <p style={{ paddingTop: 6 }}>
              ADD TO CART
            </p> </button>
        </div>
      </div>
      <div className="comment">
        
      </div>    

    </div>
  )
}
