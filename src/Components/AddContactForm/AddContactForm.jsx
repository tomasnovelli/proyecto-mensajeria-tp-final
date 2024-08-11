import React, { useState } from 'react'
import { useGlobalContext } from '../GlobalContext/GlobalContext'
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineSaveAlt } from "react-icons/md";


import './AddContactFormStyles.css'
const AddContactForm = () => {
    const { handleCreateContact } = useGlobalContext()

    const selectCountryNumberOptions = [
        'AR +54',
        'MX +52',
        'CH +56',
        'ES +34',
        'US +1'
    ]
    const fomrSchema = {
        nombre: '',
        phoneCountryId: '',
        phoneNumber: '',
        mailStorage: ''
    }
    const [newContact, setNewContact] = useState(fomrSchema)

    const handleContactChangeValue = (e) => {
        const valueToChange = e.target.name
        const newValue = e.target.value
        setNewContact({ ...newContact, [valueToChange]: newValue })
    }

    return (
        <form className='addContactForm' onSubmit={handleCreateContact}>
            <div className='addContactInputsContainer'>
                <div className='newUserNameContainer'>
                    <div>
                        <i className="formIconsSize bi bi-person-fill"></i>
                    </div>
                    <label htmlFor="nombre"></label>
                    <input className='inputsBorder' type="text" placeholder='Nombre' name='nombre' id='nombre' onChange={handleContactChangeValue} value={newContact.nombre} autoComplete="off" />
                </div>

                <div className='newUserPhoneNumberContainer'>
                    <div className='phoneNumberIconContainer formIconsSize'>
                        <MdOutlinePhone />
                    </div>
                    <div className='countrySelectContainer'>
                        <label className='countrySelectLabel' htmlFor="phoneCountryId">País</label>
                        <select className='inputsBorder' name="phoneCountryId" id="phoneCountryId" onChange={handleContactChangeValue} value={newContact.phoneCountryId}>
                            {selectCountryNumberOptions.map((option, index) => {
                                return <option
                                    key={index + option}
                                    value={option}>{option}</option>
                            })
                            }
                        </select>
                    </div>
                    <label htmlFor="phoneNumber"></label>
                    <input className='phoneNumber inputsBorder' type="text" placeholder='Teléfono' name="phoneNumber" id="phoneNumber" onChange={handleContactChangeValue} value={newContact.phoneNumber} autoComplete="off" />
                </div>

                <div className='newUserMailStorageContainer'>
                    <div className='mailStorageIcon formIconsSize'>
                        <MdOutlineSaveAlt />
                    </div>
                    <div className='mailStorageInputContainer'>
                        <label htmlFor="mailStorage">Guardar en</label>
                        <input className='inputsBorder' type="text" placeholder='nombre@gmail.com' name='mailStorage' id='mailStorage' onChange={handleContactChangeValue} value={newContact.mailStorage} autoComplete="off" />
                    </div>
                </div>
            </div>
            <div className='btn-addContactContainer'>
                <button className='btn-addContactSubmit' type='submit'>Guardar</button>
            </div>
        </form>
    )
}

export default AddContactForm
