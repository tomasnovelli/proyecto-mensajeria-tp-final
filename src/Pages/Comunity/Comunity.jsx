import React from 'react'
import FetchingComunity from '../../Components/FetchingComunity/FetchingComunity'
import './comunityStyles.css'
const Comunity = () => {
    return (
        <>
            <div className='comunityTitle'>
                <h1>Comunity Post</h1>
            </div>
            <div className='comunityPost'>
                <FetchingComunity />
            </div>
        </>
    )
}

export default Comunity