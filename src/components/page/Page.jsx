import React from "react";
import { useSelector} from "react-redux";
import Description from "../description/Description";
import Row from "../row/Row";
import SelectItem from "../select-item/SelectItem";
import s from "./page.module.scss";

function Page() {
  const { items, activeItem, activeItemTag, activeItemText,mainCheck,mainEyeCheck,mainCheckVisibleItems} = useSelector(({ postReducer }) => {
  
    return {
      items: postReducer.postData ,
      activeItem: postReducer.activeItem,
      activeItemTag: postReducer.activeItemTag,
      activeItemText: postReducer.activeItemText,
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

  const ifMarkedElement = itemsElements.filter(item=> item.isChecked === true).length

  const showItems = itemsElements.map(({heading,description,isChecked,isVisible,id}) => (         
    <Row
      heading={heading}
      description={description}
      isChecked={isChecked}
      isVisible={isVisible}
      key={id}
      id={id}
    />
  ))
  return (
    <div className={s.page}>
      <div className={s.page__main}>
        <div className={s.page__wrapper}>
          <div className={s.page__right}>
            <div className={s.inner}>
              <SelectItem mainCheck={mainCheck} mainEyeCheck={mainEyeCheck} ifMarkedElement={ifMarkedElement}/>
            </div>
            <div className={s.page__rows}>
              {showItems}
            </div>
          </div>
          <div className={s.page__del}></div>
          <div className={s.inner}>
            <Description
              activeItemTag={activeItemTag} activeItemText={activeItemText}
              activeItem={activeItem} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;



