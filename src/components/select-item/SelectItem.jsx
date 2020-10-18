import React from "react";
import s from "./selectItem.module.scss";
import {
  FaPlus,
  FaEyeSlash,
  FaChevronUp,
  FaTrash,
  FaEye,
  FaRegCheckSquare,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addPostActionCreator } from "../../store/actions/postReducer";
function SelectItem() {
  
  const dispatch = useDispatch()
  const addNewItem =()=> dispatch(addPostActionCreator())
  return (
    <div className={s.main}>
      <div className={s.main__icon}>
        <div className={s.main__double}>
          <button onClick={addNewItem} className={`${s.main__button} ${s.blue}`}><FaPlus /></button>
          <button className={`${s.main__button} ${s.grey}`}><FaTrash /></button>
        </div>
        <div className={s.main__double}>
          <button className={`${s.main__button} ${s.blue}`}><FaEye /></button>
          <button className={`${s.main__button} ${s.grey}`}><FaEyeSlash /></button>
        </div>
      </div>
      <div className={s.main__selecting}>
      <button className={`${s.main__button} ${s.grey}`}><FaRegCheckSquare  /></button>
        <div className={s.main__name}>
          <span>Название</span>
          <div>
            <FaChevronUp />
          </div>
        </div>
        <div className={s.main__name}>
          <span>Описание</span>
        </div>
        <button className={`${s.main__button} ${s.darkBlue}`}><FaEye /></button>
      </div>
    </div>
  );
}

export default SelectItem;
