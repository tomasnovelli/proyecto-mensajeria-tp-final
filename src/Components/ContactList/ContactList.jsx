import React from 'react'
import ContactCards from '../ContactCards/ContactCards'

const ContactList = ({dataMock}) => {

    return (
        <>
            {
                dataMock.map((contacts) => {
                    return (
                        <ContactCards contactData={contacts} key={contacts.id} />
                    )
                })
            }
        </>
    )
}

export default ContactList
