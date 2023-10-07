import React, { useState } from 'react'
import Loading from './Loading'

function AuthProvider(props) {
    const [loading, setLoading] = useState(false);
    return (
        <div className='auth-wrapper'>
            <Loading loading={loading} />
            {props.children}
        </div>
    )
}

export default AuthProvider