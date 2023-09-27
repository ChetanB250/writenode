import React from 'react'
import { addDoc, collection } from 'firebase/firestore'; 
import { db, auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

const CreatePost = () => {
  const navigate = useNavigate();
  useTitle("Create Post")
  async function handleCreatePost(event) {
    event.preventDefault();
    const postRef = collection(db, "posts");
    const document = {
      title: event.target.title.value,
      description: event.target.description.value,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid
      }
    }
    await addDoc(postRef, document);
    navigate("/");
  }
  return (
    <section className='create'>
      <div className="heading">
        <h1>Add New Post</h1>
      </div>
      <form onSubmit={handleCreatePost} className="createPost">
        <input className='title' type="text" name="title" placeholder='Title' maxLength="50" required/>
        <textarea name="description" className='description' type="text"  placeholder='description' maxLength="600" required></textarea>
        <button className='submit' type='submit'>Create</button>
      </form>
    </section>
  )
}

export default CreatePost
