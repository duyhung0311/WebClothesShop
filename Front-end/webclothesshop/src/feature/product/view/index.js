import React from 'react'
import './style.css'
import {Card} from 'antd'
function Product() {
    return (
        <div className="container">
            <div className="menu-container" >
                <Card  title="Type Product" style={{ width: "100%"  }}>
                    <p style={{fontFamily:"Bree Serif , serif"}}>Tee</p>
                    <p>T-shirt</p>
                    <p>Trouser</p>
                </Card>
                <Card title="Price" style={{ width: "100%"  }}>
                    <p>Under 1 million</p>
                    <p>Between 1 million and 5 million</p>
                    <p>Over 5 million</p>
                </Card>
            </div>

            <div className="product-container"></div>
        </div>
    )
}

export default Product
