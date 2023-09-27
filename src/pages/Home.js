import React, { useEffect, useRef, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore';
import { db } from "../firebase/config"
import Postcard from '../components/Postcard';
import useTitle from '../hooks/useTitle';

const Home = () => {
  
  const [posts, setPosts] = useState([]);
  const [toggle, setToggle] = useState(false)
  const postRef = useRef(collection(db, "posts"));
  useTitle("Home");

  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(postRef.current);
      setPosts(data.docs.map((document)=> (
        {...document.data(), id: document.id})
        ))
    }
    getPosts();
  }, [postRef,toggle])

  return (
    <section>
      {posts.map(post => (
        <Postcard key={post.id} post={post} toggle={toggle} setToggle={setToggle}/>
      ))}
    </section>
  )
}

export default Home
