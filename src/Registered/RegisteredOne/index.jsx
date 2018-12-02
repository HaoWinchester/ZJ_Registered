import React, {
    Component
} from 'react';
import './index.css';
import './../../../node_modules/antd/dist/antd.css';
import {
    Form,
    Icon,
    Input,
    Button
} from 'antd';
const FormItem = Form.Item;

class One extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    componentDidMount() {
        
    }
    render() {
            const {
                getFieldDecorator
            } = this.props.form;
            return ( <div className = "registeredOne" >
                <Form onSubmit = {this.handleSubmit}
                    className = "login-form" >
                <FormItem >
                    {getFieldDecorator('userName', {
                        rules: [{
                            required: true,
                            message: 'Please input your username!'
                        }],
                    })( <
                        Input prefix = { < Icon type = "user"
                            style = {
                                {
                                    color: 'rgba(0,0,0,.25)'
                                }
                            }
                            />} placeholder="Username" / >
                        )
                    } <
                    /FormItem> <
                    FormItem > {
                        getFieldDecorator('password', {
                            rules: [{
                                required: true,
                                message: 'Please input your Password!'
                            }],
                        })( <
                            Input prefix = { < Icon type = "lock"
                                style = {
                                    {
                                        color: 'rgba(0,0,0,.25)'
                                    }
                                }
                                />} type="password" placeholder="Password" / >
                            )
                        } <
                        /FormItem>
                        <Input placeholder="code" className="code"/>
                         <Button type="primary">获取验证码</Button>
                         <
                        FormItem >
                        <Button type = "primary"
                            htmlType = "submit"
                            className = "login-form-button"
                            style={{
                                width:'100%',
                                fontSize:'14px',
                                marginTop:20
                            }}>
                            马上拿钱
                        </Button>
                        < /
                        FormItem > <
                        /Form> < /
                        div >
                    );
                }

            }
            const RegisteredOne = Form.create({})(One);
            export default RegisteredOne;
