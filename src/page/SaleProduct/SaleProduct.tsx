import React, { Fragment, useState } from 'react'
import ShowModalProduct from '../Product/ShowModalProduct';
import { useProduct } from '../../Hook/BrandHook';
import { Product } from '../../api/BrandType';
import { NavLink } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
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
                {data?.filter((product: any) => product.Discount === "Đang Khuyến mãi").map((product: any, index: any) => {
                    return <div className="col-3 mt-3 " key={index}>
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
                })}
                <ShowModalProduct product={modalProduct} />
            </Fragment>
        );
    };

    return (
        <div className='container'>
            <div className="line-bottom mt-3"></div>
            <div style={{ width: '100%', height: 40, backgroundColor: 'black', color: '#fff', fontFamily: '-moz-initial', display: 'flex', paddingTop: 5 }}>
                <NavLink
                    style={{ paddingLeft: 20, color: "#FFF", paddingTop: 2 }} to={"/"}>Home</NavLink>
                <p><RightOutlined style={{ paddingLeft: 10, color: "#FFF" }} /></p>
                <p style={{ paddingLeft: 20, color: "#FFF", paddingTop: 2 }}>FLASHSALE</p>
            </div>
            <div className="row mb-5">
                {renderProductSale()}
            </div>

        </div>
    )
}
