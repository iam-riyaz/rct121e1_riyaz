import styles from "./CandidateCard.module.css";
import {useState, useEffect} from "react"

function CandidateCard({name,title,pic,sal,company}) {

  // const [data, setData] = useState([]);
  // const [loading,setLoading] = useState(false)
  // const [error,setError]= useState(false)

  // useEffect(()=>{
  //  async function fetchData(){
  //    setLoading(true)
  //    const mydata= await fetch("http://localhost:3004/candidate").then((d)=>d.json())
  //    setLoading(false)
  //    setData(mydata)
  //  }
  //  fetchData()
   

  // },[])




  return (
    <div data-testid="candidate-container" className={styles.container}>
      <img src={pic} alt="logo" width="100px" height="100px" />
      <div>
        
        <div>Name:{name}</div>
        <div>{title} & {company}</div>
      </div>
      <div>$ {sal}</div>
    </div>
  );
}

export default CandidateCard;
