import React from 'react'
import './contacts.css'
import ContactList from '../../Components/ContactList/ContactList'
import { useGlobalContext } from '../../Components/GlobalContext/GlobalContext'
import { User } from '../../Components'
import ContactListFooter from '../../Components/ContactListFooter/ContactListFooter'


const Contacts = () => {
    const {contactListData} = useGlobalContext()

    return (
        <div className='contacts'>
            <User />
            <ContactList dataMock={contactListData}/>
            <ContactListFooter />
        </div>
    )
}

export default Contacts
