import React from 'react'
import { useProduct } from '../../Hook/BrandHook';
import { useState } from "react";
import { Product } from '../../api/BrandType';
import ShowModalProduct from './ShowModalProduct';
import { Rate } from 'antd';

export default function RenderProduct() {
    const [limit, setLimit] = useState(4);
    const { data, isLoading, isError } = useProduct();
    const [modalProduct, setModalProduct] = useState<Product | null>(null);
    const handleShowModal = (product: Product) => {
        setModalProduct(product);
    };
    const handleShowMore = () => {
        setLimit(limit + 4); // Tăng giới hạn sản phẩm lên 4
    };

    const handleBuy = () =>{
        if(!localStorage.getItem("accessToken")){
            return window.location.replace("/loginCustomer")
        }else{
            alert('ok')
        }
    }
    const renderProduct = () => {
        const displayedProducts = data?.slice(0, limit); // Chỉ hiển thị các sản phẩm đầu tiên (tối đa là limit)
        return (
            <>
                <div className="row">
                    {displayedProducts?.map((product: any, index: any) => {
                        return (
                            <div className="col-3 mt-5" key={index}>
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
                                                <button
                                                    type="button"
                                                    className="btn-modal"
                                                    data-toggle="modal"
                                                    data-target="#exampleModal"
                                                    data-product={JSON.stringify(product)}
                                                    onClick={() => handleShowModal(product)}
                                                >
                                                  View Detail
                                                </button>
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
                                        <div style={{ textAlign: 'center' }}><Rate disabled defaultValue={product.Rating} /></div>
                                        {product.Discount === "Đang Khuyến mãi" ? <div className="price-product">
                                            <p
                                                style={{
                                                    color: "grey",
                                                    fontFamily: " Times, serif" ,
                                                    fontWeight: 500,
                                                    fontSize: 18,
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
                                                    fontFamily: " Times, serif",
                                                    fontWeight: 500,
                                                    fontSize: 18,
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
                                                fontFamily: " Times, serif",
                                                fontWeight: 500,
                                                fontSize: 18,
                                                textAlign: 'center',
                                                paddingTop: 10
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
                        );
                    })}
                </div>
                {data && data.length > limit && (
                    <div className="mt-3 text-center">
                        <button style={{ marginBottom: 20, marginLeft: 10, width: "30%", height: 50, border: "solid 1px grey", backgroundColor: 'white', color: 'grey', fontFamily: 'Times, serif',fontWeight:800 }} onClick={handleShowMore}>
                            SEE MORE
                        </button>
                    </div>
                )}
                <ShowModalProduct product={modalProduct} />
            </>
        );
    };

    return (
        <div>{renderProduct()}</div>
    )
}
