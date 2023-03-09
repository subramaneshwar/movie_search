import React from 'react'

function Search({setSearchname,setsearch,search}) {
  return (
    <div className='search' style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'20px',height:'10vh'}}> 
        <input type="search" name="" id="" onChange={(e)=>setsearch(e.target.value)} style={{width:'400px',height:'25px',paddingLeft:'10px'}}/> 
        <button onClick={()=>{setSearchname(search)} } style={{height:'25px'}}>Search</button>
    </div>
  )
}

export default Search