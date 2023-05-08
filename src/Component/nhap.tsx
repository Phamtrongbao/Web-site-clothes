import React, { Fragment } from 'react'

import { Product } from '../api/BrandType';
import { useState } from 'react'
import { useProduct } from '../Hook/BrandHook';

import ShowModalProduct from '../page/Product/ShowModalProduct';

import { useParams } from 'react-router';
import { useLocation } from 'react-router';


export default function BrandProduct() {
  const location = useLocation();
  const { slug } = useParams();
  console.log(slug)
  const { data, isLoading, isError } = useProduct();
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const handleShowModal = (product: Product) => {
    setModalProduct(product);
  };

  const renderProduct = () => {
    return <div className="row mt-3">
      {data?.filter((product:any) => product.Type === slug).map((product:any, index:any) => {
        return <div className="col-3 mt-5" key={index}>
          <div className="Product-box">
          {product.Discount === "Đang Khuyến mãi" ? <div className="sale-off">
                                            <p>Sale</p>
                                        </div> : null}
            <div className="product-image">
              <img
                className="img-product"
                src={product.Image.toString()}
                alt={product.Name.toString()}
              />
              <div className="product-actions">
                <div className="but">
                  <button className="btn btn-primary" >Mua hàng</button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    data-product={JSON.stringify(product)}
                    onClick={() => handleShowModal(product)}
                  >
                    Xem chi tiết
                  </button>
                </div>

              </div>
            </div>
            <div className="title-product mt-3">
              <p
                style={{
                  fontSize: 15,
                  textAlign: "center",
                  fontFamily: "fantasy",
                }}
              >
                {product.Name.substring(0, 30)}
              </p>

              {product.Discount === "Đang Khuyến mãi" ? <div className="price-product">
                <p
                  style={{
                    color: "grey",
                    fontFamily: "monospace",
                    fontWeight: 500,
                    fontSize: 15,
                  }}
                >
                  <del>{Number(product.Price).toLocaleString("en-US", {
                    style: "currency",
                    currency: "VND",
                  })}</del>
                </p>
                <p
                  style={{
                    color: "red",
                    fontFamily: "monospace",
                    fontWeight: 500,
                    fontSize: 15,
                  }}
                >
                  {(Number(product.Price) - Number(product.PriceDiscount)).toLocaleString("en-US", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
              </div> : <p
                style={{
                  color: "grey",
                  fontFamily: "monospace",
                  fontWeight: 500,
                  fontSize: 15,
                  textAlign: 'center'
                }}
              >
                {Number(product.Price).toLocaleString("en-US", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>}

            </div>
          </div>
        </div>
      })}
      <ShowModalProduct product={modalProduct}/>
    </div>
  }


  return (
    <div className='container mt-5 mb-5'>
       <div className="line-bottom mt-5 "></div>
     <h1 className='mt-2' style={{ textAlign: 'center',fontFamily:"fantasy",color:'red' }}>{slug}</h1> 
      <div className="line-bottom mt-2 "></div>
      {renderProduct()}
    </div>
  )
}

