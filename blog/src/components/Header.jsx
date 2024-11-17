

export default function Header({isDark}){
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