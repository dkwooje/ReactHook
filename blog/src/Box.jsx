import { useEffect, useState } from "react";



export default function Box({createBoxStyle}){
    const [style,setStyle] = useState({});

    useEffect(()=>{
        console.log('박스 키우기');
        setStyle(createBoxStyle());
    }, [createBoxStyle]);

    return <div style={style}></div>
}