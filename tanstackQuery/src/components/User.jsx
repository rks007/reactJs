import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

function User() {

    //tanstack query cache data for five minutes by default, you can also chnage the cache timing

    const fetchData = () => {
        return axios.get("https://jsonplaceholder.typicode.com/users")
    }

    const { data, isLoading, isError } = useQuery({
        queryKey: ["getUsers"],//query key is just a name that depicts what you are doing with this query, like here we are fetching user data so getusers, queryKey is always a array of unique elements
        queryFn: fetchData,  //here you define the operation or function you want to execute  
    })
    console.log(data);
    console.log("loading",isLoading);
    console.log("error",isError);

    if(isLoading){
        return <div style={{textAlign:"center", marginTop:"300px"}}>
            <h1>loading....</h1>
        </div>
    }
    

  return (
    <div>
        {
            data.data.map((user) => (
                <div key={user.id}>
                    <h1>{user.name}</h1>
                </div>
            ))
        }
    </div>
  )
}

export default User