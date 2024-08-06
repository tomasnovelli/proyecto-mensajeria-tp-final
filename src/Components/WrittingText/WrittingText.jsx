import React from 'react'
import './writtingText.css'
import { useGlobalContext } from '../GlobalContext/GlobalContext'
import { v4 as uuid } from 'uuid'

const WrittingText = ({ contactData }) => {

  const { textInput, handleChangeContentValue, setTextInput, updateContact} = useGlobalContext()

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

  return (

    <div className='writtingText'>
      <form className='form' onSubmit={handleSubmit}>

        <div className='textArea'>
          <label htmlFor="text_input"></label>
          <i className="bi bi-emoji-smile smileFace"></i>
          <input className='textInput' placeholder='Mensaje' type="text" name='text' id='text' onChange={handleChangeContentValue} value={textInput} autoComplete="off" />
          <i className="bi bi-paperclip"></i>
          <i className="bi bi-camera"></i>
        </div>
        {
          !textInput || textInput === ' '
          ?<button className='disabled btn-submit ' type="submit" disabled><i className="bi bi-send-fill"></i></button>
          :
          <button className='btn-submit' type="submit"><i className="bi bi-send-fill"></i></button>
        }

      </form>
    </div>

  )
}

export default WrittingText
