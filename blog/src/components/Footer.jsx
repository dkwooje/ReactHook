import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Footer(){

    const {isDark, setIsDark} = useContext(ThemeContext);

    function toggleTheme(){
        setIsDark(!isDark);
    }

    return(
        <footer className="footer" 
        style={{backgroundColor: isDark ? "black" : "lightgray"}}
        >
            <button className="button" onClick={toggleTheme}>
                Dark Mode
            </button>
        </footer>
    )
}