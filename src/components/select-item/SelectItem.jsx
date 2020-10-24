import React from "react";
import s from "./selectItem.module.scss";
import {FaPlus,FaEyeSlash,FaChevronUp,FaTrash,FaEye,} from "react-icons/fa";
import { useDispatch } from "react-redux";
import {addPostActionCreator,delPostActionCreator,setMainCheck,setMainEyeCheck,setAllVisible,setAllNotVisible} from "../../store/actions/postReducer";
import { useState } from "react";

function SelectItem({mainCheck,mainEyeCheck,ifMarkedElement}) {
  const dispatch = useDispatch();
  const addNewItem = () => dispatch(addPostActionCreator());

  const [x, setx] = useState(false)
  const [y, sety] = useState(false)

  const setAllNotVisibleHandler = () =>{
    sety(!y)
    dispatch(setAllNotVisible(y))
    setx(false)
  }

  const setAllVisibleHandler = () =>{
    setx(!x)
    dispatch(setAllVisible(x))
    sety(false)
  }

  const delItem = () => {
    if(ifMarkedElement > 0){
      if (window.confirm("ВЫ потверждаете удаление?")) {
        dispatch(delPostActionCreator());
      }
    }else{
      window.confirm("ВЫ не выбрали элемент для удаления")
    }
  };

  return (
    <div className={s.main}>
      <div className={s.main__icon}>
        <div className={s.main__double}>
          <button
            onClick={addNewItem}
            className={`${s.main__button} ${s.blue}`}
          >
            <FaPlus />
          </button>
          <button onClick={delItem} className={`${s.main__button} ${s.grey}`}>
            <FaTrash />
          </button>
        </div>
        <div className={s.main__double}>
          <button className={`${s.main__button} ${x ? s.blue : s.grey}`} onClick={()=>setAllVisibleHandler()}>
            <FaEye />
          </button>
          <button className={`${s.main__button} ${y ? s.blue : s.grey}`} onClick={()=>setAllNotVisibleHandler()}>
            <FaEyeSlash />
          </button>
        </div>
      </div>
      <div className={s.main__selecting}>
        <div className={s.main__check} >
          <input type="checkbox" id="maincheck" checked={mainCheck} onChange={()=> dispatch(setMainCheck(!mainCheck))}/>
          <label htmlFor="maincheck" className={s.desc__text}></label>
        </div>
        <div className={s.main__name}>
          <span>Название</span>
          <div>
            <FaChevronUp />
          </div>
        </div>
        <div className={s.main__name}>
          <span>Описание</span>
        </div>
        <button className={`${s.main__button}  ${ s.darkBlue}`} onClick={ ()=> dispatch(setMainEyeCheck(!mainEyeCheck))}>
          <FaEye />
        </button>
      </div>
    </div>
  );
}

export default SelectItem;
