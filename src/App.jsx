import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AddContact, Chat, Contacts, NotFound404, UserCall, UserInfo } from './Pages/index.js'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Contacts />} />
        <Route path='/chat/:contact_id' element={<Chat />}/>
        <Route path='/chat/:contact_id/info' element={<UserInfo />}/>
        <Route path='/chat/:contact_id/calling' element={<UserCall />}/>
        <Route path='/addContact' element={<AddContact />}/>
        <Route path='/*' element={<NotFound404/>}/>
      </Routes>
    </>
  )
}

export default App
