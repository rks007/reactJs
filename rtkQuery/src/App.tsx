
import { FormEvent, useState } from 'react';
import './App.css'
import { post, useGetPostsQuery, usePostNewPostMutation } from './redux/api'

function App() {
  const {isLoading, isError, isSuccess, data, error} = useGetPostsQuery("");
  const [newPost] = usePostNewPostMutation()
  //console.log(isLoading, isError, isSuccess, data, error);

  // console.log(data?.map(post => post.body));
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  if(isLoading){
    return <div>
      loading...
    </div>
  }
  
  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const newpost: post = {
      title: title,
      body: body,
      userId: Math.random() * 1000,
      id: Math.random() * 1000
    }

    newPost(newpost);
    setTitle("");
    setBody("");
  }

  return (
    <>
      <h1>My App</h1>

      <form onSubmit={submitHandler}>
        <input 
        type="text"
        placeholder='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <input 
        type="text" 
        placeholder='body' 
        value={body}
        onChange={(e) => setBody(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Add</button>
      </form>

      {data?.map( post => {
        return <div key={post.id}>
           <h2>{post.title}</h2>
           <p>{post.body}</p>
        </div>
      })}
    </>
  )
}

export default App
