import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './addContactStyle.css'
import { useGlobalContext } from '../../Components/GlobalContext/GlobalContext'

const AddContact = () => {
    const {handleCreateContact} = useGlobalContext()

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

    const handleContactChangeValue = (e) =>{
        const valueToChange = e.target.name
        const newValue = e.target.value
        setNewContact({ ...newContact, [valueToChange]: newValue })
    }

    return (
        <div className='addContactContainer'>
            <div>
                <Link to='/'><i className="backArrow bi bi-arrow-left-short"></i></Link>
                <h2>Nuevo Contacto</h2>
            </div>
            <div>
                <form onSubmit={handleCreateContact}>
                    <div>
                        <label htmlFor="Nombre"><i className="bi bi-person-fill"></i></label>
                        <input type="text" placeholder='nombre' name='nombre' id='Nombre' onChange={handleContactChangeValue} value={newContact.nombre} autoComplete="off" />
                    </div>

                    <div>
                        <label htmlFor="phoneCountryId">País</label>
                        <select name="phoneCountryId" id="phoneCountryId" onChange={handleContactChangeValue} value={newContact.phoneCountryId}>
                            {selectCountryNumberOptions.map((option, index) => {
                                return <option 
                                key={index + option} 
                                value={option}>{option}</option>
                                })
                            }
                        </select>

                        <label htmlFor="phoneNumber">Teléfono</label>
                        <input type="text" placeholder='Teléfono' name="phoneNumber" id="phoneNumber" onChange={handleContactChangeValue} value={newContact.phoneNumber} autoComplete="off" />

                    </div>
                    <label htmlFor="mailStorage">Guardar en</label>
                    <div>
                        <i className="bi bi-download"></i>
                        <input type="text" placeholder='nombre@gmail.com' name='mailStorage' id='mailStorage' onChange={handleContactChangeValue}value={newContact.mailStorage} autoComplete="off" />
                    </div>
                    <button type='submit'>Guardar</button>
                </form>
            </div>


        </div>
    )
}

export default AddContact
