import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contacts from './Pages/Contacts/Contacts'
import Chat from './Pages/Chat/Chat'
import UserInfo from './Pages/UserInfo/UserInfo'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Contacts />} />
        <Route path='/chat/:contact_id' element={<Chat />}/>
        <Route path='/chat/:contact_id/info' element={<UserInfo />}/>
      </Routes>
    </>
  )
}

export default App