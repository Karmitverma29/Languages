import React from "react";
import "./all.css";
function All(){

    const[ALL,setAll]=React.useState([]);
console.log(ALL);
    let getdata=async()=>{


        let res= await fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:all`);
        let data=await res.json();
        setAll(data.items);
    
    
    }
    
    React.useEffect(()=>{
        getdata();
    },[])
    return <div className="cards">

{
    ALL.map((elem)=>{

        return <div style={{border:"2px solid black"}} key={elem.id}>

<h1>Repo Name: {elem.full_name}</h1>
<h2>Language: {elem.language}</h2>
<h3>Forks count: {elem.forks_count}</h3>
            </div>

    })
}
    </div>
}

export default All;