import React, { useState, useEffect } from 'react'
// import './style.css'
import { Card, Row, Col, Button, Spin } from 'antd'
import { Images } from '../../../config/image'
import Navbar from '../../../components/navbar'
import Product_Tag from '../../../components/product_tag/index'

function Product() {
    const [isloadProduct, setloadProduct] = useState(false);
    const [productList, setProductList] = useState([]);
    const [fakeproductList, setfakeProductList] = useState([]);

    // useEffect(() => {
    //     const fetchProductList = async () => {
    //         try {
    //             setloadProduct(true);
    //             const response = await productApi.getAll();
    //             console.log("Fetch products succesfully: ", response);
    //             setProductList(response.products);
    //             setfakeProductList(response.products);
    //             console.log(">>>> productlist: ", productList);
    //             setloadProduct(false);
    //         } catch (error) {
    //             console.log("failed to fetch product list: ", error);
    //         }
    //     };
    //     fetchProductList();
    // },[]);
    //     const getallProduct = () => {
    //         const fetchProductList = async () => {
    //             // dispatch({ type: "FETCH_INIT" });
    //             try {
    //                 setloadProduct(true);
    //                 const response = await productApi.getAll();
    //                 console.log("Fetch products succesfully: ", response);
    //                 // dispatchProduct(doGetList_success(response.products));
    //                 setProductList(response.products);
    //                 console.log(">>>> productlist: ", productList);
    //                 setloadProduct(false);
    //             } catch (error) {
    //                 console.log("failed to fetch product list: ", error);
    //             }
    //         };
    //         fetchProductList();
    //     };
        return (
            <>
                <Navbar />

                <div className="container">

                    <div className="menu-container" >
                        <Card bordered={false} style={{ color: 'blue' }}>
                            <div className="title">Categories</div>
                            <div className="item">
                                <p>Tee</p>
                                <p>T-shirt</p>
                                <p>Blazer</p>
                                <p>Pants</p>
                                <p>Wide Pants</p>
                            </div>

                        </Card>

                    </div>

                    <div className="product-container">

                        <div className="banner-product" >
                            <img src={Images.BANNER} />
                        </div>
                        <Row>
                           <Col span={8}>
                               <Product_Tag/>
                           </Col>
                            <Col span={8}>
                               <Product_Tag/>
                           </Col>
                            <Col span={8}>
                                <Product_Tag />
                            </Col>
                        </Row>


                    </div>
                </div>
            </>
        )
    }


export default Product
