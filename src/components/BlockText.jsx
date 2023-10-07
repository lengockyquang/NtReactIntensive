import React from 'react'

function BlockText(props) {
  return (
    <div className='block'>
        <h2>
            <strong>{props.text}</strong>
        </h2>
    </div>
  )
}

export default BlockText