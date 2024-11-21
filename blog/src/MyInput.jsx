import { forwardRef } from "react";

const MyInput = forwardRef((porps,ref)=>{
    return <input ref={ref} />;
});



export default MyInput;