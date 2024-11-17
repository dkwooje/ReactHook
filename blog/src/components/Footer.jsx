

export default function Footer({isDark, setIsDark}){

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