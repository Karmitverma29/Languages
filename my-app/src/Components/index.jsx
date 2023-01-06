import React,{useEffect,useState} from "react";
import { useSyncExternalStore } from "react";
import {Routes,Route,Link} from "react-router-dom";
import All from "./all";
import Css from "./css";
import Html from "./html";
import Javascript from "./javascript";
function Home(){


    return <div>
<div style={{height:"60px",width:"100%",backgroundColor:"black",display:"flex",justifyContent:"space-around",color:"#ffffff",alignItems:"center"}} className="navbar">

<Link to="/"><h1>All</h1></Link>
<Link to="/html"><h1>HTML</h1></Link>
<Link to="/css"><h1>CSS</h1></Link>
<Link to="/javascript"><h1>JavaScript</h1></Link>


</div>

<Routes>
    <Route path="/" element={<All/>}/>
    <Route path="/html" element={<Html/>}/>
    <Route path="/css" element={<Css/>}/>
    <Route path="/javascript" element={<Javascript/>}/>

</Routes>
    </div>
}

export default Home;