import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";
import "./styles.css";
import axios from "react"

export default function App() {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(true)
  const [error,setError]= useState(false)
  const [page,setPage]= useState(1)


  useEffect(()=>{
   async function fetchData(){
     setLoading(true)
     const mydata= await fetch(`https://json-server-mocker-masai.herokuapp.com/candidates?_page=${page}&_limit=5`).then((d)=>d.json())
     setLoading(false)
     setData(mydata)
   }
   fetchData()
   

  },[page])



// const fetchData = async()=>{
//   setLoading(true);
//   console.log("try")
//   axios({
//     method:"get",
//     url:"http://localhost:3004/candidate"
//   })
//   .then(res=>{
//     console.log(res)
//     setData(res.data)
//     setLoading(false)
//   })
//   .catch(err=>{
//     setError(true)
//     setLoading(false)
//     console.log("riyaz")
//   })
// } 


// fetchData()


  return (
    <div className="App">
      <div>
        {loading && <div id="loading-container">...Loading</div>}
        <Button id="SORT_BUTTON" title={`Sort by Ascending Salary`} />
        <Button title="PREV" id="PREV" onClick={()=>( setPage(page-1))} />
        <Button id="NEXT" title="NEXT" onClick={()=>( setPage(page+1))} />
      </div>
      {data.map((item) => {return(
        <CandidateCard name= {item.name} title={item.title} pic={item.avatar} sal={item.salary} company={item.company_name}/>
      )})}
    </div>
  );
}
