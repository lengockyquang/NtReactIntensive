import React from "react";
import { shoppingCartSelector, identitySelector } from "../redux/selector";
import { useDispatch, useSelector } from "react-redux";
import useTable from "../hooks/useTable";
import { Button,  Form, Input, InputNumber, Select, Table } from "antd";
import { removeItem } from "../redux/shoppingCartSlice";
import cityProvince from '../data/city-province.json';

function Cart(props) {
  const [form] = Form.useForm();
  const shoppingCart = useSelector(shoppingCartSelector);
  const identityInfo = useSelector(identitySelector);
  const dispatch = useDispatch();
  const onRemoveCartItem = (item) => {
    dispatch(removeItem(item));
  };

  const onPay = () => {
    form.submit();
  };

  const onSubmit = () => {
    console.log("submit");
  };

  const [renderTable] = useTable({
    pagination: false,
    data: shoppingCart.cartItems,
    columns: [
      {
        title: "Item ID",
        dataIndex: "id",
        key: "id",
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
        render: (price) => `$${price}`,
      },
      {
        title: "Action",
        dataIndex: "id",
        key: "id",
        render: (text, record) => {
          return <a onClick={() => onRemoveCartItem(record)}>Delete</a>;
        },
      },
    ],
    summary: (pageData) => {
      let totalPrice = 0;
      pageData.forEach(({ price }) => {
        totalPrice += price;
      });
      return (
        <Table.Summary.Row>
          <Table.Summary.Cell index={0}>Total</Table.Summary.Cell>
          <Table.Summary.Cell index={1}></Table.Summary.Cell>
          <Table.Summary.Cell index={2}>${totalPrice}</Table.Summary.Cell>
        </Table.Summary.Row>
      );
    },
  });
  return (
    <div className="cart">
      <div style={{ display: "flex" }}>
        <div className="shipping-info" style={{ flex: 2 }}>
          <Form
            form={form}
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 4 }}
            onFinish={onSubmit}
          >
            <Form.Item
              label="First name"
              name="firstName"
              rules={[{ required: true, message: "Please input first name!" }]}
            >
              <Input size="small" style={{ width: 200 }} />
            </Form.Item>
            <Form.Item
              label="Last name"
              name="lastName"
              rules={[{ required: true, message: "Please input last name!" }]}
            >
              <Input size="small" style={{ width: 200 }} />
            </Form.Item>
            <Form.Item
              label="Phone"
              name="phoneNumber"
              rules={[
                { required: true, message: "Please input phone number!" },
              ]}
            >
              <InputNumber size="small" style={{ width: 200 }} />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: "Please input address!" }]}
            >
              <Input size="small" style={{ width: 200 }} />
            </Form.Item>
            <Form.Item
              label="City"
              name="city"
              rules={[{ required: true, message: "Please input city!" }]}
            >
              <Select allowClear size="small" style={{ width: 200 }} options={cityProvince.data.filter(x=>x.level === "City")} />
            </Form.Item>
            <Form.Item
              label="Province"
              name="province"
              rules={[{ required: true, message: "Please input province!" }]}
            >
              <Select allowClear size="small" style={{ width: 200 }} options={cityProvince.data.filter(x=>x.level === "Province")} />
            </Form.Item>
          </Form>
        </div>
        <div className="items" style={{ flex: 3 }}>
          {renderTable()}
        </div>
      </div>
      <Button type="primary" onClick={onPay}>
        Pay
      </Button>
    </div>
  );
}

export default Cart;
