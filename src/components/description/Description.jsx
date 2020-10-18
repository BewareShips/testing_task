import React from "react";
import s from "./description.module.scss";
import { FaRegCheckSquare } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setData} from "../../store/actions/postReducer"
import { useState } from "react";

function Description({active}) {
  const  dispatch = useDispatch()
  const [tag, setTag] = useState(active.heading)
  const [text, setText] = useState(active.description)
  debugger;
  
  // const onTagChange = (e) =>{
  //   setTag(e.target.value)
  // } 

  const onTagChange = (e) =>{
   setTag(e.target.value)
  } 

  const onTextChange = (e) =>{
    setText(e.target.value)
  } 

  const onSendData = () => {
    dispatch(setData(tag,text,active.id))
  }

  const onCancel = () =>{
    setTag(active.heading)
    setText(active.description)
  }

  return (
    <div className={s.desc}>
      <span className={s.desc__main}>Редактирование элемента</span>
      <textarea className={`${s.desc__title} ${s.desc__text}`} onChange={onTagChange}
      value={tag}> 
      </textarea>
      <textarea className={`${s.desc__specification} ${s.desc__text}`}  onChange={onTextChange} value={text}>
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
