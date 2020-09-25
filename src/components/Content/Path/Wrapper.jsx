import React from 'react';
import s from "./Wrapper.module.css"
import WrapperAction from './WrapperAction';

const Wrapper = ()=>{
  return (
    <div className={"row " + s.wrapper }>

      <div className={"row " + s.action}>
        <WrapperAction/>
      </div>

      <div className={"row " + s.currentContent}>
        crnt cntnt
      </div>

    </div>
  )
}

export default Wrapper