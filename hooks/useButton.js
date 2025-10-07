import { useEffect, useState } from "react";

export function useButton()
{
    const[button, setButton] = useState(false)

    useEffect(() => 
    {   
        setButton(true)
    }, [])
    return [button, setButton] 
}