import React from "react";
import s from "./description.module.scss";
import { useDispatch } from "react-redux";
import { setData,setActiveTag,setActiveText,cancelChanging,setActiveVisible} from "../../store/actions/postReducer"
import { useState} from "react";

function Description({activeItemTag,activeItemText,activeItem,isVisible}) {
  const  dispatch = useDispatch()
  const [visibleActiveItem, setVisibleActiveItem] = useState(true);

  const onTagChange = (e) =>{
    dispatch(setActiveTag(e.target.value))
  } 
  const onTextChange = (e) =>{
    dispatch(setActiveText(e.target.value))
  } 
  const onSendData = () => {
    dispatch(setData(activeItemTag,activeItemText,activeItem,visibleActiveItem))
  }
  const onCancel = () =>{
    typeof activeItem === 'number' && dispatch(cancelChanging())
  }

  const onChangeVisible = () =>{
    setVisibleActiveItem(!visibleActiveItem)
  }
  const isDisabled =  activeItem === null
  return (
    <div className={s.desc}>
      <span className={s.desc__main}>Редактирование элемента</span>
      <textarea disabled = {isDisabled} className={`${s.desc__title} ${s.desc__text}`} onChange={onTagChange}
      value={activeItemTag}> 
      </textarea>
      <textarea disabled = {isDisabled} className={`${s.desc__specification} ${s.desc__text}`}  onChange={onTextChange} value={activeItemText}>
      </textarea>
      <div className={s.desc__confirm}>

        <div >
          <input type="checkbox" id="agree"  checked={visibleActiveItem} onChange={onChangeVisible}/><label htmlFor="agree"  className={s.desc__text} >Видимый</label>  
        </div>
      </div>
      <div className={s.desc__groups}>
        <button className={s.desc__apply} onClick={onSendData} disabled = {isDisabled}><span className={s.desc__text} >Применить</span></button>
        <button className={s.desc__cancel} onClick={onCancel} disabled={isDisabled}><span className={s.desc__text} >Отменить</span></button>
      </div>
    </div>
  );
}

export default Description;
