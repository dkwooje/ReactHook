
import useFetch from "./UseFetch";

const baseUrl = "https://jsonplaceholder.typicode.com";


function App() {

  const {data: userData} = useFetch(baseUrl,"users");
  const {data: postData} = useFetch(baseUrl,"users");


  return (
    <div>
      <h1>user</h1>
      {userData && <pre>{JSON.stringify(userData[1],null,2)}</pre>}
      <h1>post</h1>
      {postData && <pre>{JSON.stringify(userData[1],null,2)}</pre>}
    </div>
  );
}

export default App;
//