import React from 'react';
import s from "./Navbar.module.css"
import { Link } from 'react-router-dom';

const Navbar = ()=>{
  const nameOfNavigation = [
    "inbox",
    "starred",
    "snoozed",
    "sent"
  ]
  return (
    <div className={"container " + s.wrapper }>
      <div className={"row " + s.wrapper__add }>
        <Link className="btn-floating btn-large waves-effect waves-light red" ><i class="material-icons">add</i></Link>
      </div>
      <div className={s.list}>
        
      {
        nameOfNavigation.map(e=>{
          return (
            <div className={"row " + s.list__btn}>
              <Link className="waves-effect waves-red btn-flat" to={e}>{e}</Link>
            </div>
          )
        })
      }
      
      </div>
      

    </div>
  )
}
export default Navbar