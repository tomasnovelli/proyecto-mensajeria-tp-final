import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './addContactStyle.css'
import { useGlobalContext } from '../../Components/GlobalContext/GlobalContext'
import { AddContactForm } from '../../Components/index'

const AddContact = () => {
 
    return (
        <div className='addContactContainer'>
            <header className='addContactHeader'>
                <Link to='/'><i className="backArrow bi bi-arrow-left-short"></i></Link>
                <span className='addContactTitle'>Nuevo Contacto</span>
            </header>
            <AddContactForm />
        </div>
    )
}

export default AddContact
