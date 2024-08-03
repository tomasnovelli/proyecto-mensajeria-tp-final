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
    const navigate = useNavigate()
    const getContactDataById = (id) => contactListData.find(contactos => Number(contactos.id) === Number(id))


    const updateContact = (contactData) => {
        const updatedContactListData = [
            ...contactListData
        ]
        const contactIndex = updatedContactListData.findIndex(contact => contact.id === contactData.id)
        updatedContactListData[contactIndex] = contactData
        setContactListData(updatedContactListData)
        guardarHistorial(updatedContactListData)

    }

    const handleChangeContentValue = (e) => {
        setTextInput(e.target.value)

    }
    const handleChangeContent = (e) =>{
        setSearchContact(e.target.value)
    }
    useEffect(() => {
        const contactList = obtenerHistorial()
        if (searchContact != '') {
            const newContactList = contactList.filter(contact => contact.nombre.toLowerCase().includes(searchContact.toLowerCase()))
            setContactListData(newContactList)
        } else {
            setContactListData(contactList)
        }
    }, [searchContact])

    const handleSubmit = (e) => {
        e.preventDefault()
        const nuevoMensaje = {
            author: 'Yo',
            text: textInput,
            state: 'entregado',
            date: '13:52',
            id: uuid()
        }
        const updatedContactData = {
            ...contactData,
            mensajes: [
                ...contactData.mensajes,
                nuevoMensaje
            ]
        }
        updateContact(updatedContactData)
        setTextInput('')
    }
    const handleCreateContact = (e) =>{
        e.preventDefault()
        const newContactForm = e.target
        const newContactFormValues = new FormData(newContactForm)
        const newContact = {
            nombre: '',
            phoneCountryId: '',
            phoneNumber: '',
            mailStorage: '',
            mensajes: []
        }
        for(let prop in newContact){
            newContact[prop] = newContactFormValues.get(prop)
        }
        newContact.id = uuid()
        newContact.thumbnail = '/images/newUserWhatsapp.jpg',
        newContact.ultima_conexion = 'ayer'
        console.log(newContact)
        setContactListData([...contactListData, newContact])
        guardarMensaje(newContact)
        navigate('/')
    }
    

    return (
        <div>
            <GlobalContext.Provider value={
                {
                    getContactDataById,
                    updateContact,
                    contactListData,
                    handleChangeContentValue,
                    handleSubmit,
                    textInput,
                    setTextInput,
                    searchContact,
                    handleChangeContent,
                    handleCreateContact

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


