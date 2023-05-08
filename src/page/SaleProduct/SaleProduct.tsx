import React, { Fragment, useState } from 'react'
import ShowModalProduct from '../Product/ShowModalProduct';
import { useProduct } from '../../Hook/BrandHook';
import { Product } from '../../api/BrandType';

export default function SaleProduct() {
    const { data, isLoading, isError } = useProduct();
    console.log(data)
    const [modalProduct, setModalProduct] = useState<Product | null>(null);
    const handleShowModal = (product: Product) => {
        setModalProduct(product);
    };
   
    const renderProductSale = () => {
        return (
            <Fragment>
                {data?.filter((product:any)=>product.Discount === "Đang Khuyến mãi").map((product:any, index:any) => {
                    return  <div className="col-3 mt-5 " key={index}>
                                        <div className="Product-box">
                                            <div className="sale-off">
                                                <p>Sale</p>
                                            </div>
                                            <div className="product-image">
                                                <img
                                                    className="img-product"
                                                    src={product.Image.toString()}
                                                    alt={product.Name.toString()}
                                                />
                                                <div className="product-actions">
                                                    <div className="but">
                                                        <button className="btn btn-success" >Mua hàng</button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-danger"
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
                                                        textAlign: 'center',
                                                        paddingTop:10
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
            </Fragment>
        );
    };

  return (
    <div className='container'>
    <div className="line-bottom mt-5"></div>
      <h3 className='mt-1' style={{ textAlign: "center", fontFamily: "sans-serif", fontWeight: 700, color:'red' }}>SALE-OFF </h3>
      <div className="line-bottom"></div>
      <div className="row mb-5">
      {renderProductSale()}
      </div>
  
</div>
  )
}
