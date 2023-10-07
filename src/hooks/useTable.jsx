import { notification, Table } from 'antd';
import _ from 'lodash';
import { useEffect, useState } from 'react';

function useTable(props) {
    
    const renderTable = () =>{
        return (
            <div className='table-wrapper'>
                <Table 
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