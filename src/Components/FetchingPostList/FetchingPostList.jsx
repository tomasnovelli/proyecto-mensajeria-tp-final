import React from 'react'

const FetchingPostList = ({ info }) => {
    
  return (
    <div>
        {
            info.map((post) => {
                return (
                    <div className='postCards' key={post.id}>
                        <h2 className='postUserId'>{post.userId}</h2>
                        <h3 className='postTitle'>{post.title}</h3>
                        <p className='postBody'>{post.body}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default FetchingPostList
