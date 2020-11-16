import React, {useState} from 'react'
import './style.css'
import {Card,Row,Col,Button} from 'antd'
import { Images } from '../../../config/image'
import Navbar from '../../../components/navbar'
function Product() {
    
    return (
        <>
                <Navbar/>

        <div className="container">
            
            <div className="menu-container" >
                <Card  bordered={false} style={{color:'blue'}}>
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
                    <img  src={Images.BANNER} />
                </div>
                <Row>                   
                    <Col span={8}>
                        <div className="product-inline" >
                            <div className="image-product"  >
                                <img src={Images.PRODUCT_1}  />
                            </div> 
                            
                            <div className="content-product">
                               <div className="detailed-content">Basic Tee 
                                </div>
                               <div className="price-product">270.000 VND</div>
                               <div className="outline-button" > 
                                    <Button type="primary" className="buying-rightnow" >Mua Ngay</Button>                                 
                               </div>
                            </div>
                        </div>                       
                    </Col>
                    <Col span={8}>
                        <div className="product-inline" >
                            <div className="image-product">
                                <img src={Images.PRODUCT_1} />
                            </div> 
                            <div className="content-product">
                               <div className="detailed-content">Basic Tee 
                                </div>
                               <div className="price-product">270.000 VND</div>
                               <div className="outline-button" > 
                                    <Button type="primary" className="buying-rightnow" >Mua Ngay</Button>                                 
                               </div>
                            </div>
                        </div>
                       
                    </Col>
                    <Col span={8}>
                        <div className="product-inline" >
                            <div className="image-product">  <img src={Images.PRODUCT_1} /></div> 
                            <div className="content-product">
                               <div className="detailed-content">Basic Tee 
                                </div>
                               <div className="price-product">270.000 VND</div>
                               <div className="outline-button" > 
                                    <Button type="primary" className="buying-rightnow" >Mua Ngay</Button>                                 
                               </div>
                            </div>
                        </div>
                       
                    </Col>
                </Row>

                <Row>                   
                    <Col span={8}>
                        <div className="product-inline" >
                            <div className="image-product">
                                <img src={Images.PRODUCT_1} />
                            </div> 
                            <div className="content-product">
                               <div className="detailed-content">Basic Tee 
                                </div>
                               <div className="price-product">270.000 VND</div>
                               <div className="outline-button" > 
                                    <Button type="primary" className="buying-rightnow" >Mua Ngay</Button>                                 
                               </div>
                            </div>
                        </div>                       
                    </Col>
                    <Col span={8}>
                        <div className="product-inline" >
                            <div className="image-product">
                                <img src={Images.PRODUCT_1} />
                            </div> 
                            <div className="content-product">
                               <div className="detailed-content">Basic Tee 
                                </div>
                               <div className="price-product">270.000 VND</div>
                               <div className="outline-button" > 
                                    <Button type="primary" className="buying-rightnow" >Mua Ngay</Button>                                 
                               </div>
                            </div>
                        </div>
                       
                    </Col>
                    <Col span={8}>
                        <div className="product-inline" >
                            <div className="image-product">  <img src={Images.PRODUCT_1} /></div> 
                            <div className="content-product">
                               <div className="detailed-content">Basic Tee 
                                </div>
                               <div className="price-product">270.000 VND</div>
                               <div className="outline-button" > 
                                    <Button type="primary" className="buying-rightnow" >Mua Ngay</Button>                                 
                               </div>
                            </div>
                        </div>
                       
                    </Col>
                </Row>
                            
               
            </div>
        </div>
        </>
    )
}

export default Product
