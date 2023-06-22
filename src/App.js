
import React from "react";

const api = {
  key: "dcba13edf62c3d0871b3ee90e21cc1a8",
  base: "https://home.openweathermap.org/api_keys",
}

function App() {

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April","May", "June","July","August","September","October","November","December"];
    let days = ["Sundays", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"];

    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    let date = d.getDate();

    return `${day} ${date} ${month} ${year}`
  }


  return (
    <div className="app">
    <main>
    <div className="search-box">
    <input 
    type="text" className="search-bar" placeholder="Search..."/>
    </div>

    <div className="location-box" >
      <div className="location">Somanya, GH</div>
      <div className="date">{dateBuilder(new Date())}</div>
    </div>
    </main>
     
    
    </div>
  );
}

export default App;
