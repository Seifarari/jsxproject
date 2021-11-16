import './App.css';
import React from 'react';
import img from './imageInSrc.jpg.jpg'
import "./style.css"

function App() {
  return (
    <div>
  <div style={{"border":"solid 1px black","max-width":"100vw"}}>
    <h1 className="title red">Your name here</h1>
    <br />
    <img src={img} alt="mela"/>
    <br />
    <img src="/imageInPublic.jpg.jpg" alt="sahhet"/>
  </div>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4"  />
  </video>
</div>
  );
}

export default App;
