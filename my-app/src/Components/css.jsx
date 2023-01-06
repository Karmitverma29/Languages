import React from "react";
import "./Css.css"
function Css(){
    const[CSS,setCss]=React.useState([]);

    console.log(CSS)
    let getData=async()=>{

        let res= await fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:Css`);
        let data=await res.json();
        setCss(data.items);
    }


React.useEffect(()=>{
    getData();
},[])
    return <div className="cards">
{
   CSS.map((elem)=>{
        return <div style={{border:"2px solid black"}} key={elem.id}>
<h1>Repo name: {elem.full_name}</h1>
<h2>Language: {elem.language}</h2>
<h3>Forks count: {elem.forks_count}</h3>

            </div>
    })
}
    </div>
}

export default Css;