import React from 'react'
import  './style.css'
import Navbar from '../../../components/navbar'
import { Images } from '../../../config/image'
import {Select,Button,Collapse} from 'antd'
import { HeartOutlined  } from '@ant-design/icons';

function SingleProduct() {
    const { Panel } = Collapse;

    return (
        <>
                        <Navbar/>

        <div className="container">
            <div className="left-side">
                <div >
                    <img className="image" src={Images.SINGLEPRODUCT_1}/>
                </div>
            </div>
             <div className="right-side">
                <div className="content">
                    <div className="tile-product">
                    Coat made of wool with a houndstooth pattern
                    </div>
                    <div className="description">
                        <div className="model">Mã sản phẩm: 642954</div>
                        <div className="status-product">Hàng mới về</div>
                    </div>
                    <div className="price">500.000VND</div>
                    <div className="detailed-product">
                        
                        Bộ sưu tập Epilogue là tất cả về việc phá vỡ các quy tắc thời trang cũ và tạo ra những thiết kế vượt thời gian
                        có thể mặc trong nhiều hơn một mùa. Vẻ ngoài kết hợp những thiết kế và họa tiết không thể nhầm lẫn nhất của 
                        Alessandro Michele trong năm năm qua, cũng như chiếc áo khoác với họa tiết houndstooth này.
                    </div>
                    <div className="outline">
                        <div className="size-product">
                            <div className="size-product-detailed">SIZE</div>
                            <div >
                                <Select className="select-size"> 
                                    <Option value="M">M</Option>
                                    <Option value="L">L</Option>
                                    <Option value="XL">XL
                                        
                                    </Option>
                                    
                                </Select>

                            </div>
                            
                        </div>
                        <div className="number-product">
                            <div className="number-product-detailed">Tình trạng</div>
                            <div>
                            <Select className="select-number"> 
                                    <Option value="InofStock">Còn hàng</Option>
                                    <Option value="OutOfStock">Hết hàng</Option>
                                    
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div className="outline-button-icon">
                        <Button className="button-addToShoppingCart" type="primary" >Thêm vào giỏ hàng</Button>
                        <div >
                                <Button className="icon-lover" type="primary"  icon={<HeartOutlined />} ></Button>
                        </div>
                    </div>
                    <div >
                    <Button className="outline-button-payment" type="primary" >Thanh toán</Button>

                    </div>
                    <div  >
                        <Collapse className="information" defaultActiveKey={['1']} ghost>
                            <Panel header="THÔNG TIN SẢN PHẨM" key="1" >
                                <div className="inline-information"> 
                                    -Giới tính :Unisex
                                </div>
                                <div className="inline-information"> 
                                    -Size:M,L,XL
                                </div>
                                <div className="inline-information"> 
                                    -Made in Italy
                                </div>
                                <div className="inline-information"> 
                                    -Brand:Gucci
                                </div>

                            </Panel>
                        </Collapse>
                    </div>
                    <div >
                        <Collapse className="Change_Product" defaultActiveKey={['2']} ghost>
                            <Panel header="QUY ĐỊNH ĐỔI SẢN PHẨM" key="1" >
                                <div className="inline-changeproduct">
                                    -Chỉ đổi hàng 1 lần duy nhất, mong bạn cân nhắc kĩ trước khi quyết định.
                                </div>
                                <div className="inline-changeproduct">
                                    -Thời hạn đổi sản phẩm khi mua trực tiếp tại cửa hàng là 07 ngày, kể từ ngày mua. Đổi sản phẩm khi mua online là 14 ngày, kể từ ngày nhận hàng.
                                </div>
                                <div className="inline-changeproduct">
                                    -Sản phẩm đổi phải kèm hóa đơn. Bắt buộc phải còn nguyên tem, hộp, nhãn mác.
                                </div>
                                <div className="inline-changeproduct">
                                    -Sản phẩm đổi không có dấu hiệu đã qua sử dụng, không giặt tẩy, bám bẩn, biến dạng.
                                </div>
                                <div className="inline-changeproduct">
                                    -Nếu sản phẩm muốn đổi ngang giá trị hoặc có giá trị cao hơn, bạn sẽ cần bù khoảng chênh lệch tại thời điểm đổi.
                                </div>
                                <div className="inline-changeproduct">
                                    -Nếu bạn mong muốn đổi sản phẩm có giá trị thấp hơn, chúng tôi sẽ không hoàn lại tiền.
                                </div>
                                <div className="inline-changeproduct">
                                    -Trong trường hợp sản phẩm - size bạn muốn đổi không còn hàng trong hệ thống. Vui lòng chọn sản phẩm khác.
                                </div>
                                <div className="inline-changeproduct">
                                    -Không hoàn trả bằng tiền mặt dù bất cứ trong trường hợp nào. Mong bạn thông cảm.
                                </div>
                            </Panel>
                        </Collapse>
                        </div>
                    <div >
                        <Collapse className="Protect_Product"  defaultActiveKey={['3']} ghost>
                            <Panel header="BẢO HÀNH NHƯ THẾ NÀO"  key="1" >
                                <div className="inline-protect">
                                Mỗi món đồ trước khi xuất xưởng đều trải qua nhiều khâu kiểm tra. Tuy vậy, trong quá trình sử dụng, nếu nhận thấy các lỗi: gãy đế, hở đế, đứt chỉ may,...trong thời gian 6 tháng từ ngày mua hàng, mong bạn sớm gửi sản phẩm về cho shop nhằm giúp chúng tôi có cơ hội phục vụ bạn tốt hơn. Vui lòng gửi sản phẩm về bất kỳ cửa hàng, hoặc gửi đến trung tâm bảo hành ngay trong trung tâm TP.HCM trong giờ hành chính
                                </div>
                                <div className="inline-protect">
                                352 Điện Biên Phủ, P.13 ,Q. Bình Thạnh,TP.HCM
                                </div>
                                <div className="inline-protect">
                                Hotline: 090 1632 176
                                </div>
                            </Panel>
                        </Collapse>
                    </div>

                </div>
            </div> 
        </div>
        </>
    )
}

export default SingleProduct
