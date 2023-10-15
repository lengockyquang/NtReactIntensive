import React from "react";
import { shoppingCartSelector, identitySelector } from "../redux/selector";
import { useDispatch, useSelector } from "react-redux";
import useTable from "../hooks/useTable";
import { Button, Form, Input, InputNumber, Select, Space, Table } from "antd";
import { removeItem } from "../redux/shoppingCartSlice";
import cityProvince from '../data/city-province.json';
import CartSummary from "./CartSummary";

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

  const onSubmit = (values) => {
    console.log(values);
    
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
        title: "Unit",
        dataIndex: "unit",
        key: "unit",
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
      let totalUnit = 0;
      pageData.forEach(({ price, unit }) => {
        totalPrice += price;
        totalUnit += unit;
      });
      return (
        <Table.Summary fixed>
          <CartSummary totalUnits={totalUnit} totalPrice={totalPrice} />
        </Table.Summary>
      );
    },
  });
  return (
    <div className="cart">
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        onFinish={onSubmit}
        initialValues={{
          ...identityInfo
        }}
      >
        <div style={{ display: "flex" }}>
          <div className="shipping-info" style={{ flex: 2 }}>

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
              <Select allowClear size="small" style={{ width: 200 }} options={cityProvince.data.filter(x => x.level === "City")} />
            </Form.Item>
            <Form.Item
              label="Province"
              name="province"
              rules={[{ required: true, message: "Please input province!" }]}
            >
              <Select allowClear size="small" style={{ width: 200 }} options={cityProvince.data.filter(x => x.level === "Province")} />
            </Form.Item>

          </div>
          <div className="items" style={{ flex: 3 }}>
            {renderTable()}
            <div className="payment-detail" style={{ marginTop: 10 }}>
              <hr />
              <h5>Payment info</h5>
              <Form.Item
                label="Card number"
                name="cardNumber"
                rules={[{ required: true, message: "Please input card number!" }]}
              >
                <Input size="small" style={{ width: 200 }} />
              </Form.Item>
              <Form.Item label="Expiry">
                <Space.Compact>
                  <Form.Item
                    noStyle
                    name={["expiry","month"]}
                    rules={[{ required: true, message: "Please input card expiry info!" }]}
                  >
                    <InputNumber name="month" placeholder="MM" size="small" style={{ width: 50 }} min={1} max={12}/>
                  </Form.Item>
                  <Form.Item
                    noStyle
                    name={["expiry","year"]}
                    rules={[{ required: true, message: "Please input card expiry info!" }]}
                  >
                    <InputNumber name="year" placeholder="YY" size="small" style={{ width: 50 }} min={1} max={99} />
                  </Form.Item>
                </Space.Compact>
              </Form.Item>
              
              <Form.Item
                label="CVV"
                name="cvv"
                rules={[{ required: true, message: "Please input card cvv value!" }]}
              >
                <InputNumber size="small" style={{ width: 50 }} maxLength={3} />
              </Form.Item>
            </div>
          </div>
        </div>
      </Form>
      <Button type="primary" onClick={onPay}>
        Pay
      </Button>
    </div>
  );
}

export default Cart;
