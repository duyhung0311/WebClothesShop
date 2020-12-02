import React from 'react'
import './style.css'
import { Images } from '../../config/image';
import { Row, Col } from 'antd';
function Container() {
    return (
        <div >
            <div className="homepage-container">
                <div className="title-container">
                    BEST SELLER
                </div>

            </div>
            <div className="image-container">
                <Row style={{ paddingBottom: "10px" }}>
                    <div className="col-cover-inner">
                        <Col span={16}  >

                            <Row>
                                <Col span={6}>
                                    <div className="image-1">
                                        <img src={Images.PRO_HOME_1} />
                                    </div>
                                    <div className="content-image1">
                                        BASEBALL CAP
                                    </div>
                                    <div className="content-image1">
                                        275.000 VND
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div className="image-2">
                                        <img src={Images.PRO_HOME_2} />
                                    </div>
                                    <div className="content-imag2">
                                        HIGH TOP
                                    </div>
                                    <div className="content-imag2">
                                        495.000 VND
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div className="image-3">
                                        <img src={Images.PRO_HOME_3} />
                                    </div>
                                    <div className="content-imag3">
                                        BASIC TEE
                                    </div>
                                    <div className="content-imag3">
                                        249.000 VND
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div className="image-4">
                                        <img src={Images.PRO_HOME_4} />
                                    </div>
                                    <div className="content-image4">
                                        BASAS BUMPER GUM
                                    </div>
                                    <div className="content-image4">
                                        450.000 VND
                                    </div>
                                </Col>
                            </Row>






                        </Col>
                    </div>


                </Row>

                <Row style={{ paddingBottom: "10px" }}>
                    <div className="col-cover-inner">
                        <Col span={16}  >

                            <Row>
                                <Col span={6}>
                                    <div className="image-1">
                                        <img src={Images.PRO_HOME_1} />
                                    </div>
                                    <div className="content-image1">
                                        BASEBALL CAP
                                    </div>
                                    <div className="content-image1">
                                        275.000 VND
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div className="image-2">
                                        <img src={Images.PRO_HOME_2} />
                                    </div>
                                    <div className="content-imag2">
                                        HIGH TOP
                                    </div>
                                    <div className="content-imag2">
                                        495.000 VND
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div className="image-3">
                                        <img src={Images.PRO_HOME_3} />
                                    </div>
                                    <div className="content-imag3">
                                        BASIC TEE
                                    </div>
                                    <div className="content-imag3">
                                        249.000 VND
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div className="image-4">
                                        <img src={Images.PRO_HOME_4} />
                                    </div>
                                    <div className="content-image4">
                                        BASAS BUMPER GUM
                                    </div>
                                    <div className="content-image4">
                                        450.000 VND
                                    </div>
                                </Col>
                            </Row>







                        </Col>
                    </div>


                </Row>
                <Row style={{ paddingBottom: "10px" }}>
                    <div className="col-cover-inner">
                        <Col span={16}  >

                            <Row>
                                <Col span={6}>
                                    <div className="image-1">
                                        <img src={Images.PRO_HOME_1} />
                                    </div>
                                    <div className="content-image1">
                                        BASEBALL CAP
                                    </div>
                                    <div className="content-image1">
                                        275.000 VND
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div className="image-2">
                                        <img src={Images.PRO_HOME_2} />
                                    </div>
                                    <div className="content-imag2">
                                        HIGH TOP
                                    </div>
                                    <div className="content-imag2">
                                        495.000 VND
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div className="image-3">
                                        <img src={Images.PRO_HOME_3} />
                                    </div>
                                    <div className="content-imag3">
                                        BASIC TEE
                                    </div>
                                    <div className="content-imag3">
                                        249.000 VND
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div className="image-4">
                                        <img src={Images.PRO_HOME_4} />
                                    </div>
                                    <div className="content-image4">
                                        BASAS BUMPER GUM
                                    </div>
                                    <div className="content-image4">
                                        450.000 VND
                                    </div>
                                </Col>
                            </Row>






                        </Col>
                    </div>


                </Row>

            </div>
        </div>
    )
}

export default Container
