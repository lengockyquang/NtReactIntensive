import React from 'react'
import { Button, Checkbox, Form, Input, notification } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAuth } from '../redux/identitySlice';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (values) => {
    if (values.userName === 'admin' && values.password === 'password') {
      dispatch(setAuth({
        userName: 'admin',
        isAuthenticated: true
      }))
      navigate("/");
    }
    else {
      notification.error({
        message: 'Alert',
        description: 'Error occured!'
      })
    }
  }
  return (
    <div className='login'>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 4 }}
        initialValues={{ remember: true }}
        onFinish={onSubmit}
        labelAlign='top'
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="userName"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input style={{ width: 300 }} placeholder='Default: admin' />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password style={{ width: 300 }} placeholder='Default: password' />
        </Form.Item>

        <Form.Item name="rememberMe" valuePropName="checked" wrapperCol={{ offset: 4, span: 8 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4, span: 8 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login