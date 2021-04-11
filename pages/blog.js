import React from 'react'
import { getPosts } from '../api/posts'

const testPage = props => (
  <ul>
    {props.posts.map(post => (
      <li key={post.id}>{post.title}</li>
    ))}
  </ul>
)

// const testPage = (props)=>(<ul>{props.posts.map(posts => (
//   <li key={post.id}>{posts.title}</li>
// ))}</ul>)

export default testPage

testPage.getInitialProps = async () => {
  const posts = await getPosts()
  return { posts: posts }
}
