import React from 'react';
import Card from '../Card';
import clsx from 'clsx';

import s from './Container.module.css';

const Container = ({title, items, onDragOver, onDrop, status, className}) => {

    const container = clsx({
        [s.container] : true,
        [s.todo] : className,
        [s.completed] : !className,
    });
    
    const titleCss = clsx({
        [s.titleContainer] : true,
        [s.titleToDo] : className,
        [s.titlecompleted] : !className,
    });

    const toDoList = () => {
      return (
        items.length && items?.map(item => {
          return (
            (!item.completed) &&
            <div key={ item.id }>
              <Card 
                card={item}
                className={className}
              />
            </div>
          );
      }));
      };

    const completed = () => {
      return (
      items.length && items?.map(item => {
        return (
          (item.completed) &&
          <div key={ item.id }>
            <Card 
              card={item}
              className={className}
            />
          </div>
        );
      }));
  };

  return (
      <div 
      className={container} 
      onDragOver={(e)=>{onDragOver(e)}}
      onDrop={(e)=>{onDrop(e, status)}}>

          <div className={titleCss}>{title}</div>
          <div>
          {  status ==='todo' ? toDoList() : completed() }
          </div>
      </div>
  );
 
};


export default Container;
