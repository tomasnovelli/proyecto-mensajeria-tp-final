import React, { useEffect, useState } from 'react'
import { createContext, useContext } from 'react'
import { guardarHistorial, guardarMensaje, obtenerHistorial } from '../../Helpers/chatData'
import {v4 as uuid} from 'uuid'
import { useNavigate } from 'react-router-dom'

const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {

    const [contactListData, setContactListData] = useState(obtenerHistorial())
    const [textInput, setTextInput] = useState('')
    const [searchContact, setSearchContact] = useState('')
    const [dropdown, setDropdown] = useState(false)

    const navigate = useNavigate()

    const getContactDataById = (id, lista) => lista.find(contactos => contactos.id === id)

    const getContactIndex = (id, contactList) => contactList.findIndex(contact => contact.id === id)

    const updateContact = (contactData) => {
        const updatedContactListData = [
            ...contactListData
        ]
        const contactIndex = getContactIndex(contactData.id, updatedContactListData)
        updatedContactListData[contactIndex] = contactData
        setContactListData(prevContactListData => updatedContactListData)
        guardarHistorial(updatedContactListData)
    }
    
    const handleChangeContentValue = (e) => {
        setTextInput(e.target.value)

    }
    const handleChangeContent = (e) =>{
        setSearchContact(e.target.value)
    }
    useEffect(() => {
        const contactListToSearch = obtenerHistorial()
        if (searchContact != '') {
            const newContactList = contactListToSearch.filter(contact => contact.nombre.toLowerCase().includes(searchContact.toLowerCase()))
            setContactListData(newContactList)
        } else {
            setContactListData(contactListToSearch)
        }
    }, [searchContact])


    const handleCreateContact = (e) =>{
        e.preventDefault()
        const newContactForm = e.target
        const newContactFormValues = new FormData(newContactForm)
        console.log(newContactFormValues)
        const newContact = {
            nombre: '',
            phoneCountryId: '',
            phoneNumber: '',
            mailStorage: '',
        }
        for(let prop in newContact){
            newContact[prop] = newContactFormValues.get(prop)
        }
        newContact.id = uuid()
        newContact.thumbnail = '/images/newUserWhatsapp.jpg',
        newContact.ultima_conexion = 'ayer'
        newContact.mensajes = []
        setContactListData([...contactListData, newContact])
        guardarMensaje(newContact)
        navigate('/')
    }

    const handleOpenCloseDropDownMenu = () => {
        setDropdown(!dropdown)
    }
    const clearLocalStorage = () => {
        localStorage.clear('historial')
        setDropdown(!dropdown)

    }

    return (
        <div>
            <GlobalContext.Provider value={
                {
                    getContactDataById,
                    getContactIndex,
                    updateContact,
                    contactListData,
                    setContactListData,
                    handleChangeContentValue,
                    textInput,
                    setTextInput,
                    searchContact,
                    handleChangeContent,
                    handleCreateContact,
                    dropdown,
                    setDropdown,
                    handleOpenCloseDropDownMenu,
                    clearLocalStorage

                }
            }>
                {children}
            </GlobalContext.Provider>
        </div>
    )
}

export const useGlobalContext = () => {

    return useContext(GlobalContext)

}


