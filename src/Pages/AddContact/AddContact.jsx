import React from 'react'
import { Link } from 'react-router-dom'
import './addContactStyle.css'

import { AddContactForm } from '../../Components/index'

const AddContact = () => {
 
    return (
        <div className='addContactContainer'>
            <header className='addContactHeader'>
                <Link to='/'><i className="backArrow bi bi-arrow-left-short"></i></Link>
                <span className='addContactTitle'>Add New Contact</span>
            </header>
            <AddContactForm />
        </div>
    )
}

export default AddContact
