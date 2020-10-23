import React, { useState } from "react";
import s from "./row.module.scss";
import {FaEye,FaEyeSlash  } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setCheck, setCategory,setVisible } from "../../store/actions/postReducer";


function Row({ heading, description,isChecked,isVisible, id}) {
  // const [ y, setY] = useState(false);
  const dispatch = useDispatch()
  const {activeItem} = useSelector(({postReducer}) =>{
    return{
      activeItem: postReducer.activeItem,
    }
  })

  // function ActionLink() {
  //   function handleClick(e) {
  //     e.preventDefault();
  //     console.log('По ссылке кликнули.');
  //   }
   
  const checkboxHandler = () =>{
    dispatch(setCheck(id,!isChecked))
  }

  const onSelectedCategory  = (e) => {
    e.stopPropagation()
    activeItem !== id && dispatch(setCategory(heading,description,id));  
  };
  return (
    <div className={`${s.row} ${activeItem === id ? s.row__active : isVisible ? s.row__usual : s.row__usual__desactive}`} onClick={(e) => onSelectedCategory(e)}>
        <div className={`${s.row__icon} ${s.row__square}`} onClick={e => e.stopPropagation() }>
          <input  type="checkbox" id={id}   checked={isChecked} onChange={()=> checkboxHandler()} />
          <label htmlFor={id}  className={s.desc__text} ></label>  
        </div>
        <span>{heading}</span>
        <span>{description}</span>
        <div className={`${s.row__icon} ${s.row__eye}`} onClick={(e)=>{
          e.stopPropagation()
          dispatch(setVisible(id,!isVisible))} } >
          {isVisible ? <FaEye/> :<FaEyeSlash/>}
        </div>
      </div>
  );
}

export default Row;
