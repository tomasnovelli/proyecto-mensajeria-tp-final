import React, { useState } from 'react'
import './contacts.css'
import ContactList from '../../Components/ContactList/ContactList'
import { useGlobalContext } from '../../Components/GlobalContext/GlobalContext'
import ContactListFooter from '../../Components/ContactListFooter/ContactListFooter'
import { Link } from 'react-router-dom'
import { Header } from '../../Components'
import AddContact from '../AddContact/AddContact'
import Comunity from '../Comunity/Comunity'


const Contacts = () => {
    const { 
        contactListData, 
        handleChangeContent, 
        searchContact, 
        navigationState } = useGlobalContext()

    return (
        <>
            {
                navigationState === 'contacts' &&
                <div className='contacts'>
                    <div className='addContactResponsive'>
                        <AddContact />
                    </div>
                    <Header />
                    <div className='contactSearch'>
                        <label htmlFor="contactSearch"></label>
                        <input className='contactSearchInput' type="text" placeholder='Buscar contacto' name='contactSearch' id='contactSearch' onChange={handleChangeContent} value={searchContact} />
                    </div>
                    <Link to={'/addContact'}>
                        <button className='btn-addContact'>
                            <i className="bi bi-person-plus-fill"></i>
                        </button>
                    </Link>
                    <ContactList dataMock={contactListData} />
                    <ContactListFooter />

                </div>
            }
            {
                navigationState === 'comunity' &&
                <div className='contacts'>
                    <Header />
                    <Comunity />
                    <ContactListFooter />
                </div>
            }
        </>
    )
}

export default Contacts
