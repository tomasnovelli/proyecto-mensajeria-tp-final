import React from 'react'

const FetchingPostList = ({ apiInfo }) => {
    
  return (
    <div>
        {
            apiInfo.map((post) => {
                return (
                    <div key={post.id}>
                        <h2>{post.userId}</h2>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default FetchingPostList
