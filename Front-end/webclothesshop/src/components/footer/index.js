import React from 'react'
import { Row, Col, Button } from 'antd'
import './style.css';
import { Images } from '../../config/image';
import { EnvironmentTwoTone, PhoneTwoTone, InstagramOutlined, FacebookOutlined, GoogleOutlined, YoutubeOutlined, SkypeOutlined } from '@ant-design/icons';
function Footer() {
    return (
        <div>
            <Row className="row-1">
                <Col className="col-first" span={8}>
                    <div className="logo-colfirst">
                        <img src={Images.LOGO} style={{ width: "80%", height: "50%"}} />
                    </div>
                    {/* <div >
                        <Button type="primary" className="btn-colfirst">TÌM CỬA HÀNG</Button>
                    </div> */}
                </Col>
                <Col className="col-second" span={8}>
                    <div className="policy-cover">
                        <div className="content-first">HỖ TRỢ KHÁCH HÀNG</div>
                        <div className="content-second">CHÍNH SÁCH BẢO MẬT</div>
                        <div className="content-third">CHÍNH SÁCH ĐỔI TRẢ</div>
                        <div className="content-fourth">CHÍNH SÁCH VẬN CHUYỂN</div>
                        <div className="content-fifth">CHÍNH SÁCH THANH TOÁN</div>
                        <div className="content-sixth">HƯỚNG DẪN MUA HÀNG</div>


                    </div>
                </Col>
                <Col className="col-third" span={8}>
                    <div className="address-cover">
                        <div className="address"><EnvironmentTwoTone /> 41A Luong Huu Khanh, Pham Ngu Lao Ward, District 1, HCMC
                        </div>
                        <div className="phone">
                            <PhoneTwoTone /> 0901632176
                        </div>
                        <div className="social-media-account">
                            <div className="ins">
                                <InstagramOutlined />
                            </div>
                            <div className="face">
                                <FacebookOutlined />
                            </div>
                            <div className="google">
                                <GoogleOutlined />
                            </div>
                            <div className="skype">
                                <SkypeOutlined />
                            </div>
                            <div className="youtube">
                                <YoutubeOutlined />
                            </div>

                        </div>
                        <div className="map-homepage"></div>
                    </div>
                </Col>

            </Row>
        </div>
    )
}

export default Footer
