import React from 'react'
import { ReactComponent as IconLoading } from '../assets/loading2.svg';

const Loading = (props) => {
    return (
        <div
            className='loading'
            style={{
                display: props.loading ? "flex" : 'none',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                position: 'absolute',
                zIndex: 999999,
                background: '#fff'
            }}
        >
            <IconLoading />
            <span>{props.text}</span>
        </div>
    );

};
export default Loading