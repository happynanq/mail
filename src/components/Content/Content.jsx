import React from 'react';
import Navbar from './Navbar/Navbar';
import Wrapper from './Path/Wrapper';
import s from "./Content.module.css"


const Content = ()=>{
  return (
    <div className="row">
      <div className={"col s2 "+ s.navigagtion}>
        <Navbar/>

      </div>
      <div className={"col s9 " + s.content }>
        <Wrapper/>
      </div>

      <div className={"col s1 "+ s.helper}>
        3
      </div>

    </div>
  )
}

export default Content