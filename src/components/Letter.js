import { useState } from "react";

function Letter({
  letters,
  onChoose
}){
    const listItems = letters.map((letter, index) =>
      <li className="list-inline-item" key={index}>
        <button type="button" className="btn btn-warning rounded-pill" onClick={onChoose}><strong>{letter}</strong></button> 
      </li>          
    )

    return(
        <ul className='list-inline list-unstyled'>{listItems}</ul>
    )

}

export default Letter;

//Useful links:
//https://bobbyhadz.com/blog/react-pass-function-as-prop