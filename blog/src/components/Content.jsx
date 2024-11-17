

export default function Content({isDark}){
    return(
        <div className="content" 
            style={{
                    backgroundColor: isDark ? "black" : "white",
                    color: isDark ? 'white' : "black"
             }}
        >
           <p>여기에 온 것을 환영합니다.</p>
        </div>
    )
}