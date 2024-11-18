import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";


export default function Header(){

    const {isDark} = useContext(ThemeContext);
    const user = useContext(UserContext);

    console.log(user);

    return(
        <header className="header" 
        style={
                 {backgroundColor: isDark ? "black" : "lightgray",
                  color: isDark ? 'white' : "black"
                   }
        }>
            <h1>Welcome here! {user}님</h1>
        </header>
    );
}