import React from 'react';
import { AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import styled from 'styled-components'

function Pagination(props) {
   const {page,totalPages,LeftClick,RightClick} = props;
  
  return (
    <MenuStyle>
      <div className="menu-pages">
        <div className='btn' onClick={LeftClick}><AiOutlineDoubleLeft className='comp'/></div>
        <div className='page'>{page} de {totalPages}</div>
        <div className='btn' onClick={RightClick}><AiOutlineDoubleRight className='comp' /></div>
        
      </div>
    </MenuStyle>
  )
}

export default Pagination;

const MenuStyle = styled.div`
margin-left: 5vh;
width: 20vh;
margin-bottom: 2vh;

.menu-pages{
  display: flex;
  justify-content: space-between;
  width:100%;
}

.btn{
  display: inline-block;
  color:white;
  
}
.btn:hover{
  color:yellow;
}
.page{
  display: inline-block;
  color:white;
}

svg{
  width: 5vh;
  height:3vh}


`;