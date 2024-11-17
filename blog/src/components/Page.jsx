import Content from "./Content"
import Footer from "./Footer"
import Header from "./Header"

export default function Page({isDark, setIsDark}){
    return(
        <div className="page">
            <Header isDark={isDark} />
            <Content isDark={isDark} />
            <Footer isDark={isDark} setIsDark={setIsDark}/>
        </div>
    )
}