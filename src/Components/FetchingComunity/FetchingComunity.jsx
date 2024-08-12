import React from 'react'
import FetchingPostList from '../FetchingPostList/FetchingPostList'

const FetchingComunity = async () => {
        const URL_API = 'https://jsonplaceholder.typicode.com/'
        const answer = await fetch(URL_API + '/posts', {
            method: 'GET',
        })
        const apiInfo = await answer.json()
  return (
    <>
        <div>
            {apiInfo}
        </div>
    </>
  )
}

export default FetchingComunity
