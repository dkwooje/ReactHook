
import { useState, useEffect } from "react";

export function useDebounce(value,delay){
    const [debouncedValue,setDebouncedValue] = useState(value);

    useEffect(()=>{
        const timerID = setTimeout(()=>{
          setDebouncedValue(value);
        }, delay)
    
        return () =>{
          clearTimeout(timerID);
        }        
    },[value, delay]) 

    return debouncedValue;
}