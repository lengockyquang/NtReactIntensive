import React from 'react'
import { Table } from "antd";

function CartSummary(props) {
    return (
        <Table.Summary.Row>
            <Table.Summary.Cell index={0}>Total</Table.Summary.Cell>
            <Table.Summary.Cell index={1}></Table.Summary.Cell>
            <Table.Summary.Cell index={2}></Table.Summary.Cell>
            <Table.Summary.Cell index={3}>{props.totalUnits} unit(s)</Table.Summary.Cell>
            <Table.Summary.Cell index={4}>${props.totalPrice}</Table.Summary.Cell>
        </Table.Summary.Row>
    )
}

export default CartSummary