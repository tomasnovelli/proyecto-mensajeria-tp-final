import React from 'react'
import './contacts.css'

import ContactList from '../../Components/ContactList/ContactList'
import { useGlobalContext } from '../../Components/GlobalContext/GlobalContext'


const Contacts = () => {
    const {contactListData} = useGlobalContext()
    return (
        <div className='contacts'>
            <ContactList dataMock={contactListData}/>
        </div>
    )
}

export default Contacts
