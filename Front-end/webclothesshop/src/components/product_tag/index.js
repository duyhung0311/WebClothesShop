import React from 'react'
import './style.css'
import { Images } from '../../config/image'
import {Card,Row,Col,Button} from 'antd'

function productTag(){
    return(
        <div>
            <div className="product-container"> 
                
               
                <div className="product-inline" >
                    <div className="image-product"  >
                        <img src={Images.PRODUCT_1}  />
                    </div> 
                            
                    <div className="content-product">
                        <div className="detailed-content">Basic Tee </div>
                        <div className="price-product">270.000 VND</div>
                        <div className="outline-button" > 
                            <Button type="primary" className="buying-rightnow" >Mua Ngay</Button>                                 
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    )
}
export default productTag;