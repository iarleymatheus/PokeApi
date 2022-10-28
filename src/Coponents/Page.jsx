import React from 'react';
import { AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineDoubleLeft } from "react-icons/ai";

function Pagination(props) {
   const {page,totalPages,LeftClick,RightClick} = props;
  
  return (
    <div>
      <div className="menu-pages">
        <button onClick={LeftClick}><AiOutlineDoubleLeft /></button>
        <div>{page} de {totalPages}</div>
        <button onClick={RightClick}><AiOutlineDoubleRight /></button>
      </div>
    </div>
  )
}

export default Pagination;