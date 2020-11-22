import React, { useState, useEffect } from 'react'
import Navbar from '../../../components/navbar'
import { PoweroffOutlined, DeleteOutlined } from '@ant-design/icons';
import { Select, Form, Input, Button, Checkbox, Table, Tag, Space, Row, Col, InputNumber, Modal } from 'antd';
import './style.css'
import { Images } from '../../../config/image'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { UserOutlined, SearchOutlined, MailOutlined, NotificationOutlined } from '@ant-design/icons';
import googleMapStyles from './googlemapapi';
import Geocode from "react-geocode";

function Shoppingcart(props) {
    const { Option } = Select;
    const [modal, SetModal] = useState(false);
    const showModal = () => {
        SetModal(true);
    }
    const handleOk = () => {
        SetModal(false);
    }
    const handleCancel = () => {
        SetModal(false);
    }
    const columns = [
        {
            dataIndex: "img",
            key: "img",
            render: (img) => (
                <Row>
                    <Col span={24}>
                        <img className="image-firstcolumn-intable" src={img} />
                    </Col>
                </Row>
            )
        },
        {
            dataIndex: "name",
            key: "name",
            render: (name) => (
                <Row>
                    <Col className="name-secondcolumn-intable" span={24}>
                        {name}
                    </Col>
                </Row>
            )

        },
        {
            dataIndex: "num",
            key: "num",
            render: (num) => (
                <Row>
                    <Col span={24}>
                        <InputNumber style={{ width: "80px" }} min={1} max={num} />
                    </Col>
                </Row>
            )

        },
        {
            dataIndex: "price",
            key: "price",
            render: (price) => (
                <Row>
                    <Col className="price-fourthcolumn-intable" span={24}>
                        {price}
                    </Col>
                </Row>
            )
        },
        {
            dataIndex: "del",
            key: "del",
            render: (del) => (
                <Row>
                    <Col span={24}>
                        <Button type="primary" icon={<DeleteOutlined />} className="button-fiftthcol-intable"></Button>
                    </Col>
                </Row>
            )
        }

    ];

    const data = [
        {

            name: "BASEBALL CAP - BLACK",
            img: Images.CART_IMG_1,
            num: 5,
            price: "500.000 VND",
        },
        {
            name: "BLANK SHOELACES - WHITE",
            img: Images.CART_IMG_2,
            num: 10,
            price: "35.000 VND",
        },
        {
            name: "BASIC TEE",
            img: Images.CART_IMG_3,
            num: 15,
            price: "249.000 VND",
        },
        {
            name: "HIPHOP GRAPHIC TEE",
            img: Images.CART_IMG_4,
            num: 13,
            price: "350.000 VND",
        },

    ];
    const MapStyles = {
        width: "100%",
        height: "200px",

    };

    // Load input to direction of map
    const [coordinates, setCoordinates] = useState({ lat: '', lng: '' });
    const [form] = Form.useForm();

    const convert = (value) => {

        Geocode.setApiKey("AIzaSyB_eKxh8KTsPy6aPPJPROh2yP75dTvg92o");
        Geocode.fromAddress(value).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                setCoordinates({ lat: lat, lng: lng })
                console.log("duydz", lat, lng);

            },
            error => {
                console.error(error);
            }
        );
    }

    

    
    return (
        
        <>
            <Navbar />
            <div>
                <div className="container">
                    <div className="outline-left">
                        <div className="show-item">
                            <div className="title-content">YOUR SELECTIONS</div>
                            <div className="table-content">
                                <Table columns={columns} dataSource={data} />
                            </div>
                        </div>
                    </div>
                    <div className="outline-right">
                        <div className="cart">
                            <div className="title-cart">ĐƠN HÀNG</div>
                            <div className="text-discount">NHẬP MÃ KHUYẾN MÃI</div>
                            <div className="mix-input-button">
                                <div className="mix-input">
                                    <Form>
                                        <Form.Item style={{ fontSize: '5px' }} name="description" rules={[{ required: true, message: 'Nhập mã khuyến mãi!' }]}>
                                            <Input style={{ height: '42px' }} />
                                        </Form.Item>
                                    </Form>
                                </div>

                                <div >
                                    <Button type="primary" className="mix-button" >
                                        ÁP DỤNG
                                </Button>
                                </div>
                            </div>
                            <div className="mix-cart-discount">
                                <div className="mix-title">
                                    <div className="content-cart">Đơn hàng</div>
                                    <div className="content-discount">Giảm</div>
                                </div>
                                <div className="mix-price">
                                    <div className="price-cart">13.750.000 VND</div>
                                    <div className="price-discount">0 VND</div>

                                </div>
                            </div>
                            <div className="label-total">
                                <div className="label-left">TẠM TÍNH</div>
                                <div className="label-right">14.025.000 VND</div>
                            </div>
                            <div>
                                <Button className="btn-payment" type="submit" onClick={showModal}>TIẾP TỤC THANH TOÁN</Button>
                                <Modal
                                    width={1000}
                                    title="THÔNG TIN GIAO HÀNG" visible={modal} onOk={handleOk} onCancel={handleCancel}

                                >
                                    <div className="outline-modal" >







                                        <Form>
                                            <div  >

                                                <Form.Item>
                                                    <Map className="map-component"
                                                        google={props.google}
                                                        zoom={15}
                                                        style={MapStyles}
                                                        initialCenter={{ lat: 10.85111133339451, lng: 106.77226786515473 }}
                                                        center={{ lat: coordinates.lat, lng: coordinates.lng }}
                                                    >
                                                        <Marker position={{ lat: coordinates.lat, lng: coordinates.lng }} />
                                                    </Map>
                                                </Form.Item>
                                            </div>
                                            <div style={{ marginTop: "200px" }}>
                                                <div className="address-component">
                                                    <Form.Item >
                                                        <Input.Search prefix={<SearchOutlined />} placeholder="PLACE" enterButton="Search" onSearch={convert}  />
                                                    </Form.Item>
                                                </div>
                                                <div className="name-component">
                                                    <Form.Item >
                                                        <Input prefix={<UserOutlined />} placeholder="FULL NAME" />
                                                    </Form.Item>
                                                </div>
                                                <div className="mail-component">
                                                    <Form.Item >
                                                        <Input prefix={<MailOutlined />} placeholder="Email" />
                                                    </Form.Item>
                                                </div>
                                                <div className="age-component">
                                                    <Form.Item>
                                                        <Input prefix={<NotificationOutlined />} placeholder="Note" />
                                                    </Form.Item>
                                                </div>

                                            </div>


                                        </Form>
                                    </div>


                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
Shoppingcart.defaultProps = googleMapStyles;

export default GoogleApiWrapper({
    apiKey: "AIzaSyB_eKxh8KTsPy6aPPJPROh2yP75dTvg92o",
})(Shoppingcart);