import React from 'react'
import {Carousel}from 'antd'
import {Images} from '../../config/image';

function slider() {
    // const contentStyle = {
    //     height: "100%",
    //     color: '#fff',
    //     lineHeight: '160px',
    //     textAlign: 'center',
    //     background: '#364d79',
    //     width:'100%',
    //     backgroundSize:'cover'

    //   };
    
    return (
        <div>
            <Carousel  autoplay>
            {/* style={{backgrou}ndImage:`url(${Images.LOGIN})`}} */}
                {/* <div> */}
                    {/* <img className="contentStyle" src={Images.SLIDER_1}></img> */}
                {/* < style={{contentStyle,backgroundImage:`url(${Images.SLIDER_1})`}}></h3> */}
                {/* </div> */}
                {/* <div> */}
                    {/* <img  className="contentStyle"  src={Images.SLIDER_2}></img> */}
                {/* </div> */}
                <div >
                    <img  className="contentStyle"  src={Images.SLIDER_3}></img>
                </div>
                {/* <div >
                    <img  className="contentStyle" src={Images.SLIDER_4}></img>
                </div> */}
            </Carousel>,    
        </div>
    )
}
export default slider
