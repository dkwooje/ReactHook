import { useRef } from "react";


export function useThrottle(callback,delay){

    const lastRun =useRef(Date.now());

    return() =>{
        const timeElapsed = Date.now() - lastRun.current;

        if(timeElapsed >= delay){
            callback();
         lastRun.current = Date.now();
        } 
    }
}