import React from 'react'
import './contactListFooterStyles.css'
import { useGlobalContext } from '../GlobalContext/GlobalContext';

const ContactListFooter = () => {
  const { setNavigationState } = useGlobalContext()
  const sitesNavigation = [
    {
      icon: "bi bi-chat-left-text-fill",
      site: 'contacts'

    },
    {
      icon: "bi bi-people-fill",
      site: 'comunity'
    }
  ]
  
  const handleChangeSite = (site) => {
    setNavigationState(site)
  }

  return (
    <div className='contactListfooter'>
      {sitesNavigation.map(categoria => {
          return(
            <button key={categoria.site} className='btn-contactFooter' onClick={() => handleChangeSite(categoria.site)}>
                <i className={categoria.icon}></i>
                <span className='btn-footerText'>{categoria.site}</span>
            </button>
          )
        })
      }
    </div>
  )
}

export default ContactListFooter
