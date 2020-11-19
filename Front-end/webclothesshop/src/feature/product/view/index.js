import React, {useState} from 'react'
// import './style.css'
import {Card,Row,Col,Button} from 'antd'
import { Images } from '../../../config/image'
import Navbar from '../../../components/navbar'
import Product_Tag from '../../../components/product_tag/index'
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
                        <Product_Tag/>
                       
                    </Col>
                    <Col span={8}>
                        <Product_Tag/>
                        
                       
                    </Col>
                    <Col span={8}>
                        <Product_Tag/>

                        
                       
                    </Col>
                                 
                    <Col span={8}>
                         <Product_Tag/>

                    </Col>
                    <Col span={8}>
                        <Product_Tag/>

                    </Col>
                    <Col span={8}>
                      <Product_Tag/>

                    </Col>
                </Row>
                            
               
            </div>
        </div>
        </>
    )
}

export default Product
