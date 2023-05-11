import React, { Fragment, useState } from 'react'
import { Product } from '../../api/BrandType'
import { Rate, notification } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addToCarts } from '../../Redux/UserToolkit';



interface ShowModalProductProps {
    product: Product | null;
}

export default function ShowModalProduct(props: ShowModalProductProps) {
    const { product } = props;
    const dispatch = useDispatch();
    const [selectedColor, setSelectedColor] = useState<String>();
    const [selectedSize, setSelectedSize] = useState<String>();


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
            const newProduct = { ...product, Color: selectedColor, Size: selectedSize };
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


    const ShowModel = () => {
        return product && (
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="content-product">
                                <div style={{ width: '80%' }}>
                                    <img className='model-img' src={product.Image.toString()} alt="" />
                                </div>
                                <div className="body-content">
                                    <h5 className="modal-title" id="exampleModalLabel">{product.Name}</h5>
                                    <p className='mt-2' style={{
                                        fontFamily: "-moz-initial",
                                        fontWeight: 700, fontSize: 16, color: 'grey'
                                    }}>{product.Description}</p>


                                    {product.Discount === "Đang Khuyến mãi" ? <div className="Price-sale">
                                        <div className='mt-2' style={{
                                            fontFamily: "initial",
                                            fontWeight: 700, fontSize: 18, color: 'Black'
                                        }}>Giá Gốc: <del>{Number(product.Price).toLocaleString("en-US", {
                                            style: "currency",
                                            currency: "VND",
                                        })}</del></div>
                                        <div className='mt-3'
                                            style={{
                                                color: "red",
                                                fontFamily: "initial",
                                                fontWeight: 700,
                                                fontSize: 18,
                                            }}
                                        >
                                            Giá Khuyến Mãi:    {(Number(product.Price) - Number(product.PriceDiscount)).toLocaleString("en-US", {
                                                style: "currency",
                                                currency: "VND",
                                            })}
                                        </div>
                                    </div> : <div className='mt-2' style={{
                                        fontFamily: "initial",
                                        fontWeight: 700, fontSize: 18, color: 'Black'
                                    }}>Giá Gốc:{Number(product.Price).toLocaleString("en-US", {
                                        style: "currency",
                                        currency: "VND",
                                    })}</div>}


                                    <div className='mt-3'
                                        style={{
                                            fontFamily: "initial",
                                            fontWeight: 700,
                                            fontSize: 18,
                                        }}>
                                        Đánh Giá: <Rate disabled defaultValue={Number(product.Rating)} />
                                    </div>
                                    <div className='mt-3'>
                                        <div style={{
                                            fontFamily: "initial",
                                            fontWeight: 700,
                                            fontSize: 18,
                                            display: "flex",


                                        }}>Color:
                                            {product.Color.map((color, index) => (
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
                                    <div className='mt-3'>
                                        <div style={{
                                            fontFamily: "initial",
                                            fontWeight: 700,
                                            fontSize: 18,
                                            marginLeft: 14,
                                            marginTop: 10
                                        }}>Size:
                                            {product.Size.map((size, index) => (
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


                        </div>

                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='mt-5'>{ShowModel()}</div>
    )
}
