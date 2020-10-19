import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../store/actions/postReducer";
import Description from "../description/Description";
import Row from "../row/Row";
import SelectItem from "../select-item/SelectItem";
import s from "./page.module.scss";

function Page() {
  const dispatch = useDispatch();
  const { items, activeItem, activeItemTag, activeItemText } = useSelector(({ postReducer }) => {
    return {
      items: postReducer.postData,
      activeItem: postReducer.activeItem,
      activeItemTag: postReducer.activeItemTag,
      activeItemText: postReducer.activeItemText,
    };
  });

  const act = items.filter((el) => el.active === true);

  const onSelectedCategory = (heading,description,id) => {
    dispatch(setCategory(heading,description,id));
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
                  onClick={() => onSelectedCategory(heading,description,id)}
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



