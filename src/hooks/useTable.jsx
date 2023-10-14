import React from 'react'
import {  Table } from 'antd';

function useTable(props) {
    
    const renderTable = () =>{
        return (
            <div className='table-wrapper'>
                <Table 
                    scroll={{y: 100}}
                    size='small'
                    pagination={props.pagination} 
                    dataSource={props.data} 
                    columns={props.columns} 
                    rowKey={'id'} 
                    summary={props.summary}
                />
            </div>
        )
    }

    return [
        renderTable
    ]
}

export default useTable