import { useEffect, useState } from "react"

const Card = (props) => {
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(100)
  // [] dependency array or ya optional haa.
  useEffect(() => {
    console.log("component mounted")

    // return () => {
    //   console.log("component unmount");

    // }
  } , [counterTwo])
  return (
    <div style={{
      margin: '10px 3px',
      border: '1px solid black',
      padding: '10px',
      borderRadius: '5px'
    }}>
      <h1>Counter one {counterOne}</h1>
      <button onClick={()=>setCounterOne(counterOne + 1)}>add counter one</button>

      <br /><br />
      <h1>Counter two {counterTwo}</h1>
      <button  onClick={()=>setCounterTwo(counterTwo + 5)}>add counter two</button>
      {/* <img src={props.src} alt="image" /> */}
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default Card



// use effect ma jab dependency array nahi dainga to har state change pa use effect run hoga.

// use effect ma agar dependency array dainga to sirf aik baar component mount hona pa run hoga.

// agar kisi state ka change pa use effect run krwana ha to us dependency array ma wo state likhdo.