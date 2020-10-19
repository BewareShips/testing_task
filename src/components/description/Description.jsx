import React from "react";
import s from "./description.module.scss";
import { FaRegCheckSquare } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setData,setActiveTag,setActiveText,cancelChanging} from "../../store/actions/postReducer"
import { useState, useEffect } from "react";

function Description({activeItemTag,activeItemText,activeItem}) {
  const  dispatch = useDispatch()
  const [tag, setTag] = useState(activeItemTag)
  const [text, setText] = useState(activeItemText)
  
  // const onTagChange = (e) =>{
  //   setTag(e.target.value))
  // } 

  // debugger;
  // useEffect(() => {
  //   setText(active.description)
  // }, []);
  // debugger;

  const onTagChange = (e) =>{
    dispatch(setActiveTag(e.target.value))
  } 

  const onTextChange = (e) =>{
    dispatch(setActiveText(e.target.value))
  } 

  const onSendData = () => {
    dispatch(setData(activeItemTag,activeItemText,activeItem))
  }

  const onCancel = (activeItem) =>{
    dispatch(cancelChanging(activeItem))
  }

  return (
    <div className={s.desc}>
      <span className={s.desc__main}>Редактирование элемента</span>
      <textarea className={`${s.desc__title} ${s.desc__text}`} onChange={onTagChange}
      value={activeItemTag}> 
      </textarea>
      <textarea className={`${s.desc__specification} ${s.desc__text}`}  onChange={onTextChange} value={activeItemText}>
      </textarea>
      <div className={s.desc__confirm}>
        <div className={s.desc__icon}>
          <FaRegCheckSquare />
        </div>
        <span className={s.desc__text}> Видимый</span>
      </div>
      <div className={s.desc__groups}>
        <button className={s.desc__apply}><span className={s.desc__text} onClick={onSendData}>Применить</span></button>
        <button className={s.desc__cancel}><span className={s.desc__text} onClick={onCancel}>Отменить</span></button>
      </div>
    </div>
  );
}

export default Description;
