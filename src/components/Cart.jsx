import React from 'react'
import { shoppingCartSelector, identitySelector } from '../redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import useTable from '../hooks/useTable';
import { Table, Typography } from 'antd';
import { removeItem } from '../redux/shoppingCartSlice';


function Cart(props) {
    const identityInfo = useSelector(identitySelector);
    const shoppingCart = useSelector(shoppingCartSelector);
    const dispatch = useDispatch();
    const onRemoveCartItem = (item) =>{
        dispatch(removeItem(item));
    }

    const [renderTable] = useTable({
        pagination: false,
        data: shoppingCart.cartItems,
        columns: [
            {
                title: 'Item ID',
                dataIndex: 'id',
                key: 'id'
            },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Price',
                dataIndex: 'price',
                key: 'price',
                render:   (price) => `$${price}`
            },
            {
                title: 'Action',
                dataIndex: 'id',
                key:'id',
                render: (text, record) => {
                    return <a onClick={()=> onRemoveCartItem(record)} >Delete</a>
                }
            }
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
        }
    })
    return (
        <div className='cart'>
            {renderTable()}
        </div>
    )
}

export default Cart