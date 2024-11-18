import Content from "./Content"
import Footer from "./Footer"
import Header from "./Header"

export default function Page(){

    return(
        <div className="page">
         <Header />
         <Content  />
         <Footer />
        </div>
    )
}

//중간 컴포넌트로서 자녀컴포넌트에 props를 보낸다.
//하지만 usecontext를 사용하면 중간 컴포넌트에 props를 보내지 않아도 자녀 컴포넌트에 데이터를 보낼 수 있다..