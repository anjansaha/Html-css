import { useState } from "react";


function App() {
  let time = new Date().toLocaleTimeString();
  const [ctime, uptime]= useState(time);
  const upDateTime=()=>{
    let time = new Date().toLocaleTimeString();
    uptime(time);
  }
  setInterval(upDateTime,1000);

  return (

   <>
    <h1>{ctime}</h1>
   </>
  );
};

export default App;
