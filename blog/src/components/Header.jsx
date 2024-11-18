import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


export default function Header(){

    const {isDark} = useContext(ThemeContext);

    return(
        <header className="header" 
        style={
                 {backgroundColor: isDark ? "black" : "lightgray",
                  color: isDark ? 'white' : "black"
                   }
        }>
            <h1>Welcome here!</h1>
        </header>
    );
}