import { useEffect, useState } from "react"

export function useGetWindowSize()  //it is custom Hook
{   
    // const[width, setWidth] = useState(window.innerWidth) //for width 
    // const[height, setHeight] = useState(window.innerWidth) //for height 

    const[size, setSize] = useState({width:window.innerWidth, height:window.innerHeight})

    useEffect(() => 
    {
      window.addEventListener('resize',function()
      {
        setSize({width:window.innerWidth, height:window.innerHeight})
      })
    }, [])

    return size //here i wanna return window size
}