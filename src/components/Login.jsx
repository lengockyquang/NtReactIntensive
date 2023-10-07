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
        description: 'Error occurred!'
      })
    }
  }
  return (
    <div className='login'>
      <h2>Login</h2>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onSubmit}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="userName"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input style={{ width: 300 }} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password style={{ width: 300 }} />
        </Form.Item>

        <Form.Item name="rememberMe" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login