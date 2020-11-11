import React , {useState} from 'react';
import {Form, Input,Button,Modal,DatePicker,Space,Radio,message} from 'antd';
import {Images} from '../../config/image';
import './style.css';
import { Content } from 'antd/lib/layout/layout';

function Login() {
    const [visibleModal,setvisibleModal]= useState(false);
    const [visibleModal_1,setvisibleModal_1]= useState(false);
    const handledata=(values)=>{
        console.log("Value: ", values);
    }
    




    const showNewForm=()=>{
        setvisibleModal(true);
    }
    const showNewForm_1=()=>{
        setvisibleModal_1(true);
    }
    const showCancelButton = ()=>{
        setvisibleModal_1(false);
    }
    const visibleModalCancel=()=>{
        setvisibleModal(false);

    }
    const visibleModalCancel_1=()=>{
        setvisibleModal_1(false);

    }
    const visibleModalSuccess=()=>{
        setvisibleModal(true);
    }
    function onChange(date,dateString){
        console.log(date,dateString);
    }
    // const [size,setSize]=useState(8);
    const value=1;
    const [state,setState]=useState(value);
    onChange=(e)=>{
        setState(value);
    }
    

    return (
        <div className="form-login">
            <div className="form-box">
                    <div className="form-image" style={{backgroundImage:`url(${Images.LOGIN})`}}>
                    </div>
                    <div className="form-input-outline">
                        <Form className="form-input">
                                <h5 style={{color:'Black',fontFamily:'Impact, Charcoal, sans-serif',fontSize:'25px'}}>LOGIN</h5>                              
                                <h5 style={{fontFamily:'"Comic Sans MS", cursive, sans-serif',fontSize:'25px'}}>Sign into your account</h5>                  
                                <Form.Item style={{width:'100%'}} name="username"><Input style={{width:'100%'}}  placeholder="Username"></Input></Form.Item>
                                <Form.Item  name="password"><Input.Password placeholder="Password"/></Form.Item>
                            <div className="for m-label" style={{paddingBottom:'10px'}}>
                                <a className="form-lable-left" onClick={showNewForm}>Forget Password
                                </a>     
                                <a className="form-label-right" onClick={showNewForm_1}>Sign Up</a>                       
                            </div>
                            <div className="form-button">
                            <Button className="form-detailedbutton" htmlType="submit" >
                                Submit
                            </Button>                          
                            </div>                        
                        </Form>
                        <Modal title="Sign Up" onOk={handledata}  visible={visibleModal_1} onCancel={visibleModalCancel_1} 
                                    footer={[
                                        <Button key="back" onClick={showCancelButton}>Cancel</Button>,
                                        <Button key="submit" htmlType="submit" onClick={handledata}>Ok</Button>,   
                                    ]}
                                >
                            <Form >
                                    <div className="form-input-name">
                                        <Form.Item name="lastname"  className="form-input-name-firstname">
                                            <div>
                                                <Input placeholder="Họ"></Input>
                                            </div>
                                        </Form.Item>
                                        <Form.Item name="firstname" className="form-input-name-lastname">
                                            <div >
                                                <Input placeholder="Tên"></Input>
                                            </div>
                                        </Form.Item>
                                       
                                        
                                    </div>
                                    <Form.Item className="form-account" name="account">
                                        <div >
                                            <Input placeholder="Tài khoản"></Input>
                                        </div>
                                    </Form.Item>
                                   
                                    <div className="form-password">
                                        <Form.Item  className="form-password-new" name="newpw">
                                            <div>
                                                <Input.Password placeholder="Mật khẩu"/>
                                            </div>
                                        </Form.Item>
                                       
                                        <Form.Item className="form-password-comfirm" name="confirmpw">
                                            <div >
                                                <Input.Password placeholder="Xác nhận"/>
                                            </div>
                                        </Form.Item>
                                        
                                    </div>
                                    <div >
                                        <Form.Item name="time" className="form-day">
                                                <Space direction="vertical" style={{paddingTop:'10px'}}>
                                                <div className="form-detailed-day">
                                                <DatePicker onChange={onChange} style={{width:472}}/>
                                                </div>
                                                
                                                </Space>
                                        </Form.Item>
                                      
                                    </div>
                                    <Form.Item className="form-sex"  name="sex">
                                        
                                            <Radio.Group onChange={onChange}>
                                            
                                                    <Radio value={1}>Nữ</Radio>

                                            
                                                    <Radio value={2}>Nam</Radio>

                                                
                                                    <Radio value={3}>Khác</Radio>

                                            
                                        
                                                
                                            </Radio.Group>
                                     
                                    </Form.Item>
                            </Form>
                         </Modal>
                        <Modal title="Forget Password" visible={visibleModal} onCancel={visibleModalCancel}>
                            <Form>
                                <a>Vui lòng nhập email hoặc số điện thoại để tìm kiếm tài khoản.</a>
                                <br/>
                                <Form.Item>
                                    <Input placeholder="Số di động"></Input>
                                </Form.Item>
                            </Form>
                        </Modal>
                    </div>
              
            </div>
        </div>
    )
}

export default Login
