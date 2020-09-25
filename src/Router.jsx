import React from 'react'
import Content from './components/Content/Content'
import Header from './components/Header/Header'

const Router = ()=>{
  return (
    <div className="row">
      <Header/>
      <Content/>
    </div>  
  )
}
export default Router