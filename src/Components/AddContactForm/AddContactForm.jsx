import React, { useState } from 'react'
import { useGlobalContext } from '../GlobalContext/GlobalContext'
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineSaveAlt } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
import './AddContactFormStyles.css'
import { guardarMensaje } from '../../Helpers/chatData';
import {v4 as uuid} from 'uuid'
const AddContactForm = () => {

    const {contactListData, setContactListData  } = useGlobalContext()
    const navigate = useNavigate()

    const selectCountryNumberOptions = [
            'AR +54',
            'MX +52',
            'CH +56',
            'ES +34',
            'US +1'   
    ]
        
    const formSchema = {
        nombre: {
            validate: (value) => {
                return Boolean(value) && value.length > 2 && value.length < 20
            },
            errorText: 'El nombre debe tener entre 2 a 19 caracteres alfanumericos'
        },
        phoneCountryId: {
            validate: (value) => {
                return Boolean(value)
            },
            errorText: 'Debes seleccionar un pais'
        },
        phoneNumber: {
            validate: (value) => {
                return Boolean(value) && !isNaN(value) && value.length === 10
            },
            errorText: 'El numero de telefono debe tener 10 caracteres numericos'
        },
        mailStorage: {
            validate: (value) => {
                return Boolean(value) && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)
            },
            errorText: 'Debes ingresar un mail valido'
        }
    }

    const [errors, setErrors] = useState({})

    const addError = (error, origin) => {
        setErrors((prevState) => ({ ...prevState, [origin]: error }))
    }
    const cleanError = (origin) => {
        setErrors((prevState) => ({...prevState}, delete errors[origin]))
    }
    const handleCreateContact = (e) => {
        e.preventDefault()
        const newContactForm = e.target
        const newContactFormValues = new FormData(newContactForm)
        const newContactValues = {}
        for (const prop in formSchema) {
            newContactValues[prop] = newContactFormValues.get(prop)
            const validateResult = formSchema[prop].validate(newContactValues[prop])
            console.log(validateResult)
            if (!validateResult) {
                addError(formSchema[prop].errorText, prop)
            } else {
                cleanError(prop)
            }
        }
        newContactValues.id = uuid()
        newContactValues.thumbnail = '/images/newUserWhatsapp.jpg',
        newContactValues.ultima_conexion = 'ayer'
        newContactValues.mensajes = []

        if(errors === true){
            setContactListData([...contactListData, newContactValues])
            guardarMensaje(newContactValues)
            navigate('/') 
        }
        
    }
    return (
        <form className='addContactForm' onSubmit={handleCreateContact}>
            <div className='addContactInputsContainer'>
                <div className='newUserNameContainer'>
                    <div>
                        <i className="formIconsSize bi bi-person-fill"></i>
                    </div>
                    <label htmlFor="nombre"></label>
                    <input className='inputsBorder' type="text" placeholder='Nombre' name='nombre' id='nombre' autoComplete="off" />
                    {errors.nombre && <span className='errorAlertName'>{errors.nombre}</span>}
                </div>

                <div className='newUserPhoneNumberContainer'>
                    <div className='phoneNumberIconContainer formIconsSize'>
                        <MdOutlinePhone />
                    </div>
                    <div className='countrySelectContainer'>
                        <label className='countrySelectLabel' htmlFor="phoneCountryId">País</label>
                        <select className='inputsBorder' name="phoneCountryId" id="phoneCountryId">
                            <option value={''} disabled>Seleccionar</option>
                            {selectCountryNumberOptions.map((option, index) => {
                                return <option
                                    key={index + option}
                                    value={option}>{option}</option>
                                })
                            }
                        </select>
                        {errors.phoneCountryId && <span className='errorAlertNCountry'>{errors.phoneCountryId}</span>}
                    </div>
                    <label htmlFor="phoneNumber"></label>
                    <input className='phoneNumber inputsBorder' type="text" placeholder='Teléfono' name="phoneNumber" id="phoneNumber" autoComplete="off" />
                    {errors.phoneNumber && <span className='errorAlertNumber'>{errors.phoneNumber}</span>}
                </div>

                <div className='newUserMailStorageContainer'>
                    <div className='mailStorageIcon formIconsSize'>
                        <MdOutlineSaveAlt />
                    </div>
                    <div className='mailStorageInputContainer'>
                        <label htmlFor="mailStorage">Guardar en</label>
                        <input className='inputsBorder' type="text" placeholder='nombre@gmail.com' name='mailStorage' id='mailStorage' autoComplete="off" />
                        {errors.mailStorage && <span className='errorAlertMail'>{errors.mailStorage}</span>}
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
