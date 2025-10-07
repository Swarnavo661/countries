import { useEffect, useState } from "react";

export function useFetch()
{
    const[data,setData] = useState([])

    useEffect(() => 
    {
        fetch('https://dummyjson.com/users')
        .then((res) => res.json())
        .then((data) =>
            {
                console.log(data)
                setData(data.users)
            })
            .catch((Error) => 
            {
                console.log('Error:',Error);
            })
    }, [])

    return [data,setData]
}