
import React,{useState} from "react";

function Search() {
  const[search,setSearch] = useState("");
  console.log(search)
  return <div>
<input type="text" placeholder="Search item" onChange={(e)=>setSearch(e.target.value)}/>


  </div>

}

export default Search