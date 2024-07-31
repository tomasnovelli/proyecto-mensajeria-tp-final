import React, { useState } from 'react'
import { createContext, useContext } from 'react'
import {  guardarHistorial, obtenerHistorial } from '../../Helpers/chatData'
import { useParams } from 'react-router-dom'

const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {

    const [contactListData, setContactListData] = useState(obtenerHistorial())
    const getContactDataById = (id) => contactListData.find(contactos => Number(contactos.id) === Number(id))

    const updateContact = (contactData) =>{
        const updatedContactListData = [
            ...contactListData
        ]
        const contactIndex = updatedContactListData.findIndex(c => c.id === contactData.id)
        updatedContactListData[contactIndex] = contactData
        setContactListData(updatedContactListData)
        guardarHistorial(updatedContactListData)

    }

    return (
        <div>
            <GlobalContext.Provider value={
                {
                    getContactDataById,
                    updateContact,
                    contactListData,
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


