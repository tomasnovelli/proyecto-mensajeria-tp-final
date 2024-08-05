import React, { useState } from 'react'
import './contacts.css'
import ContactList from '../../Components/ContactList/ContactList'
import { useGlobalContext } from '../../Components/GlobalContext/GlobalContext'
import ContactListFooter from '../../Components/ContactListFooter/ContactListFooter'
import { Link } from 'react-router-dom'
import { Header } from '../../Components'
import AddContact from '../AddContact/AddContact'
import { clearLocalStorage } from '../../Helpers/chatData'


const Contacts = () => {
    const { contactListData, handleChangeContent, searchContact } = useGlobalContext()
    const [contactFooterState, setContactFooterState] = useState()

    return (
        <div className='contacts'>
            <div className='addContactResponsive'>
            <AddContact />
            </div>
            <Header />
            <div>
                <label htmlFor="contactSearh"></label>
                <input type="text" placeholder='Buscar contacto' name='contactSearch' id='contactSearch' onChange={handleChangeContent} value={searchContact} />
            </div>
            <Link to={'/addContact'}>
                <button>
                    <i className="bi bi-person-plus-fill"></i>
                </button>
            </Link>
            <div>
            <button onClick={clearLocalStorage}>Clear LocalStorage</button>
            </div>
            
            <ContactList dataMock={contactListData} />
            <ContactListFooter />

        </div>
    )
}

export default Contacts
