import React from 'react'
import './messageStyle.css'

const Message = ({ author, text, date, state }) => {

    return (
        <>

            <div className='chat-container'>
                {
                    author == 'Yo'
                        ? <div className='yoMessage'>
                            <span className='author'>{author}</span>
                            <p className='messageContent'>{text}</p>
                            <div className='footerMessage'>
                                <span className='date'>{date}</span>
                                {state == 'visto'
                                    ? <span className='checkSeen'><i className="bi bi-check-all"></i></span>
                                    : <span className='checkDelivered'><i className="bi bi-check-all"></i></span>
                                }
                            </div>
                        </div>
                        : <div className='otroMessage'>
                            <span className='author'>{author}</span>
                            <p className='messageContent'>{text}</p>
                            <div className='footerMessage'>
                                <span className='date'>{date}</span>
                            </div>
                        </div>
                }
            </div>
        </>
    )

}

export default Message
