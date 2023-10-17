import React, { useEffect, useState } from "react";
import { identitySelector } from "../redux/selector";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input, Switch, notification } from "antd";
import { updateProfile } from "../redux/identitySlice";

function Profile() {
  const [form] = Form.useForm();
  const identityInfo = useSelector(identitySelector);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const onSaveProfile = () => {
    form.submit();
  };

  useEffect(()=>{
    form.resetFields();
  });

  const onSubmit = (values) => {
    if (identityInfo.isAuthenticated) {
      dispatch(
        updateProfile({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phoneNumber: values.phoneNumber,
          address: values.address,
        })
      );
      notification.success({
        message:"Alert",
        description:"Update sucessfully"
      });
      setIsEdit(false);
    }
  };

  return (
    <div className="">
      <div style={{ marginBottom: 10 }}>
        <Switch
          checked={isEdit}
          checkedChildren="Editable"
          unCheckedChildren="Uneditable"
          onChange={() => {
            setIsEdit(!isEdit);
          }}
        />
        <Button
          type="primary"
          name="btnSubmit"
          disabled={!isEdit}
          onClick={onSaveProfile}
          style={{ float: "right" }}
        >
          Save
        </Button>
      </div>
      <div class="card mb-4">
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          onFinish={onSubmit}
          initialValues={{
            ...identityInfo,
          }}
        >
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">First Name</p>
              </div>
              <div class="col-sm-9">
                <Form.Item
                  name="firstName"
                  rules={[
                    { required: true, message: "Please input first name!" },
                  ]}
                >
                  <Input
                    size="small"
                    style={{ width: 200 }}
                    disabled={!isEdit}
                  />
                </Form.Item>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Last Name</p>
              </div>
              <div class="col-sm-9">
                <Form.Item
                  name="lastName"
                  rules={[
                    { required: true, message: "Please input last name!" },
                  ]}
                >
                  <Input
                    size="small"
                    style={{ width: 200 }}
                    value={identityInfo.lastName}
                    disabled={!isEdit}
                  />
                </Form.Item>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Email</p>
              </div>
              <div class="col-sm-9">
                <Form.Item
                  name="email"
                  rules={[{ required: true, message: "Please input email!" }]}
                >
                  <Input
                    size="small"
                    style={{ width: 200 }}
                    value={identityInfo.email}
                    disabled={!isEdit}
                  />
                </Form.Item>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Phone</p>
              </div>
              <div class="col-sm-9">
                <Form.Item
                  name="phoneNumber"
                  rules={[
                    { required: true, message: "Please input phone number!" },
                  ]}
                >
                  <Input
                    size="small"
                    style={{ width: 200 }}
                    value={identityInfo.phoneNumber}
                    disabled={!isEdit}
                  />
                </Form.Item>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Address</p>
              </div>
              <div class="col-sm-9">
                <Form.Item
                  name="address"
                  rules={[
                    { required: true, message: "Please input address!" },
                  ]}
                >
                  <Input
                    size="small"
                    style={{ width: 200 }}
                    value={identityInfo.address}
                    disabled={!isEdit}
                  />
                </Form.Item>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Profile;
