import React from "react";
import s from "./row.module.scss";
import { FaRegSquare, FaEye } from "react-icons/fa";
import { useSelector } from "react-redux";

function Row({ heading, description, id, onClick }) {
  const {activeItem} = useSelector(({postReducer}) =>{
    return{
      activeItem: postReducer.activeItem
    }
  })
  
  return (
    
    <div className={`${s.row} ${activeItem === id ? s.row__active : s.row__usual}`} onClick={(id) => onClick(id)}>
      
        <div className={`${s.row__icon} ${s.row__square}`}>
          <FaRegSquare />
        </div>
        <span>{heading}</span>
        <span>{description}</span>
        <div className={`${s.row__icon} ${s.row__eye}`}>
          <FaEye />
        </div>
      </div>
  );
}

export default Row;
