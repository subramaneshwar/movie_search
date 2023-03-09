import { createContext, useContext, useEffect, useState } from 'react';
import './App.css';
import Cards from './Components/Cards';
import Search from './Components/Search';
export const Globals = createContext()

function App() {
  const [search, setsearch] = useState("")
  const [Searchname, setSearchname] = useState("iron")
  const [response, setresponse] = useState([])
  {console.log(Searchname)}
   useEffect( () => {

    async function src() {

      const resp = await fetch(`https://www.omdbapi.com/?s=${Searchname}&apikey=dc8abc14`)
      const data = await resp.json()
      console.log(data.Search);
      setresponse(data.Search)
    }
    
    src()
    
  }, [Searchname])
  console.log(response,"res")
  
  return (
    <Globals.Provider value={response}>
    <div className="App">
      <h1 style={{background:'#2c2e37',color:'white',width:'100%',fontSize:'2.5rem',textAlign:'center'}}>Hooked</h1>
      <Search setSearchname={setSearchname} setsearch={setsearch} search={search} />
      <Cards response={response} setresponse={setresponse} />
    </div>
    </Globals.Provider>
  );
}

export default App;
