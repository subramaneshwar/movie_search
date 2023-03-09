import React, { useContext } from 'react'
import { Globals } from '../App';
import './cards.css'
function Cards() {
  const contexts = useContext(Globals)
  console.log(contexts)
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'10px',flexWrap:'wrap' }}>
       {contexts.map((ele)=>{
            console.log(ele)
            return <div className="cards">
            <h3>{ele.Title}</h3>
            <img src={ele.Poster} alt="img is none or loading" />
            <p>{ele.Year}</p>

        </div>})}

    </div>
  )
}

export default Cards