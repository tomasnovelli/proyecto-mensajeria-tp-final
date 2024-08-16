import React, { useEffect, useState } from 'react'
import FetchingPostList from '../FetchingPostList/FetchingPostList'

const FetchingComunity =  () => {
        const [info, setInfo]= useState()

      
        const fetchInfo = async() =>{
          const URL_API = 'https://jsonplaceholder.typicode.com/'
          const answer = await fetch(URL_API + '/posts', {
              method: 'GET',
          })
          setInfo(await answer.json())
        }
        useEffect(() => {
          fetchInfo()
        }, [])
  return (
    <>
        <div>
           {info && <FetchingPostList info={info}/>}
        </div>
    </>
  )
}

export default FetchingComunity
