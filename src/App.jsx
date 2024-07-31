import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contacts from './Pages/Contacts/Contacts'
import Chat from './Pages/Chat/Chat'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Contacts />} />
        <Route path='/chat/:contact_id' element={<Chat />}/>
      </Routes>
    </>
  )
}

export default App
