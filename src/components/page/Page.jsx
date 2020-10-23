import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Description from "../description/Description";
import Row from "../row/Row";
import SelectItem from "../select-item/SelectItem";
import s from "./page.module.scss";

function Page() {
  const dispatch = useDispatch();
  const { items, activeItem, activeItemTag, activeItemText,isVisible,mainCheck,mainEyeCheck,mainCheckVisibleItems} = useSelector(({ postReducer }) => {
  
    return {
      items: postReducer.postData ,
      activeItem: postReducer.activeItem,
      activeItemTag: postReducer.activeItemTag,
      activeItemText: postReducer.activeItemText,
      isVisible: postReducer.isVisible,
      mainCheck: postReducer.mainCheck,
      mainEyeCheck: postReducer.mainEyeCheck,
      mainCheckVisibleItems: postReducer.mainCheckVisibleItems,
 
    };
  });

  const showVisibleItems = items.filter((item => item.isVisible === true ))
  const showNotVisibleItems = items.filter((item => item.isVisible === false ))



  let itemsElements =  items;
    switch(mainCheckVisibleItems){
      case 'ALL':{
        itemsElements = items;
        break;
      }
      case 'SHOW':{
        itemsElements = showVisibleItems;
        break;
      }
      case 'HIDE':{
        itemsElements = showNotVisibleItems;
        break;
      }
      default:{
        itemsElements = items;
      }
    }
  

  const showItems = itemsElements.map((item) => (         
    <Row
      heading={item.heading}
      description={item.description}
      isChecked={item.isChecked}
      isVisible={item.isVisible}
      key={item.id}
      id={item.id}
    />
  ))

 
  return (
    <div className={s.page}>
      <div className={s.page__main}>
        <div className={s.page__wrapper}>
          <div className={s.page__right}>
            <div className={s.inner}>
              <SelectItem mainCheck={mainCheck} mainEyeCheck={mainEyeCheck}/>
            </div>
            <div className={s.page__rows}>
              {showItems}
            </div>
          </div>
          <div className={s.page__del}></div>
          <div className={s.inner}>
            <Description
              activeItemTag={activeItemTag} activeItemText={activeItemText}
              activeItem={activeItem} isVisible={isVisible}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;



