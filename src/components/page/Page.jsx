import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../store/actions/postReducer";
import Description from "../description/Description";
import Row from "../row/Row";
import SelectItem from "../select-item/SelectItem";
import s from "./page.module.scss";

function Page() {
  const dispatch = useDispatch();
  const { items, activeItem } = useSelector(({ postReducer }) => {
    return {
      items: postReducer.postData,
      activeItem: postReducer.activeItem,
    };
  });

  const act = items.filter((el) => el.active === true);

  const onSelectedCategory = (id) => {
    dispatch(setCategory(id));
  };
  return (
    <div className={s.page}>
      <div className={s.page__main}>
        <div className={s.page__wrapper}>
          <div className={s.page__right}>
            <div className={s.inner}>
              <SelectItem />
            </div>
            <div className={s.page__rows}>
              {items.map(({ heading, description, id }) => (
                <Row
                  onClick={() => onSelectedCategory(id)}
                  heading={heading}
                  description={description}
                  key={id}
                  id={id}
                />
              ))}
            </div>
          </div>
          <div className={s.page__del}></div>
          <div className={s.inner}>
            <Description
              active={items.filter((el) => el.id === activeItem)[0]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;



// import React from "react";
// import s from "./description.module.scss";
// import { FaRegCheckSquare } from "react-icons/fa";
// import { useDispatch } from "react-redux";
// import { setData} from "../../store/actions/postReducer"
// import { useState } from "react";

// function Description({active}) {
//   const  dispatch = useDispatch()
//   console.log(active)
//   const [tag, setTag] = useState(active.heading)
//   const [text, setText] = useState(active.description)
  
  
//   // const onTagChange = (e) =>{
//   //   setTag(e.target.value)
//   // } 
  

//   const onTagChange = (e) =>{
//    setTag(e.target.value)
//   } 

//   const onTextChange = (e) =>{
//     setText(e.target.value)
//   } 

//   const onSendData = () => {
//     dispatch(setData(tag,text,active.id))
//   }

//   const onCancel = () =>{
//     setTag(active.heading)
//     setText(active.description)
//   }
//   return (
//     <div className={s.desc}>
//       <span className={s.desc__main}>Редактирование элемента</span>
//       <textarea className={`${s.desc__title} ${s.desc__text}`} onChange={onTagChange}
//       value={active.heading}>  
//       </textarea>
//       <textarea className={`${s.desc__specification} ${s.desc__text}`}  onChange={onTextChange} value={text}>
//       </textarea>
//       <div className={s.desc__confirm}>
//         <div className={s.desc__icon}>
//           <FaRegCheckSquare />
//         </div>
//         <span className={s.desc__text}> Видимый</span>
//       </div>
//       <div className={s.desc__groups}>
//         <button className={s.desc__apply}><span className={s.desc__text} onClick={onSendData}>Применить</span></button>
//         <button className={s.desc__cancel}><span className={s.desc__text} onClick={onCancel}>Отменить</span></button>
//       </div>
//     </div>
//   );
// }
// export default Description;
