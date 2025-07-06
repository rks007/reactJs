import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

function MutationHook() {

  const postData = () => {
    return axios.post("https://jsonplaceholder.typicode.com/posts",{
      title: "mutations"
    })
  }

  const mutation = useMutation({
    mutationKey:["postData"],
    mutationFn:postData,
    onSuccess: (data) => {
      console.log("post created successfully", data);
      
    } 
  })

  return (
    <div>
      <h1>Mutation</h1>
      <button onClick={mutation.mutate}>click for mutation</button>
    </div>
  )
}

export default MutationHook