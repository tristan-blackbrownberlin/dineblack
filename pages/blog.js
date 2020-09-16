import { getPosts } from '../api/posts';
import {useEffect} from "react";




const testPage = (props) => (
  <ul>
    {props.posts.map(post => (
      <li key={post.id}>{post.title}</li>
    ))}
  </ul>
);


// const testPage = (props)=>(<ul>{props.posts.map(posts => (
//   <li key={post.id}>{posts.title}</li>
// ))}</ul>)

export default testPage


testPage.getInitialProps = async () => {
  const posts = await getPosts();
  return {posts: posts}
}
