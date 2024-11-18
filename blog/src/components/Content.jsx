import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";


export default function Content(){

    const {isDark} = useContext(ThemeContext);
    const user = useContext(UserContext);


    return(
        <div className="content" 
            style={{
                    backgroundColor: isDark ? "black" : "white",
                    color: isDark ? 'white' : "black"
             }}
        >
           <p>{user}님. 여기에 온 것을 환영합니다.</p>
        </div>
    )
}