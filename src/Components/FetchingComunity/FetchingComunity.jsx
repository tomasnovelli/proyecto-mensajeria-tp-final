import React from 'react'
import FetchingPostList from '../FetchingPostList/FetchingPostList'
import { render } from 'react-dom'

const FetchingComunity = async () => {
        const URL_API = 'https://jsonplaceholder.typicode.com/'
        const answer = await fetch(URL_API + '/posts', {
            method: 'GET',
        })
        const apiInfo = await answer.json()
        let renderPost = ''
        for(const post of apiInfo){
          renderPost = renderPost + `
          <div>
              <h2>${post.userId}</h2>
              <h3>${post.title}</h3>
              <p>${post.body}</p>
          </div>
          `
      }
  return (
    <>
        <div>
           {renderPost}
        </div>
    </>
  )
}

export default FetchingComunity
